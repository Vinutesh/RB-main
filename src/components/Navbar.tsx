import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { label: 'About', to: '/about' },
  { label: 'Product', to: '/product' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
      <nav className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8" aria-label="Main">
        <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-xs text-[var(--accent-soft)]">
            RB
          </span>
          <div>
            <span className="block text-base font-semibold text-white">RB Enterprises</span>
            <span className="block text-xs text-[var(--text-soft)]">R.B Interiors</span>
          </div>
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border border-white/25 text-white lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="text-xl">{open ? 'X' : '☰'}</span>
        </button>

        <div className="hidden items-center justify-center lg:flex">
          <ul className="flex items-center gap-2">
            {links.slice(0, 1).map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium transition ${
                      isActive ? 'text-white' : 'text-[var(--text-soft)] hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="relative">
              <button
                type="button"
                className="inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium text-[var(--text-soft)] transition hover:text-white"
                onClick={() => setServicesOpen((prev) => !prev)}
              >
                Services
              </button>
              {servicesOpen && (
                <div className="absolute left-0 top-12 min-w-52 rounded-2xl border border-white/15 bg-[#111111] p-2 shadow-xl">
                  <Link
                    to="/interior-designing"
                    onClick={() => setServicesOpen(false)}
                    className="flex min-h-11 items-center rounded-xl px-3 text-sm text-[var(--text-soft)] transition hover:bg-white/10 hover:text-white"
                  >
                    Interior Designing
                  </Link>
                </div>
              )}
            </li>
            {links.slice(1).map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium transition ${
                      isActive ? 'text-white' : 'text-[var(--text-soft)] hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden justify-end lg:flex">
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center rounded-full border border-white px-6 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          >
            Contact us
          </Link>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black/95 lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            <li>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex min-h-12 items-center rounded-xl border px-4 text-sm ${
                    isActive ? 'border-[var(--accent)] text-white' : 'border-white/20 text-[var(--text-soft)]'
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <Link
                to="/interior-designing"
                onClick={closeMenu}
                className="flex min-h-12 items-center rounded-xl border border-white/20 px-4 text-sm text-white"
              >
                {'Services -> Interior Designing'}
              </Link>
            </li>
            {links.slice(1).map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex min-h-12 items-center rounded-xl border px-4 text-sm ${
                      isActive ? 'border-[var(--accent)] text-white' : 'border-white/20 text-[var(--text-soft)]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="flex min-h-12 items-center justify-center rounded-full border border-white text-sm text-white"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
