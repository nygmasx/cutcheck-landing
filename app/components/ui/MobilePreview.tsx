'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useWeightAnimation } from '@/lib/hooks/useWeightAnimation';
import { MOBILE_PREVIEW_TABS, HYDRATION_STATUS } from '@/lib/constants';
import type { TabType } from '@/types';

export function MobilePreview() {
  const t = useTranslations('MobilePreview');
  const [activeTab, setActiveTab] = useState<TabType>('summary');
  const currentWeight = useWeightAnimation(MOBILE_PREVIEW_TABS.summary.weight, 800);
  const targetWeight = MOBILE_PREVIEW_TABS.summary.targetWeight;
  const daysToFight = MOBILE_PREVIEW_TABS.summary.daysToFight;

  const progressPercent = ((188 - currentWeight) / (188 - targetWeight)) * 100;

  return (
    <div className="relative w-full max-w-[320px] aspect-[9/19.5] glass rounded-[3rem] border-4 border-zinc-800 p-3 shadow-2xl overflow-hidden mx-auto">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-2xl z-20"></div>

      <div className="h-full w-full bg-[#050505] rounded-[2.5rem] flex flex-col overflow-hidden relative">
        <div className="pt-10 px-6 pb-4">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">{t('currentPhase')}</p>
              <h3 className="text-lg font-bold">{t('waterLoading')}</h3>
            </div>
            <div className="w-10 h-10 rounded-full border border-zinc-700 bg-zinc-800"></div>
          </div>

          <div className="glass rounded-2xl p-4 border-white/5 relative overflow-hidden group hover:border-neon/30 transition-all cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <div className="flex flex-col">
                <span className="text-4xl font-bold tabular-nums">{currentWeight.toFixed(1)}</span>
                <span className="text-[10px] text-zinc-500 uppercase font-bold">{t('currentLbs')}</span>
              </div>
              <div className="text-right">
                <div className="text-neon text-xs font-bold bg-neon/10 px-2 py-1 rounded">
                  -{(currentWeight - targetWeight).toFixed(1)} {t('lbsToGo')}
                </div>
              </div>
            </div>
            <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-neon transition-all duration-700"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-[8px] text-zinc-600 font-bold tracking-tighter uppercase">
              <span>{t('start')}: 188.0</span>
              <span>{t('target')}: {targetWeight.toFixed(1)}</span>
            </div>
          </div>
        </div>

        <div className="flex px-6 gap-4 border-b border-zinc-900">
          <button
            onClick={() => setActiveTab('summary')}
            className={`pb-2 text-[10px] font-bold uppercase border-b-2 transition-all ${
              activeTab === 'summary' ? 'border-neon text-white' : 'border-transparent text-zinc-600'
            }`}
          >
            {t('tabs.dailyPlan')}
          </button>
          <button
            onClick={() => setActiveTab('macros')}
            className={`pb-2 text-[10px] font-bold uppercase border-b-2 transition-all ${
              activeTab === 'macros' ? 'border-neon text-white' : 'border-transparent text-zinc-600'
            }`}
          >
            {t('tabs.macros')}
          </button>
          <button
            onClick={() => setActiveTab('supps')}
            className={`pb-2 text-[10px] font-bold uppercase border-b-2 transition-all ${
              activeTab === 'supps' ? 'border-neon text-white' : 'border-transparent text-zinc-600'
            }`}
          >
            {t('tabs.supps')}
          </button>
        </div>

        <div className="flex-grow overflow-y-auto px-6 py-4 no-scrollbar">
          {activeTab === 'summary' && (
            <div className="space-y-4">
              <div className="flex gap-3 items-center">
                <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center border border-neon/20">
                  <span className="text-neon text-xl font-bold">{daysToFight}</span>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase">Days to Weigh-in</p>
                  <p className="text-xs font-bold">Scale at 09:00 AM Friday</p>
                </div>
              </div>

              <h4 className="text-[10px] uppercase text-zinc-500 font-bold mb-3 tracking-widest">Hydration Status</h4>
              <div className="space-y-3 mb-6">
                {HYDRATION_STATUS.map((item, index) => (
                  <div
                    key={index}
                    className={`glass p-3 rounded-xl border-white/5 flex justify-between items-center ${
                      'scheduled' in item ? 'opacity-50' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${item.color === 'blue' ? 'bg-blue-500' : 'bg-yellow-500'}`}></div>
                      <span className="text-xs font-medium">{item.label}</span>
                    </div>
                    <span className="text-xs font-bold">
                      {'current' in item && 'target' in item
                        ? `${item.current} / ${item.target}L`
                        : 'scheduled' in item && `Scheduled: ${item.scheduled}`}
                    </span>
                  </div>
                ))}
              </div>

              <h4 className="text-[10px] uppercase text-zinc-500 font-bold mb-3 tracking-widest">Next Fuel</h4>
              <div className="glass p-4 rounded-xl border-white/5 bg-zinc-900 relative overflow-hidden group">
                <div className="relative z-10">
                  <p className="text-[10px] text-neon font-bold uppercase">Post-Workout</p>
                  <p className="text-sm font-bold">Lean White Fish + Spinach</p>
                  <p className="text-[10px] text-zinc-400 mt-1">NO SODIUM ADDED</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'macros' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="glass p-4 rounded-xl text-center">
                  <p className="text-[10px] text-zinc-500 font-bold uppercase mb-1">Protein</p>
                  <p className="text-lg font-bold">220g</p>
                </div>
                <div className="glass p-4 rounded-xl text-center">
                  <p className="text-[10px] text-zinc-500 font-bold uppercase mb-1">Carbs</p>
                  <p className="text-lg font-bold text-red-500">50g</p>
                </div>
              </div>
              <div className="glass p-4 rounded-xl">
                <p className="text-[10px] text-zinc-500 font-bold uppercase mb-2">Daily Calorie Cap</p>
                <div className="flex justify-between items-end">
                  <span className="text-2xl font-bold">1,850</span>
                  <span className="text-[10px] text-zinc-500 mb-1">/ 2,400 TDEE</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'supps' && (
            <div className="space-y-3">
              <div className="glass p-4 rounded-xl">
                <p className="text-sm font-bold mb-2">Dandelion Root</p>
                <p className="text-[10px] text-zinc-500">Natural diuretic - 18:00</p>
              </div>
              <div className="glass p-4 rounded-xl">
                <p className="text-sm font-bold mb-2">Electrolytes</p>
                <p className="text-[10px] text-zinc-500">Post-training recovery</p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-black/90 border-t border-zinc-900 py-4 px-8 flex justify-between">
          <div className="w-1.5 h-1.5 rounded-full bg-neon"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
        </div>
      </div>
    </div>
  );
}
