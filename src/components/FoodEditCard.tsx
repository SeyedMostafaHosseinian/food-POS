import type { FoodItem } from "../types/food.interface";
import Box from "./base/Box";
import Icon from "./Icon";

export default function FoodEditCard({ food }: { food: FoodItem }) {
  return (
    <Box
      rounded={false}
      className="w-full h-74.75 rounded-2xl overflow-hidden flex flex-col items-center text-white cursor-pointer border border-dark-line"
    >
      <img
        className="rounded-full w-[127] aspect-square mt-6"
        src={food?.image}
        alt="image of food"
      />
      <span className="text-body-normal-medium mt-4">{food?.name}</span>
      <div className="w-full flex justify-center items-center gap-x-2 mt-2">
        <span className=" text-body-normal-regular">$ {food?.basePrice}</span>
        <span className="w-1 h-1 rounded-full bg-light-text"></span>
        <span className="text-body-normal-regular text-light-text">
          {food?.availableCount} Bowls available
        </span>
      </div>
      {/* this is for fill empty space for bottom button is stick to bottom */}
      <span className="flex-1"></span>
      {/* edit button */}
      <button className="w-full flex items-center justify-center text-primary bg-primary/24 gap-x-2 py-4">
        <Icon id="edit" className=" w-4 h-4" />
        <span className="text-button-normal-semibold">Edit dish</span>
      </button>
    </Box>
  );
}
