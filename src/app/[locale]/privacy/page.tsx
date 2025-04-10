import ClientPrivacyPage from '@/components/ClientPrivacyPage';

// Define static paths for privacy page
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'de' }
  ];
}

export default function PrivacyPolicyPage() {
  return <ClientPrivacyPage />;
} 