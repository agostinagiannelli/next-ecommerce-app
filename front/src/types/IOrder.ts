export interface IOrder {
  id: number;
  status: "pending" | "approved" | "rejected";
  date: Date;
  userId: number;
  products: [];
}