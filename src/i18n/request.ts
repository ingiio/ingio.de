import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from '../i18n';

export default getRequestConfig(async ({ locale }) => {
  // Make sure we have a valid locale
  const validLocale = locales.includes(locale as any) ? locale : defaultLocale;
  
  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default,
    // Turn off time/date features we're not using to reduce hydration mismatches
    timeZone: 'UTC',
    now: undefined,
  };
}); 