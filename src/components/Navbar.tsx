'use client';

import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('Nav');
  
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-800 bg-[#151718]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex">
            <Link 
              href="/"
              className="flex-shrink-0 flex items-center font-bold text-xl"
            >
              <span className="gradient-text">Ingio.is</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <LanguageSwitcher />
            
            <Link
              href="/#services"
              className="text-sm text-gray-300 hover:text-purple-400 transition-colors hidden md:inline-block"
            >
              {t('services')}
            </Link>
            
            <Link
              href="/#consultation"
              className="bg-gradient-to-r from-purple-500 to-emerald-500 text-white px-5 py-2.5 rounded-md font-medium shadow-lg hover:shadow-purple-500/10 hover:from-purple-600 hover:to-emerald-600 transition-all duration-300 transform hover:-translate-y-0.5 hidden sm:inline-block"
            >
              {t('contact')}
            </Link>
            
            <Link
              href="/#consultation"
              className="sm:hidden btn-primary"
              aria-label={t('contact')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 