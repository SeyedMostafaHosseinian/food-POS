import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import Box from "../components/base/Box";
import Button from "../components/base/Button";
import Select from "../components/base/Select";
import HorizontalFoodCard from "../components/HorizontalFoodCard";
import OrdersListTable from "../components/OrdersListTable";
import StatCard from "../components/StatCard";
import TodayDate from "../components/TodayDate";
import { FOODS } from "../mock-data/foods-list";
import type { Order } from "../types/order.interface";

const orders: Order[] = [
  {
    id: "34343",
    customer: {
      id: "user1",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      fullName: "Eren Jaegar",
      email: "ali.rezaei@example.com",
    },
    items: [
      {
        id: "food1",
        name: "Cheeseburger",
        description:
          "Delicious grilled cheeseburger with fresh lettuce and tomato",
        basePrice: 8.99,
        image: "https://example.com/images/cheeseburger.jpg",
        category: "Fast Food",
        tags: ["burger", "cheese", "beef"],
        calories: 550,
        serveOptions: [
          { type: "dineIn", price: 0, isAvailable: true },
          { type: "takeAway", price: 0, isAvailable: true },
          { type: "delivery", price: 2, isAvailable: true },
        ],
        availableCount: 10,
      },
    ],
    status: "preparing",
    totalPayment: 10.99,
    discount: 0,
  },
  {
    id: "343e333",
    customer: {
      id: "user2",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      fullName: "Reiner Braunn",
      email: "sara.mohammadi@example.com",
    },
    items: [
      {
        id: "food2",
        name: "Veggie Pizza",
        basePrice: 12.5,
        category: "Pizza",
        tags: ["vegetarian", "cheese"],
        calories: 700,
        serveOptions: [
          { type: "delivery", price: 3, isAvailable: true },
          { type: "takeAway", price: 0, isAvailable: true },
        ],
        availableCount: 5,
      },
    ],
    status: "pending",
    totalPayment: 12.5,
    discount: 1.5,
  },
  {
    id: "r9w0r3f",
    customer: {
      id: "user3",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      fullName: "Levi Ackerman",
      email: "reza.ahmadi@example.com",
    },
    items: [
      {
        id: "food3",
        name: "Caesar Salad",
        description: "Fresh Caesar salad with chicken and croutons",
        basePrice: 9.75,
        category: "Salads",
        tags: ["salad", "chicken"],
        calories: 350,
        serveOptions: [
          { type: "dineIn", price: 0, isAvailable: true },
          { type: "curbside", price: 1, isAvailable: false },
        ],
        availableCount: 20,
      },
    ],
    status: "pending",
    totalPayment: 9.75,
    discount: 0,
  },
  {
    id: "0r9ffd",
    customer: {
      id: "user3",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      fullName: "Levi Ackerman",
      email: "reza.ahmadi@example.com",
    },
    items: [
      {
        id: "food3",
        name: "Caesar Salad",
        description: "Fresh Caesar salad with chicken and croutons",
        basePrice: 9.75,
        category: "Salads",
        tags: ["salad", "chicken"],
        calories: 350,
        serveOptions: [
          { type: "dineIn", price: 0, isAvailable: true },
          { type: "curbside", price: 1, isAvailable: false },
        ],
        availableCount: 20,
      },
    ],
    status: "completed",
    totalPayment: 9.75,
    discount: 0,
  },
  {
    id: "6395820gs",
    customer: {
      id: "user3",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      fullName: "Levi Ackerman",
      email: "reza.ahmadi@example.com",
    },
    items: [
      {
        id: "food3",
        name: "Caesar Salad",
        description: "Fresh Caesar salad with chicken and croutons",
        basePrice: 9.75,
        category: "Salads",
        tags: ["salad", "chicken"],
        calories: 350,
        serveOptions: [
          { type: "dineIn", price: 0, isAvailable: true },
          { type: "curbside", price: 1, isAvailable: false },
        ],
        availableCount: 20,
      },
    ],
    status: "preparing",
    totalPayment: 9.75,
    discount: 0,
  },
  {
    id: "32535ffkew;",
    customer: {
      id: "user3",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      fullName: "Levi Ackerman",
      email: "reza.ahmadi@example.com",
    },
    items: [
      {
        id: "food3",
        name: "Caesar Salad",
        description: "Fresh Caesar salad with chicken and croutons",
        basePrice: 9.75,
        category: "Salads",
        tags: ["salad", "chicken"],
        calories: 350,
        serveOptions: [
          { type: "dineIn", price: 0, isAvailable: true },
          { type: "curbside", price: 1, isAvailable: false },
        ],
        availableCount: 20,
      },
    ],
    status: "preparing",
    totalPayment: 9.75,
    discount: 0,
  },
  {
    id: "63644267g",
    customer: {
      id: "user3",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      fullName: "Levi Ackerman",
      email: "reza.ahmadi@example.com",
    },
    items: [
      {
        id: "food3",
        name: "Caesar Salad",
        description: "Fresh Caesar salad with chicken and croutons",
        basePrice: 9.75,
        category: "Salads",
        tags: ["salad", "chicken"],
        calories: 350,
        serveOptions: [
          { type: "dineIn", price: 0, isAvailable: true },
          { type: "curbside", price: 1, isAvailable: false },
        ],
        availableCount: 20,
      },
    ],
    status: "completed",
    totalPayment: 9.75,
    discount: 0,
  },
  {
    id: "343erewq",
    customer: {
      id: "user3",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      fullName: "Levi Ackerman",
      email: "reza.ahmadi@example.com",
    },
    items: [
      {
        id: "food3",
        name: "Caesar Salad",
        description: "Fresh Caesar salad with chicken and croutons",
        basePrice: 9.75,
        category: "Salads",
        tags: ["salad", "chicken"],
        calories: 350,
        serveOptions: [
          { type: "dineIn", price: 0, isAvailable: true },
          { type: "curbside", price: 1, isAvailable: false },
        ],
        availableCount: 20,
      },
    ],
    status: "completed",
    totalPayment: 9.75,
    discount: 0,
  },
  {
    id: "3242feff",
    customer: {
      id: "user3",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      fullName: "Levi Ackerman",
      email: "reza.ahmadi@example.com",
    },
    items: [
      {
        id: "food3",
        name: "Caesar Salad",
        description: "Fresh Caesar salad with chicken and croutons",
        basePrice: 9.75,
        category: "Salads",
        tags: ["salad", "chicken"],
        calories: 350,
        serveOptions: [
          { type: "dineIn", price: 0, isAvailable: true },
          { type: "curbside", price: 1, isAvailable: false },
        ],
        availableCount: 20,
      },
    ],
    status: "pending",
    totalPayment: 9.75,
    discount: 0,
  },
  {
    id: "754643r",
    customer: {
      id: "user3",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      fullName: "Levi Ackerman",
      email: "reza.ahmadi@example.com",
    },
    items: [
      {
        id: "food3",
        name: "Caesar Salad",
        description: "Fresh Caesar salad with chicken and croutons",
        basePrice: 9.75,
        category: "Salads",
        tags: ["salad", "chicken"],
        calories: 350,
        serveOptions: [
          { type: "dineIn", price: 0, isAvailable: true },
          { type: "curbside", price: 1, isAvailable: false },
        ],
        availableCount: 20,
      },
    ],
    status: "pending",
    totalPayment: 9.75,
    discount: 0,
  },
];

