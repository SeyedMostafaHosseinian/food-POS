import type { FoodItem } from "../types/food.interface";
import NoodleFood from "/src/assets/images/foods/Spicy seasoned seafood noodles.png";
import SoupFood from "/src/assets/images/foods/beef-dumpling-in-hot-and-sour-soup.png";
import OmeletteFood from "/src/assets/images/foods/Spicy instant noodle with special omelette.png";
import SpinachLeafFoodImage from "/src/assets/images/foods/Healthy noodle with spinach leaf.png";

export const FOODS: FoodItem[] = [
  {
    id: "1455345",
    name: "Grilled Chicken Sandwich",
    description: "Grilled chicken with lettuce, tomato, and mayo",
    basePrice: 95000,
    image: NoodleFood,
    category: "Main",
    tags: ["grilled", "chicken"],
    calories: 500,
    serveOptions: [
      { type: "dineIn", price: 95000, isAvailable: true },
      { type: "takeAway", price: 92000, isAvailable: true },
      { type: "delivery", isAvailable: false },
    ],
    availableCount: 12,
  },
  {
    id: "254366634",
    image: NoodleFood,
    name: "Veggie Wrap",
    basePrice: 70.03,
    serveOptions: [
      { type: "dineIn", isAvailable: true },
      { type: "takeAway", isAvailable: true },
      { type: "delivery", isAvailable: true },
    ],
    availableCount: 10,
  },
  {
    id: "23442677",
    image: SoupFood,
    name: "Veggie Wrap",
    basePrice: 70000,
    serveOptions: [
      { type: "dineIn", isAvailable: true },
      { type: "takeAway", isAvailable: true },
      { type: "delivery", isAvailable: true },
    ],
    availableCount: 12,
  },
  {
    id: "5437634",
    image: SoupFood,
    name: "Veggie Wrap",
    basePrice: 70000,
    serveOptions: [
      { type: "dineIn", isAvailable: true },
      { type: "takeAway", isAvailable: true },
      { type: "delivery", isAvailable: true },
    ],
    availableCount: 12,
  },
  {
    id: "2543664354634",
    image: OmeletteFood,
    name: "Veggie Wrap",
    basePrice: 70000,
    serveOptions: [
      { type: "dineIn", isAvailable: true },
      { type: "takeAway", isAvailable: true },
      { type: "delivery", isAvailable: true },
    ],
    availableCount: 21,
  },
  {
    id: "2132132",
    image: SpinachLeafFoodImage,
    name: "fdsf",
    basePrice: 4324,
    serveOptions: [{ type: "dineIn", isAvailable: true }],
    availableCount: 12,
  },
  {
    id: "34234234",
    image: SoupFood,
    name: "f2343dsf",
    basePrice: 4324,
    serveOptions: [{ type: "dineIn", isAvailable: true }],
    availableCount: 5,
  },
];
