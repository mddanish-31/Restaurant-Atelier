import type { FoodItem } from '@/types/food';

export const FEATURED_FOOD: FoodItem[] = [
  {
    id: 'herb-crusted-beef-tenderloin',
    name: 'Herb-Crusted Beef Tenderloin',
    description: 'Slow-roasted tenderloin with rosemary jus and charred shallots.',
    price: 680,
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Herb crusted beef tenderloin plated with jus and charred shallots',
    category: 'Grilled',
    rating: 4.9,
  },
  {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    description: 'Tomato and cashew curry finished with cream, served with naan.',
    price: 420,
    image:
      'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Creamy butter chicken curry with naan bread',
    category: 'Indian',
    rating: 4.8,
  },
  {
    id: 'wood-fired-margherita',
    name: 'Wood-Fired Margherita',
    description: 'San Marzano tomato, fresh mozzarella, and basil.',
    price: 520,
    image:
      'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Wood-fired Margherita pizza with mozzarella and basil',
    category: 'Italian',
    rating: 4.8,
  },
  {
    id: 'crispy-chicken-burger',
    name: 'Crispy Smash Burger',
    description: 'Angus beef, cheddar, house secret sauce, and pickles.',
    price: 380,
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Smash burger with melted cheddar and pickles',
    category: 'American',
    rating: 4.7,
  },
  {
    id: 'seafood-risotto',
    name: 'Wild Mushroom Risotto',
    description: 'Slow-stirred arborio rice with wild mushrooms and parmesan.',
    price: 460,
    image:
      'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Creamy mushroom risotto plated with parmesan shavings',
    category: 'Italian',
    rating: 4.7,
  },
  {
    id: 'seared-salmon',
    name: 'Miso Butter Salmon',
    description: 'Crisp-skinned salmon glazed with miso butter and herbs.',
    price: 620,
    image:
      'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Seared salmon fillet glazed with miso butter',
    category: 'Japanese',
    rating: 4.8,
  },
  {
    id: 'seasonal-burrata-salad',
    name: 'Burrata & Heirloom Tomato',
    description: 'Creamy burrata over heirloom tomatoes with basil oil.',
    price: 280,
    image:
      'https://images.unsplash.com/photo-1592417817098-8f3d6ef2c6e6?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Burrata cheese plated with heirloom tomatoes and basil',
    category: 'Salads',
    rating: 4.7,
  },
  {
    id: 'dark-chocolate-fondant',
    name: 'Chocolate Lava Cake',
    description: 'Molten chocolate cake with vanilla bean ice cream.',
    price: 320,
    image:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Molten chocolate lava cake with a scoop of ice cream',
    category: 'Dessert',
    rating: 4.9,
  },
];