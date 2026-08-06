import { buildMetadata, buildJsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Ongoing Projects | Builder Floors',
  description: 'Explore ongoing builder floor projects with live progress and upcoming launch details.',
  pathname: '/projects/ongoing',
  keywords: ['ongoing builder floors', 'active projects', 'under construction']
});

const jsonLd = buildJsonLd('/projects/ongoing');

export default function OngoingProjectsPage() {
  return (
    <section className="container py-20">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="mx-auto max-w-4xl space-y-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Ongoing Projects</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Live builder floor projects</h1>
        <p className="text-lg leading-8 text-slate-600">
          Discover active builder floor developments currently under construction across our service cities.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {[
          { title: 'Gurgaon launch', desc: 'Modern builder floors near Golf Course Road with premium amenities.' },
          { title: 'Faridabad progress', desc: 'Sector 15 builder floors in final development stages.' },
          { title: 'Mumbai development', desc: 'Luxury penthouses and floors near Powai.' },
          { title: 'Noida growth', desc: 'Smart homes in Sector 150 with planned infrastructure.' }
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
