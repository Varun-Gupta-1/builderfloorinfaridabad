import Link from 'next/link';
import { buildMetadata, buildJsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Builder Floors in Gurgaon - Premium Independent Floors | Metro Floors HQ',
  description:
    'Explore luxury independent floors in Gurgaon with ready to move 3BHK and 4BHK builder floors, premium residential living in Golf Course Road, Sohna Road and DLF Phases.',
  pathname: '/cities/gurgaon',
  keywords: ['builder floor in Gurgaon', 'luxury independent floors Gurgaon', 'premium residential Gurgaon']
});

const jsonLd = buildJsonLd('/cities/gurgaon');

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Best sectors for builder floors in Gurgaon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best sectors for builder floors in Gurgaon are often Golf Course Road, DLF Phases, Sohna Road and New Gurgaon, where luxury residential projects, gated communities and premium amenities combine with strong resale value.'
      }
    },
    {
      '@type': 'Question',
      name: 'Average price of 3BHK builder floor in Gurgaon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The average price of a 3BHK builder floor in Gurgaon starts around ₹2.3 Cr and varies by neighbourhood, finishing level and proximity to Golf Course Road or the metro.'
      }
    },
    {
      '@type': 'Question',
      name: 'Builder floor vs apartment in Gurgaon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Builder floors in Gurgaon offer more space, private access, and independent villa-like living compared to apartments, while apartments may have lower maintenance obligations and more shared amenities.'
      }
    },
    {
      '@type': 'Question',
      name: 'Which is better: Golf Course Road or Sohna Road?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Golf Course Road is best for ultra-premium luxury floors and premium property investment, while Sohna Road offers strong value, modern gated communities and excellent connectivity for families and professionals.'
      }
    },
    {
      '@type': 'Question',
      name: 'Ready to move builder floors in Gurgaon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, ready to move builder floors in Gurgaon are available across DLF Phases, Golf Course Road and Sohna Road, offering finished interiors, parking, and quick possession for buyers who want immediate occupancy.'
      }
    },
    {
      '@type': 'Question',
      name: 'Builder floors with parking and lift in Gurgaon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many Gurgaon builder floors now include parking and lift access, especially in premium sectors like Sector 67 Gurgaon and Golf Course Road, making them convenient for modern family living.'
      }
    },
    {
      '@type': 'Question',
      name: 'Investment returns on Gurgaon builder floors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gurgaon builder floors have shown good investment returns due to the city’s IT hub status, connectivity, and strong demand for premium independent floors in gated communities and township-style developments.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are builder floors in Gurgaon a good investment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Builder floors in Gurgaon are a good investment for buyers seeking high-end homes with private access, strong location advantages near the airport and metro, and premium residential appeal.'
      }
    }
  ]
};

const locationDetails = [
  {
    title: 'Golf Course Road & Extension',
    text: 'Golf Course Road is the benchmark for luxury floors, with premium residential developments, five-star hospitality and elite shopping. A builder floor in Golf Course Road Gurgaon is ideal for investors seeking ultra-premium property and refined living near the city’s top corporate hubs.'
  },
  {
    title: 'DLF Phase 1, 2, 3, 4, 5',
    text: 'DLF Phases deliver mature infrastructure and premium gated communities. A builder floor in DLF Phase 5 Gurgaon or the earlier phases blends quiet streets with easy access to golf courses, schools and high-end retail, making it a top choice for luxury residential living.'
  },
  {
    title: 'Sohna Road Corridor',
    text: 'The Sohna Road corridor is known for modern amenity-rich projects and strong value. A builder floor in Sohna Road Gurgaon offers good connectivity to the airport and metro, plus flexible 3BHK 4BHK plans in gated community complexes with next-generation facilities.'
  },
  {
    title: 'Sector 56, 57, 58, 67, 70, 82',
    text: 'Sector 67 Gurgaon is a standout for luxury floors, while Sectors 56, 57, 58, 70 and 82 offer premium residential pockets with quality construction and easy access to expressways. These sectors are popular for builder floors in Sector 67 Gurgaon and nearby high-end homes.'
  },
  {
    title: 'New Gurgaon (Sectors 80-89)',
    text: 'New Gurgaon is a strong investment zone with emerging township-style development and modern community living. A builder floor in New Gurgaon provides contemporary design, generous layouts and an opportunity to enter the market before wider price appreciation.'
  },
  {
    title: 'Near Cyber City & MG Road',
    text: 'Near Cyber City and MG Road, builder floors combine premium location with corporate convenience. These areas are suited for professionals seeking luxury residential options close to Gurgaon’s IT hub and lifestyle amenities.'
  }
];

