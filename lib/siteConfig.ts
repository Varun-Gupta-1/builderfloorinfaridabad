export const siteConfig = {
  name: 'Metro Floors',
  description: 'Premium builder floor specialists in Gurgaon, Faridabad, Mumbai and Noida. Trusted real estate advisory for luxury independent floors and ready-to-move residential investments.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.builderfloorinfaridabad.in',
  telephone: '+919289322289',
  email: 'info@builderfloorinfaridabad.com',
  address: {
    street: 'Sector 45, Golf Course Road',
    city: 'Gurgaon',
    region: 'Haryana',
    postalCode: '122002',
    country: 'India'
  },
  locations: [
    {
      name: 'Gurgaon Headquarters',
      address: {
        street: 'Sector 45, Golf Course Road',
        city: 'Gurgaon',
        region: 'Haryana',
        postalCode: '122002',
        country: 'India'
      },
      geo: { latitude: 28.5032, longitude: 77.0662 }
    },
    {
      name: 'Faridabad Branch',
      address: {
        street: 'Near Sector 15 Market',
        city: 'Faridabad',
        region: 'Haryana',
        postalCode: '121001',
        country: 'India'
      },
      geo: { latitude: 28.4089, longitude: 77.3178 }
    },
    {
      name: 'Mumbai Branch',
      address: {
        street: 'Powai Business District',
        city: 'Mumbai',
        region: 'Maharashtra',
        postalCode: '400076',
        country: 'India'
      },
      geo: { latitude: 19.117, longitude: 72.904 }
    },
    {
      name: 'Noida Branch',
      address: {
        street: 'Sector 150',
        city: 'Noida',
        region: 'Uttar Pradesh',
        postalCode: '201301',
        country: 'India'
      },
      geo: { latitude: 28.5712, longitude: 77.3161 }
    }
  ],
  sameAs: [
    'https://www.facebook.com/MetroFloorsIndia',
    'https://www.instagram.com/metro.floors',
    'https://www.linkedin.com/company/metro-floors'
  ],
  geo: {
    latitude: 28.5032,
    longitude: 77.0662
  }
};
