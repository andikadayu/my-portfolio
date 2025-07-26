"use client";

import { motion } from "framer-motion";

const contactVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const linkVariants = {
  hover: { scale: 1.2, color: "rgb(var(--primary-accent))" },
  tap: { scale: 0.95 },
};

export default function Contact() {
  return (
    <motion.section
      id="contact"
      variants={contactVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="container mx-auto py-24 text-center px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
      <p className="text-xl mb-8 text-[rgb(var(--foreground-rgb))] ">
        Feel free to reach out to me for any inquiries or opportunities.
      </p>
      <div className="flex justify-center gap-8 mt-12 flex-wrap">
        <motion.a
          href="mailto:dikapolk@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[rgb(var(--foreground-rgb))] hover:text-[rgb(var(--primary-accent))] text-lg"
          variants={linkVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <img
            src="https://cdn.simpleicons.org/gmail/D14836"
            alt="Email"
            className="w-10 h-10"
          />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/muhammad-andika-dayu-anglita-putra-796838142/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[rgb(var(--foreground-rgb))] hover:text-[rgb(var(--primary-accent))] text-lg"
          variants={linkVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
            alt="LinkedIn"
            className="w-10 h-10"
          />
        </motion.a>
        <motion.a
          href="https://github.com/andikadayu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[rgb(var(--foreground-rgb))] hover:text-[rgb(var(--primary-accent))] text-lg"
          variants={linkVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <img
            src="https://cdn.simpleicons.org/github/181717"
            alt="GitHub"
            className="w-10 h-10"
          />
        </motion.a>
        <motion.a
          href="https://github.com/andikaventuro"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[rgb(var(--foreground-rgb))] hover:text-[rgb(var(--primary-accent))] text-lg"
          variants={linkVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <img
            src="https://cdn.simpleicons.org/github/181717"
            alt="GitHub"
            className="w-10 h-10"
          />
        </motion.a>
      </div>
    </motion.section>
  );
}
