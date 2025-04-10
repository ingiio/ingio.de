'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/navigation';
import ServiceHead from './ServiceHead';

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
        <svg xmlns="http://www.w3.org/2000/svg" className={`${isCompact ? 'h-10 w-10' : 'h-16 w-16'} text-purple-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      );
    } else if (serviceId === 'digital') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`${isCompact ? 'h-10 w-10' : 'h-16 w-16'} text-purple-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      );
    } else if (serviceId === 'ai') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`${isCompact ? 'h-10 w-10' : 'h-16 w-16'} text-purple-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    }
    return null;
  };
  
  const renderServiceDetails = () => {
    const serviceDetails = `${serviceId}.details`;

    if (serviceId === 'digital') {
      return (
        <div className="space-y-2">
          <p className="text-gray-300">{t(`${serviceDetails}.intro`)}</p>
          <p className="text-gray-300 mt-1">{t(`${serviceDetails}.listIntro`)}</p>
          <ul className="space-y-1 my-2 list-disc pl-5">
            {getLocalizedItems(digitalListItems).map((item: string, idx: number) => (
              <li key={idx} className="text-gray-300">{item}</li>
            ))}
          </ul>
          <p className="text-gray-300">{t(`${serviceDetails}.para1`)}</p>
          <p className="text-gray-300">{t(`${serviceDetails}.para2`)}</p>
          <p className="text-gray-300 italic mt-2">{t(`${serviceDetails}.conclusion`)}</p>
        </div>
      );
    }
    
    if (serviceId === 'ai') {
      return (
        <div className="space-y-2">
          <p className="text-gray-300">{t(`${serviceDetails}.intro`)}</p>
          <p className="text-gray-300">{t(`${serviceDetails}.para1`)}</p>
          <ul className="space-y-1 my-2 list-disc pl-5">
            {getLocalizedItems(aiListItems).map((item: string, idx: number) => (
              <li key={idx} className="text-gray-300">{item}</li>
            ))}
          </ul>
          <p className="text-gray-300">{t(`${serviceDetails}.para2`)}</p>
          <p className="text-gray-300 italic mt-2">{t(`${serviceDetails}.conclusion`)}</p>
        </div>
      );
    }

    return (
      <div className="space-y-2">
        <p className="text-gray-300">{t(`${serviceDetails}.intro`)}</p>
        <p className="text-gray-300">{t(`${serviceDetails}.para1`)}</p>
        <p className="text-gray-300">{t(`${serviceDetails}.para2`)}</p>
        <p className="text-gray-300 italic mt-2">{t(`${serviceDetails}.conclusion`)}</p>
      </div>
    );
  };
  
  return (
    <div className={`${isModal ? '' : 'pt-24'}`}>
      {!isModal && <ServiceHead serviceId={serviceId} />}
      
      <div className={`relative overflow-hidden bg-[#151718] py-${isCompact ? '3' : '8'}`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center md:justify-start">
            <div className={`flex-shrink-0 mb-${isCompact ? '2' : '6'} h-${isCompact ? '14' : '24'} w-${isCompact ? '14' : '24'} rounded-2xl bg-purple-900/20 flex items-center justify-center`}>
              {getServiceIcon()}
            </div>
            
            <div className="ml-4 flex-1">
              <h1 className={`text-${isCompact ? 'xl' : '3xl'} font-bold mb-1 gradient-text`}>
                {t(`${serviceId}.title`)}
              </h1>
              <p className={`text-${isCompact ? 'base' : 'xl'} text-gray-400`}>
                {t(`${serviceId}.description`)}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className={`card mb-3 ${isCompact ? 'py-4 px-4' : ''}`}>
          <h2 className="text-lg font-semibold mb-3 gradient-text">Overview</h2>
          
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            {(serviceId === 'it' ? 
              ['it.features.one', 'it.features.two', 'it.features.three'] : 
              serviceId === 'digital' ? 
                ['digital.features.one', 'digital.features.two', 'digital.features.three'] : 
                ['ai.features.one', 'ai.features.two', 'ai.features.three']
            ).map((feature, index) => (
              <li key={index} className="bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
                <div className="flex items-center">
                  <div className="h-7 w-7 rounded-full bg-emerald-900/30 flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-medium text-white">{t(feature)}</h3>
                </div>
              </li>
            ))}
          </ul>
          
          <div className="border-t border-gray-700 pt-3">
            {renderServiceDetails()}
          </div>
        </div>
        
        <div className={`card text-center py-3 px-4`}>
          <h2 className="text-lg font-semibold mb-2 gradient-text">Ready to get started?</h2>
          <p className="text-gray-400 mb-4 max-w-2xl mx-auto text-sm">
            Contact us today to discuss how our {t(`${serviceId}.title`)} services can help your business thrive.
          </p>
          <div className="flex justify-center gap-3">
            <Link href="#consultation" className="btn-primary text-sm py-2">Get in Touch</Link>
            {isModal && (
              <button onClick={() => window.history.back()} className="btn-outline text-sm py-2">Back to Services</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 