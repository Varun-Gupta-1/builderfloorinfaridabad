import { localities } from '@/lib/localities';

export default function ContactForm() {
  return (
    <form className="card grid gap-4" action="/api/enquiry" method="post">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-800">Your Name</label>
        <input id="name" name="name" type="text" placeholder="Enter your name" required className="input-style" />
      </div>
      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-800">Phone</label>
        <input id="phone" name="phone" type="tel" placeholder="Mobile number" required className="input-style" />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-800">Email address</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" className="input-style" />
      </div>
      <div>
        <label htmlFor="locality" className="mb-2 block text-sm font-medium text-slate-800">Preferred locality</label>
        <select id="locality" name="locality" className="input-style">
          <option value="">Any</option>
          {localities.map((l) => (
            <option key={l.slug} value={l.slug}>{l.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-800">Message</label>
        <textarea id="message" name="message" rows={4} placeholder="Briefly describe what you need" className="input-style resize-none" />
      </div>
      <button type="submit" className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Send Enquiry</button>
    </form>
  );
}
