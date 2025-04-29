import { useQuery } from "@tanstack/react-query";
import { useFilterStore } from "@/store/useFilterStore";

const fetchFilterItems = async (url: string): Promise<string[]> => {
  const res = await fetch(url);
  const data = await res.json();
  return data.results.map((item: { name: string }) => item.name);
};

export const useFetchFilter = (name: string, url: string) => {
  const setFilters = useFilterStore((state) => state.setFilters);

  return useQuery({
    queryKey: ["filter", name],
    queryFn: async () => {
      const items = await fetchFilterItems(url);
      setFilters(name, items);
      return items;
    },
    staleTime: 1000 * 60 * 5,
  });
};
