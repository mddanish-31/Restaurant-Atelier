import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ShoppingBag } from 'lucide-react';
import { useScrolled } from '@/hooks/useScrolled';
import { DesktopNav } from '@/components/layout/DesktopNav';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { cn } from '@/lib/utils';

export function Navbar() {
  const scrolled = useScrolled(24);
  const { pathname } = useLocation();
  // Only the home page opens on a dark hero image, so only there does the
  // nav start light before the glass background scrolls in.
  const light = pathname === '/' && !scrolled;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-glass border-b border-border shadow-soft'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        {/* Logo / wordmark */}
        <Link
          to="/"
          className={cn(
            'font-display text-xl tracking-wide lg:text-2xl',
            light ? 'text-white' : 'text-foreground',
          )}
        >
          Ember &amp; Oak
        </Link>

        {/* Desktop center navigation */}
        <DesktopNav light={light} />

        {/* Right side actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />

          <Link
            to="/cart"
            aria-label="View cart"
            title="Cart"
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200 hover:bg-primary/10 hover:text-primary',
              light ? 'text-white/85' : 'text-foreground/80',
            )}
          >
            <ShoppingBag size={18} strokeWidth={1.75} />
          </Link>

          <Link
            to="/contact"
            className="ml-2 hidden items-center rounded-full bg-primary px-5 py-2 font-sans text-sm font-medium tracking-wide text-primary-foreground shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift lg:flex"
          >
            Reserve a Table
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            className={cn(
              'ml-1 flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200 hover:bg-primary/10 hover:text-primary lg:hidden',
              light ? 'text-white/85' : 'text-foreground/80',
            )}
          >
            <Menu size={20} strokeWidth={1.75} />
          </button>
        </div>
      </div>

      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}