import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import { NAV_LINKS } from '@/data/navigation';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-sm flex-col',
              'bg-surface border-l border-border shadow-lift lg:hidden',
            )}
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-lg text-foreground">Menu</span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full text-foreground/80 transition-colors duration-200 hover:bg-primary/10 hover:text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
              >
                <X size={20} strokeWidth={1.75} />
              </button>
            </div>

            <nav
              aria-label="Mobile primary navigation"
              className="flex flex-1 flex-col gap-1 px-6 pt-4"
            >
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    cn(
                      'border-b border-border/60 py-4 font-display text-xl text-foreground/85 transition-colors duration-200 hover:text-primary',
                      isActive && 'text-primary',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="px-6 pb-8 pt-4">
              <NavLink
                to="/contact"
                onClick={onClose}
                className="flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 font-sans text-sm font-medium tracking-wide text-primary-foreground transition-transform duration-200 active:scale-[0.98]"
              >
                Reserve a Table
              </NavLink>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}