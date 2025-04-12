'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import Image from 'next/image';

export default function PersonalAboutSection() {
  const t = useTranslations('personalAbout');

  return (
    <section className="py-24 bg-gradient-to-b from-[#151718] to-[#1a1c1e] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="gradient-text">{t('title')}</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image column with professionally styled photo container */}
          <div className="flex justify-center md:justify-end">
            <div className="relative h-72 w-72 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-gray-800 shadow-xl shadow-purple-900/20">
              <Image 
                src="/images/profile/ingi.jpg" 
                alt={t('name')}
                fill
                style={{ objectFit: 'cover' }}
                priority
                sizes="(max-width: 768px) 272px, 320px"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Content column */}
          <div className="text-left">
            <h3 className="text-2xl font-bold text-white mb-2">
              {t('name')}
            </h3>
            <p className="text-lg text-purple-400 mb-6">
              {t('role')}
            </p>
            
            <div className="space-y-6 text-gray-300">
              <p>{t('bio')}</p>
              <p>{t('approach')}</p>
              <p>{t('local')}</p>
            </div>
            
            <div className="mt-8">
              <Link href="/#consultation" className="btn-primary">
                {t('cta')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 