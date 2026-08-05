import { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';

export function buildMetadata({
  title,
  description,
  pathname,
  keywords
}: {
  title: string;
  description: string;
  pathname: string;
  keywords: string[];
}): Metadata {
  const url = `${siteConfig.url}${pathname}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url
    },
    keywords,
    robots: {
      index: true,
      follow: true
    }
  };
}

export function buildJsonLd(pathname: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: siteConfig.name,
    url: `${siteConfig.url}${pathname}`,
    telephone: siteConfig.telephone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country
    },
    areaServed: ['Faridabad', 'Greater Faridabad', 'Sector 15', 'Sector 14', 'Sector 21', 'Neharpar'],
    description: siteConfig.description,
    sameAs: []
  };
}
