import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

const footerLinks = [
  { label: 'Builder Floors', href: '/builder-floors-faridabad' },
  { label: 'Localities', href: '/localities' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' }
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600">
      <div className="container space-y-8 py-10">
        <div className="grid gap-4 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xl font-semibold text-slate-950">{siteConfig.name}</p>
            <p className="mt-3 max-w-xl text-sm leading-7">
              Trusted builder floor advisors in Faridabad offering targeted property guidance for buyers and sellers in Sector 15, Sector 14, Sector 21, Neharpar, and Greater Faridabad.
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-slate-700 transition hover:text-slate-950">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Faridabad, Haryana | Local builder floor expertise for your next property move.</p>
        </div>
      </div>
    </footer>
  );
}
