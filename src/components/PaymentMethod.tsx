import clsx from "clsx";
import Icon from "./Icon";
import { useState } from "react";

const paymentMethodsData = [
  {
    id: 221,
    label: "Credit Card",
    iconName: "card",
  },
  {
    id: 281,
    label: "Paypal",
    iconName: "paypal",
  },
  {
    id: 291,
    label: "Cash",
    iconName: "wallet",
  },
];
export default function PaymentMethod() {
  const [activeMethodId, setActiveMethodId] = useState(
    paymentMethodsData[0].id
  );
  return (
    <div className="w-full flex gap-x-2">
      {paymentMethodsData.map((pmd) => {
        const isActive = pmd.id === activeMethodId;
        return (
          <button
            onClick={() => setActiveMethodId(pmd.id)}
            key={pmd.id}
            className={clsx(
              "flex flex-col items-center gap-y-0.5 border py-2.5 px-4 rounded-lg w-26 cursor-pointer relative",
              isActive
                ? "text-white border-white"
                : "text-light-text border-light-text"
            )}
          >
            <Icon id={pmd.iconName} className="w-6 h-6" />
            <span className="text-body-normal-medium">{pmd.label}</span>
            {isActive && (
              <span className="rounded-full bg-primary absolute top-2 end-2 w-4 h-4 flex items-center justify-center">
                <Icon
                  id="tick"
                  className="text-dark-bg-2 w-full h-full stroke-dark-bg-2"
                />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
