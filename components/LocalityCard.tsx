import Link from 'next/link';
import type { Locality } from '@/lib/localities';

export default function LocalityCard({ locality }: { locality: Locality }) {
  return (
    <Link href={`/localities/${locality.slug}`} className="card transition hover:-translate-y-1 hover:border-slate-300">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Locality</p>
      <h3 className="mt-4 text-2xl font-semibold text-slate-950">{locality.name}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{locality.description}</p>
      <ul className="mt-5 space-y-2 text-sm text-slate-600">
        {locality.highlights.map((item) => (
          <li key={item} className="before:content-['•'] before:mr-2 before:text-blue-600">
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm font-semibold text-blue-600">Explore builder floors</p>
    </Link>
  );
}
