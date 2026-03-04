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
    langColor: "#d2a8ff",
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
    langColor: "#58a6ff",
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
    langColor: "#3fb950",
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
    langColor: "#ffa657",
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
    langColor: "#79c0ff",
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
    langColor: "#e3b341",
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
      className="rounded-md overflow-hidden group"
      style={{ background: "#161b22", border: "1px solid #30363d" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -4, borderColor: project.langColor + "50", boxShadow: `0 8px 28px ${project.langColor}15` }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-3 py-2.5" style={{ background: "#21262d", borderBottom: "1px solid #30363d" }}>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
          <div className="w-2 h-2 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-terminal text-xs text-[#8b949e] flex-1 ml-1 truncate">{project.slug}/</span>
        <span
          className="font-terminal text-xs px-1.5 py-0.5 rounded flex-shrink-0"
          style={{ color: project.langColor, background: "#0d1117", border: "1px solid #30363d" }}
        >
          {project.lang}
        </span>
      </div>

      {/* Body */}
      <div className="p-4">
        {/* ID + status */}
        <div className="flex items-center justify-between mb-2 font-terminal text-xs">
          <span style={{ color: "#484f58" }}>{project.id}</span>
          <div className="flex items-center gap-1.5">
            <motion.div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#3fb950" }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span style={{ color: "#3fb950" }}>deployed</span>
          </div>
        </div>

        <h3 className="font-bold text-sm mb-2 transition-colors" style={{ color: hovered ? project.langColor : "#e6edf3" }}>
          {project.title}
        </h3>

        <p className="text-xs leading-relaxed mb-3 font-terminal" style={{ color: "#8b949e" }}>
          {project.description}
        </p>

        {/* Stats */}
        <div className="flex gap-4 mb-3 font-terminal text-xs" style={{ color: "#484f58" }}>
          <span><span style={{ color: "#3fb950" }}>~</span>{project.lines.toLocaleString()} lines</span>
          <span><span style={{ color: "#3fb950" }}>⎇</span>{project.commits} commits</span>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tech.map((t) => (
            <motion.span
              key={t}
              className="font-terminal text-xs px-1.5 py-0.5 rounded-sm"
              style={{ color: project.langColor, background: project.langColor + "15", border: `1px solid ${project.langColor}30` }}
              whileHover={{ scale: 1.05 }}
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* Footer */}
        <AnimatePresence mode="wait">
          {hovered ? (
            <motion.div key="open" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 4 }} transition={{ duration: 0.15 }}>
              <a
                href={project.link}
                className="inline-flex items-center gap-2 font-terminal text-xs px-3 py-1.5 rounded-sm transition-all"
                style={{ color: project.langColor, background: project.langColor + "15", border: `1px solid ${project.langColor}40` }}
              >
                <span>$</span><span>./open-project</span><span>→</span>
              </a>
            </motion.div>
          ) : (
            <motion.div key="hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <span className="font-terminal text-xs" style={{ color: "#484f58" }}>
                <span style={{ color: "#30363d" }}>$ </span>hover to open →
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Faint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#21262d 1px, transparent 1px), linear-gradient(90deg, #21262d 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          opacity: 0.3,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="font-terminal text-xs mb-2" style={{ color: "#484f58" }}>
            # project directory — {projects.length} repositories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">ls -la</span>
            <span className="font-terminal text-xl" style={{ color: "#484f58" }}> ~/projects/</span>
          </h2>
          <div className="mt-3 font-terminal text-xs" style={{ color: "#484f58" }}>
            <span style={{ color: "#3fb950" }}>andika@dev</span>
            <span style={{ color: "#484f58" }}>:~/projects$&nbsp;</span>
            <span style={{ color: "#c9d1d9" }}>ls --color=auto -la</span>
          </div>
          <div className="mt-3 font-terminal text-xs pb-2" style={{ color: "#484f58", borderBottom: "1px solid #21262d" }}>
            total {projects.length} &nbsp;·&nbsp; drwxr-xr-x &nbsp;·&nbsp; andika_dayu &nbsp;·&nbsp; staff
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-10 font-terminal text-xs flex items-center gap-2"
          style={{ color: "#484f58" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <span style={{ color: "#3fb950" }}>andika@dev</span>
          <span style={{ color: "#484f58" }}>:~/projects$</span>
          <motion.span style={{ color: "#3fb950" }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>▮</motion.span>
        </motion.div>
      </div>
    </section>
  );
}
