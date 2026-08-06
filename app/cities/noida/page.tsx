import Link from 'next/link';
import { buildMetadata, buildJsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Builder Floors in Noida | Modern Independent Floors | Metro Floors',
  description: 'Builder Floors in Noida near Sector 150, Noida Extension and Sector 128 with smart amenities, modern finishes and prices from ₹2.1 Cr to ₹3.9 Cr and more.',
  pathname: '/cities/noida',
  keywords: ['Noida builder floors', 'builder floors Noida', 'Noida real estate']
});

const jsonLd = buildJsonLd('/cities/noida');

export default function NoidaPage() {
  return (
    <section className="container py-20">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Noida</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Modern builder floors in Noida</h1>
        <p className="text-lg leading-8 text-slate-600">
          Discover planned residential projects and smart family homes in Noida with excellent connectivity and modern amenities.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {[
          { title: 'Key sectors', details: 'Sector 150, Noida Extension, Sector 128' },
          { title: 'Average pricing', details: 'Starting from ₹2.1 Cr' },
          { title: 'Local strengths', details: 'Tech corridor proximity, schools, gated communities' },
          { title: 'Project style', details: 'Smart homes with modern interiors' }
        ].map((item) => (
          <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{item.title}</p>
            <p className="mt-4 text-lg font-semibold text-slate-950">{item.details}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-[32px] border border-slate-200 bg-slate-50 p-10 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-blue-600">Ready for your next move?</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950">Connect with our Noida specialists</h2>
        <Link href="/contact" className="mt-8 inline-flex rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
