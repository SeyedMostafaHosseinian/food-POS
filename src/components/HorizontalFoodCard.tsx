import type { FoodItem } from "../types/food.interface";

export default function HorizontalFoodCard({ food }: { food: FoodItem }) {
  return (
    <div className="w-full flex justify-between gap-x-4">
      <img
        className="w-13.5 h-13.5 shrink-0"
        src={food.image}
        alt="image of food"
      />
      <div className="w-full flex flex-col gap-y-1">
        <p className="text-lighter-text text-body-normal-medium">{food.name}</p>
        <span className="text-light-text text-body-small-medium">
          0 dishes ordered
        </span>
      </div>
    </div>
  );
}
