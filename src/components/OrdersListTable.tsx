import type { Order } from "../types/order.interface";
import StatusBadge from "./base/StatusBadge";

export default function OrdersListTable({ orders }: { orders: Order[] }) {
  return (
    <table className="w-full h-full mt-4">
      <thead>
        <tr className="text-white flex justify-between border-b border-dark-line pb-4 text-body-normal-semibold *:w-1/4 *:text-start">
          <th>Customer</th>
          <th>Menu</th>
          <th>Total payment</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody className="h-full block overflow-auto">
        {orders.map((o) => (
          <tr
            key={o.id}
            className="w-full flex mt-4 justify-between text-white items-center *:w-1/4 *:text-start"
          >
            <td className="flex items-center gap-x-4">
              <div className="w-8 h-8 rounded-full flex items-center bg-accent-blue"></div>
              <span className="text-light-text text-body-normal-regular">
                {o.customer.fullName}
              </span>
            </td>
            <td className="flex flex-col gap-y-0.5">
              {o.items.map((i) => (
                <span
                  className="text-light-text text-body-normal-regular"
                  key={i.id}
                >
                  {i.name}
                </span>
              ))}
            </td>
            <td className="text-light-text text-body-normal-regular">
              ${o.totalPayment.toLocaleString()}
            </td>
            <td>
              <StatusBadge label={o.status} status={o.status} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
