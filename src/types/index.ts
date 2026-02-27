export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription?: string;
  price: number;
  category: "spoons" | "cutting-boards" | "sets" | "utensils" | "accessories";
  image: string;
  images?: string[];
  benefits: string[];
  craftStory?: string;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
}
