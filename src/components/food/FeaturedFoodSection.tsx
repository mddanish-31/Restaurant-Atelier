import { Link } from 'react-router-dom';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { FEATURED_FOOD } from '@/data/featuredFood';
import { FeaturedFoodCard } from '@/components/food/FeaturedFoodCard';

export function FeaturedFoodSection() {
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
    <section aria-labelledby="featured-food-heading" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 lg:mb-12 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Signature Selection
            </p>
            <h2
              id="featured-food-heading"
              className="font-display text-3xl text-foreground sm:text-4xl"
            >
              Dishes people keep coming back for.
            </h2>
            <p className="mt-3 max-w-lg text-muted">
              A curated handful of favorites from the kitchens on our platform.
            </p>
          </div>

          <Link
            to="/menu"
            className="group inline-flex items-center gap-2 font-sans text-sm font-medium tracking-wide text-foreground transition-colors duration-200 hover:text-primary"
          >
            View Full Menu
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
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {FEATURED_FOOD.map((dish) => (
            <motion.div key={dish.id} variants={item}>
              <FeaturedFoodCard item={dish} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}