import { motion, useReducedMotion, type Variants } from 'motion/react';
import { CUISINE_RAIL, IMAGE_FALLBACK } from '@/data/menu';
import { cn } from '@/lib/utils';

interface CuisineRailProps {
  active: string | null;
  onChange: (slug: string | null) => void;
  className?: string;
}

export function CuisineRail({ active, onChange, className }: CuisineRailProps) {
  const prefersReducedMotion = useReducedMotion();

  const rail: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.05 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.92, y: prefersReducedMotion ? 0 : 8 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  };

  const entries = [{ slug: null, label: 'All', image: null, count: null }, ...CUISINE_RAIL];

  return (
    <div aria-label="Browse by cuisine" className={cn('relative w-full py-2', className)}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-20px' }}
        variants={rail}
        className="scrollbar-none -mx-4 flex items-center gap-x-5 overflow-x-auto px-4 pb-1 sm:gap-x-7 lg:mx-0 lg:flex-wrap lg:justify-start lg:overflow-visible lg:px-0"
      >
        {entries.map((entry) => {
          const isActive = active === entry.slug;
          return (
            <motion.button
              key={entry.slug ?? 'all'}
              type="button"
              variants={item}
              whileHover={{ y: prefersReducedMotion ? 0 : -3 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onChange(entry.slug)}
              aria-current={isActive ? 'true' : undefined}
              className="group flex shrink-0 flex-col items-center gap-2 rounded-xl p-1 text-center transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
            >
              <div className="relative block h-14 w-14 sm:h-16 sm:w-16">
                <div
                  className={cn(
                    'relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border transition-all duration-300',
                    isActive
                      ? 'border-primary shadow-[0_0_16px_rgba(196,154,82,0.4)] ring-2 ring-primary ring-offset-2 ring-offset-background'
                      : 'border-white/20 bg-surface/60 backdrop-blur-sm group-hover:border-primary/60 group-hover:shadow-[0_0_12px_rgba(196,154,82,0.2)]',
                  )}
                >
                  {entry.image ? (
                    <img
                      src={entry.image}
                      alt=""
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = IMAGE_FALLBACK;
                      }}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-115"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 via-surface to-background font-display text-xs font-semibold text-foreground">
                      All
                    </div>
                  )}
                  {isActive && (
                    <div className="pointer-events-none absolute inset-0 bg-primary/10 backdrop-brightness-110" />
                  )}
                </div>
              </div>

              <div className="flex flex-col items-center">
                <span
                  className={cn(
                    'font-display text-xs sm:text-sm font-medium transition-colors duration-200',
                    isActive ? 'font-semibold text-primary' : 'text-foreground/85 group-hover:text-primary',
                  )}
                >
                  {entry.label}
                </span>
                {entry.count !== null ? (
                  <span className="text-[10px] sm:text-[11px] text-muted tracking-tight">
                    {entry.count} dishes
                  </span>
                ) : (
                  <span className="text-[10px] sm:text-[11px] text-muted tracking-tight">All items</span>
                )}
              </div>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
