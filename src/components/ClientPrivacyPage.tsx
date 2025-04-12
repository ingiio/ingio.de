'use client';

import { useTranslations } from 'next-intl';

export default function ClientPrivacyPage() {
  const t = useTranslations('legal.privacy');
  
  return (
    <>
      <section className="section bg-gradient-to-b from-[#151718] to-[#1a1c1e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-3 gradient-text">{t('title')}</h1>
            <p className="text-gray-400">{t('lastUpdated')}</p>
          </div>
          
          <div className="card">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-400">{t('introduction')}</p>
              
              {/* Information Collection */}
              <h2 className="text-2xl font-bold mt-8 mb-4 gradient-text">{t('collection.title')}</h2>
              <p className="text-gray-400">{t('collection.description')}</p>
              <ul className="space-y-2 mb-6">
                {['personal', 'usage', 'cookies'].map((item) => (
                  <li key={item} className="text-gray-400">
                    <strong className="text-white">{t(`collection.items.${item}.title`)}:</strong> {t(`collection.items.${item}.description`)}
                  </li>
                ))}
              </ul>
              
              {/* Information Usage */}
              <h2 className="text-2xl font-bold mt-8 mb-4 gradient-text">{t('usage.title')}</h2>
              <p className="text-gray-400">{t('usage.description')}</p>
              <ul className="space-y-2 mb-6">
                {['provide', 'improve', 'communicate', 'legal'].map((item) => (
                  <li key={item} className="text-gray-400">
                    {t(`usage.items.${item}`)}
                  </li>
                ))}
              </ul>
              
              {/* Information Sharing */}
              <h2 className="text-2xl font-bold mt-8 mb-4 gradient-text">{t('sharing.title')}</h2>
              <p className="text-gray-400">{t('sharing.description')}</p>
              <ul className="space-y-2 mb-6">
                {['providers', 'legal', 'business'].map((item) => (
                  <li key={item} className="text-gray-400">
                    {t(`sharing.items.${item}`)}
                  </li>
                ))}
              </ul>
              
              {/* Data Security */}
              <h2 className="text-2xl font-bold mt-8 mb-4 gradient-text">{t('security.title')}</h2>
              <p className="text-gray-400">{t('security.description')}</p>
              
              {/* User Rights */}
              <h2 className="text-2xl font-bold mt-8 mb-4 gradient-text">{t('rights.title')}</h2>
              <p className="text-gray-400">{t('rights.description')}</p>
              <ul className="space-y-2 mb-6">
                {['access', 'correction', 'deletion', 'objection', 'withdrawal'].map((item) => (
                  <li key={item} className="text-gray-400">
                    <strong className="text-white">{t(`rights.items.${item}.title`)}:</strong> {t(`rights.items.${item}.description`)}
                  </li>
                ))}
              </ul>
              
              {/* Children's Privacy */}
              <h2 className="text-2xl font-bold mt-8 mb-4 gradient-text">{t('children.title')}</h2>
              <p className="text-gray-400">{t('children.description')}</p>
              
              {/* Changes to Policy */}
              <h2 className="text-2xl font-bold mt-8 mb-4 gradient-text">{t('changes.title')}</h2>
              <p className="text-gray-400">{t('changes.description')}</p>
              
              {/* Contact Us */}
              <h2 className="text-2xl font-bold mt-8 mb-4 gradient-text">{t('contact.title')}</h2>
              <p className="text-gray-400">{t('contact.description')}</p>
              <p className="text-gray-400">
                <strong className="text-white">{t('contact.email.title')}:</strong> {t('contact.email.value')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 