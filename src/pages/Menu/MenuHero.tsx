import { useCallback, useEffect, useRef, useState } from 'react';
import { Search, ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'motion/react';
import { HERO_SLIDES } from '@/data/menu';
import { cn } from '@/lib/utils';
import { CuisineRail } from './CuisineRail';

const SLIDE_DURATION = 6000;

interface MenuHeroProps {
  query: string;
  onQueryChange: (value: string) => void;
  activeCuisine: string | null;
  onCuisineChange: (slug: string | null) => void;
  onSelectCategory?: (category: string | null) => void;
}

export function MenuHero({
  query,
  onQueryChange,
  activeCuisine,
  onCuisineChange,
  onSelectCategory,
}: MenuHeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const slide = HERO_SLIDES[index];

  const goTo = useCallback((next: number) => {
    setIndex((next + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || paused) return;
    timerRef.current = setInterval(() => goTo(index + 1), SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [index, paused, prefersReducedMotion, goTo]);

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement === searchInputRef.current) return;
      if (e.key === 'ArrowLeft') goTo(index - 1);
      if (e.key === 'ArrowRight') goTo(index + 1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [index, goTo]);

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (slide.categoryTarget && onSelectCategory) {
      onSelectCategory(slide.categoryTarget);
    }
    const targetElement = document.getElementById('the-menu');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Menu highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative flex flex-col justify-between overflow-hidden bg-background pt-16 sm:pt-20 border-b border-border"
    >
      {/* Background Slideshow with cinematic Ken Burns & Gradient blend */}
      <div className="absolute inset-0 select-none pointer-events-none">
        <AnimatePresence mode="sync">
          <motion.img
            key={slide.id}
            src={slide.image}
            alt={slide.imageAlt}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: 'center 38%' }}
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.85, ease: 'easeOut' },
              scale: { duration: SLIDE_DURATION / 1000 + 1, ease: 'linear' },
            }}
          />
        </AnimatePresence>

        {/* Top Navbar Shadow Fade */}
        <div
          className="absolute inset-x-0 top-0 h-28 lg:h-36"
          style={{ background: 'linear-gradient(to bottom, rgb(var(--hero-scrim) / 0.7) 0%, transparent 100%)' }}
        />

        {/* Mobile scrim */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background:
              'linear-gradient(to top, rgb(var(--hero-scrim) / 0.98) 0%, rgb(var(--hero-scrim) / 0.85) 45%, rgb(var(--hero-scrim) / 0.45) 75%, transparent 100%)',
          }}
        />

        {/* Desktop angled vignette */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              'linear-gradient(105deg, rgb(var(--hero-scrim) / 0.96) 0%, rgb(var(--hero-scrim) / 0.88) 36%, rgb(var(--hero-scrim) / 0.5) 58%, rgb(var(--hero-scrim) / 0.12) 75%, transparent 88%)',
          }}
        />

        {/* Bottom Seam to Cuisine Rail */}
        <div
          className="absolute inset-x-0 bottom-0 h-36 lg:h-44"
          style={{ background: 'linear-gradient(to top, rgb(var(--color-background)) 0%, transparent 100%)' }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-6 pb-2 sm:px-6 lg:px-8 sm:pt-8 sm:pb-3">
        {/* Slide Animated Content with Fixed Height Container to prevent page movement */}
        <div className="min-h-[235px] sm:min-h-[255px] lg:min-h-[275px] max-w-xl flex flex-col justify-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -4, transition: { duration: 0.18 } }}
              variants={container}
              className="w-full flex flex-col"
            >
              {/* Eyebrow badge */}
              <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary backdrop-blur-sm self-start">
                <Sparkles size={12} className="text-primary animate-pulse" />
                <span>{slide.eyebrow}</span>
              </motion.div>

              {/* Consistent Headline with locked height across Slide 1, 2, and 3 */}
              <motion.h1 variants={item} className="mt-3 min-h-[76px] sm:min-h-[108px] lg:min-h-[124px] font-display text-3xl leading-[1.15] text-foreground sm:text-5xl lg:text-[3.25rem]">
                {slide.title.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </motion.h1>

              {/* Description with locked height */}
              <motion.p variants={item} className="mt-2 min-h-[42px] sm:min-h-[48px] max-w-md font-sans text-sm sm:text-base leading-relaxed text-foreground/80">
                {slide.description}
              </motion.p>

              {/* CTA Button */}
              <motion.div variants={item} className="mt-3 flex items-center gap-4">
                <a
                  href={slide.ctaHref}
                  onClick={handleCtaClick}
                  className="group inline-flex items-center gap-2 rounded-full bg-primary/90 px-5 py-2 font-sans text-xs sm:text-sm font-medium tracking-wide text-primary-foreground shadow-soft transition-all duration-300 hover:bg-primary hover:-translate-y-0.5 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                >
                  <span>{slide.ctaLabel}</span>
                  <ChevronRight size={14} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stable Live Search Input */}
        <div className="relative mt-4 max-w-[500px] sm:max-w-[540px]">
          <label htmlFor="menu-search" className="sr-only">
            Search dishes, cuisines, or restaurants
          </label>
          <Search size={18} strokeWidth={1.75} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
          <input
            ref={searchInputRef}
            id="menu-search"
            type="search"
            value={query}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search dishes, cuisines, or restaurants..."
            className="bg-glass-liquid w-full rounded-full border border-white/15 py-3 pl-11 pr-10 font-sans text-sm text-foreground placeholder:text-muted shadow-soft backdrop-blur-md transition-all duration-200 focus:border-primary/70 focus:ring-2 focus:ring-primary/20 focus:outline-none focus-visible:outline-2 focus-visible:outline-primary"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                onQueryChange('');
                searchInputRef.current?.focus();
              }}
              aria-label="Clear search"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-surface text-muted transition-colors hover:text-foreground"
            >
              <X size={12} strokeWidth={2} />
            </button>
          )}
        </div>

        {/* Carousel Progress Controls & Dots */}
        <div className="mt-5 flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous slide"
            className="bg-glass flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-foreground transition-all duration-200 hover:scale-105 hover:border-primary/60 hover:text-primary active:scale-95 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            <ChevronLeft size={16} strokeWidth={2} />
          </button>

          {/* Numerical & Progress Bar */}
          <div className="flex items-center gap-2 font-sans text-xs tabular-nums text-muted">
            <span className="font-semibold text-primary">{String(index + 1).padStart(2, '0')}</span>
            <span className="relative h-1 w-12 sm:w-16 overflow-hidden rounded-full bg-white/15" aria-hidden="true">
              <motion.span
                key={slide.id}
                className="absolute inset-y-0 left-0 rounded-full bg-primary"
                initial={{ width: '0%' }}
                animate={{ width: paused || prefersReducedMotion ? '0%' : '100%' }}
                transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
              />
            </span>
            <span>{String(HERO_SLIDES.length).padStart(2, '0')}</span>
          </div>

          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next slide"
            className="bg-glass flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-foreground transition-all duration-200 hover:scale-105 hover:border-primary/60 hover:text-primary active:scale-95 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            <ChevronRight size={16} strokeWidth={2} />
          </button>

          {/* Slide dots */}
          <div className="flex items-center gap-1.5 pl-2" role="tablist" aria-label="Slides">
            {HERO_SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-primary',
                  i === index
                    ? 'w-6 bg-primary shadow-[0_0_8px_rgba(196,154,82,0.6)]'
                    : 'w-1.5 bg-white/25 hover:bg-primary/50',
                )}
              />
            ))}
          </div>
        </div>

        {/* Integrated Category Circles Rail (Seamlessly embedded inside Hero) */}
        <div className="mt-5 border-t border-white/10 pt-3">
          <CuisineRail active={activeCuisine} onChange={onCuisineChange} />
        </div>
      </div>
    </section>
  );
}
