import { Link } from 'react-router-dom';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1554502078-ef0fc409efce?auto=format&fit=crop&w=900&q=80';

const FACTS = [
  'Restaurants vetted before they are listed',
  'Cuisines from tandoor to omakase',
  'New spots added every month',
];

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion();

  const imageVariant: Variants = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const content: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.08 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section aria-labelledby="about-heading" className="bg-background py-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-[45%_1fr] lg:gap-12 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={imageVariant}
          className="relative order-first"
        >
          <div className="h-[280px] w-full overflow-hidden rounded-xl border border-border sm:h-[340px] lg:h-[480px] xl:h-[520px]">
            <img
              src={ABOUT_IMAGE}
              alt="Warmly lit restaurant interior with an inviting dining counter"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
            />
          </div>
          <div className="bg-glass absolute -bottom-4 left-4 rounded-lg border border-white/10 px-3.5 py-2.5 shadow-soft">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
              Curated
            </p>
            <p className="mt-0.5 font-display text-sm text-foreground">Across every cuisine</p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={content}
        >
          <motion.p
            variants={item}
            className="mb-2 font-sans text-sm font-medium uppercase tracking-[0.2em] text-primary"
          >
            Discover Differently
          </motion.p>
          <motion.h2
            variants={item}
            id="about-heading"
            className="font-display text-3xl leading-tight text-foreground sm:text-4xl"
          >
            Good food is everywhere. Finding the right place isn&apos;t always easy.
          </motion.h2>
          <motion.p variants={item} className="mt-3 max-w-lg text-muted">
            Ember &amp; Oak brings together restaurants worth knowing about — sorted by
            cuisine, checked for quality, and easy to browse in one place. We don&apos;t
            run a kitchen. We help you find the ones that do it well.
          </motion.p>

          <motion.ul variants={item} className="mt-5 space-y-1.5">
            {FACTS.map((fact) => (
              <li key={fact} className="flex items-center gap-2.5 text-sm text-muted">
                <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
                {fact}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={item} className="mt-6">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 font-sans text-sm font-medium tracking-wide text-foreground transition-colors duration-200 hover:text-primary"
            >
              Our Story
              <ArrowRight
                size={16}
                strokeWidth={1.75}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}