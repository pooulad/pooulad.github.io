import Layout from "@/Layout";
import { dictionary } from "@/dictionary";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <Layout className="py-8 flex items-center justify-between lg:py-6 lg:flex-col">
        <span>
          {new Date().getFullYear()} &copy; {dictionary.footer.copyRight}
        </span>
        <div className="flex items-center lg:py-2">
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
          <Image
           alt='no image'
            className="w-52"
            width={200}
            height={100}
            src={dictionary.ownerCoffeeBede.src}
          />
        </a>
      </Layout>
    </footer>
  );
}

export default memo(Footer);
