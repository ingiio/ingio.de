import {getRequestConfig} from 'next-intl/server';
import { LocalePrefix } from 'next-intl/routing';

// Configuration for internationalization
export const locales = ['en', 'de'] as const;
export const defaultLocale = 'en' as const;

// Define the type explicitly for localePrefix
const localePrefix: LocalePrefix = 'always';

// Configure routing with locale prefix - use static definition for static exports
export const i18nConfig = {
  locales,
  defaultLocale,
  localePrefix
};

export default getRequestConfig(async ({locale}) => {
  console.log(`[i18n] getRequestConfig called with locale: '${locale}'`);
  try {
    const messages = (await import(`./messages/${locale}.json`)).default;
    console.log(`[i18n] Successfully loaded messages for locale: '${locale}'`);
    return {
      locale: locale,
      messages: messages
    };
  } catch (error) {
    console.error(`[i18n] Failed to load messages for locale: '${locale}'`, error);
    // Return a minimal object containing the locale in case of error
    // This might not have messages, but avoids the 'null' type error
    // and might help diagnose if the function structure is okay.
    return { locale: locale, messages: {} }; // Return empty messages on error
  }
}); 