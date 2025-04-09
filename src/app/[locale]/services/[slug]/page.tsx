'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceContent from '@/components/ServiceContent';
import { notFound } from 'next/navigation';

export default function ServicePage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  
  // Validate slug is a valid service
  if (!['it', 'digital', 'ai'].includes(slug)) {
    notFound();
  }
  
  return (
    <main>
      <Navbar />
      <ServiceContent serviceId={slug} isModal={false} />
      <Footer />
    </main>
  );
} 