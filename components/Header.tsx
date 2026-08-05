import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Builder Floors', href: '/builder-floors-faridabad' },
  { label: 'Localities', href: '/localities' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur-xl sticky top-0 z-40">
      <div className="container flex items-center justify-between py-5">
        <Link href="/" className="text-lg font-semibold text-slate-950">
          {siteConfig.name}
        </Link>
        <nav className="hidden gap-8 md:flex text-sm text-slate-700">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={`tel:${siteConfig.telephone}`} className="rounded-full border px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-50">
            Call
          </a>
          <a
            href={`https://wa.me/${siteConfig.telephone.replace('+', '').replace(/\D/g, '')}?text=${encodeURIComponent(
              'Hi, I am interested in builder floors in Faridabad. Please share options.'
            )}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Text
          </a>
        </div>
      </div>
    </header>
  );
}
