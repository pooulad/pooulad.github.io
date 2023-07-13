import { motion } from "framer-motion";

export default function SunToMoonIcon({ className }: any) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="1.5em"
      height="1.5em"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <path d="M16.212 31.5C7.548 31.5.5 24.452.5 15.787.5 8.54 5.4 2.271 12.417.543a1.502 1.502 0 0 1 1.581 2.326 10.791 10.791 0 0 0-2.005 6.284c0 5.985 4.869 10.854 10.854 10.854 2.265 0 4.438-.693 6.284-2.005a1.5 1.5 0 0 1 2.325 1.58C29.73 26.6 23.46 31.5 16.212 31.5zM9.664 4.88A12.677 12.677 0 0 0 3.5 15.787c0 7.01 5.703 12.713 12.712 12.713 4.575 0 8.667-2.411 10.908-6.165a13.824 13.824 0 0 1-4.273.672c-7.64 0-13.854-6.215-13.854-13.854 0-1.468.228-2.905.671-4.273z" />
    </motion.svg>
  );
}
