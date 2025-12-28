export interface FeatureCardProps {
  title: string;
  description: string;
  linkText: string;
  icon: 'water' | 'chart' | 'clock';
}

export interface MobilePreviewTab {
  label: string;
  weight: number;
  targetWeight: number;
  daysToFight: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialProofStat {
  value: string;
  label: string;
}

export interface HydrationItem {
  label: string;
  current?: number;
  target?: number;
  scheduled?: string;
  color: 'blue' | 'yellow';
}

export type TabType = 'summary' | 'macros' | 'supps';