const data = [
  {
    name: "Dine In",
    percent: 31.47,
    count: 2400,
    fill: "var(--color-accent-orange)",
  },
  {
    name: "To Go",
    percent: 26.69,
    count: 4567,
    fill: "var(--color-accent-blue)",
  },
  {
    name: "Delivery",
    percent: 100,
    count: 4567,
    fill: "var(--color-accent-red)",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(150%, -50%)",
  lineHeight: "24px",
};

export default function Dashboard() {
  return (
    <div className="w-full h-screen py-6 flex gap-x-6 pr-6">
      {/* box-1 */}
      <div className="w-full h-full flex flex-col">
        {/* row-1 */}
        <div className="w-full flex flex-col gap-y-1">
          <h2 className="text-white text-h1">Dashboard</h2>
          <TodayDate />
        </div>
        {/* line */}
        <span className="my-6 h-0.25 bg-dark-line w-full"></span>
        {/* row-2 */}
        <div className="w-full flex gap-x-6">
          <StatCard
            label="Total Revenue"
            value={104343.0}
            valuePrefix="$"
            iconName="coin"
            iconClassName="text-accent-purple"
            growPercent={23.5677}
          />
          <StatCard
            label="Total Dish Ordered"
            value={243.0}
            iconName="bookmark"
            iconClassName="text-accent-orange"
            growPercent={-23.5677}
          />
          <StatCard
            label="Total Dish Ordered"
            value={243.0}
            iconName="customer"
            iconClassName="text-accent-blue"
            growPercent={0}
          />
        </div>
        {/* row-3 */}
        <Box className="rounded-lg p-6 mt-6 flex flex-col items-start h-full">
          {/* row-1 */}
          <div className="w-full flex justify-between items-center">
            <span className="text-h2 text-white">Order Report</span>
            <Select
              className="w-32"
              customIconName="option"
              name="filterOrder"
              options={[
                {
                  label: "Completed",
                  value: "completed",
                },
                {
                  label: "Preparing",
                  value: "preparing",
                },
                {
                  label: "Pending",
                  value: "pending",
                },
              ]}
              placeholder="Filter Order"
            />
          </div>
          {/* row-2 */}
          <OrdersListTable orders={orders} />
        </Box>
      </div>
      {/* box-2 */}
      <div className="max-w-[429px] w-1/3 h-full gap-y-6 shrink-0 flex flex-col">
        <Box className="rounded-lg p-6 h-3/5 flex flex-col">
          {/* filter and header */}
          <div className="w-full flex items-center justify-between">
            <span className="text-white text-h2">Most Ordered</span>
            <Select
              className="w-25"
              name="filter"
              options={[{ label: "today", value: "today" }]}
            />
          </div>
          {/* line */}
          <span className="w-full h-0.25 bg-dark-line my-5"></span>
          {/* most ordered list */}
          <div className="w-full flex flex-col gap-y-6 overflow-auto">
            {FOODS.map((f) => (
              <HorizontalFoodCard key={f.id} food={f} />
            ))}
          </div>
          {/* button */}
          <Button className="mt-8" variant="outline">
            View All
          </Button>
        </Box>
        <Box className="rounded-lg p-6 flex-1">
          {/* filter and header */}
          <div className="w-full flex items-center justify-between">
            <span className="text-white text-h2">Most Type of Order</span>
            <Select
              className="w-25"
              name="filter"
              options={[{ label: "today", value: "today" }]}
            />
          </div>
          <div className="flex h-full">
            <Chart />
          </div>
        </Box>
      </div>
    </div>
  );
}

function Chart() {
  return (
    <ResponsiveContainer width={200} height={200}>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="99%"
        outerRadius="60%"
        barCategoryGap={0}
        barGap={0}
        data={data}
      >
        <RadialBar
          label={{ position: "insideStart", fill: "#fff", display: "none" }}
          background={{ fill: "var(--color-dark-bg-1)" }}
          cornerRadius={16}
          dataKey="percent"
        />
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}
