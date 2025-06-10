import clsx from "clsx";
import Box from "./base/Box";
import Icon from "./Icon";

export default function StatCard({
  growPercent,
  iconClassName,
  value,
  iconName,
  label,
  valuePrefix,
}: {
  label: string;
  growPercent: number;
  value: number;
  iconClassName: string;
  iconName: string;
  valuePrefix?: string;
}) {
  return (
    <Box className="rounded-lg w-50 h-35.75 flex p-4 flex-col">
      {/* row-1 */}
      <div className="w-full flex items-center">
        {/* icon box */}
        <div className="w-9.5 h-9.5 rounded-lg bg-dark-bg-1 flex items-center justify-center">
          <Icon id={iconName} className={clsx("w-6 h-6", iconClassName)} />
        </div>
        {/* grow percent */}
        <span
          className={clsx(
            "text-body-small-medium ms-3",
            growPercent > 0 && "text-accent-green",
            growPercent < 0 && "text-accent-red",
            growPercent === 0 && "text-white"
          )}
        >
          {growPercent > 0 && "+"}
          {growPercent < 0 && "-"}
          {growPercent}%
        </span>
        {/* arrow icon */}
        <span
          className={clsx(
            "rounded-full w-4.5 h-4.5 flex items-center justify-center ms-1.5",
            growPercent > 0 && "bg-accent-green/24",
            growPercent < 0 && "bg-accent-red/24",
            growPercent === 0 && "bg-white/24"
          )}
        >
          {growPercent === 0 ? (
            <span className="text-white text-xl -mt-0.5">-</span>
          ) : (
            <Icon
              className={clsx(
                "w-3.5 h-3.5",
                growPercent > 0 && "text-accent-green",
                growPercent < 0 && "text-accent-red"
              )}
              id={
                growPercent > 0
                  ? "arrow-up"
                  : (growPercent < 0 && "arrow-down") || ""
              }
            />
          )}
        </span>
      </div>
      {/* row-2 */}
      <span className="text-h1 text-white mt-2">
        {valuePrefix && <span>{valuePrefix}</span>}
        {value?.toLocaleString()}
      </span>
      {/* row-3 */}
      <span className="text-body-normal-medium text-light-text mt-2">
        {label}
      </span>
    </Box>
  );
}
