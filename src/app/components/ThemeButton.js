"use client";

import { useEffect, useState } from "react";

import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeButton = () => {
  const [pageTheme, setPageTheme] = useState("light");

  const bodyElement = document.querySelector("body");

  useEffect(() => {
    pageTheme === "light"
      ? (bodyElement.style.backgroundColor = "white")
      : (bodyElement.style.backgroundColor = "black");

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageTheme]);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700"
      onClick={() =>
        pageTheme === "light" ? setPageTheme("dark") : setPageTheme("light")
      }
    >
      {pageTheme === "dark" ? (
        <SunIcon className="h-5 w-5 text-orange-300" />
      ) : (
        <MoonIcon className="h-5 w-5 text-slate-800" />
      )}

    </button>

  );
};

export default ThemeButton;
