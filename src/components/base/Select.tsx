import { useEffect, useState } from "react";
import Icon from "../Icon";
import useOutsideClick from "../../hooks/useOutSideClick";
import useDropdownDirection from "../../hooks/useDropDownDirection";
import clsx from "clsx";

type Option = {
  label: string;
  value: string;
};

interface CustomSelectProps {
  name: string;
  options: Option[];
  value?: string;
  className?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  customIconName?: string;
}

export default function Select({
  className,
  options,
  onChange,
  name,
  placeholder,
  customIconName,
  value,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option | undefined>(
    options.find((opt) => opt.value === value) || options[0]
  );
  const ref = useOutsideClick(() => setOpen(false));
  const { containerRef, openUpward, checkDirection } = useDropdownDirection(
    40,
    options.length
  );

  const handleSelect = (option: Option) => {
    setSelected(option);
    onChange?.(option.value);
    setOpen(false);
  };

  useEffect(() => {
    checkDirection();
  }, [open]);

  return (
    <div
      className={clsx(
        "rounded-lg text-white border border-dark-line bg-dark-bg-2 h-12 relative text-body-normal-medium",
        className
      )}
      ref={containerRef}
    >
      <ul ref={ref}>
        <button
          onClick={() => {
            checkDirection();
            setOpen(!open);
          }}
          className="w-full h-full p-3.5 flex items-center gap-x-1 cursor-pointer -mt-0.75"
        >
          <Icon id={customIconName || "down"} />
          <span>{selected?.label || placeholder || options?.[0]?.label}</span>
        </button>
        {/* {open && ( */}
        <div
          className={`w-full rounded-lg bg-dark-bg-2 border border-dark-line transform absolute start-0 ${
            openUpward ? "bottom-full mb-1" : "top-[50px]"
          } ${
            open
              ? "opacity-100 z-90 translate-y-0 transition-all "
              : `opacity-0 -z-10 h-0 ${
                  openUpward ? "translate-y-2" : "-translate-y-2"
                }`
          }`}
        >
          <div className="max-h-52 p-2 overflow-auto flex flex-col gap-y-1">
            {options?.map((o) => (
              <li
                className={clsx(
                  "p-3 hover:bg-dark-form-bg rounded-md transition-all cursor-pointer",
                  selected?.value === o.value && "text-primary bg-primary/10"
                )}
                onClick={() => handleSelect(o)}
                key={o.value}
              >
                {o.label}
              </li>
            ))}
          </div>
        </div>
        {/* )} */}
        <input type="hidden" name={name} value={selected?.value || ""} />
      </ul>
    </div>
  );
}
