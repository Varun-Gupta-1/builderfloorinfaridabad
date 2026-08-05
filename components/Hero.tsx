import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

export default function Hero() {
  return (
    <header className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Faridabad Builder Floors</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Builder Floors in Faridabad</h1>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        Find verified builder floors in Faridabad. Browse listings in Sector 15, Sector 14, Sector 21, Neharpar, Sector 37 and Greater Faridabad — get local property guidance, fast responses, and personalized matches.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link href="/builder-floors-faridabad" className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
          View Properties
        </Link>
        <a href={`tel:${siteConfig.telephone}`} className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-slate-400">
          Call
        </a>
        <a
          href={`https://wa.me/${siteConfig.telephone.replace('+', '').replace(/\D/g, '')}?text=${encodeURIComponent(
            'Hi, I am interested in builder floors in Faridabad. Please share available options.'
          )}`}
          className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-slate-400"
        >
          Text
        </a>
      </div>

      <ul className="mt-6 flex flex-col gap-2 text-sm text-slate-600 sm:flex-row sm:items-center sm:gap-6">
        <li>• Local Faridabad property guidance</li>
        <li>• Fast response for enquiries</li>
        <li>• Verified listings & clear paperwork</li>
      </ul>
    </header>
  );
}
