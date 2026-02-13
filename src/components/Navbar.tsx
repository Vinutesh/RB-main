import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { pageTransition } from './animationConfig';

const links = [
  { label: 'About', to: '/about' },
  { label: 'Product', to: '/product' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  // Close services dropdown when clicking outside
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

  // Close mobile menu on escape key
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

  // Prevent body scroll when mobile menu is open
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
        className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8" 
        aria-label="Main navigation"
      >
        <Link 
          to="/" 
          className="flex items-center gap-3 transition-transform duration-300 hover:scale-105" 
          onClick={closeMenu}
          aria-label="R.B Enterprises and R.B Interiors - Home"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--accent)]/40 bg-[var(--accent)]/10 text-xs font-bold text-[var(--accent-soft)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)]/20">
            RB
          </span>
          <div>
            <span className="block text-base font-semibold text-white">RB Enterprises</span>
            <span className="block text-xs text-[var(--text-soft)]">R.B Interiors</span>
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
          <motion.span 
            className="text-xl"
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {open ? '✕' : '☰'}
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
                    isActive 
                      ? 'bg-white/10 text-white' 
                      : 'text-[var(--text-soft)] hover:bg-white/5 hover:text-white'
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
                className="inline-flex min-h-11 items-center gap-1 rounded-full px-5 text-sm font-medium text-[var(--text-soft)] transition-all duration-300 hover:bg-white/5 hover:text-white"
                onClick={() => setServicesOpen((prev) => !prev)}
              >
                Services
                <motion.span 
                  className="text-xs"
                  animate={{ rotate: servicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  aria-hidden="true"
                >
                  ▼
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
                    <Link
                      to="/interior-designing"
                      role="menuitem"
                      onClick={() => setServicesOpen(false)}
                      className="flex min-h-11 items-center gap-3 rounded-xl px-4 text-sm text-[var(--text-soft)] transition-all duration-300 hover:bg-white/10 hover:text-white"
                    >
                      <span aria-hidden="true">🏠</span>
                      <span>Interior Designing</span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {links.slice(1).map((item) => (
              <li key={item.to} role="none">
                <NavLink
                  to={item.to}
                  role="menuitem"
                  className={({ isActive }) =>
                    `inline-flex min-h-11 items-center rounded-full px-5 text-sm font-medium transition-all duration-300 ${
                      isActive 
                        ? 'bg-white/10 text-white' 
                        : 'text-[var(--text-soft)] hover:bg-white/5 hover:text-white'
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
            className="inline-flex min-h-11 items-center rounded-full border-2 border-white px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black hover:shadow-xl"
            aria-label="Contact us to start your project"
          >
            Contact Us
          </Link>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 top-[73px] bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />
            
            {/* Mobile Menu */}
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-x-0 top-[73px] max-h-[calc(100vh-73px)] overflow-y-auto border-t border-white/10 bg-black/98 backdrop-blur-xl lg:hidden"
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
                          ? 'border-[var(--accent)] bg-[var(--accent)]/10 text-white' 
                          : 'border-white/20 text-[var(--text-soft)] hover:border-white/40 hover:bg-white/5'
                      }`
                    }
                  >
                    About
                  </NavLink>
                </li>
                
                <li role="none">
                  <Link
                    to="/interior-designing"
                    role="menuitem"
                    onClick={closeMenu}
                    className="flex min-h-14 items-center gap-3 rounded-xl border border-white/20 px-5 text-sm font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
                  >
                    <span aria-hidden="true">🏠</span>
                    <span>Services → Interior Designing</span>
                  </Link>
                </li>
                
                {links.slice(1).map((item) => (
                  <li key={item.to} role="none">
                    <NavLink
                      to={item.to}
                      role="menuitem"
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `flex min-h-14 items-center rounded-xl border px-5 text-sm font-medium transition-all duration-300 ${
                          isActive 
                            ? 'border-[var(--accent)] bg-[var(--accent)]/10 text-white' 
                            : 'border-white/20 text-[var(--text-soft)] hover:border-white/40 hover:bg-white/5'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
                
                <li className="mt-2" role="none">
                  <Link
                    to="/contact"
                    role="menuitem"
                    onClick={closeMenu}
                    className="flex min-h-14 items-center justify-center rounded-full border-2 border-white bg-white/5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
