import React, { memo } from "react";
import { motion } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  className: string;
};

const qoute = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren : 0.08
    },
  },
};
const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

function AnimatedText({ text, className }: AnimatedTextProps) {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        aria-hidden="true"
        className={`inline-block text-dark font-bold text-8xl capitalize ${className}`}
        variants={qoute}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((item, index) => (
          <motion.span
            variants={singleWord}
            key={item + "-" + index}
            className="inline-block"
          >
            {item}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

export default memo(AnimatedText);
