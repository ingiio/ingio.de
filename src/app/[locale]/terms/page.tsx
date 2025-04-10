import ClientTermsPage from '@/components/ClientTermsPage';

// Define static paths for terms page
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'de' }
  ];
}

export default function TermsOfServicePage() {
  return <ClientTermsPage />;
} 