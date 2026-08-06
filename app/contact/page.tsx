import { buildMetadata, buildJsonLd } from '@/lib/seo';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/lib/siteConfig';

export const metadata = buildMetadata({
  title: 'Contact Builder Floor in Faridabad | Local Real Estate Support',
  description: 'Contact our Faridabad builder floor advisors to discuss properties, schedule viewings, and get help with local market selection.',
  pathname: '/contact',
  keywords: ['contact Faridabad builder floor', 'builder floor support', 'real estate contact Faridabad']
});

const jsonLd = buildJsonLd('/contact');

export default function ContactPage() {
  return (
    <section className="container py-16">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="grid gap-10 lg:grid-cols-[0.95fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Contact</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Speak with our Faridabad builder floor advisors</h1>
          <p className="text-lg leading-8 text-slate-700">
            Fill out the form to request builder floor recommendations, local pricing support, and property viewings in Sector 15, Sector 14, Sector 21, Neharpar, and Greater Faridabad.
          </p>
          <div className="grid gap-4 rounded-[32px] border border-slate-200 bg-slate-50 p-8">
            <div>
              <p className="text-sm font-semibold text-slate-950">Phone</p>
              <p className="mt-2 text-sm text-slate-600">{siteConfig.telephone}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-950">Email</p>
              <p className="mt-2 text-sm text-slate-600">info@builderfloorinfaridabad.com</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
