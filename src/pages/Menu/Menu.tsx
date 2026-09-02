import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MENU_DISHES, CUISINE_RAIL } from '@/data/menu';
import { MenuHero } from './MenuHero';
import { MenuFilters } from './MenuFilters';
import { ChefsPicks } from './ChefsPicks';
import { MenuGrid } from './MenuGrid';
import { ChefsNote } from './ChefsNote';
import { EventsSection } from './EventsSection';
import { FinalCta } from './FinalCta';

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState('');
  const [activeCuisine, setActiveCuisine] = useState<string | null>(
    searchParams.get('category'),
  );
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeRestaurant, setActiveRestaurant] = useState<string | null>(null);

  useEffect(() => {
    if (activeCuisine) {
      setSearchParams({ category: activeCuisine }, { replace: true });
    } else if (searchParams.get('category')) {
      setSearchParams({}, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCuisine]);

  const railEntry = useMemo(
    () => CUISINE_RAIL.find((entry) => entry.slug === activeCuisine),
    [activeCuisine],
  );

  const filteredDishes = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MENU_DISHES.filter((dish) => {
      if (railEntry && !railEntry.match(dish)) return false;
      if (activeCategory && dish.category !== activeCategory) return false;
      if (activeRestaurant && dish.restaurantId !== activeRestaurant) return false;
      if (
        q &&
        !`${dish.name} ${dish.restaurantName} ${dish.cuisine} ${dish.description}`
          .toLowerCase()
          .includes(q)
      )
        return false;
      return true;
    });
  }, [query, railEntry, activeCategory, activeRestaurant]);

  const hasActiveFilters = Boolean(activeCategory || activeRestaurant || activeCuisine || query);

  const handleResetAll = () => {
    setActiveCategory(null);
    setActiveRestaurant(null);
    setActiveCuisine(null);
    setQuery('');
  };

  return (
    <main>
      <MenuHero
        query={query}
        onQueryChange={setQuery}
        activeCuisine={activeCuisine}
        onCuisineChange={setActiveCuisine}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setActiveCuisine(null);
        }}
      />
      <MenuFilters
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        activeRestaurant={activeRestaurant}
        onRestaurantChange={setActiveRestaurant}
        hasActiveFilters={hasActiveFilters}
        filteredCount={filteredDishes.length}
        totalCount={MENU_DISHES.length}
        onReset={handleResetAll}
      />
      <ChefsPicks />
      <MenuGrid dishes={filteredDishes} onResetFilters={handleResetAll} />
      <ChefsNote />
      <EventsSection />
      <FinalCta />
    </main>
  );
}