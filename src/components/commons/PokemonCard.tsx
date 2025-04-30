import React from "react";
import { capitalize } from "@/lib/utils";
import Image from "next/image";
import { DetailedPokemonType } from "@/types/types";
//import { typesByColor } from "@/constants/typeColors";
import FavoriteButton from "./FavoriteButton";
import Link from "next/link";
import { useThemeStore } from "@/store/themeStore";

interface CardProps {
  pokemon: DetailedPokemonType;
}

const PokemonCard = ({ pokemon }: CardProps) => {
  const darkMode = useThemeStore((state) => state.darkMode);
  //const filteredType = pokemon.types.filter(type => type.type.name === typesByColor.filter(type => type.name))
  return (
    <div
      className={`${
        darkMode ? "bg-[#161b22] shadow-blue-400 ring-zinc-600" : "bg-white ring-gray-300"
      } relative rounded-3xl ring-1 h-[25vh] lg:h-[32vh]  shadow-md p-5 flex flex-col items-center`}
    >
      <div className="w-[100px] h-[100px] relative flex items-center">
        <Image
          className="absolute -top-17"
          src={pokemon.sprites.front_default}
          width={120}
          height={120}
          alt={`${pokemon.name}`}
        />
      </div>
      <p className="font-extrabold text-sm text-gray-500 -mt-11 mb-2">
        N° {pokemon.id}
      </p>
      <Link
        href={`/pokemon/${pokemon.name}`}
        className={`${
          darkMode ? "text-[#e6edf3]" : "text-black"
        } font-extrabold mb-2`}
      >
        {capitalize(pokemon.name)}
      </Link>
      <div className="flex space-x-2">
        {pokemon.types.map((type, index: number) => (
          <div
            className={`${darkMode ? "text-black" : "text-white"} bg-neutral-400 rounded-md px-4 py-2`}
            key={index}
          >
            {capitalize(type.type.name)}
          </div>
        ))}
      </div>
      <FavoriteButton onClick={() => {}} />
    </div>
  );
};

export default PokemonCard;
