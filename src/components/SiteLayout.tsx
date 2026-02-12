import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { WhatsAppWidget } from './WhatsAppWidget';

export function SiteLayout() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-transparent text-[var(--text-main)]">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
