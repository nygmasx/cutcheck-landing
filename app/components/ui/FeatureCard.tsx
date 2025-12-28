import React from 'react';
import { FeatureCardProps } from '@/types';
import { GlassMorphism } from './GlassMorphism';

const ICON_SVGS = {
  water: (
    <svg className="w-6 h-6 text-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.183.394l-1.158.907a.5.5 0 00.196.87l1.132.226a4 4 0 001.977-.044l1.155-.318a4 4 0 012.447 0l1.155.318a4 4 0 001.977.044l1.132-.226a.5.5 0 00.196-.87l-1.158-.907zM10 9V5a2 2 0 114 0v4m-4 1a2 2 0 114 0"></path>
    </svg>
  ),
  chart: (
    <svg className="w-6 h-6 text-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
    </svg>
  ),
  clock: (
    <svg className="w-6 h-6 text-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  ),
};

export function FeatureCard({ title, description, linkText, icon }: FeatureCardProps) {
  return (
    <GlassMorphism className="p-8 rounded-3xl group transition-all duration-500">
      <div className="w-12 h-12 bg-neon/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {ICON_SVGS[icon]}
      </div>
      <h3 className="text-xl font-bold mb-4 italic">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed mb-6 font-light">{description}</p>
      <a href="#" className="text-xs font-bold uppercase tracking-widest text-neon flex items-center gap-2 group-hover:gap-4 transition-all">
        {linkText} <span className="text-lg">→</span>
      </a>
    </GlassMorphism>
  );
}
