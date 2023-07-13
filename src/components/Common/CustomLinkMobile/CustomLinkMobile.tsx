import { useRouter } from "next/router";
import React, { memo } from "react";

export type CustomLinkMobileProps = {
  title: string;
  classname?: string;
  link: string;
  toggle: () => void;
};

function CustomLinkMobile({
  title,
  classname,
  link,
  toggle,
}: CustomLinkMobileProps) {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(link);
  };
  return (
    <button onClick={handleClick} className={`${classname} relative group text-light dark:text-dark my-2`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute right-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === link ? "w-full" : "w-0"
        } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
}

export default memo(CustomLinkMobile);
