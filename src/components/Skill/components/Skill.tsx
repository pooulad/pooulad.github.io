import { dictionary } from "@/dictionary";
import React, { Fragment, memo } from "react";
import { motion } from "framer-motion";

type SkillGeneratorProps = {
  name: string;
  x: string;
  y: string;
};
const SkillGenerator = ({ name, x, y }: SkillGeneratorProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="cursor-pointer flex items-center justify-center rounded-full font-semibold absolute bg-dark text-light dark:text-dark dark:bg-light py-3 px-6 shadow-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:font-bold xs:text-dark xs:dark:text-light"
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

function Skill() {
  return (
    <Fragment>
      <h2 className="font-bold text-8xl mt-64 text-center md:text-6xl md:mb-32">
        {dictionary.about.skill.title}
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer flex items-center justify-center rounded-full font-semibold absolute bg-dark text-light dark:text-dark dark:bg-light py-3 px-6 shadow-dark lg:p-6 md:p-4 xs:text-sm xs:p-2"
          initial={{ x: 0, y: 0 }}
          whileInView={{ x: "0vw", y: "0vw", transition: { duration: 1.5 } }}
          viewport={{ once: true }}
        >
          {dictionary.about.skill.fullStack}
        </motion.div>
        <SkillGenerator name={dictionary.about.skill.web} x="-20vw" y="2vw" />
        <SkillGenerator
          name={dictionary.about.skill.html}
          x="-12vw"
          y="-10vw"
        />
        <SkillGenerator name={dictionary.about.skill.css} x="10vw" y="-5vw" />
        <SkillGenerator name={dictionary.about.skill.js} x="20vw" y="-11vw" />
        <SkillGenerator
          name={dictionary.about.skill.typescript}
          x="11vw"
          y="10vw"
        />
        <SkillGenerator
          name={dictionary.about.skill.graphql}
          x="21vw"
          y="16vw"
        />
        <SkillGenerator name={dictionary.about.skill.go} x="22vw" y="-20vw" />
        <SkillGenerator
          name={dictionary.about.skill.nextjs}
          x="-22vw"
          y="-18vw"
        />
        <SkillGenerator
          name={dictionary.about.skill.chartjs}
          x="-34vw"
          y="0vw"
        />
        <SkillGenerator
          name={dictionary.about.skill.bootstrap}
          x="0vw"
          y="21vw"
        />
        <SkillGenerator
          name={dictionary.about.skill.tailwind}
          x="-15vw"
          y="19vw"
        />
        <SkillGenerator name={dictionary.about.skill.linux} x="35vw" y="0vw" />
        <SkillGenerator name={dictionary.about.skill.php} x="0vw" y="-18vw" />
        <SkillGenerator
          name={dictionary.about.skill.figma}
          x="-30vw"
          y="10vw"
        />
        <SkillGenerator
          name={dictionary.about.skill.webDesign}
          x="-14vw"
          y="8vw"
        />
      </div>
    </Fragment>
  );
}

export default memo(Skill);
