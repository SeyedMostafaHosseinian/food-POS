import type { HTMLAttributes } from "react";
import clsx from "clsx";
import type { Status } from "../../types/status.type";

interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  status: Status;
  label: string;
}

const statusStyles: Record<Status, { classes: string }> = {
  pending: {
    classes:
      "bg-accent-orange dark:text-accent-orange dark:bg-accent-orange/20",
  },
  preparing: {
    classes:
      "bg-accent-purple dark:text-accent-purple dark:bg-accent-purple/20",
  },
  completed: {
    classes: "bg-accent-green dark:text-accent-green dark:bg-accent-green/20",
  },
};

export default function StatusBadge({
  status,
  className,
  label,
  ...props
}: StatusBadgeProps) {
  const style = statusStyles[status];

  return (
    <span
      className={clsx(
        "inline-flex text-white items-center px-3 py-1 rounded-full text-body-normal-medium",
        style.classes,
        className
      )}
      {...props}
    >
      <span className="-mt-0.5">{label}</span>
    </span>
  );
}
