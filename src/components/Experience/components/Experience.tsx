import LiIcon from "@/assets/ts/LiIcon";
import { dictionary } from "@/dictionary";
import { useScroll, motion } from "framer-motion";
import React, { memo, useRef } from "react";
type DetailsProps = {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
};

const Details = ({
  position,
  company,
  companyLink = "#",
  time,
  address,
  work,
}: DetailsProps) => {
  const ref = useRef<any>(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            className="text-primary capitalize"
            target={"_blank"}
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

function Experience() {
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        {dictionary.about.experience.title}
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute right-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position={"test"}
            company="google"
            companyLink="https://amirankala.com"
            work="testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"
            address="test"
            time="test"
          />
          <Details
            position={"test"}
            company="google"
            companyLink="https://amirankala.com"
            work="testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"
            address="test"
            time="test"
          />
          <Details
            position={"test"}
            company="google"
            companyLink="https://amirankala.com"
            work="testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"
            address="test"
            time="test"
          />
          <Details
            position={"test"}
            company="google"
            companyLink="https://amirankala.com"
            work="testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"
            address="test"
            time="test"
          />
          <Details
            position={"test"}
            company="google"
            companyLink="https://amirankala.com"
            work="testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"
            address="test"
            time="test"
          />
          <Details
            position={"test"}
            company="google"
            companyLink="https://amirankala.com"
            work="testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"
            address="test"
            time="test"
          />
        </ul>
      </div>
    </div>
  );
}

export default memo(Experience);
