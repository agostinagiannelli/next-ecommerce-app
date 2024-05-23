export interface IProduct {
  id?: number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
  rating: number;
}