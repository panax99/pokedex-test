import React from "react";
import { Star } from "lucide-react";
import { useFavoriteStore } from "@/store/useFavoriteStore";
import { DetailedPokemonType } from "@/types/types";
import { motion } from "framer-motion";

interface FavoriteButtonProps {
  pokemon: DetailedPokemonType;
}

const FavoriteButton = ({ pokemon }: FavoriteButtonProps) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavoriteStore();

  const handleClick = () => {
    if (isFavorite(pokemon.id)) {
      removeFavorite(pokemon.id);
    } else {
      addFavorite(pokemon);
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      whileTap={{ scale:1.3 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 20,
      }}
      className="absolute top-4 right-4 cursor-pointer"
    >
      <Star
        className={`${
          isFavorite(pokemon.id)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-400"
        } stroke-[1.5px]`}
        size={23}
        absoluteStrokeWidth
      />
    </motion.div>
  );
};

export default FavoriteButton;
