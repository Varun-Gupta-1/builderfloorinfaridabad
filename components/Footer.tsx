import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

const cityLinks = [
  { label: 'Gurgaon', href: '/localities' },
  { label: 'Faridabad', href: '/localities' },
  { label: 'Mumbai', href: '/localities' },
  { label: 'Noida', href: '/localities' }
];

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/builder-floors-faridabad' },
  { label: 'Cities', href: '/localities' },
  { label: 'About', href: '/about' }
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <p className="text-xl font-semibold text-white">About Us</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              We connect metro-city buyers with premium builder floor projects, backed by local market expertise, legal support, and post-sales service.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-300">
              <span>Trusted in</span>
              <span className="rounded-full bg-slate-800 px-3 py-1">Gurgaon</span>
              <span className="rounded-full bg-slate-800 px-3 py-1">Faridabad</span>
            </div>
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
              {cityLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xl font-semibold text-white">Contact Info</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">{siteConfig.description}</p>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p>Phone: <a href={`tel:${siteConfig.telephone}`} className="text-white underline">{siteConfig.telephone}</a></p>
              <p>Email: <a href={`mailto:${siteConfig.email}`} className="text-white underline">{siteConfig.email}</a></p>
              <p>Address: {siteConfig.address.street}, {siteConfig.address.city}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-slate-800 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3 text-sm text-slate-400">
            <p className="font-semibold text-white">Newsletter</p>
            <p>Get curated updates on new builder floor projects and market insights.</p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="Enter your email" className="min-w-0 rounded-full border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none" />
            <button type="submit" className="rounded-full bg-gradient-to-r from-cyan-500 to-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110">
              Subscribe
            </button>
          </form>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span className="transition hover:text-white">Instagram</span>
            <span className="transition hover:text-white">LinkedIn</span>
            <span className="transition hover:text-white">YouTube</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
