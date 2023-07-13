import { useScroll, motion } from "framer-motion";

export default function LiIcon({ reference }: any) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="stroke-dark absolute right-0 dark:stroke-light">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary dark:stroke-primaryDark stroke-1 fill-none"
        />
        <motion.circle
          style={{ pathLength: scrollYProgress }}
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-light dark:fill-dark"
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="stroke-1 fill-primary dark:fill-primaryDark animate-pulse"
        />
      </svg>
    </figure>
  );
}
