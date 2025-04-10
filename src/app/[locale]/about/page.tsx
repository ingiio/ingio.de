import ClientAboutPage from '@/components/ClientAboutPage';

// Define static paths for about page
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'de' }
  ];
}

export default function AboutPage() {
  return <ClientAboutPage />;
} 