'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { siteConfig } from '@/lib/siteConfig';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Cities', href: '#cities' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '#contact' }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? 'bg-white/90 shadow-sm backdrop-blur-xl' : 'bg-transparent'} `}>
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4 md:px-0">
        <Link href="#home" className="text-lg font-semibold text-slate-950">
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex text-sm font-medium text-slate-700">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-slate-950">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={`tel:${siteConfig.telephone}`} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-50">
            <span>📞</span>
            {siteConfig.telephone}
          </a>
          <a href="#contact" className="rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90">
            Get Quote
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-900 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-lg">{menuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-4 shadow-sm md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100" onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href={`tel:${siteConfig.telephone}`} className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50">
              Call {siteConfig.telephone}
            </a>
            <a href="#contact" className="block rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              Get Quote
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
