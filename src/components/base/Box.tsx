import clsx from "clsx";
import type { PropsWithChildren } from "react";

export default function Box({
  children,
  className,
  rounded = true,
}: PropsWithChildren<{ rounded?: boolean; className?: string }>) {
  return (
    <div className={clsx("bg-dark-bg-2", rounded && "rounded-xl", className)}>
      {children}
    </div>
  );
}
