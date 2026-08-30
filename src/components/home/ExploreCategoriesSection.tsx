import { Link, useSearchParams } from 'react-router-dom';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { FOOD_CATEGORIES } from '@/data/categories';
import { cn } from '@/lib/utils';

// Reused as a graceful fallback if a category image ever fails to load —
// never falls back to visible alt text inside the circle.
const IMAGE_FALLBACK =
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=300&q=80';

export function ExploreCategoriesSection() {
  const prefersReducedMotion = useReducedMotion();
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get('category');

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12 },
    },
  };

  const heading: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const rail: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.06 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  };

  return (
    <section
      aria-labelledby="explore-categories-heading"
      className="border-b border-border bg-background py-16 lg:py-24"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={container}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <motion.p
          variants={heading}
          className="mb-3 font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary"
        >
          Explore by Taste
        </motion.p>
        <motion.h2
          variants={heading}
          id="explore-categories-heading"
          className="font-display text-3xl text-foreground sm:text-4xl"
        >
          Find something you&apos;ll crave.
        </motion.h2>
        <motion.p variants={heading} className="mt-3 max-w-lg text-muted">
          Explore cuisines, dishes, and flavors from restaurants around you.
        </motion.p>

        <div className="relative mt-10 lg:mt-12">
          {/* Edge fades hint that the rail scrolls further (mobile/tablet only) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-background to-transparent lg:hidden" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-background to-transparent lg:hidden" />

          <motion.div
            variants={rail}
            className="scrollbar-none -mx-4 flex gap-x-7 overflow-x-auto px-4 pb-2 sm:gap-x-8 lg:mx-0 lg:justify-between lg:overflow-visible lg:px-0"
          >
            {FOOD_CATEGORIES.map((category) => {
              const isActive = activeCategory === category.slug;
              return (
                <motion.div key={category.id} variants={item} className="shrink-0">
                  <Link
                    to={`/menu?category=${category.slug}`}
                    aria-current={isActive ? 'true' : undefined}
                    className="group flex flex-col items-center gap-3 rounded-lg p-1 text-center focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                  >
                    <span className="relative block h-20 w-20 sm:h-24 sm:w-24">
                      <span
                        className={cn(
                          'block h-full w-full overflow-hidden rounded-full border transition-colors duration-300',
                          isActive
                            ? 'border-primary'
                            : 'border-primary/25 group-hover:border-primary',
                          'shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]',
                        )}
                      >
                        <img
                          src={category.image}
                          alt={category.imageAlt}
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = IMAGE_FALLBACK;
                          }}
                          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                        />
                      </span>
                      {isActive && (
                        <span className="absolute -bottom-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary" />
                      )}
                    </span>
                    <span className="flex flex-col">
                      <span
                        className={cn(
                          'font-display text-sm transition-colors duration-200 sm:text-base',
                          isActive ? 'text-primary' : 'text-foreground group-hover:text-primary',
                        )}
                      >
                        {category.name}
                      </span>
                      <span className="flex items-center gap-0.5 text-xs text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:text-foreground">
                        {category.count} dishes
                        <ChevronRight
                          size={12}
                          strokeWidth={1.75}
                          className="text-primary opacity-0 -translate-x-1 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                        />
                      </span>
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}