import ClientServicePage from '@/components/ClientServicePage';

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

export default function ServicePage() {
  return <ClientServicePage />;
} 