'use client';

import Head from 'next/head';
import { useTranslations } from 'next-intl';

interface ServiceHeadProps {
  serviceId: string;
}

export default function ServiceHead({ serviceId }: ServiceHeadProps) {
  const t = useTranslations('services');
  
  return (
    <Head>
      <title>{t(`${serviceId}.title`)} | Ingio IT Services</title>
      <meta name="description" content={t(`${serviceId}.description`)} />
      <meta property="og:title" content={`${t(`${serviceId}.title`)} | Ingio IT Services`} />
      <meta property="og:description" content={t(`${serviceId}.description`)} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://ingio.is/services/${serviceId}`} />
      <meta property="og:image" content="https://ingio.is/images/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
} 