import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

interface FavoriteButtonProps {
  onClick: () => void;
}

const FavoriteButton = ({ onClick }: FavoriteButtonProps) => {
  const [isFavorite] = useState(false);

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
    }
  }, []);
  return (
    <Star
      className={`${
        isFavorite ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
      } absolute top-4 right-4 stroke-[1.5px]`}
      size={23}
      absoluteStrokeWidth
      onClick={onClick}
    />
  );
};

export default FavoriteButton;
