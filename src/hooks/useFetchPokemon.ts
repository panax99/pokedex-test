"use client";

import { DetailedPokemonType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

export const useFetchPokemon = (name: string) => {
  return useQuery<DetailedPokemonType>({
    queryKey: ["pokemon", name],
    queryFn: async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!res.ok) throw new Error("Failed to fetch Pokémon list");

      const data: DetailedPokemonType = await res.json();

      return data;
    },
    staleTime: 1000 * 60,
  });
};
