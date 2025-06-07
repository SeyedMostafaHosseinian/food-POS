import { useState } from "react";
import ORDER_TYPE_OPTIONS from "../constants/order-type-options";
import clsx from "clsx";
import OrderFoodList from "./OrderFoodList";
import Button from "./base/Button";

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
      {/* line */}
      <span className="w-full border-b border-dark-line"></span>
      {/* foods list */}
      <div className="flex-1 overflow-auto border-b border-dark-line">
        <OrderFoodList />
      </div>
      {/* price counter */}
      <div className="w-full flex flex-col gap-y-4">
        <div className="w-full flex justify-between items-center">
          <span className="text-light-text text-body-normal-regular">
            Discount
          </span>
          <span className="text-white text-body-large-medium">$ 0</span>
        </div>
        <div className="w-full flex justify-between items-center">
          <span className="text-light-text text-body-normal-regular">
            Sub total
          </span>
          <span className="text-white text-body-large-medium">$ 55.5</span>
        </div>
      </div>
      {/* button */}
      <Button className="w-full shadow-custom-1">Continue to Payment</Button>
    </div>
  );
}
