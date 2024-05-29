export interface ProductProps {
  id?: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
  shortDescription?: string;
  rating?: number;
}