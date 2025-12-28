'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export function AppStoreButtons() {
  const t = useTranslations('CTA');

  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button className="bg-white text-black px-10 py-5 rounded-sm font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-neon transition-all">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.5,12.5c0-1.6,0.9-3,2.2-3.8c-0.6-0.9-1.5-1.6-2.6-1.9c-1.1-0.3-2.1-0.1-2.9,0.3c-0.5,0.3-1.1,0.5-1.7,0.5 c-0.6,0-1.2-0.2-1.7-0.5c-1-0.5-2.2-0.7-3.3-0.3c-1.3,0.5-2.3,1.5-2.9,2.8c-1.2,2.5-0.9,6.5,1.2,9.6c1.1,1.5,2.4,3.2,4,3.2 c1.6,0,2.1-1,4-1c1.9,0,2.4,1,4,1c1.6,0,2.9-1.5,3.9-3c0.7-1,1.2-1.9,1.6-2.9c-2.4-1-4-3.4-4-6.1c0-0.1,0-0.2,0-0.3L17.5,12.5z M15.4,6.5c0.9-1.1,1.4-2.5,1.2-4c-1.4,0.1-2.8,0.8-3.7,1.9c-0.9,1.1-1.4,2.6-1.2,4C13.2,8.4,14.5,7.6,15.4,6.5L15.4,6.5z"/>
        </svg>
        {t('appStore')}
      </button>
      <button className="glass border-white/10 text-white px-10 py-5 rounded-sm font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white/5 transition-all">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3.609 1.814L13.792 12 3.61 22.186c-.18.18-.21.43-.092.622.094.156.262.25.442.25.078 0 .158-.018.232-.054l15.117-7.558c.414-.207.67-.626.67-1.087s-.256-.88-.67-1.087L4.192 5.714c-.074-.037-.154-.055-.232-.055-.18 0-.348.094-.442.25-.118.192-.088.442.091.622L13.792 12l-10.183 10.186"/>
        </svg>
        {t('googlePlay')}
      </button>
    </div>
  );
}
