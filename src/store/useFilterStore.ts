import { create } from "zustand";

type FilterStore = {
  filters: {
    [key: string]: string[];
  };
  setFilters: (name: string, values: string[]) => void;
};

export const useFilterStore = create<FilterStore>((set) => ({
  filters: {},
  setFilters: (name, values) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [name]: values,
      },
    })),
}));
