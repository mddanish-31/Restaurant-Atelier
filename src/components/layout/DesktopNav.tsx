import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '@/data/navigation';
import { cn } from '@/lib/utils';

export function DesktopNav({ light = false }: { light?: boolean }) {
  return (
    <nav
      aria-label="Primary navigation"
      className="hidden items-center gap-8 lg:flex"
    >
      {NAV_LINKS.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          end={link.path === '/'}
          className={({ isActive }) =>
            cn(
              'group relative py-1 font-sans text-sm tracking-wide transition-colors duration-200',
              light
                ? 'text-white/85 hover:text-white'
                : 'text-foreground/80 hover:text-foreground',
              isActive && (light ? 'text-white' : 'text-foreground'),
            )
          }
        >
          {({ isActive }) => (
            <>
              {link.label}
              <span
                aria-hidden="true"
                className={cn(
                  'absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100',
                  isActive && 'scale-x-100',
                )}
              />
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}