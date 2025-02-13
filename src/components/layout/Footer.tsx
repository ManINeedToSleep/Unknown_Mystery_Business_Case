"use client";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-sakuraWhite dark:bg-sakuraLight text-center py-4 mt-auto"
    >
      <motion.p
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="text-sakuraAccent dark:text-sakuraAccent"
      >
        🌸 Focus Timer | Stay Focused, Stay Productive
      </motion.p>
    </motion.footer>
  );
};
