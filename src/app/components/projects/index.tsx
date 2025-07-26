"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Full-Stack Web Development (Laravel & React)",
    description:
      "Developed various web applications, including a warehouse management system with Laravel and React for dynamic user interfaces.",
    tags: ["Laravel", "PHP", "React"],
  },
  {
    title: "Frontend Development (Next.js, Tailwind, Redux)",
    description:
      "Built and optimized web admin applications using Next.js for server-side rendering, Tailwind CSS for styling, and Redux for state management.",
    tags: ["Next.js", "Tailwind CSS", "Redux"],
  },
  {
    title: "API Optimization",
    description:
      "Optimized APIs using Go and C# .NET, implementing microservices, RabbitMQ, gRPC, MongoDB, and Redis Cache to enhance performance and scalability.",
    tags: [
      "Go",
      "C# .NET",
      "Microservices",
      "RabbitMQ",
      "gRPC",
      "MongoDB",
      "Redis",
    ],
  },
  {
    title: "Mobile and Desktop Applications",
    description:
      "Built a real-time location tracking Android app with Java and Firebase, and a desktop application using Python.",
    tags: ["Java", "Android", "Firebase", "Python"],
  },
  {
    title: "IoT and Embedded Systems",
    description: "Developed IoT solutions and embedded systems using Arduino.",
    tags: ["IoT", "Arduino", "Embedded Systems"],
  },
];

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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="container mx-auto py-24 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }}
            className="bg-[rgb(var(--card-background))] p-8 rounded-lg shadow-lg border border-[rgb(var(--border-color))]"
          >
            <h3 className="text-2xl font-bold mb-3 text-[rgb(var(--secondary-accent))] ">
              {project.title}
            </h3>
            <p className="text-[rgb(var(--foreground-rgb))] mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[rgb(var(--border-color))] text-[rgb(var(--foreground-rgb))] px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
