import { Link } from 'react-router-dom';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { RESTAURANTS } from '@/data/restaurants';
import { RestaurantCard } from '@/components/restaurant/RestaurantCard';

export function RestaurantDiscoverySection() {
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.08 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  };

  return (
    <section aria-labelledby="discover-restaurants-heading" className="bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 lg:mb-12 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Discover
            </p>
            <h2
              id="discover-restaurants-heading"
              className="font-display text-3xl text-foreground sm:text-4xl"
            >
              Restaurants worth the trip.
            </h2>
            <p className="mt-3 max-w-lg text-muted">
              A cross-section of kitchens on our platform, from tandoor to omakase.
            </p>
          </div>

          <Link
            to="/restaurants"
            className="group inline-flex items-center gap-2 font-sans text-sm font-medium tracking-wide text-foreground transition-colors duration-200 hover:text-primary"
          >
            Explore Restaurants
            <ArrowRight
              size={16}
              strokeWidth={1.75}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={container}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {RESTAURANTS.map((restaurant) => (
            <motion.div key={restaurant.id} variants={item}>
              <RestaurantCard restaurant={restaurant} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}