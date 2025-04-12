'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/navigation';
import Head from 'next/head';

interface ServiceContentProps {
  serviceId: string;
  isModal?: boolean;
  isCompact?: boolean;
}

interface LocalizedItems {
  en: string[];
  de: string[];
  [key: string]: string[];
}

export default function ServiceContent({ serviceId, isModal = false, isCompact = false }: ServiceContentProps) {
  const t = useTranslations('services');
  const locale = useLocale();
  
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
  
  const getLocalizedItems = (items: LocalizedItems): string[] => {
    return items[locale as keyof typeof items] || items.en;
  };
  
  const getServiceIcon = () => {
    if (serviceId === 'it') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      );
    } else if (serviceId === 'digital') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      );
    } else if (serviceId === 'ai') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    }
    return null;
  };

  // Background gradient based on service type
  const getBgGradient = () => {
    if (serviceId === 'it') {
      return 'from-purple-900/10 via-indigo-900/5 to-transparent';
    } else if (serviceId === 'digital') {
      return 'from-purple-900/10 via-blue-900/5 to-transparent';
    } else {
      return 'from-purple-900/10 via-emerald-900/5 to-transparent';
    }
  };
  
  return (
    <div className="bg-[#151718] min-h-screen pt-24 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className={`absolute top-20 left-1/4 w-[30rem] h-[30rem] rounded-full mix-blend-multiply filter blur-3xl ${serviceId === 'it' ? 'bg-indigo-600' : serviceId === 'digital' ? 'bg-blue-600' : 'bg-purple-600'} animate-blob`}></div>
        <div className={`absolute bottom-20 right-1/4 w-[20rem] h-[20rem] rounded-full mix-blend-multiply filter blur-3xl ${serviceId === 'it' ? 'bg-violet-600' : serviceId === 'digital' ? 'bg-cyan-600' : 'bg-emerald-600'} animate-blob animation-delay-4000`}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="flex justify-center mb-5">
            <div className="h-24 w-24 rounded-2xl bg-purple-900/20 p-4 flex items-center justify-center">
              {getServiceIcon()}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300">
            {t(`${serviceId}.title`)}
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t(`${serviceId}.description`)}
          </p>
        </div>
        
        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {(serviceId === 'it' ? 
            ['it.features.one', 'it.features.two', 'it.features.three'] : 
            serviceId === 'digital' ? 
              ['digital.features.one', 'digital.features.two', 'digital.features.three'] : 
              ['ai.features.one', 'ai.features.two', 'ai.features.three']
          ).map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-800/40 p-5 rounded-lg border border-gray-700/30 flex items-start hover:border-purple-500/30 hover:shadow-lg transition-all"
            >
              <div className="h-6 w-6 rounded-full bg-purple-900/40 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white">{t(feature)}</span>
            </div>
          ))}
        </div>
        
        {/* Main content */}
        <div className="max-w-4xl mx-auto">
          <div className={`bg-gradient-to-b ${getBgGradient()} p-8 rounded-xl border border-gray-800`}>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                {serviceId === 'digital' 
                  ? "Digital transformation doesn't have to be complicated. I help small businesses in the Allgäu region adopt practical digital tools that make day-to-day work easier."
                  : t(`${serviceId}.details.intro`)}
              </p>
              
              <div>
                <h2 className="font-semibold text-white text-xl mb-4">
                  {serviceId === 'digital'
                    ? (locale === 'de' ? "Mein Fokus liegt auf Lösungen mit echtem Mehrwert:" : "My focus is on solutions that deliver real benefits:")
                    : t(`${serviceId}.details.para1`)}
                </h2>
                
                {serviceId === 'digital' && (
                  <ul className="space-y-4 pl-6">
                    {getLocalizedItems(digitalListItems).map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block h-5 w-5 rounded-full bg-purple-900/30 flex-shrink-0 mr-3 mt-1 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {serviceId === 'ai' && (
                  <ul className="space-y-4 pl-6">
                    {getLocalizedItems(aiListItems).map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block h-5 w-5 rounded-full bg-purple-900/30 flex-shrink-0 mr-3 mt-1 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              <p className="text-lg">
                {serviceId === 'digital'
                  ? "I start by understanding how your business works, then recommend only the tools that will genuinely improve your operations."
                  : t(`${serviceId}.details.para2`)}
              </p>
              
              {serviceId === 'digital' && (
                <p className="text-lg">
                  No unnecessary complexity and no pushing technology you don't need – just practical solutions that make your business more efficient.
                </p>
              )}
              
              <div className="bg-gradient-to-r from-purple-900/20 to-transparent p-5 border-l-4 border-purple-500 rounded-r-lg mt-8">
                <p className="italic text-lg">
                  {serviceId === 'digital'
                    ? "The right digital tools should simplify your work, not complicate it."
                    : t(`${serviceId}.details.conclusion`)}
                </p>
              </div>
            </div>
          </div>
          
          {/* Back link */}
          <div className="flex justify-center mt-10">
            <Link href="/#services" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {locale === 'de' ? 'Zurück zu den Serviceleistungen' : 'Back to services'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 