'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import ServiceContent from '@/components/ServiceContent';
import { notFound } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Metadata } from 'next';

export default function ClientServicePage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const t = useTranslations('services');
  const locale = useLocale();
  
  // Validate slug is a valid service
  if (!['it', 'digital', 'ai'].includes(slug)) {
    notFound();
  }
  
  return (
    <>
      <ServiceContent serviceId={slug} />
    </>
  );
} 