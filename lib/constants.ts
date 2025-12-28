export const NAV_LINKS = [
  { label: 'The Method', href: '#method' },
  { label: 'Nutrition', href: '#nutrition' },
  { label: 'Testimonials', href: '#testimonials' },
] as const;

export const SOCIAL_PROOF_STATS = [
  { value: '98%', label: 'Scale Success Rate' },
  { value: '15k+', label: 'Elite Athletes' },
  { value: '0.0g', label: 'Muscle Loss Avg' },
] as const;

export const MOBILE_PREVIEW_TABS = {
  summary: {
    label: 'Daily Plan',
    weight: 172.4,
    targetWeight: 155,
    daysToFight: 12,
  },
  macros: {
    label: 'Macros',
    weight: 172.4,
    targetWeight: 155,
    daysToFight: 12,
  },
  supps: {
    label: 'Supps',
    weight: 172.4,
    targetWeight: 155,
    daysToFight: 12,
  },
} as const;

export const FEATURE_CARDS = [
  {
    title: 'Sodium Manipulation',
    description: 'Precision tracking of salt intake to trigger your body\'s natural diuretic hormone response without energy crashes.',
    linkText: 'View Protocol',
    icon: 'water',
  },
  {
    title: 'Metabolic Recovery',
    description: 'Calculate your exact TDEE adjustments based on fight-camp training volume. Keep your furnace burning hot.',
    linkText: 'Read Studies',
    icon: 'chart',
  },
  {
    title: 'Rehydration Phase',
    description: 'The most critical 24 hours. Minute-by-minute protocol to replenish glycogen and fluid for peak violence.',
    linkText: 'The Re-up Plan',
    icon: 'clock',
  },
] as const;

export const FOOTER_LINKS = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Institutional', href: '#' },
] as const;

export const HYDRATION_STATUS = [
  {
    label: 'Distilled Water',
    current: 4.0,
    target: 8.0,
    color: 'blue',
  },
  {
    label: 'Dandelion Root',
    scheduled: '18:00',
    color: 'yellow',
  },
] as const;
