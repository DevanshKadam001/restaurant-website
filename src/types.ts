export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
  tags: string[]; // e.g., ["Signature", "Chef's Special", "Vegetarian", "Spicy"]
  image: string;
  rating: number;
  calories: number;
  prepTime: string; // e.g., "15 mins"
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'culinary' | 'beverage' | 'all';
  image: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  targetNumber: number;
  suffix: string;
}
