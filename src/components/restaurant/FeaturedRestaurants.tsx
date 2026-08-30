import { motion, useReducedMotion, type Variants } from 'motion/react';
import type { Restaurant } from '@/types/restaurant';
import { RestaurantCard } from '@/components/restaurant/RestaurantCard';

export function FeaturedRestaurants({ restaurants }: { restaurants: Restaurant[] }) {
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.08 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  };

  return (
    <section aria-labelledby="featured-restaurants-heading" className="bg-background py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="featured-restaurants-heading"
          className="mb-6 font-sans text-xs font-medium uppercase tracking-[0.2em] text-foreground/60"
        >
          Highlighted
        </h2>
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
    </section>
  );
}