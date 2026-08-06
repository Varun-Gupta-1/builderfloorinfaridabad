import Link from 'next/link';
import { buildMetadata, buildJsonLd } from '@/lib/seo';
import { siteConfig } from '@/lib/siteConfig';
import { localities } from '@/lib/localities';
import LocalityCard from '@/components/LocalityCard';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import CitiesTabs from '@/components/CitiesTabs';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
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
    <main>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <Hero />

      <section id="projects" className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Projects</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Explore our premier builder floor offerings.</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            From custom builder floors to luxury penthouses and smart homes, discover properties crafted for metro-city lifestyles.
          </p>
        </div>
      </section>

      <ServicesGrid />
      <CitiesTabs />

      <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-10 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Localities</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">Faridabad builder floors by neighbourhood</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Browse trusted builder floors in the top Faridabad sectors with local expertise and curated listings.
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {localities.map((locality) => (
                  <LocalityCard key={locality.slug} locality={locality} />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Why trust us</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950">Local builder floor expertise with premium delivery.</h3>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
                <li className="rounded-3xl border border-slate-200 bg-slate-50 p-4">Verified builder floor listings across Sector 15, Sector 14, Sector 21, Neharpar, and Greater Faridabad.</li>
                <li className="rounded-3xl border border-slate-200 bg-slate-50 p-4">Fast response and concierge support for buyers, sellers, and investors.</li>
                <li className="rounded-3xl border border-slate-200 bg-slate-50 p-4">Transparent pricing, legal assistance, and premium handover support.</li>
              </ul>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-gradient-to-r from-white to-slate-50 p-10 text-center shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-950">Looking for a builder floor in Faridabad?</h3>
              <p className="mt-4 text-slate-600">Reach out for a personalized project shortlist, site visit planning, and expert market guidance.</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a href={`tel:${siteConfig.telephone}`} className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                  Call
                </a>
                <a href={`https://wa.me/${siteConfig.telephone.replace('+', '').replace(/\D/g, '')}?text=${encodeURIComponent('Hi, I am interested in builder floors in Faridabad. Please share available options and next steps.')}`} className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                  WhatsApp
                </a>
                <Link href="/cities" className="inline-flex items-center justify-center rounded-full border border-blue-600 bg-blue-50 px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-100">
                  Explore cities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />
      <WhatsAppButton />
    </main>
  );
}
