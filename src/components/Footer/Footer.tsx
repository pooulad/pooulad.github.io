import Layout from "@/Layout";
import { dictionary } from "@/dictionary";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; تمامی حقوق محفوظ است</span>
        <div className="flex items-center">
          <span>ساخته شده با</span>
          <span className="text-primary text-2xl px-1">&#9825;</span>
          <span>
            توسط &nbsp;
            <Link
              className="underline underline-offset-2"
              href={dictionary.ownerSocials.githubAddress}
              target={"_blank"}
            >
              poulad
            </Link>
          </span>
        </div>
        <a href={dictionary.ownerCoffeeBede.link}>
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
