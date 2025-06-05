export type ServeType =
  | "dineIn"
  | "takeAway"
  | "delivery"
  | "driveThru"
  | "curbside";

export interface ServeOption {
  type: ServeType;
  price?: number;
  isAvailable?: boolean;
}

export interface FoodItem {
  id: string;
  name: string;
  description?: string;
  basePrice: number;
  image?: string;
  category?: string;
  tags?: string[];
  calories?: number;
  serveOptions: ServeOption[];
  availableCount?: number;
}
