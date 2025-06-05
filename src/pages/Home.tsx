import Box from "../components/base/Box";
import Input from "../components/base/Input";
import Select from "../components/base/Select";
import TabList from "../components/base/TabList";
import TodayDate from "../components/TodayDate";
import { useUpdateSearchParam } from "../hooks/useUpdateSearchParam";

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
      </div>
      <Box className="w-[409px] h-full shrink-0" rounded={false}></Box>
    </div>
  );
}
