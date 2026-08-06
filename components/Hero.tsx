import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import LazyImage from '@/components/LazyImage';

const heroImage = {
  src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
  webpSrc: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80&fm=webp',
  avifSrc: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80&fm=avif'
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-24" aria-label="Builder floor hero section">
      <LazyImage
        src={heroImage.src}
        webpSrc={heroImage.webpSrc}
        avifSrc={heroImage.avifSrc}
        alt="Hero view of premium builder floors in a luxury residential project"
        className="absolute inset-0 h-full w-full object-cover"
        priority
      />
      <div className="absolute inset-0 bg-slate-950/70" />
      <div className="container relative mx-auto px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl rounded-[40px] border border-white/10 bg-white/10 p-10 shadow-2xl backdrop-blur-xl">
          <div className="space-y-6 text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Luxury builder floors</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Premium builder floors in Gurgaon, Faridabad, Mumbai and Noida with luxury independent floors and 3BHK 4BHK builder floors built for modern amenities.
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-8 text-slate-100 sm:text-lg">
              Metro Floors helps you find ready to move independent residential homes and premium properties, combining city-edge convenience with trusted design, lifestyle value and a professional search experience.
            </p>
            <div className="mx-auto flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-sky-600 px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110">
                Schedule Site Visit
              </a>
              <Link href="#projects" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                View Projects
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 text-sm text-slate-200">
              <div className="rounded-3xl bg-white/10 px-4 py-3">
                <p className="font-semibold">Metro coverage</p>
                <p className="mt-2">Gurgaon, Faridabad, Mumbai, Noida</p>
              </div>
              <div className="rounded-3xl bg-white/10 px-4 py-3">
                <p className="font-semibold">Trusted developers</p>
                <p className="mt-2">Premium, verified partners</p>
              </div>
              <div className="rounded-3xl bg-white/10 px-4 py-3">
                <p className="font-semibold">High-touch support</p>
                <p className="mt-2">From site visits to handover</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
