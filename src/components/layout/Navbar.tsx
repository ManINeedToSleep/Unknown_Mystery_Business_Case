"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-sakuraWhite dark:bg-sakuraLight shadow-md py-4 px-6 flex justify-between items-center"
    >
      {/* Logo */}
      <h1 className="text-xl font-bold text-sakuraAccent dark:text-sakuraAccent">
        🌸 Focus Timer
      </h1>

      {/* Navigation Links */}
      <ul className="flex gap-6">
        {["Home", "Dashboard", "Timer", "Settings"].map((item) => (
          <motion.li
            key={item}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              href={`/${item.toLowerCase()}`} 
              className="text-sakuraAccent dark:text-sakuraAccent hover:text-sakuraPink"
            >
              {item}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};
