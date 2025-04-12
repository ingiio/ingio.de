import React from 'react';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ClientServicesPage from '@/components/ClientServicesPage';

// Define static paths
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'de' }
  ];
}

// Generate metadata for SEO
export async function generateMetadata(
  { params }: { params: { locale: string } },
  parent: Promise<unknown>
): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'services' });
  
  return {
    title: `${t('indexPage.title')} | Ingio IT Services`,
    description: t('indexPage.description'),
    openGraph: {
      title: `${t('indexPage.title')} | Ingio IT Services`,
      description: t('indexPage.description'),
      url: `https://ingio.is/${params.locale}/services`,
      siteName: 'Ingio IT Services',
      images: [
        {
          url: 'https://ingio.is/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: t('indexPage.title'),
        }
      ],
      locale: params.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t('indexPage.title')} | Ingio IT Services`,
      description: t('indexPage.description'),
      images: ['https://ingio.is/images/og-image.jpg'],
    },
    alternates: {
      canonical: `https://ingio.is/${params.locale}/services`,
      languages: {
        en: 'https://ingio.is/en/services',
        de: 'https://ingio.is/de/services',
      },
    },
  };
}

export default function ServicesPage() {
  return <ClientServicesPage />;
} 