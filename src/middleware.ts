import createMiddleware from 'next-intl/middleware';
import { i18nConfig } from '@/i18n';

// Match all paths except ones starting with /api, /_next, etc.
export default createMiddleware({
  ...i18nConfig,
  // Disable dynamic features for static export
  localeDetection: false
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
