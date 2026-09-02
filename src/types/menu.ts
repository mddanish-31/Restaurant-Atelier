export type DishCategory = 'Starters' | 'Mains' | 'Pasta & Pizza' | 'Sushi' | 'Desserts' | 'Drinks';

export interface MenuDish {
  id: string;
  name: string;
  restaurantId: string;
  restaurantName: string;
  cuisine: string;
  category: DishCategory;
  description: string;
  price: number;
  rating: number;
  image: string;
  imageAlt: string;
  featured?: boolean;
}