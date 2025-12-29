'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

export function WaitlistForm() {
  const t = useTranslations('Waitlist');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Error submitting to waitlist:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('placeholder')}
          required
          disabled={status === 'loading' || status === 'success'}
          className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-neon transition-all disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="bg-neon text-black px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-neon/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? t('loading') : status === 'success' ? t('success') : t('submit')}
        </button>
      </form>
      {status === 'error' && (
        <p className="mt-3 text-red-400 text-sm text-center">{t('error')}</p>
      )}
    </div>
  );
}
