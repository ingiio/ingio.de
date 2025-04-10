import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales } from '@/i18n';

// Use static pathnamesNavigation for static export compatibility
export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ 
  locales,
  localePrefix: 'always'
}); 