import { useRef, useState, type InputHTMLAttributes } from "react";
import Icon from "../Icon";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  iconName?: string;
}

export default function Input({
  iconName,
  className,
  disabled,
  ...props
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      onClick={() => {
        inputRef?.current?.focus();
      }}
      className={clsx(
        "bg-dark-form-bg rounded-lg border text-body-normal-regular transition-opacity gap-x-2 text-lighter-text h-12 flex items-center justify-start p-3.5",
        className,
        disabled ? "opacity-40 cursor-not-allowed" : "cursor-text",
        isFocused ? "border-primary" : "border-dark-line"
      )}
    >
      {iconName && (
        <Icon className="text-white w-5 h-5 shrink-0" id={iconName} />
      )}
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        ref={inputRef}
        className="w-full h-full bg-none outline-none disabled:cursor-not-allowed"
        {...props}
        disabled={disabled}
      />
    </div>
  );
}
