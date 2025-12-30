import type { Metadata } from 'next';

const SEO_TRANSLATIONS = {
  en: {
    title: 'CUTCHECK - Elite Weight Management for Combat Athletes | MMA, BJJ, Wrestling',
    description: 'Professional weight cutting app for MMA fighters, BJJ competitors, and wrestlers. Science-backed hydration tracking, personalized cutting plans, and real-time monitoring. Make weight safely every time.',
    keywords: [
      'weight cutting app',
      'MMA weight cut',
      'BJJ weight management',
      'wrestling weight cutting',
      'combat sports nutrition',
      'hydration tracking',
      'weight cutting calculator',
      'fight week preparation',
      'water loading',
      'sodium manipulation',
      'weight cutting science',
      'fighter nutrition',
      'grappling weight cut',
      'safe weight cutting',
      'rehydration protocol',
      'make weight',
      'cutting weight for MMA',
      'cutting weight for BJJ',
      'cutting weight for wrestling'
    ],
    ogTitle: 'CUTCHECK - Elite Weight Cutting Management for Combat Athletes',
    ogDescription: 'Science-backed weight cutting for MMA, BJJ, and wrestling. Track hydration, optimize your cut, make weight safely.',
    locale: 'en_US'
  },
  fr: {
    title: 'CUTCHECK - Weight Cutting Élite pour Athlètes de Combat | MMA, JJB, Lutte',
    description: 'Application professionnelle de weight cutting pour combattants MMA, compétiteurs JJB et lutteurs. Suivi d\'hydratation basé sur la science, plans de coupe personnalisés et surveillance en temps réel. Faites le poids en toute sécurité à chaque fois.',
    keywords: [
      'application coupe de poids',
      'weight cutting MMA',
      'gestion poids JJB',
      'weight cutting lutte',
      'nutrition sports de combat',
      'suivi hydratation',
      'calculateur weight cutting',
      'préparation semaine combat',
      'charge en eau',
      'manipulation sodium',
      'science coupe de poids',
      'nutrition combattants',
      'coupe de poids grappling',
      'coupe de poids sécuritaire',
      'protocole réhydratation',
      'faire le poids',
      'couper poids MMA',
      'couper poids JJB',
      'couper poids lutte'
    ],
    ogTitle: 'CUTCHECK - Gestion de Poids Élite pour Athlètes de Combat',
    ogDescription: 'Coupe de poids basée sur la science pour MMA, JJB et lutte. Suivez votre hydratation, optimisez votre coupe, faites le poids en toute sécurité.',
    locale: 'fr_FR'
  },
  es: {
    title: 'CUTCHECK - Gestión de Peso Élite para Atletas de Combate | MMA, BJJ, Lucha',
    description: 'Aplicación profesional de corte de peso para peleadores MMA, competidores BJJ y luchadores. Seguimiento de hidratación basado en ciencia, planes de corte personalizados y monitoreo en tiempo real. Haz peso de forma segura cada vez.',
    keywords: [
      'app corte de peso',
      'corte de peso MMA',
      'gestión peso BJJ',
      'corte de peso lucha',
      'nutrición deportes de combate',
      'seguimiento hidratación',
      'calculadora corte de peso',
      'preparación semana pelea',
      'carga de agua',
      'manipulación sodio',
      'ciencia corte de peso',
      'nutrición peleadores',
      'corte de peso grappling',
      'corte de peso seguro',
      'protocolo rehidratación',
      'hacer peso',
      'cortar peso MMA',
      'cortar peso BJJ',
      'cortar peso lucha'
    ],
    ogTitle: 'CUTCHECK - Gestión de Peso Élite para Atletas de Combate',
    ogDescription: 'Corte de peso basado en ciencia para MMA, BJJ y lucha. Rastrea hidratación, optimiza tu corte, haz peso de forma segura.',
    locale: 'es_ES'
  },
  pt: {
    title: 'CUTCHECK - Gestão de Peso Elite para Atletas de Combate | MMA, JJB, Luta',
    description: 'Aplicativo profissional de corte de peso para lutadores de MMA, competidores de JJB e wrestlers. Rastreamento de hidratação baseado em ciência, planos de corte personalizados e monitoramento em tempo real. Faça o peso com segurança toda vez.',
    keywords: [
      'app corte de peso',
      'corte de peso MMA',
      'gestão peso JJB',
      'corte de peso luta',
      'nutrição esportes de combate',
      'rastreamento hidratação',
      'calculadora corte de peso',
      'preparação semana luta',
      'carga de água',
      'manipulação sódio',
      'ciência corte de peso',
      'nutrição lutadores',
      'corte de peso grappling',
      'corte de peso seguro',
      'protocolo reidratação',
      'fazer peso',
      'cortar peso MMA',
      'cortar peso JJB',
      'cortar peso luta'
    ],
    ogTitle: 'CUTCHECK - Gestão de Peso Elite para Atletas de Combate',
    ogDescription: 'Corte de peso baseado em ciência para MMA, JJB e luta. Rastreie hidratação, otimize seu corte, faça peso com segurança.',
    locale: 'pt_BR'
  }
} as const;

export function generateMetadata(locale: string): Metadata {
  const seo = SEO_TRANSLATIONS[locale as keyof typeof SEO_TRANSLATIONS] || SEO_TRANSLATIONS.en;

  return {
    metadataBase: new URL('https://cutcheck.app'),

    title: {
      default: seo.title,
      template: '%s | CUT'
    },

    description: seo.description,
    keywords: [...seo.keywords],

    authors: [{ name: 'CUT Team' }],
    creator: 'CUT',
    publisher: 'CUT',

    openGraph: {
      type: 'website',
      locale: seo.locale,
      url: `https://cutcheck.app${locale === 'en' ? '' : `/${locale}`}`,
      siteName: 'CUTCHECK - Weight Cutting App',
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: [
        {
          url: '/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: seo.ogTitle
        }
      ]
    },

    twitter: {
      card: 'summary_large_image',
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: ['/opengraph-image.png'],
      creator: '@cutapp'
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    alternates: {
      canonical: `https://cutcheck.app${locale === 'en' ? '' : `/${locale}`}`,
      languages: {
        'en': 'https://cutcheck.app',
        'fr': 'https://cutcheck.app/fr',
        'es': 'https://cutcheck.app/es',
        'pt': 'https://cutcheck.app/pt',
      }
    },
  };
}
