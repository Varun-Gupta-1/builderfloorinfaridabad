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

  const socialImage = process.env.NEXT_PUBLIC_SOCIAL_IMAGE ?? `https://via.placeholder.com/1200x630.png?text=${encodeURIComponent(
    'Builder+Floor+in+Faridabad'
  )}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website'
      ,
      images: [socialImage]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
      ,
      images: [socialImage]
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
  const agent = {
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

  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.svg`,
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
    sameAs: []
  };

  return [agent, org];
}
