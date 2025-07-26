
'use client';

import { motion } from 'framer-motion';

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 10 } },
};

const linkVariants = {
  hover: { scale: 1.1, color: "rgb(var(--primary-accent))" },
  tap: { scale: 0.95 },
};

export default function Navigation() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50 bg-[rgb(var(--background-start-rgb))] bg-opacity-80 backdrop-blur-sm p-4 shadow-lg"
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <motion.a
          href="#"
          className="text-[rgb(var(--foreground-rgb))] font-extrabold text-2xl tracking-wider mb-2 sm:mb-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Andika Dayu
        </motion.a>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <motion.a
            href="#about"
            className="text-[rgb(var(--foreground-rgb))] hover:text-[rgb(var(--primary-accent))] transition-colors duration-300"
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            About
          </motion.a>
          <motion.a
            href="#experience"
            className="text-[rgb(var(--foreground-rgb))] hover:text-[rgb(var(--primary-accent))] transition-colors duration-300"
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Experience
          </motion.a>
          <motion.a
            href="#projects"
            className="text-[rgb(var(--foreground-rgb))] hover:text-[rgb(var(--primary-accent))] transition-colors duration-300"
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="text-[rgb(var(--foreground-rgb))] hover:text-[rgb(var(--primary-accent))] transition-colors duration-300"
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Contact
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
