'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { MobilePreview } from '../ui/MobilePreview';

export function HeroSection() {
  const t = useTranslations('Hero');

  const stats = [
    { value: t('stats.successRate.value'), label: t('stats.successRate.label') },
    { value: t('stats.athletes.value'), label: t('stats.athletes.label') },
    { value: t('stats.muscleLoss.value'), label: t('stats.muscleLoss.label') },
  ];

  return (
    <section className="px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10 py-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-neon animate-pulse"></span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-white/70">
              {t('badge')}
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8 italic">
            {t('headline1')}<br />
            <span className="text-neon">{t('headline2')}</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-lg mb-10 font-light leading-relaxed">
            {t('description')}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-neon text-black px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-widest glow-hover transition-all">
              {t('ctaPrimary')}
            </button>
            <button className="glass px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all border border-white/10">
              {t('ctaSecondary')}
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold mb-1 italic">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:h-[800px] flex items-center justify-center">
          <div className="absolute w-[500px] h-[500px] bg-neon/10 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <MobilePreview />

          <div className="absolute -right-12 top-1/4 glass p-4 rounded-xl border-l-4 border-l-neon hidden xl:block animate-bounce shadow-xl" style={{ animationDuration: '3s' }}>
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Live Metabolism</p>
            <p className="text-xl font-bold italic">FASTING STATE</p>
          </div>
          <div className="absolute -left-12 bottom-1/4 glass p-4 rounded-xl border-l-4 border-l-blue-500 hidden xl:block animate-pulse shadow-xl">
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Hydration</p>
            <p className="text-xl font-bold italic">OPTIMAL (82%)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
