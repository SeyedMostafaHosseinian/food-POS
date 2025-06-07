import type { FoodItem } from "../types/food.interface";
import Button from "./base/Button";
import Input from "./base/Input";
import Icon from "./Icon";

export default function OrderFoodItem({ food }: { food: FoodItem }) {
  return (
    <div className="flex gap-x-4">
      {/* box-1 */}
      <div className="w-full flex flex-col gap-y-2.5">
        {/* food data */}
        <div className="w-full flex items-center">
          <div className="flex w-full">
            <img className="w-10 h-10" src={food?.image} alt="image of food" />
            <div className="flex flex-col ms-2">
              <p className="text-white text-body-normal-medium">{food.name}</p>
              <span className="text-light-text text-body-small-medium">
                $ {food?.basePrice}
              </span>
            </div>
          </div>
          <Input
            type="number"
            defaultValue={1}
            defaultFont={false}
            className="w-12 text-white shrink-0 text-body-large-medium"
            inputClassName="text-center"
          />
        </div>
        {/* food customer descriptions */}
        <Input
          className="w-full"
          type="text"
          placeholder="Please, just a little bit spicy only."
        />
      </div>
      {/* box-2 */}
      <div className="flex flex-col items-center gap-y-2.5">
        {/* total price */}
        <span className="text-white text-body-large-medium h-12 flex items-center justify-center">
          $3.5
        </span>
        {/* trash button */}
        <Button variant="outline" justIcon>
          <Icon id="trash" className="text-primary" />
        </Button>
      </div>
    </div>
  );
}
