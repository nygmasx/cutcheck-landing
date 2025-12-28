import React from 'react';

export function StructuredData() {
  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'CUT - Weight Cutting App',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '15000',
    },
    description: 'Professional weight cutting app for MMA fighters, BJJ competitors, and wrestlers. Science-backed hydration tracking, personalized cutting plans, and real-time monitoring.',
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CUT',
    url: 'https://cutcheck.app',
    logo: 'https://cutcheck.app/logo.svg',
    sameAs: ['https://twitter.com/cutapp'],
    description: 'Elite weight management platform for combat athletes',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does weight cutting work for MMA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Weight cutting for MMA involves strategic water and sodium manipulation to temporarily reduce body weight before weigh-ins, followed by rapid rehydration. CUT provides science-backed protocols to do this safely and effectively.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is weight cutting safe for BJJ competitions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'When done properly with the right protocols, weight cutting can be safe. CUT uses methods derived from elite UFC nutritionists and collegiate wrestling programs to ensure athlete safety while achieving weight targets.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to cut weight for wrestling?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A typical weight cut protocol spans 8-12 days, with the most intensive phase being the final 3-5 days before weigh-in. CUT provides day-by-day guidance for the entire process.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is water loading for weight cutting?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Water loading involves increasing water intake in the days before a cut to manipulate the body\'s fluid balance and hormone response, making it easier to shed water weight safely. CUT tracks your exact hydration needs.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
