import React, { ReactNode, memo, useEffect, useState } from "react";

function useThemeSwithcher() {
  const preferDarkModeQuery = "prefer-color-schema: dark";
  const [mode, setMode] = useState<any>("");
  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkModeQuery);
    const userPref = window.localStorage.getItem("theme");
    const handleChange = () => {
      if (userPref) {
        let check = userPref === "dark" ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);
  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);
  return [mode, setMode];
}

export default useThemeSwithcher;
