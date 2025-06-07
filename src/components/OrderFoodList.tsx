import { FOODS } from "../mock-data/foods-list";
import OrderFoodItem from "./OrderFoodItem";

export default function OrderFoodList() {
  return (
    <div className="w-full flex flex-1 overflow-y-auto flex-col gap-y-6">
      {FOODS.map((food) => (
        <OrderFoodItem food={food} />
      ))}
    </div>
  );
}
