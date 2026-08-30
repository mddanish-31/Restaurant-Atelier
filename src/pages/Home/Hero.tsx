import { Link } from 'react-router-dom';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { UtensilsCrossed, PlayCircle } from 'lucide-react';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1800&q=80';

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: prefersReducedMotion ? 0 : 0.15,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-background lg:min-h-[92vh]">
      {/* Photograph, blended into the page rather than boxed behind an overlay */}
      <div className="absolute inset-0">
        <motion.img
          src={HERO_IMAGE}
          alt="Chargrilled steak plated with herbs and roasted vegetables"
          className="h-full w-full object-cover"
          style={{
            objectPosition: 'center 40%',
            maskImage: 'linear-gradient(195deg, transparent 0%, black 7%, black 100%)',
            WebkitMaskImage:
              'linear-gradient(195deg, transparent 0%, black 7%, black 100%)',
          }}
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.045 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />

        {/* Mobile / tablet: full-width wash so copy stays legible under a stacked layout */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background:
              'linear-gradient(to top, rgb(var(--hero-scrim) / 0.92) 0%, rgb(var(--hero-scrim) / 0.72) 42%, rgb(var(--hero-scrim) / 0.25) 72%, transparent 100%)',
          }}
        />

        {/* Desktop: angled wash — strong behind the copy, clears away over the plate */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              'linear-gradient(100deg, rgb(var(--hero-scrim) / 0.92) 0%, rgb(var(--hero-scrim) / 0.8) 26%, rgb(var(--hero-scrim) / 0.4) 48%, rgb(var(--hero-scrim) / 0.08) 66%, transparent 78%)',
          }}
        />

        {/* Soft wash so the navbar reads cleanly at the very top */}
        <div
          className="absolute inset-x-0 top-0 h-24 lg:h-32"
          style={{
            background: 'linear-gradient(to bottom, rgb(var(--hero-scrim) / 0.55), transparent 100%)',
          }}
        />

        {/* Seam into the next section, in the page's own theme color */}
        <div
          className="absolute inset-x-0 bottom-0 h-20 lg:h-28"
          style={{
            background: 'linear-gradient(to top, rgb(var(--color-background)) 0%, transparent 100%)',
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start px-4 pb-20 pt-28 sm:px-6 lg:px-8"
      >
        <motion.p
          variants={item}
          className="font-script mb-1 text-3xl leading-none text-primary sm:text-4xl"
        >
          Welcome to Ember &amp; Oak
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-4xl leading-[1.08] text-white sm:text-5xl lg:text-[4.25rem]"
        >
          Good Food.
          <br />
          Good Mood.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-md text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Experience the perfect blend of taste, ambiance and hospitality.
          Every dish is crafted with love.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-5">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-sans text-sm font-medium tracking-wide text-primary-foreground shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift hover:brightness-105 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            <UtensilsCrossed size={16} strokeWidth={1.75} />
            Explore Menu
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/8 px-7 py-3.5 font-sans text-sm font-medium tracking-wide text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/70 hover:bg-white/14 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            <PlayCircle size={18} strokeWidth={1.75} />
            Our Story
          </Link>
        </motion.div>
      </motion.div>

      {/* Slide indicator dots */}
      <div className="absolute inset-x-0 bottom-8 z-10 flex items-center justify-center gap-2 sm:justify-end sm:pr-10 lg:pr-16">
        <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
        <span className="h-1.5 w-6 rounded-full bg-primary" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
      </div>
    </section>
  );
}