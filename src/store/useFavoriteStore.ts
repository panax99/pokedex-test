import { DetailedPokemonType } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoriteStore = {
  favorites: DetailedPokemonType[];
  addFavorite: (pokemon: DetailedPokemonType) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
  clearFavorites: () => void;
};

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (pokemon) => {
        const exists = get().favorites.find((p) => p.id === pokemon.id);
        if (!exists) {
          set({ favorites: [...get().favorites, pokemon] });
        }
      },
      removeFavorite: (id) => {
        set({ favorites: get().favorites.filter((p) => p.id !== id) });
      },
      isFavorite: (id) => {
        return get().favorites.some((p) => p.id === id);
      },
      clearFavorites: () => set({ favorites: [] }),
    }),
    {
      name: "favorite-pokemons",
    }
  )
);
