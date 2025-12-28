# CUT - Elite Weight Cutting Landing Page

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat-square&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)
![i18n](https://img.shields.io/badge/i18n-4_languages-green?style=flat-square)

Professional landing page for **CUT**, an elite weight management app for combat athletes (MMA, BJJ, Wrestling). Built with Next.js 16, featuring stunning animations, glass morphism design, and full internationalization support.

## ✨ Features

### 🎨 Design & UI
- **Modern Dark Theme** - Black (#050505) background with neon green (#CCFF00) accents
- **Glass Morphism Effects** - Backdrop blur and translucent cards
- **Lottie Animations** - Subtle geometric background animations
- **Interactive Mobile Preview** - Animated phone mockup with tab switching
- **Responsive Design** - Mobile-first approach, optimized for all devices
- **Space Grotesk Font** - Clean, modern typography

### 🌍 Internationalization (i18n)
- **4 Languages Supported**:
  - 🇺🇸 English (default)
  - 🇫🇷 French (France/Quebec)
  - 🇪🇸 Spanish (Latin America)
  - 🇧🇷 Portuguese (Brazil)
- **Automatic Routing** - `/en`, `/fr`, `/es`, `/pt` routes
- **SEO Optimized** - Localized metadata for each language
- **Language Switcher** - Easy toggle in header

### ⚡ Performance
- **Next.js 16 App Router** - Latest React Server Components
- **Image Optimization** - Next.js Image with Unsplash integration
- **Font Optimization** - Self-hosted fonts via next/font
- **Lazy Loading** - Lottie animations loaded on demand
- **Reduced Motion Support** - Respects user preferences

### 🔍 SEO
- **Comprehensive Metadata** - Title, description, keywords per locale
- **OpenGraph Tags** - Optimized for social sharing
- **Structured Data** - JSON-LD for rich snippets
- **Canonical URLs** - Proper hreflang implementation
- **Sitemap Ready** - Multi-language sitemap support

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone and install:
```bash
git clone <repository-url>
cd cutcheck-landing
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
cutcheck-landing/
├── app/
│   ├── [locale]/              # Internationalized routes
│   │   ├── layout.tsx         # Locale-specific layout
│   │   └── page.tsx           # Main landing page
│   ├── components/
│   │   ├── animations/        # Lottie animation components
│   │   ├── layout/            # Header & Footer
│   │   ├── sections/          # Page sections
│   │   ├── seo/               # SEO components
│   │   └── ui/                # Reusable UI components
│   ├── globals.css            # Global styles & Tailwind
│   └── layout.tsx             # Root layout
├── lib/
│   ├── hooks/                 # Custom React hooks
│   ├── constants.ts           # App constants
│   └── seo-metadata.ts        # SEO metadata generator
├── messages/                  # i18n translation files
│   ├── en.json
│   ├── fr.json
│   ├── es.json
│   └── pt.json
├── public/lottie/            # Lottie animation files
├── types/                    # TypeScript definitions
├── i18n.ts                   # i18n configuration
├── middleware.ts             # i18n middleware
└── next.config.ts            # Next.js config
```

## 🌐 Internationalization

### Using Translations

```typescript
import { useTranslations } from 'next-intl';

export function MyComponent() {
  const t = useTranslations('Navigation');
  return <h1>{t('title')}</h1>;
}
```

### Adding a New Language

1. Create translation file: `messages/de.json`
2. Add locale to `i18n.ts`: `export const locales = ['en', 'fr', 'es', 'pt', 'de']`
3. Add SEO metadata to `lib/seo-metadata.ts`
4. Add language to switcher in `app/components/ui/LanguageSwitcher.tsx`

## 🎨 Customization

### Colors
Edit `app/globals.css`:
```css
:root {
  --neon-green: #CCFF00;
  --background: #050505;
}
```

### Content
Update `messages/*.json` files with your translations.

### Animations
Replace JSON files in `public/lottie/` from [LottieFiles](https://lottiefiles.com/).

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Auto-deploys on push

### Build
```bash
npm run build
npm start
```

## 📊 SEO Checklist

- [x] Localized metadata for all languages
- [x] OpenGraph images
- [x] Structured data (JSON-LD)
- [x] Canonical URLs
- [x] Hreflang tags
- [ ] Sitemap (add `sitemap.ts`)
- [ ] Google Analytics
- [ ] Google Search Console

## 🛠 Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **Animations**: Lottie-react
- **i18n**: next-intl
- **Fonts**: Space Grotesk

## 📝 License

Proprietary and confidential.

---

**Built with** ❤️ **for elite athletes** | © 2024 CUT Athletics
