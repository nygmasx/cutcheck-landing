'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { GlassMorphism } from '../ui/GlassMorphism';
import { FeatureCard } from '../ui/FeatureCard';

export function ScienceSection() {
  const t = useTranslations('Science');

  const features = [
    {
      title: t('features.sodiumManipulation.title'),
      description: t('features.sodiumManipulation.description'),
      linkText: t('features.sodiumManipulation.link'),
      icon: 'water' as const,
    },
    {
      title: t('features.metabolicRecovery.title'),
      description: t('features.metabolicRecovery.description'),
      linkText: t('features.metabolicRecovery.link'),
      icon: 'chart' as const,
    },
    {
      title: t('features.rehydration.title'),
      description: t('features.rehydration.description'),
      linkText: t('features.rehydration.link'),
      icon: 'clock' as const,
    },
  ];

  return (
    <section className="bg-[#080808] py-24 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold italic mb-4">
              {t('headline1')}<br />
              <span className="text-neon">{t('headline2')}</span>
            </h2>
            <p className="text-zinc-500 max-w-md font-light">
              {t('description')}
            </p>
          </div>
          <div className="flex gap-4">
            <GlassMorphism className="p-6 rounded-2xl w-40">
              <div className="text-neon text-2xl font-bold mb-1 italic">01</div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">
                {t('phase01')}
              </div>
            </GlassMorphism>
            <GlassMorphism className="p-6 rounded-2xl w-40" hover={false}>
              <div className="text-white/20 text-2xl font-bold mb-1 italic">02</div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-600">
                {t('phase02')}
              </div>
            </GlassMorphism>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((card) => (
            <FeatureCard
              key={card.title}
              title={card.title}
              description={card.description}
              linkText={card.linkText}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
