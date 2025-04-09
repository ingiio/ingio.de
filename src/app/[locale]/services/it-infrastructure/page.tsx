'use client';

import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from '@/navigation';

export default function ITInfrastructurePage() {
  const t = useTranslations('services.it');
  const tServices = useTranslations('servicePages.infrastructure');
  
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#151718] pb-16 pt-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="gradient-text">{t('title')}</span>
            </h1>
            
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-400">
              {t('description')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="section bg-gradient-to-b from-[#1a1c1e] to-[#151718]">
        <div className="max-w-7xl mx-auto">
          {/* Overview */}
          <div className="card mb-12">
            <h2 className="text-2xl font-bold mb-6 gradient-text">{tServices('overview.title')}</h2>
            <p className="text-gray-400 mb-8">{tServices('overview.description')}</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {['security', 'reliability', 'scalability'].map((benefit) => (
                <div key={benefit} className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
                  <div className="h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {benefit === 'security' ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      ) : benefit === 'reliability' ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      )}
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{tServices(`overview.benefits.${benefit}.title`)}</h3>
                  <p className="text-gray-400 text-sm">{tServices(`overview.benefits.${benefit}.description`)}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Services List */}
          <div className="card mb-12">
            <h2 className="text-2xl font-bold mb-6 gradient-text">{tServices('services.title')}</h2>
            <div className="space-y-8">
              {['networkSecurity', 'hardware', 'maintenance'].map((service, index) => (
                <div key={service} className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="h-16 w-16 rounded-lg bg-purple-900/20 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {index === 0 ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        ) : index === 1 ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        )}
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{tServices(`services.list.${service}.title`)}</h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-400 mb-4">{tServices(`services.list.${service}.description`)}</p>
                    <ul className="space-y-2">
                      {[1, 2, 3].map((item) => (
                        <li key={item} className="flex items-center text-gray-400">
                          <span className="h-5 w-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          {tServices(`services.list.${service}.features.${item}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <div className="card text-center">
            <h2 className="text-2xl font-bold mb-4 gradient-text">{tServices('cta.title')}</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">{tServices('cta.description')}</p>
            <div className="flex justify-center gap-4">
              <Link href="/contact" className="btn-primary">{tServices('cta.primary')}</Link>
              <Link href="/services" className="btn-outline">{tServices('cta.secondary')}</Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 