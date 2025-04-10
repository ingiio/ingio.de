import createNextIntlPlugin from 'next-intl/plugin';

// Configure next-intl with minimal configuration for static export
// Fix: use string array for locales instead of object to avoid path errors
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // New recommended settings for Next.js 15.2.x
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true, // Required for Cloudflare Pages static exports
  },
  // Enable React 19 features
  reactStrictMode: true,
  // Set output to static export for Cloudflare Pages only in production
  // Comment this out for development mode
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  // Disable features that don't work with static export
  staticPageGenerationTimeout: 300,
};

// Apply the plugin
export default withNextIntl(nextConfig); 