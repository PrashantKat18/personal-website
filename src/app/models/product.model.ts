export interface Product {
  name: string;
  category: string;
  description: string;
  image: string;
  badge: string;
  uses: string[];
  keyFeatures?: string[];
  isUpcoming?: boolean;
}
