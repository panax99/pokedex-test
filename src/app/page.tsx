"use client";

import { useState, useEffect } from "react";
import Header from "@/components/commons/Header";
import { usePokemonList } from "@/hooks/usePokemonList";
import PokemonCard from "@/components/commons/PokemonCard";
import HomePageSkeleton from "@/components/skeletons/HomePageSkeleton";
import { useThemeStore } from "@/store/themeStore";
import { useSearchStore } from "@/store/searchStore";

const Home = () => {
  const limit = 50;
  const darkMode = useThemeStore((state) => state.darkMode);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [offset, setOffset] = useState(0);
  //const [hasMore, setHasMore] = useState(true);
  const searchTerm = useSearchStore((state) => state.search);
  const { data, isLoading, isError } = usePokemonList(offset, limit);
  //const loadMoreRef = useRef<HTMLDivElement | null>(null);


  const filteredData = data?.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (isError) {
      console.log("error")
    }
  }, [data, isError]);

  return (
    <div className={`${darkMode ? "bg-[#0d1117]" : "bg-white"} relative flex flex-col w-full h-full min-h-[100vh] px-[2.5%] py-5 space-y-5 items-center text-sm`}>
      <Header />

      <div className="flex justify-between mt-36">
      </div>

      {isLoading && <HomePageSkeleton />}

      {data && !isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-8 gap-y-14 w-full">
          {filteredData?.map((pokemon, index: number) => (
            <PokemonCard key={index} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
