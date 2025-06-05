import Box from "../components/base/Box";
import Input from "../components/base/Input";
import Select from "../components/base/Select";
import TabList from "../components/base/TabList";
import FoodCard from "../components/FoodCard";
import TodayDate from "../components/TodayDate";
import { useUpdateSearchParam } from "../hooks/useUpdateSearchParam";
import type { FoodItem } from "../types/food.interface";

const mockFoods: FoodItem[] = [
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
          {mockFoods.map((f) => (
            <FoodCard food={f} />
          ))}
        </div>
      </div>
      <Box className="w-[409px] h-full shrink-0" rounded={false}></Box>
    </div>
  );
}
