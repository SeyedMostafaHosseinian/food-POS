import clsx from "clsx";
import { useUpdateSearchParam } from "../../hooks/useUpdateSearchParam";

export default function TabList({ list }: { list: string[] }) {
  const tabQueryKey = "foodType";
  const [searchParams, updateSearchParams] = useUpdateSearchParam();
  const activeTab = searchParams.get(tabQueryKey) || list[0] || "";
  return (
    <ul className="w-full flex items-center gap-x-8 border-b border-dark-line">
      {list.map((i) => (
        <li
          key={i}
          onClick={() => updateSearchParams(tabQueryKey, i)}
          className={clsx(
            "text-body-normal-semibold py-3 cursor-pointer relative flex flex-col justify-between",
            activeTab === i ? "text-primary" : "text-white"
          )}
        >
          <span>{i}</span>
          {activeTab === i && (
            <span className="w-full h-0.75 bg-primary rounded absolute -bottom-0.5"></span>
          )}
        </li>
      ))}
    </ul>
  );
}
