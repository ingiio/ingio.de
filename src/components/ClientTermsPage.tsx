'use client';

import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ClientTermsPage() {
  const t = useTranslations('legal.terms');
  
  return (
    <main>
      <Navbar />
      
      <section className="section bg-gradient-to-b from-[#151718] to-[#1a1c1e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-3 gradient-text">{t('title')}</h1>
            <p className="text-gray-400">{t('lastUpdated')}</p>
          </div>
          
          <div className="card">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-400">{t('introduction')}</p>
              
              {/* Acceptance of Terms */}
              <h2 className="text-2xl font-bold mt-8 mb-4 gradient-text">{t('acceptance.title')}</h2>
              <p className="text-gray-400">{t('acceptance.description')}</p>
              
              {/* Services Description */}
              <h2 className="text-2xl font-bold mt-8 mb-4 gradient-text">{t('services.title')}</h2>
              <p className="text-gray-400">{t('services.description')}</p>
              <p className="text-gray-400">{t('services.modification')}</p>
              
              {/* User Responsibilities */}
              <h2 className="text-2xl font-bold mt-8 mb-4 gradient-text">{t('user.title')}</h2>
              <p className="text-gray-400">{t('user.description')}</p>
              <ul className="space-y-2 mb-6">
                {['accurate', 'security', 'laws', 'conduct'].map((item) => (
                  <li key={item} className="text-gray-400">
                    {t(`user.responsibilities.${item}`)}
                  </li>
                ))}
              </ul>
              
              {/* Intellectual Property */}
              <h2 className="text-2xl font-bold mt-8 mb-4 gradient-text">{t('ip.title')}</h2>
              <p className="text-gray-400">{t('ip.description')}</p>
              <p className="text-gray-400">{t('ip.ownership')}</p>
              
              {/* Limitation of Liability */}
              <h2 className="text-2xl font-bold mt-8 mb-4 gradient-text">{t('liability.title')}</h2>
              <p className="text-gray-400">{t('liability.description')}</p>
              <p className="text-gray-400">{t('liability.limitation')}</p>
              
              {/* Indemnification */}
              <h2 className="text-2xl font-bold mt-8 mb-4 gradient-text">{t('indemnification.title')}</h2>
              <p className="text-gray-400">{t('indemnification.description')}</p>
              
              {/* Term and Termination */}
              <h2 className="text-2xl font-bold mt-8 mb-4 gradient-text">{t('termination.title')}</h2>
              <p className="text-gray-400">{t('termination.description')}</p>
              <p className="text-gray-400">{t('termination.effect')}</p>
              
              {/* Governing Law */}
              <h2 className="text-2xl font-bold mt-8 mb-4 gradient-text">{t('governing.title')}</h2>
              <p className="text-gray-400">{t('governing.description')}</p>
              
              {/* Changes to Terms */}
              <h2 className="text-2xl font-bold mt-8 mb-4 gradient-text">{t('changes.title')}</h2>
              <p className="text-gray-400">{t('changes.description')}</p>
              
              {/* Contact Information */}
              <h2 className="text-2xl font-bold mt-8 mb-4 gradient-text">{t('contact.title')}</h2>
              <p className="text-gray-400">{t('contact.description')}</p>
              <p className="text-gray-400">
                <strong className="text-white">{t('contact.email.title')}:</strong> {t('contact.email.value')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 