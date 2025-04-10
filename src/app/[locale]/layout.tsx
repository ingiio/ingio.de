// src/app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { locales } from '@/i18n';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import '../globals.css';
import { getMessages } from '@/i18n/client';
import { AbstractIntlMessages } from 'next-intl';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  // Get the locale from params
  const locale = params.locale;
  
  // Title localization
  const title = locale === 'de' ? 'Ingio IT-Dienstleistungen' : 
                'Ingio IT Services';
  
  // Description localization                
  const description = locale === 'de' ? 'Professionelle IT-Dienstleistungen, Digitalisierungsberatung und KI-Workflow-Integration' :
                      'Expert IT services, digitalization consulting, and AI workflow integration';
  
  return {
    title,
    description,
  };
}

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

// Make this a client component for static export compatibility
export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming locale is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Load the translation messages using our static approach
  const messages = getMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <NextIntlClientProvider 
          locale={locale} 
          messages={messages as any} 
          timeZone="UTC"
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
