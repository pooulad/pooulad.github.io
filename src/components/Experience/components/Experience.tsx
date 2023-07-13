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
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          {companyLink === "#" ? (
            <a className="text-primary dark:text-primaryDark capitalize">{company}</a>
          ) : (
            <a
              className="text-primary dark:text-primaryDark capitalize"
              target={"_blank"}
              href={companyLink}
            >
              {company}
            </a>
          )}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
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
          className="absolute right-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position={dictionary.about.experience.ex1.position}
            company={dictionary.about.experience.ex1.company}
            companyLink={dictionary.about.experience.ex1.companyLink}
            work={dictionary.about.experience.ex1.work}
            address={dictionary.about.experience.ex1.address}
            time={dictionary.about.experience.ex1.time}
          />
          <Details
            position={dictionary.about.experience.ex2.position}
            company={dictionary.about.experience.ex2.company}
            companyLink={dictionary.about.experience.ex2.companyLink}
            work={dictionary.about.experience.ex2.work}
            address={dictionary.about.experience.ex2.address}
            time={dictionary.about.experience.ex2.time}
          />
          <Details
            position={dictionary.about.experience.ex3.position}
            company={dictionary.about.experience.ex3.company}
            companyLink={dictionary.about.experience.ex3.companyLink}
            work={dictionary.about.experience.ex3.work}
            address={dictionary.about.experience.ex3.address}
            time={dictionary.about.experience.ex3.time}
          />
          <Details
            position={dictionary.about.experience.ex4.position}
            company={dictionary.about.experience.ex4.company}
            companyLink={dictionary.about.experience.ex4.companyLink}
            work={dictionary.about.experience.ex4.work}
            address={dictionary.about.experience.ex4.address}
            time={dictionary.about.experience.ex4.time}
          />
          <Details
            position={dictionary.about.experience.ex5.position}
            company={dictionary.about.experience.ex5.company}
            companyLink={dictionary.about.experience.ex5.companyLink}
            work={dictionary.about.experience.ex5.work}
            address={dictionary.about.experience.ex5.address}
            time={dictionary.about.experience.ex5.time}
          />
          <Details
            position={dictionary.about.experience.ex6.position}
            company={dictionary.about.experience.ex6.company}
            companyLink={dictionary.about.experience.ex6.companyLink}
            work={dictionary.about.experience.ex6.work}
            address={dictionary.about.experience.ex6.address}
            time={dictionary.about.experience.ex6.time}
          />
          <Details
            position={dictionary.about.experience.ex7.position}
            company={dictionary.about.experience.ex7.company}
            companyLink={dictionary.about.experience.ex7.companyLink}
            work={dictionary.about.experience.ex7.work}
            address={dictionary.about.experience.ex7.address}
            time={dictionary.about.experience.ex7.time}
          />
          <Details
            position={dictionary.about.experience.ex8.position}
            company={dictionary.about.experience.ex8.company}
            companyLink={dictionary.about.experience.ex8.companyLink}
            work={dictionary.about.experience.ex8.work}
            address={dictionary.about.experience.ex8.address}
            time={dictionary.about.experience.ex8.time}
          />
        </ul>
      </div>
    </div>
  );
}

export default memo(Experience);
