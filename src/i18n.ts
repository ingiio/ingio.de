// Configuration for internationalization
export const locales = ['en', 'de'] as const;
export const defaultLocale = 'en' as const;

// Configure routing with locale prefix - use static definition for static exports
export const i18nConfig = {
  locales,
  defaultLocale,
  localePrefix: 'always'
}; 