"use client";
import React, { useState } from "react";
import { Menu, Star, X } from "lucide-react";
import Image from "next/image";
import { filters } from "@/constants/filters";
import InputSearch from "./InputSearch";
import SwitchModeButton from "./SwitchModeButton";
import Link from "next/link";
import { useThemeStore } from "@/store/useThemeStore";
import FilterDropdownMenu from "./FilterDropdownMenu";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const darkMode = useThemeStore((state) => state.darkMode);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Header Bar */}
      <div
        className={`${
          darkMode ? "bg-[#161b22]/80 text-white" : "bg-white/70"
        } transition-colors duration-700 ease-in-out fixed top-5 w-[90%] md:w-[95%] backdrop-blur-sm flex px-5 md:px-10 z-50 rounded-2xl shadow-md space-x-0 md:space-x-5 items-center justify-between p-5`}
      >
        <Menu
          className={`${
            darkMode ? "text-white" : "text-gray-600"
          } flex lg:hidden cursor-pointer`}
          size={30}
          onClick={() => setMobileMenuOpen(true)}
        />

        <Link href={"/"} className="relative bg-transparent">
          <Image
            src="https://raw.githubusercontent.com/sleduardo20/pokedex/0671af442dff1d8f7141e49eb83b438885bbc9e9/public/img/logo.svg"
            className="bg-transparent"
            width={160}
            height={30}
            alt="logo-pokedex"
            priority
          />
        </Link>

        <InputSearch />

        {/* Desktop filters */}
        <div className="hidden lg:flex items-center space-x-4">
          {filters.map((filter) => (
            <FilterDropdownMenu
              key={filter.name}
              name={filter.name}
              url={filter.url}
            />
          ))}

          <Link
            href={`/favorites`}
            className={`${
              darkMode ? " ring-gray-600" : "ring-gray-300"
            } transition-colors duration-300 ease-in-out px-4 flex ring-1 rounded-xl py-1 space-x-1 items-center justify-center`}
          >
            <Star
              size={18}
              className={`${darkMode ? "text-white" : "text-gray-600"}`}
            />
            <div className={`${darkMode ? "text-white" : "text-gray-600"} p-2`}>
              Favorites
            </div>
          </Link>

          <SwitchModeButton />
        </div>
      </div>

      {/* Mobile menu modal */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-50 flex items-center justify-center ${
              darkMode ? "bg-black/80" : "bg-white/80"
            } backdrop-blur-md`}
          >
            <div
              className={`relative w-[90%] max-w-md p-6 rounded-3xl shadow-lg ${
                darkMode ? "bg-[#161b22] text-white" : "bg-white text-gray-800"
              } flex flex-col items-center space-y-5`}
            >
              {/* Close icon */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
              >
                <X size={24} />
              </button>

              <p className="text-xl font-bold mb-10">Menu</p>

              {/* Filters */}
              {filters.map((filter) => (
                <FilterDropdownMenu
                  key={filter.name}
                  name={filter.name}
                  url={filter.url}
                />
              ))}

              {/* Favorites link */}
              <Link
                href={`/favorites`}
                className={`${
                  darkMode
                    ? "ring-gray-600 text-white"
                    : "ring-gray-300 text-gray-600"
                } px-4 flex ring-1 rounded-xl py-3 space-x-1 items-center justify-center`}
              >
                <Star size={18} />
                <div>Favorites</div>
              </Link>

              <SwitchModeButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
