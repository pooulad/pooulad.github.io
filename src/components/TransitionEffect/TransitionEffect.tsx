import React, { Fragment, memo } from "react";
import { motion } from "framer-motion";

function TransitionEffect() {
  return (
    <Fragment>
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-red-600"
      ></motion.div>
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-white"
      ></motion.div>
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-green-600"
      ></motion.div>
    </Fragment>
  );
}

export default memo(TransitionEffect);
