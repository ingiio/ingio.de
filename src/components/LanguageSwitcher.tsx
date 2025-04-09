'use client';

import { useLocale } from 'next-intl';
import { usePathname } from '@/navigation';
import { Link } from '@/navigation';
import { locales } from '@/i18n';

// Language display names
const languageNames: Record<string, string> = {
  en: 'EN',
  de: 'DE'
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex gap-1 z-50">
      {locales.map((l) => (
        <Link
          key={l}
          href={pathname}
          locale={l}
          className={`px-3 py-1 rounded text-sm transition-colors ${
            locale === l 
              ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
              : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
          }`}
          title={languageNames[l]}
        >
          {languageNames[l]}
        </Link>
      ))}
    </div>
  );
} 