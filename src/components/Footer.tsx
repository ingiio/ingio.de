// src/components/Footer.tsx
'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const year = new Date().getFullYear();
  const isHomePage = pathname === '/' || pathname === '/de';

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
          </div>
          
          {/* Quick Links */}
          {isClient && (
            <>
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
                      href={isHomePage ? "#services" : "/"}
                      className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {t('links.services')}
                    </Link>
                  </li>
                  <li key="contact">
                    <Link 
                      href={isHomePage ? "#contact" : "/#contact"}
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
            </>
          )}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-400">
            &copy; {year} Ingio.is. {t('copyright')}
          </p>
          
          {isClient && (
            <div className="mt-4 md:mt-0 flex space-x-6">
              {['github', 'twitter', 'linkedin'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  {social === 'github' ? (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  ) : social === 'twitter' ? (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
  