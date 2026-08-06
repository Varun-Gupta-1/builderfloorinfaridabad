import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Premium Builder Floors in Gurgaon, Faridabad & Mumbai | Metro Floors',
  description:
    'Luxury 3BHK & 4BHK independent builder floors in Gurgaon, Faridabad, Mumbai & Noida. Modern amenities, prime locations. Headquarters in Gurgaon. Call +91-XXXXXXXXXX for site visits.',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: 'Premium Builder Floors in Gurgaon, Faridabad & Mumbai | Metro Floors',
    description:
      'Luxury 3BHK & 4BHK independent builder floors in Gurgaon, Faridabad, Mumbai & Noida. Modern amenities, prime locations. Headquarters in Gurgaon. Call +91-XXXXXXXXXX for site visits.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
    images: [`${siteConfig.url}/og/sector-15.png`]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Builder Floors in Gurgaon, Faridabad & Mumbai | Metro Floors',
    description:
      'Luxury 3BHK & 4BHK independent builder floors in Gurgaon, Faridabad, Mumbai & Noida. Modern amenities, prime locations. Headquarters in Gurgaon. Call +91-XXXXXXXXXX for site visits.'
  },
  icons: {
    icon: '/assets/images/favicon.ico',
    shortcut: '/assets/images/favicon.ico',
    apple: '/assets/images/apple-touch-icon.png'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  function inferCity(path) {
    const normalized = path.toLowerCase();
    if (normalized === '/' || normalized === '/home') return 'home';
    if (normalized.startsWith('/cities/gurgaon')) return 'Gurgaon';
    if (normalized.startsWith('/cities/faridabad')) return 'Faridabad';
    if (normalized.startsWith('/cities/mumbai')) return 'Mumbai';
    if (normalized.startsWith('/cities/noida')) return 'Noida';
    if (normalized.startsWith('/builder-floors-faridabad')) return 'Faridabad';
    if (normalized.startsWith('/localities')) return 'Faridabad';
    return 'Delhi NCR';
  }

  var pageCity = inferCity(location.pathname);
  document.body.dataset.city = pageCity;
  var message = pageCity === 'home'
    ? 'Hi, I am interested in premium builder floors in Gurgaon/Delhi NCR. Please share available options and next steps.'
    : 'Hi, I am interested in premium builder floors in ' + pageCity + '. Please share available options and next steps.';

  document.querySelectorAll('a[data-whatsapp="true"]').forEach(function(link) {
    var phone = link.dataset.phone || '';
    if (!phone) return;
    link.href = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(message);
  });
})();
            `
          }}
        />
        <Script src="/scripts/defer-noncritical.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
