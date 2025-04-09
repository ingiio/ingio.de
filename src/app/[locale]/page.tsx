// src/app/[locale]/page.tsx
'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ConsultationSection from '@/components/ConsultationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ConsultationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
