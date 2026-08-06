import Link from 'next/link';
import { buildMetadata, buildJsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Faridabad Builder Floors | Local Expertise',
  description: 'Find trusted builder floor projects in Faridabad with neighbourhood guidance, verified listings, and fast support.',
  pathname: '/cities/faridabad',
  keywords: ['Faridabad builder floors', 'builder floors Faridabad', 'Faridabad real estate']
});

const jsonLd = buildJsonLd('/cities/faridabad');

export default function FaridabadPage() {
  return (
    <section className="container py-20">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Faridabad</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Trusted builder floors in Faridabad</h1>
        <p className="text-lg leading-8 text-slate-600">
          Explore local builder floor options in Sector 15, Sector 21, and Neharpar with on-ground expertise and verified property support.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {[
          { title: 'Top neighbourhoods', details: 'Sector 15, Sector 21, Neharpar' },
          { title: 'Average pricing', details: 'Starting from ₹1.5 Cr' },
          { title: 'Key strengths', details: 'Local trust, value-led projects, strong resale' },
          { title: 'Property type', details: 'Premium builder floors and family homes' }
        ].map((item) => (
          <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{item.title}</p>
            <p className="mt-4 text-lg font-semibold text-slate-950">{item.details}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-[32px] border border-slate-200 bg-slate-50 p-10 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-blue-600">Need local advice?</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950">Speak with Faridabad property advisors</h2>
        <Link href="/contact" className="mt-8 inline-flex rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
