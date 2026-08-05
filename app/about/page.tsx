import { buildMetadata, buildJsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'About Builder Floor in Faridabad | Local Real Estate Experts',
  description: 'Learn about our Faridabad-based builder floor advisors, local market experience, and commitment to quality service for buyers and sellers.',
  pathname: '/about',
  keywords: ['about Faridabad builder floor', 'builder floors Faridabad team', 'Faridabad real estate experts']
});

const jsonLd = buildJsonLd('/about');

export default function AboutPage() {
  return (
    <section className="container py-16">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="max-w-4xl space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">About Us</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Your Faridabad builder floor specialists</h1>
        <p className="text-lg leading-8 text-slate-700">
          We are a dedicated real estate team serving buyers and sellers across Faridabad with trusted builder floor guidance, neighbourhood expertise, and local market intelligence.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 rounded-[32px] border border-slate-200 bg-white p-10 shadow-soft">
          <h2 className="text-3xl font-semibold text-slate-950">Local Focus, Proven Results</h2>
          <p className="text-slate-600 leading-7">
            Our team works exclusively with builder floor listings in Faridabad, helping clients evaluate properties in Sector 15, Sector 14, Sector 21, Neharpar, and Greater Faridabad.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-950">Buyer support</h3>
              <p className="mt-3 text-sm text-slate-600">We guide buyers through site visits, pricing, and closing paperwork.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-950">Seller advisory</h3>
              <p className="mt-3 text-sm text-slate-600">Our seller services include property valuation and listing exposure.</p>
            </div>
          </div>
        </div>
        <aside className="rounded-[32px] border border-slate-200 bg-slate-50 p-10">
          <h3 className="text-2xl font-semibold text-slate-950">Faridabad trust and transparency</h3>
          <p className="mt-4 text-slate-600 leading-7">
            We maintain transparent communication, fast local responses, and a focus on high-quality builder floor options in Faridabad.
          </p>
          <div className="mt-8 space-y-4 text-sm text-slate-700">
            <p>• Local market expertise for Faridabad sectors.</p>
            <p>• Trusted property recommendations for buyers and sellers.</p>
            <p>• Proven process for negotiation and closing.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
