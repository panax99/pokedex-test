import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useThemeStore } from "@/store/useThemeStore";
import { useFetchFilter } from "@/hooks/useFetchFilter";
import { capitalize } from "@/lib/utils";

interface FilterDropdownMenuProps {
  name: string;
  url: string;
}

const FilterDropdownMenu = ({ name, url }: FilterDropdownMenuProps) => {
  const { darkMode } = useThemeStore();
  const { data } = useFetchFilter(name, url);

  return (
    <DropdownMenu key={name}>
      <DropdownMenuTrigger asChild>
        <div
          className={`${
            darkMode ? "ring-gray-600" : "ring-gray-300"
          } px-4 flex ring-1  rounded-xl py-1 space-x-2 items-center justify-center`}
        >
          <div className={`${darkMode ? "text-white" : "text-gray-600"} p-2 `}>
            {name}
          </div>
          <ChevronDown className="mt-1 text-gray-600" size={22} />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className={`${
          darkMode
            ? "bg-[#161b22] text-white shadow border-gray-600"
            : "bg-white shadow"
        } w-56 rounded-2xl`}
      >
        <DropdownMenuGroup>
          {data?.map((el) => (
            <DropdownMenuItem key={el}>{capitalize(el)}</DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterDropdownMenu;
