import Link from 'next/link';
import { buildMetadata, buildJsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Projects | Builder Floors Portfolio',
  description: 'Browse ongoing and completed builder floor projects across Gurgaon, Faridabad, Mumbai, and Noida.',
  pathname: '/projects',
  keywords: ['builder floor projects', 'ongoing projects', 'completed projects', 'real estate portfolio']
});

const jsonLd = buildJsonLd('/projects');

export default function ProjectsPage() {
  return (
    <section className="container py-20">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Projects</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Ongoing and completed builder floor projects</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          View the latest project delivery status and explore both active and finished builder floors across metro cities.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <Link href="/projects/ongoing" className="rounded-[28px] border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Ongoing</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">Active construction projects</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">Explore ongoing builder floors with live updates, launch-ready designs, and latest city developments.</p>
        </Link>
        <Link href="/projects/completed" className="rounded-[28px] border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Completed</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">Delivered and occupied projects</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">See completed builder floor projects, handover-ready homes, and successful buyer stories.</p>
        </Link>
      </div>
    </section>
  );
}
