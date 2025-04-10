'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ConsultationSection from '@/components/ConsultationSection';
import Footer from '@/components/Footer';

export default function ClientHomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ConsultationSection />
      <Footer />
    </main>
  );
} 