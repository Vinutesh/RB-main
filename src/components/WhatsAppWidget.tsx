import { buildWhatsAppLink } from '../data/siteData';

export function WhatsAppWidget() {
  const link = buildWhatsAppLink('Hello R.B Enterprises, I want to enquire for hardware.');

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label="Open WhatsApp chat"
      className="fixed bottom-[calc(24px+env(safe-area-inset-bottom))] right-[calc(24px+env(safe-area-inset-right))] z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-xl text-white shadow-2xl transition hover:scale-105"
    >
      WA
    </a>
  );
}
