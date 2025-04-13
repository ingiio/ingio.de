'use client';

import { useTranslations } from 'next-intl';

export default function ClientAboutPage() {
  const t = useTranslations('about');
  
  return (
    <>
      <section className="section bg-gradient-to-b from-[#151718] to-[#1a1c1e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-3 gradient-text">{t('title')}</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>
          
          {/* Mission & Values */}
          <div className="card mb-12">
            <h2 className="text-2xl font-bold mb-4 gradient-text">{t('mission.title')}</h2>
            <p className="text-gray-400 mb-6">{t('mission.description')}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">{t('mission.values.title')}</h3>
                <ul className="space-y-2">
                  {['integrity', 'innovation', 'excellence', 'collaboration'].map((value) => (
                    <li key={value} className="flex items-center text-gray-400">
                      <span className="h-5 w-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {t(`mission.values.${value}`)}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
                <h3 className="text-xl font-semibold mb-3 text-emerald-400">{t('mission.approach.title')}</h3>
                <ul className="space-y-4">
                  {['client', 'tailored', 'futureproof'].map((item) => (
                    <li key={item} className="text-gray-400">
                      <h4 className="text-lg font-medium text-white mb-1">{t(`mission.approach.${item}.title`)}</h4>
                      <p className="text-sm">{t(`mission.approach.${item}.description`)}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Story */}
          <div className="card mb-12">
            <h2 className="text-2xl font-bold mb-4 gradient-text">{t('story.title')}</h2>
            <div className="space-y-4 text-gray-400">
              <p>{t('story.part1')}</p>
              <p>{t('story.part2')}</p>
              <p>{t('story.part3')}</p>
            </div>
          </div>
          
          {/* Expertise */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-8 gradient-text">{t('expertise.title')}</h2>
            
            <div className="grid md:grid-cols-1 gap-8 mb-8">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-emerald-500 p-1 mx-auto mb-4">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white">{t('expertise.experience.name')}</h3>
                <p className="text-purple-400 mb-2">{t('expertise.experience.role')}</p>
                <p className="text-gray-400 text-sm">{t('expertise.experience.bio')}</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">{t('expertise.partnerships.title')}</h3>
                <p className="text-gray-400">{t('expertise.partnerships.description')}</p>
              </div>
              
              <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
                <h3 className="text-xl font-semibold mb-3 text-emerald-400">{t('expertise.certifications.title')}</h3>
                <p className="text-gray-400">{t('expertise.certifications.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 