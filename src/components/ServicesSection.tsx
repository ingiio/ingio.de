'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useRouter, usePathname } from '@/navigation';
import ServiceModal from './ServiceModal';

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

interface LocalizedItems {
  en: string[];
  de: string[];
  [key: string]: string[];
}

export default function ServicesSection() {
  const t = useTranslations('services');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalServiceId, setModalServiceId] = useState<string | null>(null);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  useEffect(() => {
    setIsClient(true);
    
    // Check if URL has a service path
    const urlPattern = /\/services\/(it|digital|ai)$/;
    const match = pathname.match(urlPattern);
    
    if (match && match[1]) {
      const serviceId = match[1];
      openServiceModal(serviceId);
    }
  }, [pathname]);

  // Digital list items with language support
  const digitalListItems: LocalizedItems = {
    en: [
      'Move to the cloud (email, files, apps)',
      'Reduce manual work with better workflows',
      'Improve how your team collaborates remotely'
    ],
    de: [
      'In die Cloud umziehen (E-Mail, Dateien, Anwendungen)',
      'Manuelle Arbeit durch bessere Workflows reduzieren',
      'Die Remote-Zusammenarbeit Ihres Teams verbessern'
    ]
  };

  // AI list items with language support
  const aiListItems: LocalizedItems = {
    en: [
      'Assessing how AI tools could fit into your workflows',
      'Showing you how to use platforms like ChatGPT, Copilot, or other AI assistants effectively',
      'Building simple AI-enhanced automations for repetitive tasks'
    ],
    de: [
      'Bewerten, wie KI-Tools in Ihre Arbeitsabläufe passen könnten',
      'Ihnen zeigen, wie Sie Plattformen wie ChatGPT, Copilot oder andere KI-Assistenten effektiv nutzen',
      'Einfache KI-gestützte Automatisierungen für wiederkehrende Aufgaben erstellen'
    ]
  };

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

  const openServiceModal = (serviceId: string) => {
    // Update URL without full navigation
    router.push(`/services/${serviceId}`);
    setModalServiceId(serviceId);
    setIsModalOpen(true);
  };

  const closeServiceModal = () => {
    // Go back to the main page
    router.back();
    setIsModalOpen(false);
  };

  const getLocalizedItems = (items: LocalizedItems): string[] => {
    return items[locale as keyof typeof items] || items.en;
  };

  const renderServiceCard = (service: ServiceItem, index: number) => {
    return (
      <motion.div 
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
        onClick={() => openServiceModal(service.id)}
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
        
        <ul className="space-y-2">
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
        
        {/* Hidden link for SEO and crawlers */}
        <Link href={`/services/${service.id}`} className="hidden">
          {t(service.title)}
        </Link>
      </motion.div>
    );
  };

  const renderServices = () => {
    if (!isClient) {
      return (
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="card animate-pulse h-[350px]"></div>
          ))}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {services.map((service, index) => renderServiceCard(service, index))}
      </div>
    );
  };

  return (
    <>
      <section id="services" className="section bg-gradient-to-b from-[#1a1c1e] to-[#151718]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-3 gradient-text">{t('title')}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>
          
          {renderServices()}
        </div>
      </section>
      
      {/* Service Modal */}
      <ServiceModal 
        isOpen={isModalOpen}
        serviceId={modalServiceId}
        onClose={closeServiceModal}
      />
    </>
  );
}