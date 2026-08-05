export default function ContactForm() {
  return (
    <form className="card grid gap-5" action="#">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-800">
          Your Name
        </label>
        <input id="name" name="name" type="text" placeholder="Enter your name" className="input-style" />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-800">
          Email address
        </label>
        <input id="email" name="email" type="email" placeholder="you@example.com" className="input-style" />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-800">
          Message
        </label>
        <textarea id="message" name="message" rows={5} placeholder="Tell us what you need" className="input-style resize-none" />
      </div>
      <button type="submit" className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
        Send Inquiry
      </button>
    </form>
  );
}
