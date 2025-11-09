'use client';

import { useEffect } from 'react';

const PIXEL_ID = 'YOUR_PIXEL_ID_HERE';

interface FbQueueItem {
  (...args: unknown[]): void;
  callMethod?: string;
  queue: unknown[][];
  push: (...args: unknown[]) => void;
  loaded?: boolean;
  version?: string;
}

declare global {
  interface Window {
    fbq?: FbQueueItem;
    _fbq?: FbQueueItem;
  }
}

export const useFacebookPixel = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || window.fbq) return;

    const fbq = function (...args: unknown[]) {
      fbq.queue.push(args);
    } as FbQueueItem;

    fbq.push = (...args: unknown[]) => fbq(...args);
    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = '2.0';

    window.fbq = fbq;
    if (!window._fbq) window._fbq = fbq;

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);

    script.onload = () => {
      if (window.fbq) {
        window.fbq('init', PIXEL_ID);
        window.fbq('track', 'PageView');
      }
    };
  }, []);
};