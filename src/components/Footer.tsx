import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <section>
            <h2 className="font-serif text-xl text-(--accent-soft)">R.B Enterprises</h2>
            <p className="mt-3 text-sm leading-relaxed text-(--text-soft)">
              Wholesale interior hardware supply for contractors, builders, and project teams.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-(--accent-soft)">Site Links</h2>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <Link to="/about" className="text-(--text-soft) hover:text-white">
                About
              </Link>
              <Link to="/interior-designing" className="text-(--text-soft) hover:text-white">
                Services
              </Link>
              <Link to="/product" className="text-(--text-soft) hover:text-white">
                Product
              </Link>
              <Link to="/gallery" className="text-(--text-soft) hover:text-white">
                Gallery
              </Link>
              <Link to="/contact" className="text-(--text-soft) hover:text-white">
                Contact
              </Link>
            </div>
          </section>
          <section>
            <h2 className="font-serif text-xl text-(--accent-soft)">Legal</h2>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link to="/terms" className="text-(--text-soft) hover:text-(--text-main)">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-(--text-soft) hover:text-(--text-main)">
                Privacy Policy
              </Link>
              <Link to="/disclaimer" className="text-(--text-soft) hover:text-(--text-main)">
                Disclaimer
              </Link>
            </div>
          </section>
        </div>

        <p className="mt-8 border-t border-white/10 pt-6 text-xs text-(--text-soft)">
          Disclaimer: Images shown are for illustration and portfolio presentation. Availability of products and services
          may vary by project scope and stock. All trademarks and brand names belong to their respective owners.
        </p>
      </div>
    </footer>
  );
}

