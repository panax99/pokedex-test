"use client";

import React from "react";
import CustomImage from "@/components/custom-ui/CustomImage";
import { useFetchPokemon } from "@/hooks/useFetchPokemon";
import { capitalize } from "@/lib/utils";
import { getTypeColor } from "@/lib/getTypeColor";
import { useThemeStore } from "@/store/useThemeStore";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

const PokemonDetails = () => {
  const { name } = useParams();
  const { darkMode } = useThemeStore();
  const pokemonName = String(name);
  const { data: pokemon } = useFetchPokemon(pokemonName);

  if (!pokemon) return null;

  return (
    <div
      className={`${
        darkMode ? "text-white" : "text-black bg-white ring-gray-100"
      } flex flex-col lg:flex-row space-y-10 space-x-0 lg:space-x-10 lg:space-y-0 p-2 rounded-2xl`}
    >
      {/* IMAGE */}
      <div className="w-full lg:w-1/2 px-10 h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="relative w-full h-full max-w-md"
        >
          <CustomImage
            src={
              pokemon.sprites.other?.["official-artwork"]?.front_default ??
              pokemon.sprites.front_default
            }
          />
        </motion.div>
      </div>

      {/* DETAILS */}
      <div
        className={`${
          darkMode
            ? "bg-[#161b22] shadow-blue-400 ring-zinc-600"
            : "bg-white ring-gray-300"
        } w-full lg:w-1/2 ring-1 flex flex-col space-y-6 rounded-3xl p-8 shadow-lg`}
      >
        <h2 className="text-2xl font-bold mb-2">
          {capitalize(pokemon.name)}
        </h2>

        {/* Types */}
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-semibold">Types:</p>
          {pokemon.types.map((type) => (
            <span
              key={type.slot}
              className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(
                type.type.name
              )}`}
            >
              {capitalize(type.type.name)}
            </span>
          ))}
        </div>

        {/* Weight and Height */}
        <div className="flex space-x-6 text-sm">
          <p>
            <span className="font-semibold">Poids:</span> {pokemon.weight}
          </p>
          <p>
            <span className="font-semibold">Taille:</span> {pokemon.height}
          </p>
        </div>

        {/* Stats */}
        <div className="space-y-3">
          <p className="font-semibold">Statistiques principales :</p>
          {pokemon.stats.map((stat, idx) => (
            <div key={idx} className="w-full">
              <div className="flex justify-between text-sm">
                <span>{capitalize(stat.stat.name)}</span>
                <span>{stat.base_stat}</span>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 mt-1">
                <motion.div
                  className="bg-green-500 h-3 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.base_stat / 2}%` }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
