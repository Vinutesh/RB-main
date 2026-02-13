import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { pageTransition } from './animationConfig';

const serviceLinks = [
  { label: 'R.B Enterprises', to: '/' },
  { label: 'R.B Interiors', to: '/interior-designing' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    if (servicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [servicesOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={pageTransition}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-xl"
      role="banner"
    >
      <nav
        className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
          onClick={closeMenu}
          aria-label="R.B Group - Home"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-(--accent)/40 bg-(--accent)/10 text-xs font-bold text-(--accent-soft) transition-all duration-300 hover:border-(--accent) hover:bg-(--accent)/20">
            RB
          </span>
          <div>
            <span className="block text-base font-semibold text-white">R.B Group</span>
            <span className="block text-xs text-(--text-soft)">R.B Enterprises | R.B Interiors</span>
          </div>
        </Link>

        <button
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.span className="text-xl" animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.3 }}>
            {open ? 'X' : 'â˜°'}
          </motion.span>
        </button>

        <div className="hidden items-center justify-center lg:flex" role="menubar">
          <ul className="flex items-center gap-1">
            <li role="none">
              <NavLink
                to="/about"
                role="menuitem"
                className={({ isActive }) =>
                  `inline-flex min-h-11 items-center rounded-full px-5 text-sm font-medium transition-all duration-300 ${
                    isActive ? 'bg-white/10 text-white' : 'text-(--text-soft) hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                About
              </NavLink>
            </li>

            <li className="relative" ref={servicesRef} role="none">
              <button
                type="button"
                role="menuitem"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                className="inline-flex min-h-11 items-center gap-1 rounded-full px-5 text-sm font-medium text-(--text-soft) transition-all duration-300 hover:bg-white/5 hover:text-white"
                onClick={() => setServicesOpen((prev) => !prev)}
              >
                Services
                <motion.span
                  className="text-xs"
                  animate={{ rotate: servicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  aria-hidden="true"
                >
                  v
                </motion.span>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-12 min-w-56 rounded-2xl border border-white/15 bg-[#0f0f0f]/95 p-2 shadow-2xl backdrop-blur-xl"
                    role="menu"
                    aria-label="Services submenu"
                  >
                    {serviceLinks.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        role="menuitem"
                        onClick={() => setServicesOpen(false)}
                        className="flex min-h-11 items-center gap-3 rounded-xl px-4 text-sm text-(--text-soft) transition-all duration-300 hover:bg-white/10 hover:text-white"
                      >
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 top-18.25 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />

            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-x-0 top-18.25 max-h-[calc(100vh-73px)] overflow-y-auto border-t border-white/10 bg-black/98 backdrop-blur-xl lg:hidden"
              role="menu"
              aria-label="Mobile navigation menu"
            >
              <ul className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 sm:px-6">
                <li role="none">
                  <NavLink
                    to="/about"
                    role="menuitem"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `flex min-h-14 items-center rounded-xl border px-5 text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? 'border-(--accent) bg-(--accent)/10 text-white'
                          : 'border-white/20 text-(--text-soft) hover:border-white/40 hover:bg-white/5'
                      }`
                    }
                  >
                    About
                  </NavLink>
                </li>

                <li role="none" className="rounded-xl border border-white/20 p-3">
                  <p className="px-2 pb-2 text-xs uppercase tracking-[0.16em] text-(--text-soft)">Services</p>
                  <div className="flex flex-col gap-2">
                    {serviceLinks.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        role="menuitem"
                        onClick={closeMenu}
                        className="flex min-h-12 items-center gap-3 rounded-xl border border-white/20 px-5 text-sm font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
                      >
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

