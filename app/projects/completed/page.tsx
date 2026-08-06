import { buildMetadata, buildJsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Completed Projects | Builder Floors',
  description: 'View completed builder floor projects that are ready for possession and buyer handover.',
  pathname: '/projects/completed',
  keywords: ['completed builder floors', 'delivered projects', 'possession ready']
});

const jsonLd = buildJsonLd('/projects/completed');

export default function CompletedProjectsPage() {
  return (
    <section className="container py-20">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="mx-auto max-w-4xl space-y-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Completed Projects</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Delivered builder floor projects</h1>
        <p className="text-lg leading-8 text-slate-600">
          Explore completed developments with successful handovers, investor returns, and trusted walk-throughs.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {[
          { title: 'Faridabad handover', desc: 'Trusted builder floor projects that are ready to move in.' },
          { title: 'Gurgaon delivery', desc: 'Premium floors completed with modern finishes and verified quality.' },
          { title: 'Mumbai occupancy', desc: 'Luxury floors delivered in top city neighbourhoods.' },
          { title: 'Noida success', desc: 'Smart home builder floors handed over to families.' }
        ].map((project) => (
          <div key={project.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{project.title}</p>
            <p className="mt-4 text-lg font-semibold text-slate-950">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
