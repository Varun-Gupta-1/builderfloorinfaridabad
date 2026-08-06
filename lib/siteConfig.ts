export const siteConfig = {
  name: 'Builder Floor in Faridabad',
  description: 'Premium builder floor specialists in Faridabad. Trusted local real estate advisory for buyers, sellers, and investors in Sector 15, Sector 14, Sector 21, Neharpar, and Greater Faridabad.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.builderfloorinfaridabad.in',
  telephone: '+919289322289',
  email: 'info@builderfloorinfaridabad.com',
  address: {
    street: 'Near Sector 15 Market',
    city: 'Faridabad',
    region: 'Haryana',
    postalCode: '121001',
    country: 'India'
  },
  locations: [
    {
      name: 'Gurgaon HQ',
      address: {
        street: 'Sohna Road',
        city: 'Gurgaon',
        region: 'Haryana',
        postalCode: '122001',
        country: 'India'
      },
      geo: { latitude: 28.4595, longitude: 77.0266 }
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
      geo: { latitude: 19.1170, longitude: 72.9040 }
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
  // Add social/profile links to improve JSON-LD `sameAs`
  sameAs: [
    // e.g. 'https://www.facebook.com/yourpage',
  ],
  // Approximate geo coordinates for Faridabad (lat, lng)
  geo: {
    latitude: 28.4089,
    longitude: 77.3178
  }
};
