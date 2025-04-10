import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/i18n';

// Match all paths except ones starting with /api, /_next, etc.
export default createMiddleware({
  // Use string arrays for locales to avoid type issues
  locales: ['en', 'de'],
  defaultLocale: 'en',
  localePrefix: 'always',
  // Disable dynamic features for static export
  localeDetection: false
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
