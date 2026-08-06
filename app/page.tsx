import Link from 'next/link';
import { buildMetadata, buildJsonLd } from '@/lib/seo';
import { siteConfig } from '@/lib/siteConfig';
import { localities } from '@/lib/localities';
import LocalityCard from '@/components/LocalityCard';
import ContactForm from '@/components/ContactForm';
import Hero from '@/components/Hero';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = buildMetadata({
  title: 'Builder Floors in Faridabad | Sector 15, 21, Neharpar',
  description:
    'Explore builder floors in Faridabad with local guidance for Sector 15, Sector 14, Sector 21, Neharpar, and Greater Faridabad. Verified listings and fast responses for buyers and sellers.',
  pathname: '/',
  keywords: [
    'builder floors in Faridabad',
    'builder floor in Faridabad',
    'builder floors near me',
    'Sector 15 builder floors',
    'Sector 14 builder floors',
    'Sector 21 builder floors',
    'Neharpar builder floors',
    'Greater Faridabad builder floors'
  ]
});

const jsonLd = buildJsonLd('/');

export default function HomePage() {
  return (
    <section className="container py-16">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div>
        <Hero />
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
            <LocalityCard key={locality.slug} locality={locality} />
          ))}
        </div>
      </div>

      {/* Why Builder Floors / Why Trust Us */}
      <section className="mt-20 rounded-[28px] border border-slate-200 bg-slate-50 p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-600">Why trust us</p>
        <h2 className="mt-4 text-2xl font-semibold text-slate-950">Local experts for Faridabad builder floors</h2>
        <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
          <li>• Verified builder floor listings across Sector 15, Sector 14, Sector 21, Neharpar and Greater Faridabad.</li>
          <li>• Fast responses — call or message to get quick help.</li>
          <li>• Local market reports and negotiation support for buyers and sellers.</li>
        </ul>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-950">Verified Listings</p>
            <p className="mt-2 text-sm text-slate-600">Each property is vetted before publishing to reduce wasted visits.</p>
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-950">Dedicated Support</p>
            <p className="mt-2 text-sm text-slate-600">A single point of contact until you close the deal.</p>
          </div>
        </div>
      </section>

      <div className="mt-20">
        <h2 className="section-title">Match properties to your priorities</h2>
        <p className="mt-3 text-slate-600">Search by move-in timeline, budget, or lifestyle — find the right home for your next Faridabad move.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            { title: 'New builder floors', desc: 'Latest projects with modern finishes.' },
            { title: 'Ready-to-move floors', desc: 'Immediate possession options.' },
            { title: 'Luxury floors', desc: 'Premium layouts and high-end finishes.' },
            { title: 'Budget options', desc: 'Value-led choices for cost-conscious buyers.' },
            { title: 'Family homes', desc: 'Spacious floors near schools and parks.' },
            { title: 'Investment properties', desc: 'High ROI areas and resale-ready options.' }
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-slate-950">{s.title}</p>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h2 className="section-title">Builder floors near you in Faridabad</h2>
        <p className="mt-3 text-slate-600">Search by locality to find nearby builder floors across Faridabad.</p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3 text-sm">
          {['sector-15', 'sector-14', 'sector-21', 'neharpar', 'sector-37', 'greater-faridabad'].map((slug) => {
            const loc = localities.find((l) => l.slug === slug);
            if (!loc) return null;
            return (
              <li key={slug} className="">
                <Link href={`/localities/${loc.slug}`} className="text-blue-600 hover:underline">
                  {loc.name} builder floors
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      

      <div className="mt-20">
        <h2 className="section-title">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          <details className="rounded-lg border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer font-medium">What is the best locality for builder floors in Faridabad?</summary>
            <p className="mt-2 text-sm text-slate-600">Sector 15 and Sector 14 are popular choices for premium builder floors; Neharpar and Sector 37 are value-focused areas.</p>
          </details>
          <details className="rounded-lg border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer font-medium">Are builder floors a good investment in Faridabad?</summary>
            <p className="mt-2 text-sm text-slate-600">Well-located builder floors often have steady demand and good resale potential, especially in established sectors.</p>
          </details>
          <details className="rounded-lg border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer font-medium">Which sectors have premium builder floors?</summary>
            <p className="mt-2 text-sm text-slate-600">Sector 15, Sector 14 and Sector 21 are known for premium builder floor communities.</p>
          </details>
          <details className="rounded-lg border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer font-medium">How can I contact you for property options?</summary>
            <p className="mt-2 text-sm text-slate-600">Use the WhatsApp button, call us, or submit the enquiry form and our team will respond promptly.</p>
          </details>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="section-title">Trusted local expertise</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-semibold text-slate-950">Years of local experience</p>
            <p className="mt-2 text-sm text-slate-600">Our team has deep experience across Faridabad’s builder floor market.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-semibold text-slate-950">Transparent guidance</p>
            <p className="mt-2 text-sm text-slate-600">Clear property checks, verified documents, and negotiation support.</p>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 p-8 text-center">
        <h2 className="text-2xl font-semibold">Looking for a builder floor in Faridabad?</h2>
        <p className="mt-3 text-slate-600">Get tailored property options fast — message us on WhatsApp or use the enquiry form.</p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a href={`tel:${siteConfig.telephone}`} className="inline-flex items-center rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900">Call</a>
          <a href={`https://wa.me/${siteConfig.telephone.replace('+', '').replace(/\D/g, '')}?text=${encodeURIComponent('Hi, I am interested in builder floors in Faridabad. Please share available options and next steps.')}`} className="inline-flex items-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white">Text</a>
        </div>
      </div>

      {/* Floating WhatsApp removed — footer keeps WhatsApp link */}
    </section>
  );
}
