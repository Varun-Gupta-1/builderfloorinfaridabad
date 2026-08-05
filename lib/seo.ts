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
    sameAs: siteConfig.sameAs || []
  };

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    image: `${siteConfig.url}/favicon.svg`,
    '@id': siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.telephone,
    email: siteConfig.email,
    address: org.address,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo?.latitude ?? 0,
      longitude: siteConfig.geo?.longitude ?? 0
    },
    sameAs: siteConfig.sameAs || []
  };

  // FAQ schema for homepage
  const faqPage = (pathname === '/')
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the best locality for builder floors in Faridabad?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sector 15 and Sector 14 are popular choices for premium builder floors; Neharpar and Sector 37 are value-focused areas.'
            }
          },
          {
            '@type': 'Question',
            name: 'Are builder floors a good investment in Faridabad?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Well-located builder floors often have steady demand and good resale potential, especially in established sectors.'
            }
          },
          {
            '@type': 'Question',
            name: 'Which sectors have premium builder floors?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sector 15, Sector 14 and Sector 21 are known for premium builder floor communities.'
            }
          },
          {
            '@type': 'Question',
            name: 'How can I contact you for property options?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Call us, send a message, or submit the enquiry form and our team will respond promptly.'
            }
          }
        ]
      }
    : null;

  const jsonLd: any[] = [agent, org, localBusiness];
  if (faqPage) jsonLd.push(faqPage);

  return jsonLd;
}
