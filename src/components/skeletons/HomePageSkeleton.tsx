import React from "react";
import PokemonCardSkeleton from "./PokemonCardSkeleton";

const HomePageSkeleton = () => {
  return (
    <div
      className={`
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 
      grid-rows-1 sm:grid-row-2 md:grid-row-2 2xl:grid-row-3 gap-x-8 gap-y-16 w-full
    `}
    >
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
        <PokemonCardSkeleton key={el} />
      ))}
    </div>
  );
};

export default HomePageSkeleton;
