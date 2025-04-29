"use client";

import { useEffect, useState } from "react";
import { usePokemonList } from "@/hooks/usePokemonList";
import PokemonCard from "@/components/commons/PokemonCard";
import HomePageSkeleton from "@/components/skeletons/HomePageSkeleton";
import { useSearchStore } from "@/store/useSearchStore";
import { DetailedPokemonType } from "@/types/types";
import { InView } from "react-intersection-observer";

const HomeContent = () => {
  const limit = 50;
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState<DetailedPokemonType[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const searchTerm = useSearchStore((state) => state.search);
  const { data, isLoading } = usePokemonList(offset, limit);

  useEffect(() => {
    if (data) {
      setPokemons((prev) => [...prev, ...data.pokemons]);
      setHasMore(data.hasMore);
      setIsFetchingMore(false);
    }
  }, [data]);

  const loadMorePokemons = () => {
    if (!isFetchingMore && hasMore) {
      setIsFetchingMore(true);
      setOffset((prev) => prev + limit);
    }
  };

  const filteredData = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full h-full space-y-5 items-center">
      {isLoading && pokemons.length === 0 && <HomePageSkeleton />}
      {filteredData.length > 0 && (
        <div
          className={`
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 
            gap-x-8 gap-y-16 w-full
          `}
        >
          {filteredData.map((pokemon, index) => (
            <PokemonCard key={index} pokemon={pokemon} />
          ))}
        </div>
      )}

      {/* Infinite scroll trigger */}
      {hasMore && (
        <InView
          as="div"
          className="w-full flex justify-center py-10"
          onChange={(inView) => {
            if (inView) loadMorePokemons();
          }}
        >
          <div className="w-6 h-6 rounded-full border-4 border-t-transparent border-blue-500 animate-spin" />
        </InView>
      )}
    </div>
  );
};

export default HomeContent;
