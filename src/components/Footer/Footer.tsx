import Layout from "@/Layout";
import { dictionary } from "@/dictionary";
import Link from "next/link";
import React, { memo } from "react";

function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <Layout className="py-8 flex items-center justify-between">
        <span>
          {new Date().getFullYear()} &copy; {dictionary.footer.copyRight}
        </span>
        <div className="flex items-center">
          <span>{dictionary.footer.madeWith}</span>
          <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span>
          <span>
            {dictionary.footer.by} &nbsp;
            <Link
              className="underline underline-offset-2"
              href={dictionary.ownerSocials.githubAddress}
              target={"_blank"}
            >
              {dictionary.footer.creator}
            </Link>
          </span>
        </div>
        <a href={dictionary.ownerCoffeeBede.link} target={"_blank"}>
          <img
            alt={dictionary.ownerCoffeeBede.alt}
            className="w-52"
            src={dictionary.ownerCoffeeBede.src}
          />
        </a>
      </Layout>
    </footer>
  );
}

export default memo(Footer);
