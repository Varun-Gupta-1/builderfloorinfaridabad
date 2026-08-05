import { buildMetadata, buildJsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Privacy Policy | Builder Floor in Faridabad',
  description: 'Read the privacy policy for Builder Floor in Faridabad and learn how we protect personal information submitted through the website.',
  pathname: '/privacy-policy',
  keywords: ['privacy policy Faridabad', 'builder floor privacy', 'real estate website privacy']
});

const jsonLd = buildJsonLd('/privacy-policy');

export default function PrivacyPolicyPage() {
  return (
    <section className="container py-16">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="max-w-4xl space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Privacy Policy</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Your data and how we use it</h1>
        <p className="text-lg leading-8 text-slate-700">
          We respect your privacy and only use the information provided through our contact form to respond to your inquiry and improve property search support.
        </p>
      </div>

      <div className="mt-10 space-y-8 rounded-[32px] border border-slate-200 bg-white p-10 shadow-soft">
        <div>
          <h2 className="text-2xl font-semibold text-slate-950">Information collection</h2>
          <p className="mt-4 text-slate-600 leading-7">
            We may collect your name, email address, and message details when you submit a contact request. This information is used only to provide follow-up support for your builder floor inquiry.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-slate-950">How we use your data</h2>
          <p className="mt-4 text-slate-600 leading-7">
            Your contact details help us share relevant Faridabad builder floor options and answer questions about local sectors like Sector 15, Sector 14, Sector 21, Neharpar, and Greater Faridabad.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-slate-950">Cookies and analytics</h2>
          <p className="mt-4 text-slate-600 leading-7">
            This website may use cookies or analytics tools to improve performance and understand visitor behavior, but no personally identifiable information is sold or shared with third parties.
          </p>
        </div>
      </div>
    </section>
  );
}
