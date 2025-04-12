import createNextIntlPlugin from 'next-intl/plugin';

// Configure next-intl with minimal configuration for static export
// Fix: use string array for locales instead of object to avoid path errors
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Settings for Next.js 15.2.x
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true, // Required for static exports
  },
  // Enable React 19 features
  reactStrictMode: true,
  // Set output to static export for production builds
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  // Performance settings
  staticPageGenerationTimeout: 300,
  // Handle Next.js 15 warnings
  experimental: {
    // Enable the new App Router performance improvements
    serverActions: {
      bodySizeLimit: '2mb',
    },
    // Prevent tree-shaking warnings
    optimizePackageImports: ['next-intl']
  },
};

// Apply the plugin
export default withNextIntl(nextConfig); 