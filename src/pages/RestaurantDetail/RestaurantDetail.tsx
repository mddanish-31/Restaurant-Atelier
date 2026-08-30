import { Link, useParams } from 'react-router-dom';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { ArrowLeft, Star, MapPin, UtensilsCrossed } from 'lucide-react';
import { RESTAURANTS } from '@/data/restaurants';
import { RestaurantCard } from '@/components/restaurant/RestaurantCard';

export default function RestaurantDetail() {
  const { id } = useParams<{ id: string }>();
  const restaurant = RESTAURANTS.find((r) => r.id === id);
  const prefersReducedMotion = useReducedMotion();

  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  if (!restaurant) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6 pt-16 lg:pt-20">
        <div className="max-w-md text-center">
          <p className="mb-3 font-sans text-sm uppercase tracking-[0.2em] text-muted">
            Not found
          </p>
          <h1 className="font-display text-3xl text-foreground">We couldn&apos;t find that restaurant.</h1>
          <Link
            to="/restaurants"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-sans text-sm font-medium text-foreground transition-colors duration-200 hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            <ArrowLeft size={16} strokeWidth={1.75} />
            Back to Restaurants
          </Link>
        </div>
      </main>
    );
  }

  const similar = RESTAURANTS.filter(
    (r) => r.id !== restaurant.id && r.cuisine === restaurant.cuisine,
  ).slice(0, 3);
  const fallbackSimilar =
    similar.length > 0 ? similar : RESTAURANTS.filter((r) => r.id !== restaurant.id).slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[46vh] min-h-[320px] w-full overflow-hidden pt-16 lg:pt-20">
        <img
          src={restaurant.image}
          alt={restaurant.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={item}
          className="relative mx-auto flex h-full max-w-5xl flex-col justify-end px-4 pb-8 sm:px-6 lg:px-8"
        >
          <Link
            to="/restaurants"
            className="bg-glass mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 font-sans text-xs font-medium text-foreground transition-colors duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            <ArrowLeft size={13} strokeWidth={1.75} />
            All Restaurants
          </Link>
          <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-primary">
            {restaurant.cuisine}
          </span>
          <h1 className="font-display text-3xl text-foreground sm:text-4xl lg:text-5xl">
            {restaurant.name}
          </h1>
        </motion.div>
      </section>

      {/* Info bar — liquid glass, floating over hero/content seam */}
      <section className="relative z-10 mx-auto -mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="bg-glass-liquid flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-border/60 px-6 py-5">
          <span className="flex items-center gap-1.5 font-sans text-sm text-foreground">
            <Star size={15} className="fill-current text-primary" strokeWidth={0} />
            {restaurant.rating.toFixed(1)}
          </span>
          <span className="flex items-center gap-1.5 font-sans text-sm text-muted">
            <MapPin size={15} strokeWidth={1.75} />
            {restaurant.location}
          </span>
          <span className="font-sans text-sm text-muted">{restaurant.priceRange}</span>
          <Link
            to="/contact"
            className="ml-auto inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-sans text-sm font-medium tracking-wide text-primary-foreground shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
          >
            <UtensilsCrossed size={15} strokeWidth={1.75} />
            Reserve a Table
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 lg:px-8">
        <p className="font-display text-xl text-foreground sm:text-2xl">{restaurant.note}</p>
      </section>

      {/* Similar restaurants */}
      <section
        aria-labelledby="similar-restaurants-heading"
        className="border-t border-border bg-surface py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="similar-restaurants-heading"
            className="mb-8 font-display text-2xl text-foreground sm:text-3xl"
          >
            You might also like
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {fallbackSimilar.map((r) => (
              <RestaurantCard key={r.id} restaurant={r} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}