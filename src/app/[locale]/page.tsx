// src/app/[locale]/page.tsx
import ClientHomePage from '@/components/ClientHomePage';

// Define static paths for home page
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'de' }
  ];
}

export default function HomePage() {
  return <ClientHomePage />;
}