const typeCards = [
  {
    title: '3 BHK Builder Floors',
    description: 'Spacious 3BHK builder floors typically range from 1800 to 2400 sq ft, with prices starting around ₹2.3 Cr. Popular sectors include Sector 67 Gurgaon, Sohna Road and DLF Phase 3 for their strong township-style amenities.'
  },
  {
    title: '4 BHK Luxury Floors',
    description: '4BHK luxury floors feature premium fittings, larger terraces and vaulted interiors. These are most often found in Golf Course Road, DLF Phases and high-end gated society projects with concierge services and private parking.'
  },
  {
    title: 'Penthouses with Terrace',
    description: 'Penthouses offer rooftop terraces, panoramic views and exclusive design. These high-end homes are perfect for buyers seeking a premium property with modern amenities and an elevated Gurgaon lifestyle.'
  },
  {
    title: 'Ready to Move vs Under Construction',
    description: 'Ready to move builder floors provide immediate occupancy, while under construction options can offer price benefits and customization. Choose based on timing, budget and whether you want instant possession or a tailored finish.'
  }
];

const budgetOptions = [
  {
    range: '₹80L - ₹1.5Cr',
    details: 'Suitable for projects in Sectors 81-89, offering practical luxury and access to New Gurgaon growth corridors.'
  },
  {
    range: '₹1.5Cr - ₹3Cr',
    details: 'Best for Sohna Road and Sectors 56-58, combining strong connectivity with modern gated society living.'
  },
  {
    range: '₹3Cr+',
    details: 'Ideal for Golf Course Road and DLF Phases, where premium residential appeal and investment returns are highest.'
  }
];

