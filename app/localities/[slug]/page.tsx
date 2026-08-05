import { notFound } from 'next/navigation';
import { siteConfig } from '@/lib/siteConfig';
import { buildMetadata, buildJsonLd } from '@/lib/seo';
import { localities } from '@/lib/localities';

interface Params {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return localities.map((locality) => ({ slug: locality.slug }));
}

export function generateMetadata({ params }: Params) {
  const locality = localities.find((item) => item.slug === params.slug);

  if (!locality) {
    return {
      title: 'Locality not found'
    };
  }

  return buildMetadata({
    title: locality.seoTitle,
    description: locality.seoDescription,
    pathname: `/localities/${locality.slug}`,
    keywords: ['builder floors Faridabad', `builder floors ${locality.name}`]
  });
}

export default function LocalityDetailPage({ params }: Params) {
  const locality = localities.find((item) => item.slug === params.slug);

  if (!locality) {
    notFound();
  }

  const jsonLd = buildJsonLd(`/localities/${locality.slug}`);

  return (
    <section className="container py-16">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="max-w-4xl space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">{locality.name} Builder Floors</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Builder floors in {locality.name}, Faridabad
        </h1>
        <p className="text-lg leading-8 text-slate-700">{locality.description}</p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 rounded-[32px] border border-slate-200 bg-white p-10 shadow-soft">
          <h2 className="text-3xl font-semibold text-slate-950">What makes {locality.name} builder floors attractive?</h2>
          <p className="text-slate-600 leading-7">
            {locality.name} is one of Faridabad’s sought-after locations for builder floors. Buyers benefit from local amenities, strong neighbourhood appeal, and easy connections to the rest of Faridabad.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {locality.highlights.map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="font-semibold text-slate-950">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="rounded-[32px] border border-slate-200 bg-slate-50 p-10">
          <h3 className="text-2xl font-semibold text-slate-950">Explore local builder floor options</h3>
          <p className="mt-4 text-slate-600 leading-7">Get access to builder floors in {locality.name} with local property verification, price guidance, and fast responses from our team.</p>
          <div className="mt-8 space-y-4 text-sm text-slate-700">
            <p>• Experienced advisors for {locality.name}</p>
            <p>• Comprehensive neighbourhood insights</p>
            <p>• Support for buyers and sellers</p>
          </div>
          <div className="mt-8 flex gap-3">
            <a href={`tel:${siteConfig.telephone}`} className="inline-flex rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900">Call</a>
            <a href={`https://wa.me/${siteConfig.telephone.replace('+', '').replace(/\D/g, '')}?text=${encodeURIComponent(`Hi, I am interested in builder floors in ${locality.name}. Please connect me with a local expert.`)}`} className="inline-flex rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white">Text</a>
          </div>
        </aside>
      </div>

      <div className="mt-20 rounded-[32px] border border-slate-200 bg-slate-50 p-10">
        <h2 className="text-3xl font-semibold text-slate-950">Find your builder floor in nearby Faridabad sectors</h2>
        <p className="mt-4 text-slate-600 leading-7">
          We also support searches across nearby areas such as Sector 15, Sector 14, Sector 21, Neharpar, and Greater Faridabad. Our local listings are optimized to help you find the right property quickly.
        </p>
      </div>
    </section>
  );
}
