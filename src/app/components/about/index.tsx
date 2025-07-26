
'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="container mx-auto py-24 text-center min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-[rgb(var(--primary-accent))] ">
        Andika Dayu
      </motion.h1>
      <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl text-[rgb(var(--foreground-rgb))] font-semibold mb-8">
        Backend Developer
      </motion.h2>
      <motion.p variants={itemVariants} className="mt-4 text-base sm:text-xl max-w-3xl mx-auto text-[rgb(var(--foreground-rgb))] leading-relaxed">
        With over 3 years in backend development, I bring a robust skill set in technologies like Go, C#, Python, and PHP. I have hands-on experience in building and optimizing APIs, working with microservices, and developing full-stack solutions. I am a collaborative team player with strong problem-solving, communication, and leadership skills.
      </motion.p>
    </motion.section>
  );
}
