import type { FoodItem } from "../types/food.interface";
import Box from "./base/Box";

export default function FoodCard({ food }: { food: FoodItem }) {
  return (
    <div className="w-full flex items-end relative h-64.75">
      <Box
        rounded={false}
        className="w-full h-4/5 rounded-2xl flex flex-col items-center text-white cursor-pointer"
      >
        <img
          className="rounded-full w-[132px] aspect-square -mt-12.5"
          src={food?.image}
          alt="image of food"
        />
        <span className="text-body-normal-medium mt-4">{food?.name}</span>
        <span className="mt-2 text-body-normal-regular">
          $ {food?.basePrice}
        </span>
        <span className="text-body-normal-regular mt-1 text-light-text">
          {food?.availableCount} Bowls available
        </span>
      </Box>
    </div>
  );
}
