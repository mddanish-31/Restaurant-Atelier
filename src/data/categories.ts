import type { FoodCategory } from '@/types/category';

export const FOOD_CATEGORIES: FoodCategory[] = [
  {
    id: 'italian',
    name: 'Italian',
    slug: 'italian',
    image:
      'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?auto=format&fit=crop&w=300&q=80',
    imageAlt: 'Plate of pasta with tomato sauce and basil',
    count: 24,
  },
  {
    id: 'indian',
    name: 'Indian',
    slug: 'indian',
    image:
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=300&q=80',
    imageAlt: 'Bowl of Indian curry with spices',
    count: 31,
  },
  {
    id: 'japanese',
    name: 'Japanese',
    slug: 'japanese',
    image:
      'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=300&q=80',
    imageAlt: 'Assorted sushi rolls',
    count: 18,
  },
  {
    id: 'mexican',
    name: 'Mexican',
    slug: 'mexican',
    image:
      'https://images.unsplash.com/photo-1613514785940-daed07799d9b?auto=format&fit=crop&w=300&q=80',
    imageAlt: 'Street-style tacos with garnish',
    count: 15,
  },
  {
    id: 'asian',
    name: 'Asian',
    slug: 'asian',
    image:
      'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=300&q=80',
    imageAlt: 'Bowl of noodles with vegetables',
    count: 22,
  },
  {
    id: 'mediterranean',
    name: 'Mediterranean',
    slug: 'mediterranean',
    image:
      'https://images.unsplash.com/photo-1540914124281-342587941389?auto=format&fit=crop&w=300&q=80',
    imageAlt: 'Mediterranean mezze spread with hummus and pita',
    count: 17,
  },
  {
    id: 'desserts',
    name: 'Desserts',
    slug: 'desserts',
    image:
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=300&q=80',
    imageAlt: 'Slice of layered chocolate dessert',
    count: 12,
  },
  {
    id: 'drinks',
    name: 'Drinks',
    slug: 'drinks',
    image:
      'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=300&q=80',
    imageAlt: 'Crafted cocktail with garnish',
    count: 14,
  },
];