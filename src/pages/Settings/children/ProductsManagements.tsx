import Button from "../../../components/base/Button";
import Select from "../../../components/base/Select";
import TabList from "../../../components/base/TabList";
import FoodEditCard from "../../../components/FoodEditCard";
import Icon from "../../../components/Icon";
import { FOODS } from "../../../mock-data/foods-list";

export default function ProductsManagements() {
  return (
    <div className="w-full h-full px-6 flex flex-col">
      {/* row-1 */}
      <div className="w-full flex items-center justify-between">
        <span className="text-white text-h2">Products Management</span>
        <Select
          className="w-44.5"
          name="filter"
          options={[{ label: "category1", value: "value" }]}
          customIconName="option"
          placeholder="Manage Categories"
        />
      </div>
      {/* row-2 */}
      <div className="mt-6">
        <TabList
          list={[
            "Hot Dishes",
            "Cold Dishes",
            "Soup",
            "Grill",
            "Appetizer",
            "Dessert",
          ]}
        />
      </div>
      {/* row-4 */}
      <div className="w-full h-full mt-6 grid grid-cols-[repeat(auto-fill,minmax(221px,1.2fr))] gap-4 overflow-auto">
        <button className="border-1 cursor-pointer border-dashed border-primary rounded-xl flex items-center justify-center">
          <div className="flex flex-col gap-y-2 text-primary items-center">
            <Icon id="plus" className="w-5 h-5" />
            <span className="text-body-large-semibold mt-5">Add new dish</span>
          </div>
        </button>
        {FOODS.map((f) => (
          <FoodEditCard food={f} />
        ))}
      </div>
      {/* row-5 */}
      <div className="h-32 w-full flex items-end justify-start shrink-0">
        <div className="w-full flex gap-x-2">
          <Button className="w-[172px]" variant="outline">
            Discard Changes
          </Button>
          <Button className="w-[172px]">Save Changes</Button>
        </div>
      </div>
    </div>
  );
}
