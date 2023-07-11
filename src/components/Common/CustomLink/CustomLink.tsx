import Link from "next/link";
import React, { memo } from "react";

export type CustomLinkProps = {
  title: string;
  classname?: string;
  link: string;
};

function CustomLink({ title, classname, link }: CustomLinkProps) {
  return (
    <Link href={link} className={`${classname} relative group`}>
      {title}
      <span className="h-[1px] inline-block w-full bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300">
        &nbsp;
      </span>
    </Link>
  );
}

export default memo(CustomLink);
