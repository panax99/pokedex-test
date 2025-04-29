"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { useSearchStore } from "@/store/useSearchStore";
import { useThemeStore } from "@/store/useThemeStore";
import { AnimatePresence, motion } from "framer-motion";

const InputSearch = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const searchTerm = useSearchStore((state) => state.search);
  const setSearchTerm = useSearchStore((state) => state.setSearch);
  const darkMode = useThemeStore((state) => state.darkMode);

  return (
    <>
      {/* Desktop Search */}
      <div className="relative w-full max-w-sm hidden md:flex items-center">
        <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <Search size={20} className={`${darkMode ? "text-white" : ""}`} />
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
          } pl-10 pr-4 py-3 w-full border rounded-2xl focus:outline-none focus:ring-2`}
        />
      </div>

      {/* Mobile Toggle Icon */}
      <Search
        size={25}
        className="block md:hidden cursor-pointer"
        onClick={() => setOpenSearch((prev) => !prev)}
      />

      {/* Mobile Animated Search Input */}
      <AnimatePresence>
        {openSearch && (
          <motion.div
            className="fixed left-0 right-0 px-5 z-40"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 80, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="relative w-full max-w-sm mx-auto mt-3">
              <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Search
                  size={20}
                  className={`${darkMode ? "text-white" : ""}`}
                />
              </button>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search your Pokemon..."
                className={`${
                  darkMode
                    ? "border-gray-600 focus:ring-blue-400 bg-[#161b22] text-white"
                    : "border-gray-300 focus:ring-yellow-400 bg-white"
                } pl-10 pr-4 py-3 w-full border rounded-2xl focus:outline-none focus:ring-2 shadow-lg`}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InputSearch;
