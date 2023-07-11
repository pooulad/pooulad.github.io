import Link from "next/link";
import { useRouter } from "next/router";
import React, { memo } from "react";

export type CustomLinkProps = {
  title: string;
  classname?: string;
  link: string;
};

function CustomLink({ title, classname, link }: CustomLinkProps) {
  const router = useRouter();
  return (
    <Link href={link} className={`${classname} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute right-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === link ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
}

export default memo(CustomLink);
