import { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';

function buildBreadcrumbJsonLd(pathname: string) {
  const base = siteConfig.url;
  const items = [
    { id: `${base}/`, name: 'Home' }
  ];

  if (pathname.startsWith('/cities')) {
    items.push({ id: `${base}/cities`, name: 'Cities' });
    if (pathname !== '/cities') {
      const city = pathname.split('/').pop();
      items.push({ id: `${base}${pathname}`, name: city?.replace(/-/g, ' ') ?? 'City' });
    }
  } else if (pathname.startsWith('/projects')) {
    items.push({ id: `${base}/projects`, name: 'Projects' });
    if (pathname !== '/projects') {
      const project = pathname.split('/').pop();
      items.push({ id: `${base}${pathname}`, name: project?.replace(/-/g, ' ') ?? 'Project' });
    }
  } else if (pathname === '/about') {
    items.push({ id: `${base}/about`, name: 'About' });
  } else if (pathname === '/contact') {
    items.push({ id: `${base}/contact`, name: 'Contact' });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.id
    }))
  };
}

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
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} preview image`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [socialImage]
    },
    keywords,
    robots: {
      index: true,
      follow: true
    }
  };
}

export function buildJsonLd(pathname: string) {
  const url = `${siteConfig.url}${pathname}`;
  const branches = siteConfig.locations?.map((location) => ({
    '@type': 'LocalBusiness',
    name: `${siteConfig.name} - ${location.name}`,
    url,
    telephone: siteConfig.telephone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.address.street,
      addressLocality: location.address.city,
      addressRegion: location.address.region,
      postalCode: location.address.postalCode,
      addressCountry: location.address.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.geo.latitude,
      longitude: location.geo.longitude
    }
  })) || [];

  const agent = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: siteConfig.name,
    url,
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
    areaServed: ['Gurgaon', 'Faridabad', 'Mumbai', 'Noida'],
    description: siteConfig.description,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Builder floor services',
      itemListElement: [
        { '@type': 'OfferCatalog', 'name': 'Luxury residential builder floors' },
        { '@type': 'OfferCatalog', 'name': 'Ready to move independent builder floors' },
        { '@type': 'OfferCatalog', 'name': '3BHK/4BHK builder floors' }
      ]
    },
    sameAs: siteConfig.sameAs || []
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
    sameAs: siteConfig.sameAs || [],
    department: branches
  };

  const mainLocalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    image: `${siteConfig.url}/favicon.svg`,
    '@id': siteConfig.url,
    url: siteConfig.url,
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
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo?.latitude ?? 0,
      longitude: siteConfig.geo?.longitude ?? 0
    },
    sameAs: siteConfig.sameAs || [],
    hasPOS: branches
  };

  const breadcrumb = buildBreadcrumbJsonLd(pathname);

  const faqPage = pathname === '/' ? {
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
  } : null;

  const jsonLd: any[] = [agent, org, mainLocalBusiness, breadcrumb];
  if (faqPage) jsonLd.push(faqPage);
  return jsonLd;
}
