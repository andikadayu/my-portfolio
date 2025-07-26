"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: "https://cdn.simpleicons.org/react/000000" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/007ACC" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
  { name: "C#", icon: "https://static.cdnlogo.com/logos/c/27/c.svg" },
  { name: "Go", icon: "https://cdn.simpleicons.org/go/00ADD8" },
  { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  },
  { name: "Redux", icon: "https://cdn.simpleicons.org/redux/764ABC" },
  {
    name: "Microservices",
    icon: "https://cdn.simpleicons.org/microdotblog/FF8800",
  },
  { name: "RabbitMQ", icon: "https://cdn.simpleicons.org/rabbitmq/FF6600" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Redis Cache", icon: "https://cdn.simpleicons.org/redis/DC382D" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
  { name: "Arduino", icon: "https://cdn.simpleicons.org/arduino/00979D" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="container mx-auto py-24 text-center px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-4xl font-bold mb-12">My Skills</h2>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        variants={containerVariants}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={skillItemVariants}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgb(var(--primary-accent))",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-[rgb(var(--card-background))] text-[rgb(var(--foreground-rgb))] px-6 py-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-lg font-medium cursor-pointer border border-[rgb(var(--border-color))]"
          >
            {skill.icon && (
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 mb-2"
              />
            )}
            {skill.name}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
