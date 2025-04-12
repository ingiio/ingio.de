// src/app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { locales } from '../../i18n';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import '../globals.css';
import { getMessages, getTranslations } from 'next-intl/server';
import { AbstractIntlMessages } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: 'Layout' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

// Make this an async component to fetch server-side messages
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;
  
  // Validate that the incoming locale is valid using a safer check
  if (!locales.some(l => l === locale)) {
    notFound();
  }

  // Load the translation messages using the server-side async approach
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <NextIntlClientProvider
          locale={locale}
          messages={messages as AbstractIntlMessages} // Kept assertion due to i18n.ts error handling
          timeZone="UTC"
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
