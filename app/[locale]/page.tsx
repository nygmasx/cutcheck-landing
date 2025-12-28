import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { HeroSection } from '@/app/components/sections/HeroSection';
import { ScienceSection } from '@/app/components/sections/ScienceSection';
import { CtaSection } from '@/app/components/sections/CtaSection';
import { LottieBackground } from '@/app/components/animations/LottieBackground';
import { StructuredData } from '@/app/components/seo/StructuredData';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col mesh-bg selection:bg-neon selection:text-black">
      <StructuredData />
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <LottieBackground />
      </div>
      <Header />
      <main className="flex-grow pt-24 relative z-10">
        <HeroSection />
        <ScienceSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
