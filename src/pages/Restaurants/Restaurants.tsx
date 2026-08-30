import { useMemo, useState } from 'react';
import { RESTAURANTS } from '@/data/restaurants';
import { RestaurantsHero } from '@/components/restaurant/RestaurantsHero';
import { RestaurantFilters } from '@/components/restaurant/RestaurantFilters';
import { FeaturedRestaurants } from '@/components/restaurant/FeaturedRestaurants';
import { RestaurantGrid } from '@/components/restaurant/RestaurantGrid';

const ALL = 'All';
const CUISINES = [ALL, ...Array.from(new Set(RESTAURANTS.map((r) => r.cuisine)))];
const FEATURED = [...RESTAURANTS].sort((a, b) => b.rating - a.rating).slice(0, 3);

export default function Restaurants() {
  const [query, setQuery] = useState('');
  const [cuisine, setCuisine] = useState(ALL);
  const [price, setPrice] = useState<string | null>(null);
  const [minRating, setMinRating] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return RESTAURANTS.filter((r) => {
      const matchesQuery =
        q.length === 0 ||
        r.name.toLowerCase().includes(q) ||
        r.cuisine.toLowerCase().includes(q) ||
        r.note.toLowerCase().includes(q) ||
        r.location.toLowerCase().includes(q);
      const matchesCuisine = cuisine === ALL || r.cuisine === cuisine;
      const matchesPrice = !price || r.priceRange === price;
      const matchesRating = !minRating || r.rating >= minRating;
      return matchesQuery && matchesCuisine && matchesPrice && matchesRating;
    });
  }, [query, cuisine, price, minRating]);

  const clearFilters = () => {
    setQuery('');
    setCuisine(ALL);
    setPrice(null);
    setMinRating(null);
  };

  return (
    <main>
      <RestaurantsHero />
      <RestaurantFilters
        cuisines={CUISINES}
        query={query}
        onQueryChange={setQuery}
        activeCuisine={cuisine}
        onCuisineChange={setCuisine}
        activePrice={price}
        onPriceChange={setPrice}
        activeRating={minRating}
        onRatingChange={setMinRating}
      />
      <FeaturedRestaurants restaurants={FEATURED} />
      <RestaurantGrid restaurants={filtered} onClearFilters={clearFilters} />
    </main>
  );
}