import { type PropsWithChildren } from "react";

export default function Label({
  children,
  text,
  id,
  className,
}: PropsWithChildren<{ text: string; id?: string; className?: string }>) {
  return (
    <label className={className} htmlFor={id}>
      <span className="text-white mb-2 text-body-normal-medium">{text}</span>
      {children}
    </label>
  );
}
