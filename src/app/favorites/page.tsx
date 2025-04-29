"use client";
import PokemonCard from "@/components/commons/PokemonCard";
import { useFavoriteStore } from "@/store/useFavoriteStore";
import { useSearchStore } from "@/store/useSearchStore";
import React from "react";

const FavoritePage = () => {
  const { search } = useSearchStore();
  const { favorites } = useFavoriteStore();

  const filteredData = favorites?.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="flex space-x-2">
      {favorites && (
        <div
          className={`
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 
            grid-rows-1 sm:grid-row-2 md:grid-row-2 2xl:grid-row-3 gap-x-8 gap-y-16 w-full
          `}
        >
          {filteredData?.map((pokemon, index: number) => (
            <PokemonCard key={index} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
