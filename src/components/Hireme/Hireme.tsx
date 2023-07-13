import { HiremeIcon } from "@/assets/ts";
import { dictionary } from "@/dictionary";
import Link from "next/link";
import React, { memo } from "react";

function Hireme() {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:left-4 md:right-auto md:top-0 md:bottom-auto md:absolute">
      <div className="w-48 md:w-24 flex items-center justify-center relative h-auto">
        <HiremeIcon className="fill-dark animate-spin-slow dark:bg-light dark:rounded-full" />
        <Link
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:w-12 md:h-12 md:text-[10px]"
          href={`mailto:${dictionary.ownerSocials.emailAddress}`}
          target={"_blank"}
        >
          {dictionary.home.hireMeTitle}
        </Link>
      </div>
    </div>
  );
}

export default memo(Hireme);
