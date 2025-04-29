export const getTypeColor = (type: string) => {
  const colors: Record<string, string> = {
    fire: "bg-red-500",
    water: "bg-blue-500",
    grass: "bg-green-500",
    electric: "bg-yellow-400 text-black",
    bug: "bg-lime-600",
    normal: "bg-gray-400",
    poison: "bg-purple-600",
    fairy: "bg-pink-400",
    ground: "bg-yellow-700",
    fighting: "bg-orange-700",
    psychic: "bg-pink-500",
    rock: "bg-stone-500",
    ghost: "bg-indigo-700",
    dragon: "bg-indigo-500",
    dark: "bg-zinc-700",
    steel: "bg-gray-600",
    ice: "bg-cyan-400 text-black",
    flying: "bg-sky-400 text-black",
  };
  return colors[type] || "bg-gray-500";
};
