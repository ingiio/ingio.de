import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'de'] as const;
export const defaultLocale = 'en' as const;

export default getRequestConfig(async ({ locale }) => {
  // Load messages for the current locale
  const messages = (await import(`./messages/${locale}.json`)).default;

  return {
    messages
  };
});

// Configure routing with locale prefix
export const i18nConfig = {
  locales,
  defaultLocale,
  localePrefix: 'always'
}; 