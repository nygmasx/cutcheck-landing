import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'as-needed'
});

export const config = {
  matcher: ['/', '/(en|fr|es|pt)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
