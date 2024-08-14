'use client'
// useTelegramInitData.js
import { useEffect, useState } from 'react';

/**
 * Hook to get the initial data from the Telegram Web Apps API already parsed.
 * @example
 * const { user } = useTelegramInitData();
 * console.log(user.username, user.id);
 */
function useTelegramInitData() {
  const [data, setData] = useState({});

  useEffect(() => {
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
  }, []);

  return data;
}

export default useTelegramInitData;
