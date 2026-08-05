import Link from 'next/link';
import { buildMetadata, buildJsonLd } from '@/lib/seo';
import { localities } from '@/lib/localities';

export const metadata = buildMetadata({
  title: 'Faridabad Localities | Sector 15, Sector 14, Sector 21, Neharpar',
  description: 'Explore Faridabad localities with builder floors in Sector 15, Sector 14, Sector 21, Neharpar, and Greater Faridabad. Find the right area for your next property.',
  pathname: '/localities',
  keywords: ['localities Faridabad', 'Sector 15 builder floors', 'Neharpar builder floors']
});

const jsonLd = buildJsonLd('/localities');

export default function LocalitiesPage() {
  return (
    <section className="container py-16">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="max-w-3xl space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Faridabad Localities</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Discover top builder floor neighbourhoods in Faridabad
        </h1>
        <p className="text-lg leading-8 text-slate-700">
          Explore our selected localities for builder floors in Faridabad, including Sector 15, Sector 14, Sector 21, Neharpar and Greater Faridabad.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {localities.map((locality) => (
          <Link key={locality.slug} href={`/localities/${locality.slug}`} className="card group">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">{locality.name}</p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-950 group-hover:text-blue-600">Explore builder floors</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">{locality.description}</p>
            <div className="mt-6 flex items-center text-sm font-semibold text-blue-600">View details</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
