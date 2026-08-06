import Link from 'next/link';
import { buildMetadata, buildJsonLd } from '@/lib/seo';
import { siteConfig } from '@/lib/siteConfig';

export const metadata = buildMetadata({
  title: 'Cities | Builder Flooors Across India',
  description: 'Explore premium builder floor projects in Gurgaon, Faridabad, Mumbai, and Noida with local market guidance and elite property support.',
  pathname: '/cities',
  keywords: ['builder floors cities', 'Gurgaon builder floors', 'Faridabad builder floors', 'Mumbai builder floors', 'Noida builder floors']
});

const jsonLd = buildJsonLd('/cities');

const cities = [
  {
    label: 'Gurgaon',
    href: '/cities/gurgaon',
    description: 'Premium builder floors in Gurgaon with corporate connectivity and luxury communities.',
    tags: ['Golf Course Road', 'Sohna Road', 'Sushant Lok']
  },
  {
    label: 'Faridabad',
    href: '/cities/faridabad',
    description: 'Trusted Faridabad builder floor projects in Sector 15, Sector 21, and Neharpar.',
    tags: ['Sector 15', 'Sector 21', 'Neharpar']
  },
  {
    label: 'Mumbai',
    href: '/cities/mumbai',
    description: 'Luxury builder floor and penthouse projects in Mumbai’s most sought-after neighbourhoods.',
    tags: ['Bandra', 'Powai', 'Lower Parel']
  },
  {
    label: 'Noida',
    href: '/cities/noida',
    description: 'Modern Noida builder floors near tech corridors, premium schools, and lifestyle hubs.',
    tags: ['Sector 150', 'Noida Extension', 'Sector 128']
  }
];

export default function CitiesPage() {
  return (
    <section className="container py-20">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">City Projects</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Explore metro-city builder floors</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Discover curated builder floor opportunities in Gurgaon, Faridabad, Mumbai, and Noida with local insights for each market.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {cities.map((city) => (
          <Link key={city.label} href={city.href} className="group rounded-[28px] border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-2xl font-semibold text-slate-950">{city.label}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{city.description}</p>
              </div>
              <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-700 transition group-hover:border-blue-400 group-hover:bg-blue-50">View details</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-500">
              {city.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-slate-100 px-3 py-2">{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