export default function GurgaonPage() {
  return (
    <main className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 space-y-16">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>

      <section className="rounded-[32px] bg-gradient-to-r from-slate-950 via-slate-900 to-slate-700 px-8 py-16 text-white shadow-2xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Gurgaon HQ</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Builder Floors in Gurgaon - Premium Independent Floors | Metro Floors HQ
            </h1>
            <p className="max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
              Luxury 3BHK &amp; 4BHK Builder Floors in Golf Course Road, Sohna Road, DLF Phases &amp; New Gurgaon.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link href="/" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                Back to Home
              </Link>
              <Link href="/cities/faridabad" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                Explore Faridabad
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[28px] bg-white/5 p-4">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80"
              alt="Luxury builder floor in Gurgaon Golf Course Road with premium residential view"
              className="h-full w-full rounded-[24px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          <p className="text-lg leading-8 text-slate-700">
            A builder floor in Gurgaon is the premium independent living choice for buyers who want privacy, space and luxury residential appeal. At Metro Floors HQ we specialise in helping clients find ready to move 3BHK 4BHK builder floors across Golf Course Road, Sohna Road and DLF Phases, with strong emphasis on modern amenities, gated communities and a high-quality finish. Our advisory is built around real estate investment insight, city connectivity, township-style convenience and the practical benefits of living in premium sectors. Each property we recommend is evaluated for layout, parking, lift access, green surroundings and lifestyle appeal. Whether you want a luxury independent floor near Cyber City, a builder floor in Sector 67 Gurgaon with premium security, or a top-tier home in New Gurgaon, we make the search feel effortless and trustworthy.
          </p>
          <p className="text-lg leading-8 text-slate-700">
            Gurgaon’s premium property market includes independent villa-like builder floors, high-end homes and stylish residential spaces that are designed for families and professionals. We help buyers compare sectors, assess investment opportunity and understand the difference between ready to move homes and under construction projects. Our HQ location means we have direct access to the latest Gurgaon developments, strong market intelligence, and a first-hand view of how each property performs in this fast-paced real estate ecosystem.
          </p>
        </div>
        <div className="space-y-8 rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <div>
            <h2 className="text-2xl font-semibold text-slate-950">Gurgaon HQ Advantage</h2>
            <p className="mt-4 text-slate-700">
              As the Metro Floors headquarters, we focus on Gurgaon market trends, builder credibility and premium residential demand across Golf Course Road and Sohna Road.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              'Private access and independent villa-style privacy',
              'Gated society living with modern amenities and security',
              'Strong connectivity to airport, metro and IT hubs',
              'Expert guidance for investment returns and resale value'
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-white p-4">
                <p className="text-sm text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Premium Locations in Gurgaon</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">Premium Locations in Gurgaon</h2>
        </div>
        <div className="grid gap-10">
          {locationDetails.map((location) => (
            <div key={location.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-950">{location.title}</h3>
              <p className="mt-4 text-slate-700 leading-8">{location.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[32px] border border-slate-200 bg-slate-50 p-10 shadow-sm">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Why Gurgaon is India's Premium Real Estate Hub</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">Why Gurgaon is India&apos;s Premium Real Estate Hub</h2>
        </div>
        <p className="mt-6 text-base leading-8 text-slate-700">
          Gurgaon has become one of India’s top destinations for investment returns because it combines a powerful IT hub, excellent connectivity and world-class lifestyle amenities. The city is well linked to the airport and metro network, making it ideal for professionals and families. Premium independent floors in Gurgaon benefit from proximity to office districts, corporate headquarters and entertainment destinations. With strong demand for luxury residential properties and ongoing infrastructure upgrades, the market remains attractive for buyers seeking both rental yield and long-term capital appreciation.
        </p>
      </section>

      <section className="space-y-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Types of Builder Floors Available</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">Types of Builder Floors Available</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {typeCards.map((card) => (
            <div key={card.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">{card.title}</h3>
              <p className="mt-4 text-slate-700 leading-7">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Builder Floors by Budget</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">Builder Floors by Budget</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {budgetOptions.map((budget) => (
            <div key={budget.range} className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 text-slate-700 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">{budget.range}</h3>
              <p className="mt-4 leading-7">{budget.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8 rounded-[32px] border border-slate-200 bg-slate-50 p-10 shadow-sm">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Testimonials</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">Gurgaon Client Stories</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            {
              name: 'Amit Sharma',
              sector: 'Golf Course Road',
              review: 'Metro Floors helped me find a luxury 4BHK builder floor in Gurgaon with premium finishes and excellent connectivity. The whole process was smooth and the team understood our need for a ready to move home.'
            },
            {
              name: 'Neha Verma',
              sector: 'DLF Phase 3',
              review: 'The Gurgaon HQ team found us the perfect builder floor in Sector 67 Gurgaon, with lift access, parking and a gated society feel. It was exactly the premium property we wanted.'
            },
            {
              name: 'Arjun Kapoor',
              sector: 'Sohna Road',
              review: 'We chose a 3BHK builder floor in Sohna Road Gurgaon for its value and modern amenities. The purchase was clear, the handover was timely, and the location is great for work and family life.'
            },
            {
              name: 'Priya Malhotra',
              sector: 'New Gurgaon',
              review: 'Metro Floors guided us to a builder floor in New Gurgaon with a strong investment story and luxury finishes. The Gurgaon HQ insight made all the difference.'
            }
          ].map((testimonial) => (
            <div key={testimonial.name} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-lg leading-8 text-slate-700">“{testimonial.review}”</p>
              <p className="mt-6 font-semibold text-slate-950">{testimonial.name}</p>
              <p className="text-sm text-slate-500">{testimonial.sector}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Visit Our Gurgaon Office</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">Visit Our Gurgaon Office</h2>
            <p className="mt-4 text-slate-700 leading-8">
              Our headquarters is in the heart of Gurgaon, where buyers can meet experts, review premium property options and tour builder floors in Sector 67 Gurgaon, Golf Course Road and beyond.
            </p>
            <div className="mt-8 space-y-4 text-slate-700">
              <p className="font-semibold text-slate-950">Metro Floors HQ</p>
              <p>Sector 45, Golf Course Road, Gurgaon 122002</p>
              <p>Phone: +91-9289322289</p>
              <p>Email: info@builderfloorinfaridabad.com</p>
            </div>
            <form className="mt-8 space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input type="text" className="mt-2 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" className="mt-2 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea className="mt-2 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900" rows={4} placeholder="Tell us about the builder floor you are looking for." />
              </div>
              <button type="button" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                Send Inquiry
              </button>
            </form>
          </div>
          <div className="overflow-hidden rounded-[28px] border border-slate-200">
            <iframe
              title="Gurgaon office location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.0868300493956!2d77.06608111503707!3d28.50323598247462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ebd2647f6d1%3A0xc0db7fa7e4d57b04!2sSector%2045%2C%20Golf%20Course%20Rd%2C%20Gurugram%2C%20Haryana%20122002!5e0!3m2!1sen!2sin!4v1700000000000"
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
