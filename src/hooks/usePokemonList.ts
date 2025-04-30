"use client";

import { DataType, DetailedPokemonType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

export const usePokemonList = (offset: number, limit: number) => {
  return useQuery<DetailedPokemonType[]>({
    queryKey: ["pokemons", offset],
    queryFn: async () => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
      );
      if (!res.ok) throw new Error("Failed to fetch Pokémon list");

      const data: DataType = await res.json();

      const detailedData: DetailedPokemonType[] = await Promise.all(
        data.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
        )
      );

      return detailedData;
    },
    staleTime: 1000 * 60,
  });
};
