// Server-side i18n configuration
import { getRequestConfig } from 'next-intl/server';

// Import messages directly - this works in both dev and production
import enMessages from '../messages/en.json';
import deMessages from '../messages/de.json';

export default getRequestConfig(async ({ locale }) => {
  // Get the appropriate messages for the locale
  const messages = locale === 'de' ? deMessages : enMessages;
  
  return {
    // Use type assertion to solve type compatibility issues
    messages: messages as any,
    timeZone: 'UTC',
    now: new Date()
  };
}); 