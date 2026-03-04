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
    langColor: "text-violet-600",
    langBg: "bg-violet-50",
    langBorder: "border-violet-200",
    borderColor: "border-violet-200",
    tagText: "text-violet-700",
    tagBg: "bg-violet-50",
    tagBorder: "border-violet-200",
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
    langColor: "text-sky-600",
    langBg: "bg-sky-50",
    langBorder: "border-sky-200",
    borderColor: "border-sky-200",
    tagText: "text-sky-700",
    tagBg: "bg-sky-50",
    tagBorder: "border-sky-200",
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
    langColor: "text-emerald-600",
    langBg: "bg-emerald-50",
    langBorder: "border-emerald-200",
    borderColor: "border-emerald-200",
    tagText: "text-emerald-700",
    tagBg: "bg-emerald-50",
    tagBorder: "border-emerald-200",
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
    langColor: "text-orange-600",
    langBg: "bg-orange-50",
    langBorder: "border-orange-200",
    borderColor: "border-orange-200",
    tagText: "text-orange-700",
    tagBg: "bg-orange-50",
    tagBorder: "border-orange-200",
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
    langColor: "text-teal-600",
    langBg: "bg-teal-50",
    langBorder: "border-teal-200",
    borderColor: "border-teal-200",
    tagText: "text-teal-700",
    tagBg: "bg-teal-50",
    tagBorder: "border-teal-200",
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
    langColor: "text-amber-600",
    langBg: "bg-amber-50",
    langBorder: "border-amber-200",
    borderColor: "border-amber-200",
    tagText: "text-amber-700",
    tagBg: "bg-amber-50",
    tagBorder: "border-amber-200",
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
      className={`terminal-card border ${project.borderColor} rounded-lg overflow-hidden neon-hover group bg-white`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -5, scale: 1.01 }}
    >
      {/* Title bar — light macOS style */}
      <div
        className={`flex items-center gap-2 px-3 py-2.5 ${project.langBg} border-b ${project.borderColor}`}
      >
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-amber-400" />
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
        </div>
        <span className="font-terminal text-xs text-slate-500 flex-1 ml-1 truncate">
          {project.slug}/
        </span>
        <span
          className={`font-terminal text-xs ${project.langColor} ${project.langBg} border ${project.langBorder} px-1.5 py-0.5 rounded flex-shrink-0`}
        >
          {project.lang}
        </span>
      </div>

      {/* Card body */}
      <div className="p-4 bg-white">
        {/* ID + status */}
        <div className="flex items-center justify-between mb-2 font-terminal text-xs">
          <span className="text-slate-400">{project.id}</span>
          <div className="flex items-center gap-1.5">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-emerald-500"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-emerald-600">deployed</span>
          </div>
        </div>

        {/* Title */}
        <h3 className={`text-slate-800 font-bold text-sm mb-2 group-hover:${project.langColor} transition-colors`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-500 text-xs leading-relaxed mb-3 font-terminal">
          {project.description}
        </p>

        {/* Repo stats */}
        <div className="flex gap-4 mb-3 font-terminal text-xs text-slate-400">
          <span>
            <span className="text-emerald-500">~</span>
            {project.lines.toLocaleString()} lines
          </span>
          <span>
            <span className="text-emerald-500">⎇</span>
            {project.commits} commits
          </span>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tech.map((t) => (
            <motion.span
              key={t}
              className={`font-terminal text-xs px-1.5 py-0.5 border rounded-sm ${project.tagBg} ${project.tagBorder} ${project.tagText}`}
              whileHover={{ scale: 1.05 }}
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* Footer */}
        <AnimatePresence>
          {hovered ? (
            <motion.div
              key="open"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.15 }}
            >
              <a
                href={project.link}
                className={`inline-flex items-center gap-2 font-terminal text-xs ${project.langColor} border ${project.langBorder} ${project.langBg} px-3 py-1.5 rounded-sm hover:opacity-80 transition-all`}
              >
                <span>$</span>
                <span>./open-project</span>
                <span>→</span>
              </a>
            </motion.div>
          ) : (
            <motion.div
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-terminal text-xs text-slate-400"
            >
              <span className="text-slate-300">$ </span>hover to open →
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-white/40">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(8,145,178,0.12) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
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
          <div className="font-terminal text-xs text-slate-400 mb-2">
            # project directory — {projects.length} repositories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">ls -la</span>
            <span className="text-slate-400 text-xl font-terminal"> ~/projects/</span>
          </h2>
          <div className="mt-3 font-terminal text-xs text-slate-400">
            <span className="text-emerald-600">andika@dev</span>
            <span className="text-slate-400">:~/projects$&nbsp;</span>
            <span className="text-slate-700">ls --color=auto -la</span>
          </div>
          <div className="mt-3 font-terminal text-xs text-slate-300 border-b border-slate-100 pb-2">
            total {projects.length} &nbsp;·&nbsp; drwxr-xr-x &nbsp;·&nbsp;
            andika_dayu &nbsp;·&nbsp; staff
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Footer prompt */}
        <motion.div
          className="mt-10 font-terminal text-xs text-slate-400 flex items-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-emerald-600">andika@dev</span>
          <span className="text-slate-400">:~/projects$</span>
          <motion.span
            className="text-emerald-500"
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
