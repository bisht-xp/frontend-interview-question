"use client";
import React, { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

type Props = {};

const LightDarkMode = (props: Props) => {
  // const [theme, setTheme] = useState(false);
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  
  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
  };

  console.log("theme: ", theme);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } w-full h-screen`}
    >
      <div className="w-full h-screen flex flex-col justify-items-start justify-center items-center ">
        <h1 className="text-3xl font-semibold mb-2">Hello World!!</h1>
        <button
          className={`${
            theme === "dark" ? "bg-black text-white" : "bg-white text-black"
          } px-6 py-[6px] rounded-md`}
          onClick={toggleTheme}
        >
          Change Theme
        </button>
      </div>
    </div>
  );
};

export default LightDarkMode;
