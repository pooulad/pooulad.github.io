import Link from "next/link";
import React, { memo } from "react";

export type CustomLinkProps = {
  title: string;
  classname?: string;
  link: string;
};

function CustomLink({ title, classname, link }: CustomLinkProps) {
  return (
    <Link href={link} className={classname}>
      {title}
    </Link>
  );
}

export default memo(CustomLink);
