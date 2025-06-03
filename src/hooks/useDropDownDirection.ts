import { useRef, useState } from "react";

export default function useDropdownDirection(itemHeight = 40, optionCount = 5) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openUpward, setOpenUpward] = useState(false);

  const checkDirection = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const dropdownHeight = itemHeight * Math.min(optionCount, 5);
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      setOpenUpward(spaceBelow < dropdownHeight && spaceAbove > dropdownHeight);
    }
  };

  return { containerRef, openUpward, checkDirection };
}
