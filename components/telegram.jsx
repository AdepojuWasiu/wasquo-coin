'use client';

import { useEffect, useState } from 'react';

function useTelegramInitData() {
  const [data, setData] = useState({});

  useEffect(() => {
    const loadTelegramSDK = () => {
      const script = document.createElement('script');
      script.src = 'https://telegram.org/js/telegram-web-app.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.Telegram && window.Telegram.WebApp) {
          window.Telegram.WebApp.onReady(() => {
            const firstLayerInitData = Object.fromEntries(
              new URLSearchParams(window.Telegram.WebApp.initData)
            );

            const initData = {};

            for (const key in firstLayerInitData) {
              try {
                initData[key] = JSON.parse(firstLayerInitData[key]);
              } catch {
                initData[key] = firstLayerInitData[key];
              }
            }

            setData(initData);
          });
        } else {
          console.error('Telegram WebApp is not available');
        }
      };

      return () => {
        document.body.removeChild(script);
      };
    };

    if (typeof window !== 'undefined') {
      loadTelegramSDK();
    }
  }, []);

  return data;
}

export default useTelegramInitData;
