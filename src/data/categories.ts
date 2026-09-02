import type { FoodCategory } from '@/types/category';

export const FOOD_CATEGORIES: FoodCategory[] = [
  {
    id: 'italian',
    name: 'Italian',
    slug: 'italian',
    image:
      'https://images.unsplash.com/photo-1621996346565-e3d5d62810f2?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Hand-cut tagliatelle pasta with shaved truffle',
    count: 24,
  },
  {
    id: 'indian',
    name: 'Indian',
    slug: 'indian',
    image:
      'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Creamy butter chicken curry with naan bread',
    count: 31,
  },
  {
    id: 'japanese',
    name: 'Japanese',
    slug: 'japanese',
    image:
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Handcrafted salmon nigiri pieces',
    count: 18,
  },
  {
    id: 'american',
    name: 'American',
    slug: 'american',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Double Angus beef smash burger with cheddar',
    count: 16,
  },
  {
    id: 'asian',
    name: 'Asian',
    slug: 'asian',
    image:
      'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Authentic Thai green curry with jasmine rice',
    count: 22,
  },
  {
    id: 'mediterranean',
    name: 'Mediterranean',
    slug: 'mediterranean',
    image:
      'https://images.unsplash.com/photo-1577906096429-f73c2c312435?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Creamy hummus with warm pita bread and olive oil',
    count: 17,
  },
  {
    id: 'desserts',
    name: 'Desserts',
    slug: 'desserts',
    image:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Molten dark chocolate lava cake with vanilla gelato',
    count: 12,
  },
  {
    id: 'drinks',
    name: 'Drinks',
    slug: 'drinks',
    image:
      'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Artisan craft cocktail with citrus garnish',
    count: 14,
  },
];