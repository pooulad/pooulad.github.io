import { useTheme } from "next-themes";
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";
import Logo from "./Logo";
import { CustomLink } from "../Common";
import { dictionary } from "@/dictionary";

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
        <CustomLink title={dictionary.header.links.home} link={"/"} />
        <CustomLink title={dictionary.header.links.projects} link={"/about"} />
        <CustomLink title={dictionary.header.links.skills} link={"/projects"} />
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
