import React, { memo, useEffect, useState } from "react";
import { CustomLink, CustomLinkMobile } from "../Common";
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
import LinkedinIcon from "@/assets/ts/LinkedinIcon";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const [mode, setMode] = useThemeSwithcher();
  return (
    <header className="w-full relative px-32 py-8 font-medium flex justify-between items-center dark:text-light z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        onClick={handleOpen}
        className="flex-col justify-center items-center hidden lg:flex"
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center justify-center flex-wrap">
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
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={"rounded-full flex items-center p-1 justify-center"}
          >
            {mode === "dark" ? (
              <SunToMoonIcon className="fill-dark" />
            ) : (
              <MoonToSubIcon className="fill-dark" />
            )}
            &nbsp;
          </button>
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
            href={dictionary.ownerSocials.linkedinAddress}
            target={"_blank"}
          >
            <LinkedinIcon />
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
        </nav>
      </div>
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <nav className="flex flex-col justify-center items-center">
            <CustomLinkMobile
              toggle={handleOpen}
              title={dictionary.header.links.home}
              link={"/"}
            />
            <CustomLinkMobile
              toggle={handleOpen}
              title={dictionary.header.links.about}
              link={"/about"}
            />
            <CustomLinkMobile
              toggle={handleOpen}
              title={dictionary.header.links.projects}
              link={"/projects"}
            />
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={"rounded-full flex items-center p-1 justify-center"}
            >
              {mode === "dark" ? (
                <SunToMoonIcon className="fill-dark" />
              ) : (
                <MoonToSubIcon className="fill-dark" />
              )}
              &nbsp;
            </button>
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full sm:mx-1"
              href={dictionary.ownerSocials.githubAddress}
              target={"_blank"}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 rounded-full sm:mx-1"
              href={dictionary.ownerSocials.telegramAddress}
              target={"_blank"}
            >
              <TelegramIcon />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 rounded-full sm:mx-1"
              href={dictionary.ownerSocials.instagramAddress}
              target={"_blank"}
            >
              <InstagramIcon />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 rounded-full sm:mx-1"
              href={`mailto:${dictionary.ownerSocials.emailAddress}`}
              target={"_blank"}
            >
              <EmailIcon />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 rounded-full sm:mx-1"
              href={dictionary.ownerSocials.websiteAddress}
              target={"_blank"}
            >
              <AmirankalaIcon />
            </motion.a>
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
}

export default memo(Header);
