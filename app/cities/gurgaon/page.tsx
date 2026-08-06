import Link from 'next/link';
import { buildMetadata, buildJsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Gurgaon Builder Floors | Premium Projects',
  description: 'Explore premium builder floor projects in Gurgaon with connectivity, luxury finishes, and trusted local advisory.',
  pathname: '/cities/gurgaon',
  keywords: ['Gurgaon builder floors', 'Gurgaon luxury floors', 'builder floors Gurgaon']
});

const jsonLd = buildJsonLd('/cities/gurgaon');

export default function GurgaonPage() {
  return (
    <section className="container py-20">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Gurgaon</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Premium builder floors in Gurgaon</h1>
        <p className="text-lg leading-8 text-slate-600">
          Discover high-end builder floor projects in Gurgaon’s top neighbourhoods with quick access to corporate hubs, schools, and luxury amenities.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {[
          { title: 'Prime localities', details: 'Golf Course Road, Sohna Road, Sushant Lok' },
          { title: 'Average pricing', details: 'Starting from ₹2.3 Cr' },
          { title: 'Top advantages', details: 'Corporate connectivity, premium gated communities' },
          { title: 'Project style', details: 'Modern builder floors with designer finishes' }
        ].map((item) => (
          <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{item.title}</p>
            <p className="mt-4 text-lg font-semibold text-slate-950">{item.details}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-[32px] border border-slate-200 bg-slate-50 p-10 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-blue-600">Ready to explore?</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950">Talk to our Gurgaon experts</h2>
        <Link href="/contact" className="mt-8 inline-flex rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
