'use client'
import { useEffect, useState } from 'react';

function useTelegramInitData() {
  const [data, setData] = useState({});

  useEffect(() => {
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
      console.error("Telegram WebApp is not available");
    }
  }, []);

  return data;
}

export default useTelegramInitData;
