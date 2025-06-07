import type { FoodItem } from "../types/food.interface";

export const FOODS: FoodItem[] = [
  {
    id: "1455345",
    name: "Grilled Chicken Sandwich",
    description: "Grilled chicken with lettuce, tomato, and mayo",
    basePrice: 95000,
    image: "/src/assets/images/foods/salted-pasta-with-mushroom-sauce.png",
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
    image: "/src/assets/images/foods/Spicy seasoned seafood noodles.png",
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
    image: "/src/assets/images/foods/beef-dumpling-in-hot-and-sour-soup.png",
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
    image: "/src/assets/images/foods/beef-dumpling-in-hot-and-sour-soup.png",
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
    image:
      "/src/assets/images/foods/Spicy instant noodle with special omelette.png",
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
    image: "/src/assets/images/foods/Healthy noodle with spinach leaf.png",
    name: "fdsf",
    basePrice: 4324,
    serveOptions: [{ type: "dineIn", isAvailable: true }],
    availableCount: 12,
  },
  {
    id: "34234234",
    image: "/src/assets/images/foods/beef-dumpling-in-hot-and-sour-soup.png",
    name: "f2343dsf",
    basePrice: 4324,
    serveOptions: [{ type: "dineIn", isAvailable: true }],
    availableCount: 5,
  },
];
