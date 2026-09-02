import { useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { ChevronDown, UtensilsCrossed, RotateCcw } from 'lucide-react';
import type { MenuDish } from '@/types/menu';
import { MenuCard } from './MenuCard';

const PAGE_SIZE = 12;

interface MenuGridProps {
  dishes: MenuDish[];
  onResetFilters?: () => void;
}

export function MenuGrid({ dishes, onResetFilters }: MenuGridProps) {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(PAGE_SIZE);

  const shown = dishes.slice(0, visible);
  const hasMore = visible < dishes.length;

  const grid: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.05 } },
  };
  const card: Variants = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.95, y: prefersReducedMotion ? 0 : 16 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <section id="the-menu" aria-labelledby="the-menu-heading" className="scroll-mt-24 bg-background py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border/60 pb-5">
          <div>
            <p className="mb-2 font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              The Menu
            </p>
            <h2 id="the-menu-heading" className="font-display text-3xl sm:text-4xl text-foreground">
              Explore Our Full Collection
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-surface-raised px-3.5 py-1 font-sans text-xs font-semibold text-muted border border-border/80">
              {dishes.length} {dishes.length === 1 ? 'dish' : 'dishes available'}
            </span>
          </div>
        </div>

        {dishes.length === 0 ? (
          <div className="my-16 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/80 bg-surface/40 p-12 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <UtensilsCrossed size={28} strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-xl text-foreground">No matching dishes found</h3>
            <p className="mt-2 max-w-md text-sm text-muted">
              We couldn&apos;t find any items matching your selected criteria. Try adjusting your search query or removing category/restaurant filters.
            </p>
            {onResetFilters && (
              <button
                type="button"
                onClick={onResetFilters}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-sans text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-primary"
              >
                <RotateCcw size={15} />
                <span>Reset all filters</span>
              </button>
            )}
          </div>
        ) : (
          <>
            <motion.div
              key={dishes.length}
              initial="hidden"
              animate="visible"
              variants={grid}
              className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {shown.map((dish) => (
                <motion.div key={dish.id} variants={card}>
                  <MenuCard dish={dish} />
                </motion.div>
              ))}
            </motion.div>

            {hasMore && (
              <div className="mt-12 flex justify-center">
                <button
                  type="button"
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  className="group inline-flex items-center gap-2 rounded-full border border-border/90 bg-surface px-7 py-3 font-sans text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:border-primary/60 hover:text-primary hover:-translate-y-0.5 hover:shadow-soft focus-visible:outline-2 focus-visible:outline-primary"
                >
                  <span>Load more dishes ({dishes.length - visible} remaining)</span>
                  <ChevronDown
                    size={16}
                    strokeWidth={2}
                    className="transition-transform duration-200 group-hover:translate-y-0.5"
                  />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}