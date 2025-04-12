'use client';

import React, { useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/navigation';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export default function ServicesSection() {
  const t = useTranslations('services');
  const locale = useLocale();
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const services: ServiceItem[] = [
    {
      id: 'it',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: 'it.title',
      description: 'it.description',
      features: ['it.features.one', 'it.features.two', 'it.features.three']
    },
    {
      id: 'digital',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      ),
      title: 'digital.title',
      description: 'digital.description',
      features: ['digital.features.one', 'digital.features.two', 'digital.features.three']
    },
    {
      id: 'ai',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 001.241 2.012l.209.111a2.25 2.25 0 001.09.216m-4.5-8.053a3 3 0 011.067-.998 24.301 24.301 0 014.5 0M3 3l7.5 7.5M21 3l-7.5 7.5m0 0L9 15l3-3m0 0l3 3m-3-3l3-3" />
        </svg>
      ),
      title: 'ai.title',
      description: 'ai.description',
      features: ['ai.features.one', 'ai.features.two', 'ai.features.three']
    }
  ];

  const renderServiceCard = (service: ServiceItem, index: number) => {
    return (
      <div
        key={service.id}
        ref={(el) => { cardRefs.current[service.id] = el; }}
        className="card group md:col-span-1 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-lg transition-all pb-16 relative"
      >
        <div className="flex items-start">
          <div className="flex-shrink-0 mb-4 h-16 w-16 rounded-2xl bg-purple-900/20 flex items-center justify-center group-hover:bg-purple-900/40 transition-all">
            {service.icon}
          </div>
          
          <div className="ml-6 flex-1">
            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
              {t(service.title)}
            </h3>
            
            <p className="text-gray-400 mb-4 text-sm">
              {t(service.description)}
            </p>
          </div>
        </div>
        
        <ul className="space-y-1 mb-4 relative z-10">
          {service.features.map((feature, fIndex) => (
            <li 
              key={fIndex} 
              className="flex items-start text-gray-400 text-sm"
            >
              <span className="h-5 w-5 rounded-full bg-emerald-900/30 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5 group-hover:bg-emerald-900/50 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="flex-1">{t(feature)}</span>
            </li>
          ))}
        </ul>

        {/* Link to dedicated service page */}
        <div className="absolute bottom-4 inset-x-0">
          <div className="flex justify-center items-center">
            <Link href={`/services/${service.id}`} className="px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white text-sm font-medium rounded-md flex items-center transition-all shadow-md">
              {locale === 'de' ? 'Mehr erfahren' : 'Learn More'}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="py-20 bg-[#151718] overflow-hidden relative">
       {/* Optional: Background elements */}
       <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
       </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="gradient-text">{t('title')}</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            {t('subtitle')}
          </p>
        </div>

        {/* Cards grid is always visible */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {services.map((service, index) => renderServiceCard(service, index))}
        </div>
      </div>
    </section>
  );
}