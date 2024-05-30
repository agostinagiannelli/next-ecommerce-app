export interface ProductProps {
  id?: number;
  name: string;
  description: string;
  shortDescription: string;
  rating: number;
  price: number;
  stock: number;
  image: string;
  categoryId: number
}