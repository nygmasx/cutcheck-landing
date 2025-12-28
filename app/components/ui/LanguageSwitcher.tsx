'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/i18n';
import { useState } from 'react';

const LANGUAGE_NAMES = {
  en: 'EN',
  fr: 'FR',
  es: 'ES',
  pt: 'PT',
} as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 glass rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
      >
        🌐 {LANGUAGE_NAMES[locale as keyof typeof LANGUAGE_NAMES]}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 glass rounded-sm overflow-hidden border border-white/10 min-w-[100px] z-50">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => changeLanguage(loc)}
              className={`w-full px-4 py-2 text-left text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all ${
                loc === locale ? 'bg-neon text-black' : 'text-white'
              }`}
            >
              {LANGUAGE_NAMES[loc]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
