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
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled ? 'bg-white/80 shadow-xl backdrop-blur-xl' : 'bg-transparent'} `}>
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4 md:px-0">
        <Link href="#home" className="flex items-center gap-3 text-slate-950">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2C3E50] text-lg font-bold text-[#D4AF37] shadow-lg shadow-slate-900/10">
            MF
          </div>
          <div className="hidden flex-col md:flex">
            <span className="text-lg font-bold tracking-tight">Metro Floors</span>
            <span className="text-xs font-medium text-slate-600">Independent Builder Floors</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex text-sm font-semibold text-slate-700 font-[Montserrat]">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-slate-950">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <a href={`tel:${siteConfig.telephone}`} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50">
            <span className="text-lg">📞</span>
            <span className="hidden sm:inline">{siteConfig.telephone}</span>
          </a>
          <a href="#contact" className="rounded-full bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-95">
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
        <div className="border-t border-slate-200 bg-white/95 px-4 py-4 shadow-sm md:hidden backdrop-blur-xl">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100" onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href={`tel:${siteConfig.telephone}`} className="block rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">
              <span className="inline-flex items-center gap-2">📞 {siteConfig.telephone}</span>
            </a>
            <a href="#contact" className="block rounded-2xl bg-[#D4AF37] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-95">
              Get Quote
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
