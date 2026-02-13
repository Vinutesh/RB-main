import { NavLink } from 'react-router-dom';

const interiorLinks = [
  { label: 'Interior', to: '/interior-designing' },
  { label: 'About', to: '/interior-designing/about' },
  { label: 'Gallery', to: '/interior-designing/gallery' },
  { label: 'Contact', to: '/interior-designing/contact' },
];

export function InteriorSubNav() {
  return (
    <nav aria-label="Interior navigation" className="mb-8 border-t border-white/10 pt-6">
      <ul className="flex flex-wrap gap-3">
        {interiorLinks.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `inline-flex min-h-11 items-center rounded-full border px-5 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent-soft)]'
                    : 'border-white/20 text-[var(--text-soft)] hover:border-[var(--accent)] hover:text-[var(--text-main)]'
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
