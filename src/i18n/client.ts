// Static configuration for client-side i18n
import { locales, defaultLocale } from '@/i18n';
import { AbstractIntlMessages } from 'next-intl';

// Import messages directly with correct path resolution
import enMessages from '../messages/en.json';
import deMessages from '../messages/de.json';

// This is used for client-side internationalization with static export
export function getMessages(locale: string): any {
  const validLocale = locales.includes(locale as any) ? locale : defaultLocale;
  
  // For static export, use static imports with any type to bypass TypeScript issues
  if (validLocale === 'en') {
    return enMessages;
  } else if (validLocale === 'de') {
    return deMessages;
  }
  
  // Fallback
  return enMessages;
} 