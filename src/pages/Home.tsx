import Box from "../components/base/Box";
import Input from "../components/base/Input";
import Select from "../components/base/Select";
import TabList from "../components/base/TabList";
import FoodCard from "../components/FoodCard";
import OrderBuilder from "../components/OrderBuilder";
import TodayDate from "../components/TodayDate";
import { useUpdateSearchParam } from "../hooks/useUpdateSearchParam";
import { FOODS } from "../mock-data/foods-list";

export default function Home() {
  const [searchParams, updateSearchParam] = useUpdateSearchParam();

  return (
    <div className="flex w-full h-full items-start relative">
      <div className="w-full h-full flex flex-col py-6 pe-7.5">
        {/* row-1 */}
        <div className="w-full flex justify-between mb-6">
          <div className="flex flex-col gap-y-1">
            <h2 className="text-h1 text-white">Jaeger Resto</h2>
            <TodayDate />
          </div>
          <Input
            className="w-57"
            iconName="search"
            placeholder="Search for food, coffee, etc.."
          />
        </div>
        {/* row-2 */}
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
        {/* row-3 */}
        <div className="w-full flex flex-col mt-6">
          {/* row-1 */}
          <div className="w-full flex items-center justify-between">
            <h4 className="text-h2 text-white">Choose Dishes</h4>
            <Select
              value={searchParams.get("orderType") || ""}
              onChange={(e) => {
                updateSearchParam("orderType", e);
              }}
              className="w-32"
              placeholder="Dine in"
              name="orderType"
              options={[
                { label: "Dine In", value: "dineIn" },
                { label: "Take Away", value: "takeAway" },
                { label: "Delivery", value: "delivery" },
                { label: "Drive Thru", value: "driveThru" },
                { label: "Curbside", value: "curbside" },
              ]}
            />
          </div>
        </div>
        {/* row-4 */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(192px,1.2fr))] gap-y-6 gap-x-7 mt-6 overflow-auto">
          {FOODS.map((f) => (
            <FoodCard food={f} />
          ))}
        </div>
      </div>
      {/* side box */}
      <Box className="w-[409px] h-screen flex shrink-0 p-6" rounded={false}>
        <OrderBuilder />
      </Box>
    </div>
  );
}
