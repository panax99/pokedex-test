import React from "react";
import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/store/themeStore";

const SwitchModeButton = () => {
  const darkMode = useThemeStore((state) => state.darkMode);
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);

  return (
    <div
      className={`${
        darkMode ? "ring-gray-600" : "ring-gray-300"
      } rounded-full ring-1 ring-gray-300 cursor-pointer p-2`}
      onClick={toggleDarkMode}
    >
      {darkMode ? (
        <Sun
          className={`${
            darkMode ? "text-white" : "text-gray-500"
          } text-gray-500 stroke-[1.4px]`}
          absoluteStrokeWidth
          size={25}
        />
      ) : (
        <Moon
          className={`${
            darkMode ? "text-white" : "text-gray-500"
          }  stroke-[1.4px]`}
          absoluteStrokeWidth
          size={25}
        />
      )}
    </div>
  );
};

export default SwitchModeButton;
