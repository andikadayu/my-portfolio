"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "proj-001",
    title: "Warehouse Management System",
    slug: "warehouse-mgmt",
    description:
      "Comprehensive warehouse management with inventory tracking, order management, and real-time stock monitoring. Automated reorder points and detailed reporting.",
    tech: ["Laravel", "React", "MySQL", "REST APIs"],
    lang: "PHP",
    langColor: "text-purple-400",
    status: "deployed",
    link: "#",
    lines: 12400,
    commits: 234,
  },
  {
    id: "proj-002",
    title: "Enterprise Admin Dashboard",
    slug: "admin-dashboard",
    description:
      "Optimized web admin applications using Next.js for SSR, Tailwind CSS for styling, and Redux for state management. Modern, responsive interfaces for enterprise systems.",
    tech: ["Next.js", "Tailwind CSS", "Redux", "TypeScript"],
    lang: "TypeScript",
    langColor: "text-blue-400",
    status: "deployed",
    link: "#",
    lines: 8920,
    commits: 189,
  },
  {
    id: "proj-003",
    title: "API Optimization & Microservices",
    slug: "microservices-api",
    description:
      "High-performance API layer via Go and C# microservices. Implemented message queues with RabbitMQ, inter-service comms via gRPC, cutting response times by 60%.",
    tech: ["Go", "C#", "RabbitMQ", "gRPC", "Docker"],
    lang: "Go",
    langColor: "text-cyan-400",
    status: "deployed",
    link: "#",
    lines: 15600,
    commits: 312,
  },
  {
    id: "proj-004",
    title: "Mobile & Desktop Applications",
    slug: "mobile-desktop",
    description:
      "Cross-platform Android apps in Java with real-time Firebase location tracking. Desktop apps with Python, optimizing UX and performance across platforms.",
    tech: ["Java", "Android", "Firebase", "Python"],
    lang: "Java",
    langColor: "text-orange-400",
    status: "deployed",
    link: "#",
    lines: 6780,
    commits: 145,
  },
  {
    id: "proj-005",
    title: "IoT & Embedded Systems",
    slug: "iot-embedded",
    description:
      "Arduino-based IoT solutions with sensor integration, data collection, and real-time monitoring. Custom embedded firmware for industrial use cases.",
    tech: ["Arduino", "C++", "IoT", "Embedded Systems"],
    lang: "C++",
    langColor: "text-green-400",
    status: "deployed",
    link: "#",
    lines: 4200,
    commits: 98,
  },
  {
    id: "proj-006",
    title: "Web Crawling & Data Pipeline",
    slug: "web-crawler",
    description:
      "Advanced web crawlers for data extraction with robust error handling and validation. Automated data collection pipelines with scheduling and monitoring.",
    tech: ["Python", "Scrapy", "Pandas", "Automation"],
    lang: "Python",
    langColor: "text-yellow-400",
    status: "deployed",
    link: "#",
    lines: 3450,
    commits: 76,
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="terminal-card rounded-none overflow-hidden neon-hover group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.45 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -4 }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-[#0d1117] border-b border-white/5">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500/60" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
          <div className="w-2 h-2 rounded-full bg-green-500/60" />
        </div>
        <span className="font-terminal text-xs text-gray-600 flex-1 ml-1 truncate">
          {project.slug}/
        </span>
        <span className={`font-terminal text-xs ${project.langColor} flex-shrink-0`}>
          {project.lang}
        </span>
      </div>

      {/* Card body */}
      <div className="p-4">
        {/* ID + status */}
        <div className="flex items-center justify-between mb-2 font-terminal text-xs">
          <span className="text-gray-700">{project.id}</span>
          <div className="flex items-center gap-1">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-green-500"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-green-600">{project.status}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-green-300 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-xs leading-relaxed mb-3 font-terminal">
          {project.description}
        </p>

        {/* Stats row */}
        <div className="flex gap-4 mb-3 font-terminal text-xs text-gray-700">
          <span>
            <span className="text-green-700">~</span>
            {project.lines.toLocaleString()} lines
          </span>
          <span>
            <span className="text-green-700">⎇</span>
            {project.commits} commits
          </span>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tech.map((t) => (
            <motion.span
              key={t}
              className="font-terminal text-xs px-1.5 py-0.5 border border-green-500/20 text-green-600/80 bg-green-500/5"
              whileHover={{ borderColor: "rgba(0,255,65,0.5)", scale: 1.05 }}
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* Footer */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href={project.link}
                className="inline-flex items-center gap-2 font-terminal text-xs text-green-400 border border-green-500/30 px-3 py-1.5 hover:bg-green-500/10 transition-all"
              >
                <span>$</span>
                <span>./open-project</span>
                <span>→</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {!hovered && (
          <div className="font-terminal text-xs text-gray-700">
            <span className="text-gray-600">$ </span>hover to open →
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,255,65,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.02) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-terminal text-xs text-gray-600 mb-2">
            # project directory — {projects.length} repositories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">ls -la</span>
            <span className="text-gray-600 text-xl font-terminal"> ~/projects/</span>
          </h2>
          <div className="mt-3 font-terminal text-xs text-gray-600">
            <span className="text-green-700">andika@dev</span>
            <span className="text-gray-700">:~/projects$&nbsp;</span>
            <span className="text-white">ls --color=auto -la</span>
          </div>

          {/* ls header */}
          <div className="mt-4 font-terminal text-xs text-gray-700 border-b border-green-500/10 pb-2">
            total {projects.length} &nbsp;·&nbsp; drwxr-xr-x &nbsp;·&nbsp;
            andika_dayu &nbsp;·&nbsp; staff
          </div>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Footer prompt */}
        <motion.div
          className="mt-10 font-terminal text-xs text-gray-700 flex items-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-green-600">andika@dev</span>
          <span className="text-gray-600">:~/projects$</span>
          <motion.span
            className="text-gray-600"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            ▮
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
