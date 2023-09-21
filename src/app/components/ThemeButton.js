"use client";

import { useEffect, useState } from "react";

import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeButton = () => {
  const [pageTheme, setPageTheme] = useState("light");

  useEffect(() => {
    const bodyElement = document.querySelector("body");
    const footerElement = document.querySelector(".footer-text");

    if (pageTheme === "light") {
      bodyElement.style.backgroundColor = "white";
      footerElement.style.color = "black";
    } else {
      bodyElement.style.backgroundColor = "black";
      footerElement.style.color = "white";

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }),
    [pageTheme];

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center rounded-lg p-2"
      onClick={() =>
        pageTheme === "light" ? setPageTheme("dark") : setPageTheme("light")
      }
    >
      {pageTheme === "dark" ? (
        <SunIcon className="h-5 w-5 text-white-300" />
      ) : (
        <MoonIcon className="h-5 w-5 text-gray-300" />
      )}
    </button>
  );
};

export default ThemeButton;
