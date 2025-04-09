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
          
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            
            <a
              href="#services" 
              className="text-sm text-gray-300 hover:text-purple-400 transition-colors hidden md:inline-block"
            >
              {t('services')}
            </a>
            
            <a
              href="#contact" 
              className="btn-primary"
            >
              {t('contact')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 