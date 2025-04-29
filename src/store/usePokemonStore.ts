import { DetailedPokemonType } from "@/types/types";
import { create } from "zustand";

type PokemonState = {
  pokemon: DetailedPokemonType | undefined;
  setPokemon: (value: DetailedPokemonType) => void;
};

export const usePokemonStore = create<PokemonState>((set) => ({
  pokemon: undefined,
  setPokemon: (value) => set({ pokemon: value }),
}));