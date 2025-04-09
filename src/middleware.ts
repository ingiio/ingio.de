import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/i18n';

// Match all paths except ones starting with /api, /_next, etc.
export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
