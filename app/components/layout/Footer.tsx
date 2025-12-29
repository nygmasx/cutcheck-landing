'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('Footer');

  const footerLinks = [
    { label: t('privacy'), href: '#' },
    { label: t('terms'), href: '#' },
    { label: t('contact'), href: '#' },
    { label: t('institutional'), href: '#' },
  ];

  return (
    <footer className="bg-black py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-neon flex items-center justify-center rounded-sm">
            <span className="text-black font-bold text-sm">C</span>
          </div>
          <span className="text-sm font-bold tracking-widest uppercase">Cutcheck.</span>
        </div>

        <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-neon transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">
          {t('copyright')}
        </p>
      </div>
    </footer>
  );
}
