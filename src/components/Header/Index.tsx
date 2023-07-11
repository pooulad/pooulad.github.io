import { useTheme } from "next-themes";
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";
import Logo from "./Logo";

function Header() {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);
  if (!hasMounted) return null;
  return (
    <header className="w-full px-32 py-8 font-medium flex justify-between items-center">
      <nav className="text-3xl font-bold underline">
        {/* The current theme is: {theme}
        <button onClick={() => setTheme("light")}>روشن</button>
        <button onClick={() => setTheme("dark")}>تیره</button> */}
        <Link href={"/"}>خانه</Link>
        <Link href={"/about"}>درباره من</Link>
        <Link href={"/projects"}>پروژه ها</Link>
      </nav>
      <nav>
        <Link href={"/"} target={"_blank"}>
          T
        </Link>
        <Link href={"/"} target={"_blank"}>
          T
        </Link>
        <Link href={"/"} target={"_blank"}>
          T
        </Link>
        <Link href={"/"} target={"_blank"}>
          T
        </Link>
        <Link href={"/"} target={"_blank"}>
          T
        </Link>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}

export default memo(Header);
