'use client';

import React, { useState, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceContent from './ServiceContent';
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
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const detailsRef = useRef<HTMLDivElement>(null);

  const services: ServiceItem[] = [
    {
      id: 'it',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'ai.title',
      description: 'ai.description',
      features: ['ai.features.one', 'ai.features.two', 'ai.features.three']
    }
  ];

  const openServiceDetails = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const closeServiceDetails = () => {
    setSelectedServiceId(null);
  };

  const renderServiceCard = (service: ServiceItem, index: number) => {
    return (
      <motion.div
        layout
        layoutId={service.id}
        key={service.id}
        ref={(el) => { cardRefs.current[service.id] = el; }}
        className="card group md:col-span-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1
        }}
        whileHover={{
          y: -8,
          borderColor: 'rgba(168, 85, 247, 0.3)',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}
        onClick={() => openServiceDetails(service.id)}
        style={{ cursor: 'pointer' }}
      >
        <div className="flex items-start">
          <div className="flex-shrink-0 mb-6 h-16 w-16 rounded-2xl bg-purple-900/20 flex items-center justify-center group-hover:bg-purple-900/40 transition-all">
            {service.icon}
          </div>
          
          <div className="ml-6 flex-1">
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">
              {t(service.title)}
            </h3>
            
            <p className="text-gray-400 mb-6">
              {t(service.description)}
            </p>
          </div>
        </div>
        
        <ul className="space-y-2 relative z-10">
          {service.features.map((feature, fIndex) => (
            <li key={fIndex} className="flex items-center text-gray-400">
              <span className="h-5 w-5 rounded-full bg-emerald-900/30 flex items-center justify-center mr-3 group-hover:bg-emerald-900/50 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              {t(feature)}
            </li>
          ))}
        </ul>

        {/* Learn more indicator */}
        <div className="absolute bottom-4 right-4 text-purple-400 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 flex items-center">
          <span className="mr-1 text-sm">{t('learnMore')}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </motion.div>
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

        {/* Conditional Rendering Logic */}
        <AnimatePresence mode="wait">
          {!selectedServiceId ? (
            <motion.div
              layout
              key="cards"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
            >
              {services.map((service, index) => renderServiceCard(service, index))}
            </motion.div>
          ) : (
            <motion.div
              layout
              layoutId={selectedServiceId}
              key="details"
              ref={detailsRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative"
            >
               {/* Close Button */}
               <button
                onClick={closeServiceDetails}
                className="absolute top-0 right-0 mt-1 mr-1 z-20 p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition"
                aria-label={t('closeButton')}
               >
                 <XMarkIcon className="h-6 w-6" />
               </button>
              {/* Render ServiceContent directly, passing the required props */}
              <ServiceContent
                serviceId={selectedServiceId}
                isCompact={true}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}