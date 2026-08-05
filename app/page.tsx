import Link from 'next/link';
import { buildMetadata, buildJsonLd } from '@/lib/seo';
import { siteConfig } from '@/lib/siteConfig';
import { localities } from '@/lib/localities';

export const metadata = buildMetadata({
  title: 'Builder Floor in Faridabad | Premium Builder Floors & Local Property Advice',
  description: 'Find premium builder floors in Faridabad. Local real estate experts helping buyers and sellers in Sector 15, Sector 14, Sector 21, Neharpar and Greater Faridabad.',
  pathname: '/',
  keywords: ['builder floor in Faridabad', 'builder floors Faridabad', 'Faridabad builder floor', 'builder floors near me']
});

const jsonLd = buildJsonLd('/');

export default function HomePage() {
  return (
    <section className="container py-16">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Faridabad Builder Floors</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Builder floor experts in Faridabad for buyers, sellers, and investors
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            We connect Faridabad home buyers with trusted builder floors in Sector 15, Sector 14, Sector 21, Neharpar, and Greater Faridabad. Get local property guidance, verified listings, and fast responses from our real estate team.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/builder-floors-faridabad" className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              View Properties
            </Link>
            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-slate-400">
              WhatsApp Now
            </a>
          </div>
        </div>
        <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-600">Local Lead Generation</p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-950">Fast connection to Faridabad builder floor deals</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
            <li>• Verified builder floor listings in established neighbourhoods.</li>
            <li>• Expert local advice for Sector 15, Sector 14, Sector 21, Neharpar.</li>
            <li>• Personalized support for buyers, sellers, and investors.</li>
          </ul>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-950">Trusted Local Team</p>
              <p className="mt-2 text-sm text-slate-600">Faridabad-focused property advisors with years of experience.</p>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-950">Quality Listings</p>
              <p className="mt-2 text-sm text-slate-600">Builder floors with strong resale and neighborhood appeal.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 space-y-8">
        <div>
          <h2 className="section-title">Faridabad Builder Floors by Locality</h2>
          <p className="mt-4 max-w-3xl text-slate-600 leading-7">
            Browse curated localities to find builder floors in the best areas of Faridabad. Our local market knowledge makes it easier to compare value, location, and lifestyle for each neighbourhood.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {localities.map((locality) => (
            <article key={locality.slug} className="card">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Locality</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950">{locality.name}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{locality.description}</p>
              <div className="mt-5 space-y-2 text-sm text-slate-600">
                {locality.highlights.map((highlight) => (
                  <p key={highlight} className="before:content-['•'] before:mr-2 before:text-blue-600 inline-flex">
                    {highlight}
                  </p>
                ))}
              </div>
              <a href={`/localities/${locality.slug}`} className="mt-6 inline-flex text-sm font-semibold text-blue-600 transition hover:text-blue-700">
                Explore {locality.name}
              </a>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-24 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="card">
          <h2 className="text-3xl font-semibold text-slate-950">Why choose builder floors in Faridabad?</h2>
          <p className="mt-5 text-slate-600 leading-7">
            Builder floors in Faridabad offer a premium lifestyle with more privacy, modern finishes, and better neighbourhood control than an apartment. We specialize in properties near top localities like Sector 15, Sector 14, Sector 21, Neharpar and Greater Faridabad.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-slate-950">Prime locations</p>
              <p className="mt-3 text-sm text-slate-600">Local neighborhoods with strong connectivity and growth prospects.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-slate-950">Smart investment</p>
              <p className="mt-3 text-sm text-slate-600">Builder floors retain value well in Faridabad’s best sectors.</p>
            </div>
          </div>
        </div>
        <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-3xl font-semibold text-slate-950">Need an expert property consultation?</h2>
          <p className="mt-5 text-slate-600 leading-7">
            Contact us for a tailored builder floor search in Faridabad. We help buyers and sellers make confident decisions with local market insight and verified property options.
          </p>
          <div className="mt-8 space-y-4 text-sm text-slate-700">
            <p>• Personalized property matches in Faridabad.</p>
            <p>• Quick response for local builder floor inquiries.</p>
            <p>• Trusted agent support for negotiation and closing.</p>
          </div>
          <a href="/contact" className="mt-8 inline-flex rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
