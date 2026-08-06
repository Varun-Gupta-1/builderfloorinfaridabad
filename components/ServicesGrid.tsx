const services = [
  {
    title: 'Custom Builder Floors',
    description: 'Tailored layouts, finishes, and floor plans designed for your lifestyle.',
    icon: '🛠️'
  },
  {
    title: 'Luxury Penthouses',
    description: 'Premium penthouse designs with panoramic views and smart amenities.',
    icon: '🏙️'
  },
  {
    title: 'Smart Homes',
    description: 'Connected homes with automation, climate control, and advanced security.',
    icon: '💡'
  },
  {
    title: 'Interior Design',
    description: 'Curated interiors that combine modern elegance with functional comfort.',
    icon: '🛋️'
  },
  {
    title: 'Legal Assistance',
    description: 'Smooth transactions with end-to-end documentation and compliance support.',
    icon: '📜'
  },
  {
    title: 'Post-Sales Support',
    description: 'Dedicated aftercare for handover, warranty, and property maintenance.',
    icon: '🤝'
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="container py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Our Services</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          End-to-end real estate services for premium properties.
        </h2>
        <p className="mt-4 text-base leading-8 text-slate-600">
          From customized builder floors to luxurious penthouses and trusted legal support, our solutions are built for metro-city buyers and investors.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 p-8 text-white shadow-xl transition-transform duration-500 hover:-translate-y-1"
          >
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-violet-500/15 blur-3xl" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white/10 text-2xl shadow-sm backdrop-blur-md">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="text-sm leading-7 text-slate-200">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
