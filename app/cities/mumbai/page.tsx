import Link from 'next/link';
import { buildMetadata, buildJsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Mumbai Builder Floors | Luxury Living',
  description: 'Discover luxury builder floor and penthouse projects in Mumbai with premium neighbourhoods and city-edge access.',
  pathname: '/cities/mumbai',
  keywords: ['Mumbai builder floors', 'Mumbai luxury floors', 'builder floors Mumbai']
});

const jsonLd = buildJsonLd('/cities/mumbai');

export default function MumbaiPage() {
  return (
    <section className="container py-20">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Mumbai</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Luxury builder floors in Mumbai</h1>
        <p className="text-lg leading-8 text-slate-600">
          Explore premium builder floor and penthouse projects in Mumbai’s most desirable areas for sophisticated city living.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {[
          { title: 'Preferred zones', details: 'Bandra, Powai, Lower Parel' },
          { title: 'Average pricing', details: 'Starting from ₹4.8 Cr' },
          { title: 'Key offerings', details: 'Skyline views, luxury amenities, designer finishes' },
          { title: 'Buyer focus', details: 'Executives, investors, premium families' }
        ].map((item) => (
          <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{item.title}</p>
            <p className="mt-4 text-lg font-semibold text-slate-950">{item.details}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-[32px] border border-slate-200 bg-slate-50 p-10 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-blue-600">Looking for premium space?</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950">Talk to our Mumbai advisors</h2>
        <Link href="/contact" className="mt-8 inline-flex rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
