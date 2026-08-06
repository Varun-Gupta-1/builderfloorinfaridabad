import Link from 'next/link';
import { buildMetadata, buildJsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Builder Floors in Faridabad | Luxury Independent Floors | Metro Floors',
  description:
    'Discover luxury builder floor in Faridabad opportunities in Greater Faridabad and Neharpar, with ready to move 3BHK 4BHK independent floors that offer premium living and easy handover.',
  pathname: '/cities/faridabad',
  keywords: ['Faridabad builder floors', 'builder floor in Faridabad', 'luxury independent floors']
});

const jsonLd = buildJsonLd('/cities/faridabad');

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Best builder floor in Faridabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best builder floor in Faridabad depends on your priorities, but many buyers prefer sectors such as 15, 21 and 85 for their balance of luxury finishes, convenience and resale potential.'
      }
    },
    {
      '@type': 'Question',
      name: 'Price range for 3BHK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 3BHK builder floor in Faridabad typically ranges from around ₹1.5 Cr to ₹3.0 Cr, depending on sector, amenities, and whether it is a ready to move luxury independent floor.'
      }
    },
    {
      '@type': 'Question',
      name: 'Which sectors are best?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Popular sectors for builder floors in Faridabad include Sector 15, Sector 21, Sector 85 and Sector 89, with each offering different strengths in lifestyle, connectivity, and premium project delivery.'
      }
    },
    {
      '@type': 'Question',
      name: 'Ready to move options?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ready to move options are available in the best Faridabad sectors, especially in established developments where the builder floor in Faridabad has completed handover and offers finished interiors and parking.'
      }
    }
  ]
};

const sectorDetails = [
  {
    sector: '85',
    text: 'Sector 85 is a popular area for a builder floor in Sector 85 Faridabad, giving buyers access to quality schools, retail and premium community planning, while still offering independent residential living with modern amenities and comfortable parking.'
  },
  {
    sector: '84',
    text: 'Sector 84 is a strong choice for a builder floor in Sector 84 Faridabad, with trusted developers, quiet streets, and a good mix of luxury independent floors that feel smart, spacious and well-connected to local conveniences.'
  },
  {
    sector: '89',
    text: 'Sector 89 is often chosen for a builder floor in Sector 89 Faridabad because it blends solid project delivery with convenient access to city resources, making it a good place for high-end independent residential living.'
  },
  {
    sector: '88',
    text: 'Sector 88 is known for a builder floor in Sector 88 Faridabad that offers a premium neighbourhood feel, well-planned amenities and practical parking, ideal for buyers looking for a luxury ready to move home.'
  },
  {
    sector: '81',
    text: 'Sector 81 is a good location for a builder floor in Sector 81 Faridabad, with a calm residential setting, modern finishes and project options that include convenient lift access and gated society living.'
  },
  {
    sector: '79',
    text: 'Sector 79 is attractive for a builder floor in Sector 79 Faridabad because it offers dependable infrastructure, a premium project mix, and independent residential options that support family lifestyles and long-term value.'
  },
  {
    sector: '17',
    text: 'Sector 17 is a convenient location for a builder floor in Sector 17 Faridabad, with affordable luxury options, local shopping, and good connectivity that makes it easy to access other parts of the city.'
  },
  {
    sector: '15',
    text: 'Sector 15 is a well-known address for a builder floor in Sector 15 Faridabad, offering local markets, schools and established civic amenities alongside attractive luxury independent floors and tasteful finishes.'
  },
  {
    sector: '21',
    text: 'Sector 21 is a practical spot for a builder floor in Sector 21 Faridabad, with family-friendly neighbourhoods, reliable developers, and project layouts that balance modern living with nearby green space and everyday convenience.'
  }
];

export default function FaridabadPage() {
  return (
    <section className="container py-20">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>

      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Faridabad City Guide</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Builder Floors in Faridabad - Luxury Independent Floors
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Finding a builder floor in Faridabad is about more than location; it is about luxury, readiness and the right layout for your family. In Greater Faridabad and Neharpar, Metro Floors helps buyers discover premium 3BHK 4BHK configurations, ready to move independent residential homes, and stylish luxury finishes. We focus on the details that matter to modern buyers: generous living space, convincing construction quality, thoughtful amenities, and a confident handover. From polished kitchens to practical parking and flexible rooms, the best builder floor in Faridabad blends elegance with everyday convenience. This page is designed to guide you through the top sectors, explain what makes a property truly premium, and help you compare ready to move options across the neighbourhoods that matter most.
          </p>
        </div>

        <section className="rounded-[32px] border border-slate-200 bg-slate-50 p-10 shadow-sm">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Popular Sectors</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">Popular Sectors for Builder Floors in Faridabad</h2>
          </div>
          <div className="mt-10 space-y-10">
            {sectorDetails.map((sector) => (
              <div key={sector.sector}>
                <h3 className="text-2xl font-semibold text-slate-950">Sector {sector.sector}</h3>
                <p className="mt-4 text-base leading-8 text-slate-600">{sector.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Why Invest in Faridabad</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">Why Invest in Faridabad</h2>
          <p className="mt-6 text-base leading-8 text-slate-700">
            Faridabad has strong appeal for buyers seeking a builder floor near Delhi Mumbai Expressway, especially when the project is park facing and located within a secure gated society. Many premium floors now offer lift and parking as standard, making them easy to live in and reassuring for families. Choosing a location near metro access adds another layer of convenience, while the expressway helps keep commutes realistic. This combination of accessibility, green surroundings and reliable services makes Faridabad a compelling choice for modern living.
          </p>
        </section>

        <section className="rounded-[32px] border border-slate-200 bg-slate-50 p-10 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Frequently Asked Questions</p>
          <div className="mt-8 space-y-8 text-base leading-8 text-slate-700">
            <div>
              <h3 className="text-xl font-semibold text-slate-950">Best builder floor in Faridabad?</h3>
              <p className="mt-3">
                The best builder floor in Faridabad is the one that balances luxury finishes, strong construction, and location. Many buyers like sectors 15, 21 and 85 for their established infrastructure and premium independent residential feel.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-950">Price range for 3BHK?</h3>
              <p className="mt-3">
                A 3BHK builder floor in Faridabad typically starts from around ₹1.5 Cr and can go up depending on the sector, amenities, and whether it is a ready to move luxury independent floor.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-950">Which sectors are best?</h3>
              <p className="mt-3">
                The best sectors depend on your priorities. Sector 15, Sector 21, Sector 85, and Sector 89 are often recommended for their balance of convenience, premium amenities and resale potential.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-950">Ready to move options?</h3>
              <p className="mt-3">
                Ready to move options are available in the leading Faridabad locations and are ideal for buyers who want a completed builder floor with finished interiors, parking, and a clear handover timeline.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700">
            Talk to Faridabad Experts
          </Link>
        </div>
      </div>
    </section>
  );
}
