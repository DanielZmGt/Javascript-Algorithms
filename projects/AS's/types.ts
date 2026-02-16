export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'bakery' | 'chef-service' | 'cake' | 'gluten-free';
  imageUrl: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
