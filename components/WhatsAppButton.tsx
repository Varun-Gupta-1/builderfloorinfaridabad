import { siteConfig } from '@/lib/siteConfig';

export default function WhatsAppButton({ phone }: { phone?: string }) {
  const tel = (phone ?? siteConfig.telephone).replace('+', '').replace(/\D/g, '');
  const message = encodeURIComponent('Hi, I am interested in builder floors in Faridabad. Please share available options.');
  return (
    <a
      href={`https://wa.me/${tel}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp Builder Floor Enquiry"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-700"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.11.55 4.086 1.598 5.86L0 24l6.36-1.66A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.15-3.48-8.52z" fill="#25D366"/>
        <path d="M17.6 14.2c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.78.96-.96 1.15-.18.2-.36.22-.66.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.18.05-.35-.02-.5-.07-.15-.67-1.62-.92-2.21-.24-.58-.48-.5-.67-.51-.18-.01-.39-.01-.6-.01-.2 0-.5.07-.76.35-.27.27-1 1-1 2.5 0 1.5 1.02 2.95 1.16 3.15.14.2 2.01 3.07 4.87 4.3 2.26 1 2.26.67 2.67.62.41-.05 1.33-.54 1.52-1.06.2-.52.2-.97.14-1.06-.07-.09-.27-.15-.57-.3z" fill="#fff"/>
      </svg>
      WhatsApp
    </a>
  );
}
