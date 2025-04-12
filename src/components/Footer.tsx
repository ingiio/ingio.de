// src/components/Footer.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function Footer() {
  const t = useTranslations('footer');

  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#12151a] border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold gradient-text">Ingio.is</span>
            </div>
            <p className="mt-4 text-sm text-gray-400 max-w-md">
              {t('description')}
            </p>
            {/* Location information */}
            <div className="mt-6 text-sm text-gray-400">
              <div className="flex items-start mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{t('location')}</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>{t('service_area')}</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm text-gray-300 font-semibold tracking-wider uppercase">
              {t('links.title')}
            </h3>
            <ul className="mt-4 space-y-2">
              <li key="home">
                <Link 
                  href="/"
                  className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                >
                  {t('links.home')}
                </Link>
              </li>
              <li key="services">
                <Link 
                  href="/#services"
                  className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                >
                  {t('links.services')}
                </Link>
              </li>
              <li key="contact">
                <Link 
                  href="/#consultation"
                  className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                >
                  {t('links.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-sm text-gray-300 font-semibold tracking-wider uppercase">
              {t('legal.title')}
            </h3>
            <ul className="mt-4 space-y-2">
              {['privacy', 'terms'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item}`} 
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {t(`legal.${item}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-400">
            &copy; {year} Ingio.is. {t('copyright')}
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            {/* Social icons - we'll keep only LinkedIn as most relevant for local B2B */}
            <a 
              href="#" 
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
  