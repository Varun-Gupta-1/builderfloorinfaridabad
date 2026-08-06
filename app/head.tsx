export default function Head() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Metro Floors',
        url: 'https://www.builderfloorinfaridabad.in',
        logo: 'https://www.builderfloorinfaridabad.in/favicon.svg',
        sameAs: [
          'https://www.facebook.com/MetroFloorsIndia',
          'https://www.instagram.com/metro.floors',
          'https://www.linkedin.com/company/metro-floors'
        ],
        email: 'info@builderfloorinfaridabad.com',
        telephone: '+919289322289',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+919289322289',
            contactType: 'customer service',
            areaServed: ['Gurgaon', 'Faridabad', 'Mumbai', 'Noida'],
            availableLanguage: ['English']
          }
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Sector 45, Golf Course Road',
          addressLocality: 'Gurgaon',
          addressRegion: 'Haryana',
          postalCode: '122002',
          addressCountry: 'India'
        }
      },
      {
        '@type': 'RealEstateAgent',
        name: 'Metro Floors',
        url: 'https://www.builderfloorinfaridabad.in',
        telephone: '+919289322289',
        email: 'info@builderfloorinfaridabad.com',
        areaServed: ['Gurgaon', 'Faridabad', 'Mumbai', 'Noida'],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday'
            ],
            opens: '10:00',
            closes: '19:00'
          }
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Sector 45, Golf Course Road',
          addressLocality: 'Gurgaon',
          addressRegion: 'Haryana',
          postalCode: '122002',
          addressCountry: 'India'
        },
        sameAs: [
          'https://www.facebook.com/MetroFloorsIndia',
          'https://www.instagram.com/metro.floors',
          'https://www.linkedin.com/company/metro-floors'
        ]
      },
      {
        '@type': 'LocalBusiness',
        name: 'Metro Floors Gurgaon Headquarters',
        telephone: '+919289322289',
        email: 'info@builderfloorinfaridabad.com',
        url: 'https://www.builderfloorinfaridabad.in',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Sector 45, Golf Course Road',
          addressLocality: 'Gurgaon',
          addressRegion: 'Haryana',
          postalCode: '122002',
          addressCountry: 'India'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 28.5032,
          longitude: 77.0662
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday'
            ],
            opens: '10:00',
            closes: '19:00'
          }
        ],
        areaServed: ['Gurgaon', 'Faridabad', 'Mumbai', 'Noida'],
        sameAs: [
          'https://www.facebook.com/MetroFloorsIndia',
          'https://www.instagram.com/metro.floors',
          'https://www.linkedin.com/company/metro-floors'
        ]
      },
      {
        '@type': 'LocalBusiness',
        name: 'Metro Floors Faridabad Branch',
        telephone: '+919289322289',
        email: 'info@builderfloorinfaridabad.com',
        url: 'https://www.builderfloorinfaridabad.in',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Near Sector 15 Market',
          addressLocality: 'Faridabad',
          addressRegion: 'Haryana',
          postalCode: '121001',
          addressCountry: 'India'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 28.4089,
          longitude: 77.3178
        },
        areaServed: ['Faridabad', 'Gurgaon', 'Noida']
      },
      {
        '@type': 'LocalBusiness',
        name: 'Metro Floors Mumbai Branch',
        telephone: '+919289322289',
        email: 'info@builderfloorinfaridabad.com',
        url: 'https://www.builderfloorinfaridabad.in',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Powai Business District',
          addressLocality: 'Mumbai',
          addressRegion: 'Maharashtra',
          postalCode: '400076',
          addressCountry: 'India'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 19.117,
          longitude: 72.904
        },
        areaServed: ['Mumbai', 'Gurgaon']
      },
      {
        '@type': 'LocalBusiness',
        name: 'Metro Floors Noida Branch',
        telephone: '+919289322289',
        email: 'info@builderfloorinfaridabad.com',
        url: 'https://www.builderfloorinfaridabad.in',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Sector 150',
          addressLocality: 'Noida',
          addressRegion: 'Uttar Pradesh',
          postalCode: '201301',
          addressCountry: 'India'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 28.5712,
          longitude: 77.3161
        },
        areaServed: ['Noida', 'Faridabad']
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.builderfloorinfaridabad.in'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Cities',
            item: 'https://www.builderfloorinfaridabad.in/cities'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Contact',
            item: 'https://www.builderfloorinfaridabad.in/contact'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is a builder floor and why choose it?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A builder floor is an independent residential unit on a single floor with private access. It offers luxury living without the maintenance of a large apartment complex.'
            }
          },
          {
            '@type': 'Question',
            name: 'Which cities do you serve for builder floors?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We serve Gurgaon, Faridabad, Mumbai and Noida with premium builder floor options and local advisory support.'
            }
          },
          {
            '@type': 'Question',
            name: 'How can I contact Metro Floors for site visits?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can call +91-9289322289, email info@builderfloorinfaridabad.com, or submit an enquiry through the contact page to book a site visit.'
            }
          },
          {
            '@type': 'Question',
            name: 'What are your operating hours?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our offices are open Monday through Saturday from 10 AM to 7 PM for walk-ins and appointments.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do you offer ready-to-move builder floors?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, we list ready-to-move independent builder floors in premium locations with modern amenities and trusted construction quality.'
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <title>Premium Builder Floors in Gurgaon, Faridabad & Mumbai | Metro Floors</title>
      <meta
        name="description"
        content="Luxury 3BHK & 4BHK independent builder floors in Gurgaon, Faridabad, Mumbai & Noida. Modern amenities, prime locations. Headquarters in Gurgaon. Call +91-9289322289 for site visits."
      />
      <meta
        name="keywords"
        content="builder floors gurgaon, independent floors faridabad, luxury builder floors mumbai, 3bhk builder floor noida, premium residential gurgaon"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="Premium Builder Floors in Gurgaon, Faridabad & Mumbai | Metro Floors" />
      <meta
        property="og:description"
        content="Luxury 3BHK & 4BHK independent builder floors in Gurgaon, Faridabad, Mumbai & Noida. Modern amenities, prime locations. Headquarters in Gurgaon. Call +91-9289322289 for site visits."
      />
      <meta property="og:image" content="https://www.builderfloorinfaridabad.in/og/sector-15.png" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.builderfloorinfaridabad.in" />
      <link rel="canonical" href="https://www.builderfloorinfaridabad.in" />
      <link
        rel="preload"
        href="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80&fm=avif"
        as="image"
        type="image/avif"
      />
      <link
        rel="preload"
        href="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80&fm=webp"
        as="image"
        type="image/webp"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{`html { scroll-behavior: smooth; }
        body { margin: 0; min-height: 100vh; background: #ffffff; color: #111827; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
        header { position: fixed; inset: 0 0 auto 0; z-index: 50; }
        .hero-background { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .hero-panel { position: relative; z-index: 10; }
        .container { width: min(1100px, calc(100% - 2rem)); margin: 0 auto; }
        a { color: inherit; text-decoration: none; }
      `}</style>
    </>
  );
}
