import { useTheme } from "next-themes";
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";
import Logo from "./Logo";
import { CustomLink } from "../Common";
import { dictionary } from "@/dictionary";
import { AmirankalaIcon, GithubIcon, InstagramIcon } from "@/assets/ts";
import { motion } from "framer-motion";
import TelegramIcon from "@/assets/ts/TelegramIcon";

function Header() {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);
  if (!hasMounted) return null;
  return (
    <header className="w-full px-32 py-8 font-medium flex justify-between items-center">
      <nav>
        {/* The current theme is: {theme}
        <button onClick={() => setTheme("light")}>روشن</button>
        <button onClick={() => setTheme("dark")}>تیره</button> */}
        <CustomLink
          title={dictionary.header.links.home}
          link={"/"}
          classname="mr-4"
        />
        <CustomLink
          title={dictionary.header.links.about}
          link={"/about"}
          classname="mx-4"
        />
        <CustomLink
          title={dictionary.header.links.projects}
          link={"/projects"}
          classname="ml-4"
        />
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
          href={"https://github.com/pooulad"}
          target={"_blank"}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
          href={"https://t.me/pouladpesar"}
          target={"_blank"}
        >
          <TelegramIcon />
        </motion.a>
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
          href={"https://instagram.com/_poulad_"}
          target={"_blank"}
        >
          <InstagramIcon />
        </motion.a>
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
          href={"https://amirankala.com"}
          target={"_blank"}
        >
          <AmirankalaIcon />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}

export default memo(Header);
