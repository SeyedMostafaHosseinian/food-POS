import { useRef, useState, type InputHTMLAttributes } from "react";
import Icon from "../Icon";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  iconName?: string;
  defaultFont?: boolean;
  inputClassName?: string;
}

export default function Input({
  iconName,
  className,
  inputClassName,
  disabled,
  defaultFont = true,
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
        "bg-dark-form-bg rounded-lg border transition-opacity gap-x-2 text-lighter-text h-12 flex items-center justify-start p-3.5",
        className,
        disabled ? "opacity-40 cursor-not-allowed" : "cursor-text",
        isFocused ? "border-primary" : "border-dark-line",
        defaultFont && "text-body-normal-regular "
      )}
    >
      {iconName && (
        <Icon className="text-white w-5 h-5 shrink-0" id={iconName} />
      )}
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        ref={inputRef}
        className={clsx(
          "w-full h-full bg-none outline-none disabled:cursor-not-allowed",
          inputClassName
        )}
        {...props}
        disabled={disabled}
      />
    </div>
  );
}
