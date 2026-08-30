import { motion, useReducedMotion, type Variants } from 'motion/react';
import { SearchX } from 'lucide-react';
import type { Restaurant } from '@/types/restaurant';
import { RestaurantCard } from '@/components/restaurant/RestaurantCard';

interface RestaurantGridProps {
  restaurants: Restaurant[];
  onClearFilters: () => void;
}

export function RestaurantGrid({ restaurants, onClearFilters }: RestaurantGridProps) {
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.06 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  if (restaurants.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <SearchX size={28} strokeWidth={1.5} className="mx-auto mb-4 text-muted" />
        <p className="font-display text-xl text-foreground">No tables found.</p>
        <p className="mt-2 text-sm text-muted">
          Try another cuisine, restaurant, or location.
        </p>
        <button
          type="button"
          onClick={onClearFilters}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-sans text-sm font-medium text-foreground transition-colors duration-200 hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
        >
          Clear filters
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 pt-2 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={container}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {restaurants.map((restaurant) => (
          <motion.div key={restaurant.id} variants={item}>
            <RestaurantCard restaurant={restaurant} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}