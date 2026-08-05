export const siteConfig = {
  name: 'Builder Floor in Faridabad',
  description: 'Premium builder floor specialists in Faridabad. Trusted local real estate advisory for buyers, sellers, and investors in Sector 15, Sector 14, Sector 21, Neharpar, and Greater Faridabad.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://builderfloorinfaridabad.com',
  telephone: '+917042337737',
  email: 'info@builderfloorinfaridabad.com',
  address: {
    street: 'Near Sector 15 Market',
    city: 'Faridabad',
    region: 'Haryana',
    postalCode: '121001',
    country: 'India'
  }
  ,
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
