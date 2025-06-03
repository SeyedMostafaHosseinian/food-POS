import { useEffect, useRef } from "react";

export default function useOutsideClick(
  handler: (e: MouseEvent) => void,
  eventCapturing = true
) {
  const targetElementRef = useRef(null);
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const clickedElement = e.target;

      if (
        targetElementRef.current &&
        !(targetElementRef.current as HTMLElement).contains(
          clickedElement as HTMLElement
        )
      ) {
        handler(e);
      }
    }
    document.addEventListener("click", handleClick, eventCapturing);
    return () => removeEventListener("click", handleClick, eventCapturing);
  }, []);

  return targetElementRef;
}
