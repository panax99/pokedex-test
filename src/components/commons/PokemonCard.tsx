import React from "react";
import { capitalize } from "@/lib/utils";
import Image from "next/image";
import { DetailedPokemonType } from "@/types/types";
import FavoriteButton from "./FavoriteButton";
import Link from "next/link";
import { useThemeStore } from "@/store/useThemeStore";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { usePokemonStore } from "@/store/usePokemonStore";
import { getTypeColor } from "@/lib/getTypeColor";

interface CardProps {
  pokemon: DetailedPokemonType;
}

const PokemonCard = ({ pokemon }: CardProps) => {
  const router = useRouter();
  const { setPokemon } = usePokemonStore();
  const darkMode = useThemeStore((state) => state.darkMode);
  const handleNavigateToPokemon = () => {
    setPokemon(pokemon);
    router.push(`/pokemon/${pokemon.name}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, type: "spring", stiffness: 40 },
      }}
      className="relative"
    >
      <motion.div
        onMouseEnter={(e) =>
          e.currentTarget.classList.add("shadow-gradient-animate")
        }
        onMouseLeave={(e) =>
          e.currentTarget.classList.remove("shadow-gradient-animate")
        }
        transition={{ duration: 0.5 }}
        className={`${
          darkMode
            ? "bg-[#161b22] shadow-blue-400 ring-zinc-600"
            : "bg-white ring-gray-300"
        } transition-colors duration-700 ease-in-out relative rounded-3xl ring-1 shadow-md p-5 flex cursor-pointer flex-col items-center`}
        onClick={handleNavigateToPokemon}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.3,
              duration: 0.6,
              type: "spring",
              stiffness: 150,
            },
          }}
          className="w-[100px] h-[100px] relative flex items-center"
        >
          <Image
            className="absolute -top-17"
            src={pokemon.sprites.front_default}
            width={120}
            height={120}
            alt={`${pokemon.name}`}
            priority
          />
        </motion.div>
        <p className="font-extrabold text-sm text-gray-500 -mt-11 mb-2">
          N° {pokemon.id}
        </p>
        <Link
          href={`/pokemon/${pokemon.name}`}
          className={`${
            darkMode ? "text-[#e6edf3]" : "text-black"
          } font-extrabold mb-2 transition-colors duration-700 ease-in-out`}
        >
          {capitalize(pokemon.name)}
        </Link>
        <div className="flex space-x-2">
          {pokemon.types.map((type, index: number) => (
            <div
              className={`${
                darkMode ? "text-black" : "text-white"
              } ${getTypeColor(type.type.name)} rounded-md px-4 py-2`}
              key={index}
            >
              {capitalize(type.type.name)}
            </div>
          ))}
        </div>
      </motion.div>
      <FavoriteButton pokemon={pokemon} />
    </motion.div>
  );
};

export default PokemonCard;
