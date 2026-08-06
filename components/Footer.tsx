import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Cities', href: '/cities' },
  { label: 'Contact', href: '/contact' }
];

const serviceCities = [
  { label: 'Gurgaon', href: '/cities/gurgaon' },
  { label: 'Faridabad', href: '/cities/faridabad' },
  { label: 'Mumbai', href: '/cities/mumbai' },
  { label: 'Noida', href: '/cities/noida' }
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <p className="text-xl font-semibold text-white">About Us</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Metro Floors connects metro-city buyers with premium builder floor projects across Gurgaon, Faridabad, Mumbai, and Noida, backed by local expertise and trusted service.
            </p>
          </div>

          <div>
            <p className="text-xl font-semibold text-white">Quick Links</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xl font-semibold text-white">Service Cities</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {serviceCities.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xl font-semibold text-white">Corporate Office</p>
            <div className="mt-4 space-y-4 text-sm text-slate-300">
              <div className="space-y-1">
                <p className="font-semibold text-white">Metro Floors Pvt. Ltd.</p>
                <p>Sector 45, Golf Course Road</p>
                <p>Gurgaon, Haryana - 122002</p>
              </div>

              <div className="space-y-2">
                <p className="flex items-start gap-2">
                  <span className="mt-0.5">📍</span>
                  <span>Corporate office location in Gurgaon with metro-city connectivity.</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:+91-XXXXXXXXXX" className="text-white transition hover:text-slate-100">+91-XXXXXXXXXX</a>
                </p>
                <p className="flex items-center gap-2">
                  <span>✉️</span>
                  <a href="mailto:info@metrofloors.in" className="text-white transition hover:text-slate-100">info@metrofloors.in</a>
                </p>
              </div>

              <p className="text-sm text-slate-400">Branch Offices: Faridabad | Mumbai | Noida</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Metro Floors Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
