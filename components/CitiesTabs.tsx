'use client';

import { useState } from 'react';

const cities = [
  {
    key: 'gurgaon',
    label: 'Gurgaon',
    price: '₹2.3 Cr+',
    localities: ['Golf Course Road', 'Sohna Road', 'Sushant Lok'],
    points: ['Corporate hub connectivity', 'Luxury gated communities', 'Prime school catchments']
  },
  {
    key: 'faridabad',
    label: 'Faridabad',
    price: '₹1.5 Cr+',
    localities: ['Sector 15', 'Sector 21', 'Neharpar'],
    points: ['Trusted local builders', 'Value-driven neighborhoods', 'Strong resale demand']
  },
  {
    key: 'mumbai',
    label: 'Mumbai',
    price: '₹4.8 Cr+',
    localities: ['Bandra', 'Powai', 'Lower Parel'],
    points: ['Iconic skyline views', 'Premium high-rise living', 'Seamless city access']
  },
  {
    key: 'noida',
    label: 'Noida',
    price: '₹2.1 Cr+',
    localities: ['Sector 150', 'Noida Extension', 'Sector 128'],
    points: ['Planned infrastructure', 'Tech campus proximity', 'Modern residential layouts']
  }
];

export default function CitiesTabs() {
  const [active, setActive] = useState('gurgaon');
  const current = cities.find((city) => city.key === active) ?? cities[0];

  return (
    <section id="cities" className="container py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Metro Cities</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Projects across India’s fastest-growing metro markets.
        </h2>
        <p className="mt-4 text-base leading-8 text-slate-600">
          Explore localized builder floor projects in Gurgaon, Faridabad, Mumbai, and Noida with exclusive market insights.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap gap-3">
            {cities.map((city) => (
              <button
                key={city.key}
                onClick={() => setActive(city.key)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  active === city.key
                    ? 'border-blue-600 bg-blue-600 text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {city.label}
              </button>
            ))}
          </div>

          <div className="rounded-[28px] bg-slate-950 px-6 py-8 text-white shadow-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{current.label} Highlights</p>
            <h3 className="mt-4 text-3xl font-semibold">Average project budget</h3>
            <p className="mt-2 text-4xl font-semibold text-white">{current.price}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/10 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-300">Localities</p>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-100">
                  {current.localities.map((locality) => (
                    <li key={locality}>• {locality}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-white/10 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-300">Why choose this city</p>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-100">
                  {current.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),transparent_40%)]" />
          <div className="relative grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Project showcase</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950">{current.label} premium floor locations</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Well-planned properties with strong connectivity, luxury amenities, and trusted local support.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-600">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-semibold text-slate-950">Project type</p>
                  <p className="mt-2">Premium builder floors tailored to urban buyers.</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-semibold text-slate-950">Market edge</p>
                  <p className="mt-2">Focused delivery, transparency, and buyer-first pricing.</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-[28px] bg-slate-900 p-6 text-white">
              <div className="absolute inset-x-6 top-6 h-[180px] rounded-[28px] bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent" />
              <div className="relative h-full">
                <div className="mb-6 flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="h-3.5 w-3.5 rounded-full bg-emerald-400" />
                  <p className="text-sm text-slate-100">Interactive project map</p>
                </div>
                <div className="relative h-[340px] overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/90 p-5">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-40" />
                  <div className="relative h-full">
                    <div className="absolute left-6 top-10 flex items-center gap-2 rounded-3xl bg-white/10 px-3 py-2 text-xs text-white backdrop-blur-sm">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      Prime launch zone
                    </div>
                    <div className="absolute right-6 top-28 flex items-center gap-2 rounded-3xl bg-white/10 px-3 py-2 text-xs text-white backdrop-blur-sm">
                      <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                      High-value corridor
                    </div>
                    <div className="absolute left-10 bottom-16 flex items-center gap-2 rounded-3xl bg-white/10 px-3 py-2 text-xs text-white backdrop-blur-sm">
                      <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
                      Preferred neighbourhood
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
