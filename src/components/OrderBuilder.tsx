import { useState } from "react";
import ORDER_TYPE_OPTIONS from "../constants/order-type-options";
import clsx from "clsx";
import OrderFoodList from "./OrderFoodList";
import CostSummary from "./CostSummary";

export default function OrderBuilder() {
  const [selectedOrderType, setSelectedOrderType] = useState(
    ORDER_TYPE_OPTIONS[0]
  );
  return (
    <div className="w-full flex flex-col gap-y-6 justify-between flex-1">
      {/* order number */}
      <h5 className="text-h2 text-white">Orders #{34425}</h5>
      {/* tab buttons */}
      <div className="w-full flex items-center gap-x-2">
        {ORDER_TYPE_OPTIONS.map((t) => (
          <button
            onClick={() => setSelectedOrderType(t)}
            className={clsx(
              "rounded-lg px-3 py-1.75 cursor-pointer text-body-normal-semibold",
              selectedOrderType === t
                ? "bg-primary text-white"
                : "border border-dark-line text-primary hover:bg-primary/20 hover:border-transparent"
            )}
          >
            {t}
          </button>
        ))}
      </div>
      {/* head of list */}
      <div className="w-full flex items-center justify-between gap-x-4">
        <span className="text-white text-body-large-semibold flex-1">item</span>
        <span className="text-white text-body-large-semibold w-12 shrink-0 flex">
          Qty
        </span>
        <span className="text-white text-body-large-semibold w-12 shrink-0">
          Price
        </span>
      </div>
      {/* foods list */}
      <div className="overflow-auto border-y border-dark-line py-6">
        <OrderFoodList />
      </div>
      {/* cost summary */}
      <CostSummary />
    </div>
  );
}
