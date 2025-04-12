import ClientServicePage from '@/components/ClientServicePage';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

// Define all possible paths for static generation
export function generateStaticParams() {
  return [
    { locale: 'en', slug: 'it' },
    { locale: 'en', slug: 'digital' },
    { locale: 'en', slug: 'ai' },
    { locale: 'de', slug: 'it' },
    { locale: 'de', slug: 'digital' },
    { locale: 'de', slug: 'ai' },
  ];
}

// Generate metadata for SEO
export async function generateMetadata(
  { params }: { params: { locale: string; slug: string } }
): Promise<Metadata> {
  // Destructure params properly
  const { locale, slug } = params;
  
  // Validate the slug
  if (!['it', 'digital', 'ai'].includes(slug)) {
    return {
      title: 'Service Not Found',
    };
  }

  // Get translations based on the current locale
  const t = await getTranslations({ locale, namespace: 'services' });
  
  return {
    title: `${t(`${slug}.title`)} | Ingio IT Services`,
    description: t(`${slug}.description`),
    openGraph: {
      title: `${t(`${slug}.title`)} | Ingio IT Services`,
      description: t(`${slug}.description`),
      url: `https://ingio.is/${locale}/services/${slug}`,
      siteName: 'Ingio IT Services',
      images: [
        {
          url: 'https://ingio.is/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: t(`${slug}.title`),
        }
      ],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t(`${slug}.title`)} | Ingio IT Services`,
      description: t(`${slug}.description`),
      images: ['https://ingio.is/images/og-image.jpg'],
    },
    alternates: {
      canonical: `https://ingio.is/${locale}/services/${slug}`,
      languages: {
        en: `https://ingio.is/en/services/${slug}`,
        de: `https://ingio.is/de/services/${slug}`,
      },
    },
  };
}

export default function ServicePage() {
  return <ClientServicePage />;
} 