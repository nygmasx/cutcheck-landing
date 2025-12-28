'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { useScrolled } from '@/lib/hooks/useScrolled';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';

export function Header() {
  const t = useTranslations('Navigation');
  const scrolled = useScrolled(20);

  const navLinks = [
    { label: t('theMethod'), href: '#method' },
    { label: t('nutrition'), href: '#nutrition' },
    { label: t('testimonials'), href: '#testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-neon flex items-center justify-center rounded-sm">
            <span className="text-black font-bold text-xl tracking-tighter">C</span>
          </div>
          <span className="text-xl font-bold tracking-widest uppercase">Cutcheck.</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-neon transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <button className="bg-white text-black px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-neon transition-all">
            {t('enterCamp')}
          </button>
        </div>
      </div>
    </header>
  );
}
