import { motion } from "framer-motion";
import Link from "next/link";
import React, { memo } from "react";

const MotionLink = motion(Link);

function Logo() {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        className="w-16 h-16 flex items-center justify-center bg-dark text-light rounded-full font-extrabold text-3xl"
        href={"/"}
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        MP
      </MotionLink>
    </div>
  );
}

export default memo(Logo);
