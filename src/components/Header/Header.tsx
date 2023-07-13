import React, { memo, useEffect, useState } from "react";
import { CustomLink } from "../Common";
import { dictionary } from "@/dictionary";
import {
  AmirankalaIcon,
  EmailIcon,
  GithubIcon,
  InstagramIcon,
  MoonToSubIcon,
  SunToMoonIcon,
  TelegramIcon,
} from "@/assets/ts";
import { motion } from "framer-motion";
import useThemeSwithcher from "@/hooks/useThemeSwithcher";

function Header() {
  const [mode, setMode] = useThemeSwithcher();
  return (
    <header className="w-full px-32 py-8 font-medium flex justify-between items-center">
      <nav>
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
          href={dictionary.ownerSocials.githubAddress}
          target={"_blank"}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
          href={dictionary.ownerSocials.telegramAddress}
          target={"_blank"}
        >
          <TelegramIcon />
        </motion.a>
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
          href={dictionary.ownerSocials.instagramAddress}
          target={"_blank"}
        >
          <InstagramIcon />
        </motion.a>
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
          href={`mailto:${dictionary.ownerSocials.emailAddress}`}
          target={"_blank"}
        >
          <EmailIcon />
        </motion.a>
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
          href={dictionary.ownerSocials.websiteAddress}
          target={"_blank"}
        >
          <AmirankalaIcon />
        </motion.a>
        <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          {mode === "dark" ? (
            <SunToMoonIcon/>
          ) : (
            <MoonToSubIcon/>
          )}
        </button>
      </nav>
    </header>
  );
}

export default memo(Header);
