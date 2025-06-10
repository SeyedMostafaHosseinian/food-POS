import type { FoodItem } from "./food.interface";
import type { Status } from "./status.type";

export interface Order {
  id: string;
  customer: UserInterface;
  items: FoodItem[];
  status: Status;
  totalPayment: number;
  discount: number;
}

export interface UserInterface {
  id: string;
  avatar: string;
  fullName: string;
  email: string;
}
