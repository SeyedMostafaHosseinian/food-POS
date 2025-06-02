import type { ButtonHTMLAttributes } from "react";

type Variant = "fill" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  justIcon?: boolean;
}

export default function Button({
  children,
  variant = "fill",
  className,
  justIcon,
  ...props
}: ButtonProps) {
  const variantClassNames: Record<Variant, string> = {
    outline: "border border-primary text-primary",
    fill: "bg-primary text-white shadow-custom-1",
  };

  return (
    <button
      {...props}
      data-variant={variant}
      data-just-icon={justIcon}
      className={`rounded-lg flex max-h-12 items-center justify-center disabled:shadow-none disabled:opacity-45 disabled:cursor-not-allowed
        text-button-normal-semibold py-3.5 cursor-pointer hover:opacity-80 active:opacity-50
        transition-opacity 
        ${variantClassNames[variant]} ${className} ${
        justIcon ? "px-3.5 max-w-12 *:w-5 *:h-5 *:shrink-0" : ""
      }`}
    >
      {children}
    </button>
  );
}
