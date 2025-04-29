"use client";
import React, { ReactNode } from "react";
import { useThemeStore } from "@/store/useThemeStore";
import Header from "../commons/Header";

const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const darkMode = useThemeStore((state) => state.darkMode);
  return (
    <div
      className={`${
        darkMode ? "bg-[#0d1117]" : "bg-white"
      } transition-colors duration-700 ease-in-out relative min-h-[100vh] px-[5%] md:px-[2.5%] py-5 text-sm`}
    >
      <Header />
      {children}
    </div>
  );
};

export default ThemeWrapper;
