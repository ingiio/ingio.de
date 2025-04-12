'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden bg-[#151718] pb-16 pt-24 md:pt-32 md:pb-24">
      {/* Gradient background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-32 left-20 w-72 h-72 bg-purple-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="gradient-text">{t('title')}</span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed">
            {t('subtitle')}
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            {/* Secondary button */}
            <Link href="/#services" className="btn-outline order-2 sm:order-1">
              {t('buttons.services')}
            </Link>
            
            {/* Primary CTA - more prominent */}
            <Link 
              href="/#consultation" 
              className="order-1 sm:order-2 bg-gradient-to-r from-purple-500 to-emerald-500 text-white px-6 py-3 sm:px-8 rounded-md font-medium text-lg shadow-lg hover:shadow-purple-500/20 hover:from-purple-600 hover:to-emerald-600 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {t('buttons.contact')}
            </Link>
          </div>
        </div>
        
        {/* Tech symbols floating - hidden on smallest screens */}
        <div className="hidden sm:block absolute top-1/4 left-10 text-purple-500 opacity-20 text-4xl animate-float">{'{ }'}</div>
        <div className="hidden sm:block absolute bottom-1/4 right-10 text-emerald-500 opacity-20 text-4xl animate-float-delayed">{'</>'}</div>
        <div className="hidden sm:block absolute top-3/4 left-1/4 text-purple-600 opacity-20 text-4xl animate-float-slow">{'#'}</div>
      </div>
    </section>
  );
} 