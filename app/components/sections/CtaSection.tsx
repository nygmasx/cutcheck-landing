'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { AppStoreButtons } from '../ui/AppStoreButtons';

export function CtaSection() {
  const t = useTranslations('CTA');

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold italic mb-8">
          {t('headline1')}<br />
          {t('headline2').split(' ')[0]} <span className="text-neon">{t('headline2').split(' ')[1]}</span>
        </h2>
        <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto font-light">
          {t('description')}
        </p>
        <AppStoreButtons />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent opacity-30"></div>
    </section>
  );
}
