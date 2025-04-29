import React from "react";
import { Skeleton } from "../ui/skeleton";
import { useThemeStore } from "@/store/useThemeStore";

const PokemonCardSkeleton = () => {
  const darkMode = useThemeStore((state) => state.darkMode);
  return (
    <div
      className={`${
        darkMode ? "bg-[#161b22] shadow-blue-400 ring-zinc-600" : "bg-white ring-gray-300"
      } relative rounded-3xl ring-1 h-[25vh] lg:h-[28vh] mt-3 shadow-md p-5 flex flex-col items-center`}
    >
      <div className="w-[100px] h-[100px] relative flex items-center">
        <Skeleton className="absolute -top-17 w-[100px] h-[100px] rounded-full z-50" />
      </div>
      <Skeleton className="w-16 h-4 mt-2 mb-2" />
      <Skeleton className="w-24 h-5 mb-2" />
      <div className="flex space-x-2">
        <Skeleton className="w-16 h-7 rounded-md" />
        <Skeleton className="w-16 h-7 rounded-md" />
      </div>
      <Skeleton className="w-7 h-7 rounded-lg absolute top-4 right-4" />
    </div>
  );
};

export default PokemonCardSkeleton;
