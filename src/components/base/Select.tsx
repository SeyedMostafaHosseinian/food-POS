import { useEffect, useState } from "react";
import Icon from "../Icon";
import useOutsideClick from "../../hooks/useOutSideClick";
import useDropdownDirection from "../../hooks/useDropDownDirection";

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
}

export default function Select({
  className,
  options,
  onChange,
  name,
  placeholder,
  value,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option | undefined>(
    options.find((opt) => opt.value === value)
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
    <div ref={containerRef}>
      <ul
        ref={ref}
        className={`rounded-lg text-white border border-dark-line h-12 relative text-body-normal-medium ${className} ${
          !open ? "" : ""
        }`}
      >
        <button
          onClick={() => {
            checkDirection();
            setOpen(!open);
          }}
          className="w-full h-full p-3.5 flex items-center gap-x-1"
        >
          <Icon id="down" />
          <span>{selected?.label || placeholder}</span>
        </button>
        {/* {open && ( */}
        <div
          className={`w-full flex flex-col rounded-lg bg-dark-bg-2 transform absolute start-0 p-2 ${
            openUpward ? "bottom-full mb-1" : "top-[50px]"
          } ${
            open
              ? "opacity-100 z-90 translate-y-0 transition-all "
              : `opacity-0 -z-10 h-0 ${
                  openUpward ? "translate-y-2" : "-translate-y-2"
                }`
          }`}
        >
          <div className="max-h-52 overflow-auto">
            {options.map((o) => (
              <li
                className="p-3 hover:bg-dark-form-bg rounded-md transition-all"
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
