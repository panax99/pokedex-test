"use client"
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown, Menu, Star } from "lucide-react";
import Image from "next/image";
import { filters } from "@/constants/filters";
import InputSearch from "./InputSearch";
import SwitchModeButton from "./SwitchModeButton";
import Link from "next/link";
import { useThemeStore } from "@/store/themeStore";

const Header = () => {
  const darkMode = useThemeStore((state) => state.darkMode);
  return (
    <div
      className={`${
        darkMode ? "bg-[#161b22]/80 text-white" : "bg-white/70"
      } fixed top-5 w-[95%]  backdrop-blur-sm flex px-10 z-50 rounded-2xl shadow-md space-x-5 items-center justify-between p-5`}
    >
      <div className="relative bg-transparent">
        <Image
          src={
            "https://raw.githubusercontent.com/sleduardo20/pokedex/0671af442dff1d8f7141e49eb83b438885bbc9e9/public/img/logo.svg"
          }
          className="bg-transparent"
          width={160}
          height={30}
          alt="logo-pokedex"
          priority
        />
      </div>

      <InputSearch />

      <div className="hidden lg:flex items-center space-x-4">
        {filters.map((filter) => (
          <DropdownMenu key={filter.name}>
            <DropdownMenuTrigger asChild>
              <div
                className={`${
                  darkMode ? "ring-gray-600" : "ring-gray-300"
                } px-4 flex ring-1  rounded-xl py-1 space-x-2 items-center justify-center`}
              >
                <div
                  className={`${
                    darkMode ? "text-white" : "text-gray-600"
                  } p-2 `}
                >
                  {filter.name}
                </div>
                <ChevronDown className="mt-1" size={22} />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Keyboard shortcuts</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        ))}

        <Link
          href={`/favorites`}
          className={`${
            darkMode ? " ring-gray-600" : "ring-gray-300"
          } px-4 flex ring-1 rounded-xl py-1 space-x-2 items-center justify-center`}
        >
          <div className={`${darkMode ? "text-white" : "text-gray-600"} p-2`}>
            Favorites
          </div>
          <Star size={18} />
        </Link>

        <SwitchModeButton />
      </div>

      <Menu className="flex md:hidden text-gray-500" size={30} />
    </div>
  );
};

export default Header;
