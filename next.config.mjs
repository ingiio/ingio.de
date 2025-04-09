import createNextIntlPlugin from 'next-intl/plugin';

// Configure next-intl
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
  // Set output to static export for Cloudflare Pages
  output: 'export',
};

// Apply the plugin
export default withNextIntl(nextConfig); 