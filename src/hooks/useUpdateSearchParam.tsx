import { useSearchParams } from "react-router-dom";

export function useUpdateSearchParam(): [
  URLSearchParams,
  (key: string, value: string) => void
] {
  const [searchParams, setSearchParams] = useSearchParams();
  function updateSearchParams(key: string, value: string) {
    setSearchParams((searchParams) => {
      searchParams.set(key, value);
      return searchParams;
    });
  }

  return [searchParams, updateSearchParams];
}
