"use client";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "px-6 py-2 rounded-lg font-semibold shadow-md",
        "bg-sakuraPink text-sakuraAccent border border-sakuraAccent",
        "hover:bg-sakuraGold hover:text-sakuraAccent transition-all",
        "dark:bg-sakuraLight dark:text-sakuraAccent dark:border-sakuraPink dark:hover:bg-sakuraGold",
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
