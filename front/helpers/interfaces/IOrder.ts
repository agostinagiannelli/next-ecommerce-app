import { IUser } from "./IUser";
import { IProduct } from "./IProduct";

export interface IOrder {
  id: number;
  status: "pending" | "approved" | "rejected";
  date: Date;
  user: IUser;
  products: IProduct[];
}