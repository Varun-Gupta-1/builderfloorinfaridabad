'use client';

import { useEffect, useState } from 'react';
import LazyImage from '@/components/LazyImage';
import { imageAltTemplates } from '@/lib/imageAlts';

const testimonials = [
  {
    name: 'Aisha Verma',
    role: 'Home Buyer, Sector 15',
    project: '4 BHK Builder Floor',
    location: 'Faridabad',
    rating: 5,
    quote: 'The team delivered a luxury builder floor with every detail handled professionally and a seamless handover experience.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80'
  },
  {
    name: 'Rohit Sharma',
    role: 'Investor, Golf Course Road',
    project: 'Premium Builder Floor',
    location: 'Gurgaon',
    rating: 5,
    quote: 'Strong on-market insight and post-sales support made this purchase decision easy and confident.',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80'
  },
  {
    name: 'Neha Jain',
    role: 'Buyer, Powai',
    project: 'Luxury Penthouse',
    location: 'Mumbai',
    rating: 5,
    quote: 'From interior design consultations to final delivery, the process was smooth and transparent.',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&facepad=3&w=256&h=256&q=80'
  }
];

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[active];

  return (
    <section id="testimonials" className="container py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Client Stories</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Trusted by buyers across our service cities.
        </h2>
        <p className="mt-4 text-base leading-8 text-slate-600">
          Real project feedback, five-star service, and video-first testimonials from satisfied clients.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_0.7fr]">
        <div className="space-y-6 rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
          <div className="flex items-center gap-4">
            <LazyImage
            src={`${testimonial.photo}`}
            webpSrc={`${testimonial.photo}&fm=webp`}
            avifSrc={`${testimonial.photo}&fm=avif`}
            alt={imageAltTemplates.testimonialPhoto(testimonial.name, testimonial.project, testimonial.location)}
            className="h-20 w-20 rounded-3xl object-cover"
            width={80}
            height={80}
          />
            <div>
              <p className="text-lg font-semibold text-slate-950">{testimonial.name}</p>
              <p className="text-sm text-slate-600">{testimonial.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-amber-400">
            {Array.from({ length: testimonial.rating }).map((_, index) => (
              <span key={index} aria-hidden="true">★</span>
            ))}
            <span className="text-sm text-slate-500">{testimonial.rating}.0 Rating</span>
          </div>
          <p className="text-xl leading-9 text-slate-950">“{testimonial.quote}”</p>
          <div className="rounded-3xl bg-slate-50 p-5 text-sm text-slate-600">
            <p className="font-semibold text-slate-950">Project details</p>
            <p className="mt-2">{testimonial.project} in {testimonial.location}</p>
          </div>
          <button className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
              ▶
            </span>
            Watch video testimonial
          </button>
        </div>

        <div className="space-y-4 rounded-[32px] border border-slate-200 bg-slate-950 p-8 text-white shadow-xl">
          <div className="rounded-[28px] bg-white/10 p-6 text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-200">Featured review</p>
            <p className="mt-4 text-2xl font-semibold">“Exceptional service from search to possession.”</p>
          </div>
          <div className="space-y-3">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                onClick={() => setActive(index)}
                className={`flex w-full items-center justify-between rounded-3xl border px-5 py-4 text-left transition ${
                  index === active
                    ? 'border-blue-400 bg-blue-500/10 text-white'
                    : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10'
                }`}
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-slate-300">{item.location}</p>
                </div>
                <span className="text-sm text-slate-300">View</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
