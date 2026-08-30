export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  imageAlt: string;
  category: string;
  rating?: number;
  tags?: string[];
}