import Link from 'next/link';
import { buildMetadata, buildJsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Builder Floors Faridabad | Local Builder Floor Listings',
  description: 'Search builder floor options in Faridabad with local market insight, premium community guidance, and direct contact for buyers and sellers.',
  pathname: '/builder-floors-faridabad',
  keywords: ['builder floors Faridabad', 'builder floor in Faridabad', 'Faridabad builder floor listings']
});

const jsonLd = buildJsonLd('/builder-floors-faridabad');

export default function BuilderFloorsPage() {
  return (
    <section className="container py-16">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="max-w-4xl space-y-8">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Builder Floors Faridabad</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Premium builder floors in Faridabad for modern families and investors
        </h1>
        <p className="text-lg leading-8 text-slate-700">
          Find the best builder floors for sale in Faridabad with local listing expertise and personalised support. Our team guides you through high-demand sectors and trusted neighbourhoods across Faridabad.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {[
          'Sector 15 premium builder floors',
          'Sector 14 family-friendly homes',
          'Sector 21 safe residential properties',
          'Neharpar value builder floors',
          'Greater Faridabad modern layouts',
          'Near me Faridabad builder floor listings'
        ].map((feature) => (
          <div key={feature} className="card">
            <h2 className="text-xl font-semibold text-slate-950">{feature}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Discover Faridabad builder floor options designed to serve shoppers, investors and families seeking local property value.
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-6 rounded-[32px] border border-slate-200 bg-white p-10 shadow-soft">
          <h2 className="text-3xl font-semibold text-slate-950">Local advantages of builder floors in Faridabad</h2>
          <p className="text-slate-600 leading-7">
            Builder floors are a compelling choice for buyers who want a premium home with better space, privacy, and a local neighbourhood feel. In Faridabad, we focus on properties that offer strong connectivity, good schools, and reliable infrastructure.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-950">Modern floor plans</h3>
              <p className="mt-3 text-sm text-slate-600">Builder floors in Faridabad provide flexible layouts and upgraded finishes.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-950">Local resale demand</h3>
              <p className="mt-3 text-sm text-slate-600">Sought-after sectors such as Sector 15 and Sector 14 keep demand strong.</p>
            </div>
          </div>
        </div>
        <aside className="rounded-[32px] border border-slate-200 bg-slate-50 p-10">
          <h3 className="text-2xl font-semibold text-slate-950">Faridabad ready for your next move</h3>
          <p className="mt-4 text-slate-600 leading-7">
            Whether you are searching for builder floors in Sector 21 or Neharpar, our local advisors provide a reliable process from search to signing.
          </p>
          <Link href="/contact" className="mt-8 inline-flex rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
            Schedule a consultation
          </Link>
        </aside>
      </div>

      <div className="mt-20 space-y-6 rounded-[32px] border border-slate-200 bg-slate-50 p-10">
        <h2 className="text-3xl font-semibold text-slate-950">Faridabad builder floors and nearby sectors</h2>
        <p className="text-slate-600 leading-7">
          We serve buyers who want easy access to Sector 15 market, Sector 14 schools, Sector 21 residential comforts, Neharpar convenience, and Greater Faridabad growth corridors.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <h3 className="font-semibold text-slate-950">Near me options</h3>
            <p className="mt-3 text-sm text-slate-600">Search Faridabad builder floors that are close to your preferred neighbourhood, amenities and transit lines.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-950">Sector-specific expertise</h3>
            <p className="mt-3 text-sm text-slate-600">Our local knowledge ensures you get relevant listings with transparent pricing and reliable guidance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
