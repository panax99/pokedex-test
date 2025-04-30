import React from "react";
import { Search } from "lucide-react";
import { useSearchStore } from "@/store/searchStore";
import { useThemeStore } from "@/store/themeStore";

const InputSearch = () => {
  const searchTerm = useSearchStore((state) => state.search);
  const darkMode = useThemeStore((state) => state.darkMode);
  const setSearchTerm = useSearchStore((state) => state.setSearch);
  return (
    <div className="relative w-full max-w-sm flex items-center">
      <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        <Search size={20} />
      </button>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search your Pokemon..."
        className={`${
          darkMode
            ? "border-gray-600 focus:ring-blue-400"
            : "border-gray-300 focus:ring-yellow-400"
        } pl-10 pr-4 py-3 me-4 w-full border  rounded-2xl focus:outline-none focus:ring-2 `}
      />
    </div>
  );
};

export default InputSearch;
