"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Warehouse Management System",
    description:
      "Comprehensive warehouse management with inventory tracking, order management, and real-time stock monitoring. Automated reorder points with detailed reporting.",
    tech: ["Laravel", "React", "MySQL", "REST APIs"],
    gradient:    "from-violet-500 to-purple-600",
    accentText:  "text-violet-700 dark:text-violet-400",
    accentBadge: "bg-violet-50 dark:bg-violet-500/10 border-violet-200 dark:border-violet-500/20 text-violet-700 dark:text-violet-400",
    lang: "PHP",
    link: "#",
  },
  {
    title: "Enterprise Admin Dashboard",
    description:
      "Optimized web admin with Next.js SSR, Tailwind CSS styling, and Redux state management for modern, responsive enterprise interfaces.",
    tech: ["Next.js", "Tailwind CSS", "Redux", "TypeScript"],
    gradient:    "from-blue-500 to-indigo-600",
    accentText:  "text-blue-700 dark:text-blue-400",
    accentBadge: "bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400",
    lang: "TypeScript",
    link: "#",
  },
  {
    title: "Microservices API Platform",
    description:
      "High-performance API layer via Go and C# microservices. RabbitMQ message queues and gRPC inter-service communication cut response times by 60%.",
    tech: ["Go", "C#", "RabbitMQ", "gRPC", "Docker"],
    gradient:    "from-emerald-500 to-teal-600",
    accentText:  "text-emerald-700 dark:text-emerald-400",
    accentBadge: "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400",
    lang: "Go",
    link: "#",
  },
  {
    title: "Mobile & Desktop Suite",
    description:
      "Cross-platform Android apps in Java with real-time Firebase location tracking. Desktop utilities with Python, optimized for UX and performance.",
    tech: ["Java", "Android", "Firebase", "Python"],
    gradient:    "from-orange-500 to-amber-500",
    accentText:  "text-orange-700 dark:text-orange-400",
    accentBadge: "bg-orange-50 dark:bg-orange-500/10 border-orange-200 dark:border-orange-500/20 text-orange-700 dark:text-orange-400",
    lang: "Java",
    link: "#",
  },
  {
    title: "IoT & Embedded Systems",
    description:
      "Arduino-based IoT solutions with sensor integration, real-time data collection, and monitoring dashboards for industrial use cases.",
    tech: ["Arduino", "C++", "IoT", "Embedded Systems"],
    gradient:    "from-sky-500 to-cyan-600",
    accentText:  "text-sky-700 dark:text-sky-400",
    accentBadge: "bg-sky-50 dark:bg-sky-500/10 border-sky-200 dark:border-sky-500/20 text-sky-700 dark:text-sky-400",
    lang: "C++",
    link: "#",
  },
  {
    title: "Web Crawling & Data Pipeline",
    description:
      "Advanced web scrapers for structured data extraction, with scheduling, error handling, and automated ETL pipelines using Scrapy and Pandas.",
    tech: ["Python", "Scrapy", "Pandas", "Automation"],
    gradient:    "from-yellow-500 to-orange-500",
    accentText:  "text-yellow-700 dark:text-yellow-400",
    accentBadge: "bg-yellow-50 dark:bg-yellow-500/10 border-yellow-200 dark:border-yellow-500/20 text-yellow-700 dark:text-yellow-400",
    lang: "Python",
    link: "#",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => (
  <motion.div
    className="card rounded-2xl overflow-hidden group flex flex-col"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08, duration: 0.45, ease: "easeOut" }}
    whileHover={{ y: -5 }}
  >
    {/* Gradient accent bar */}
    <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient} flex-shrink-0`} />

    <div className="p-5 flex flex-col flex-1">
      {/* Lang badge + status */}
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${project.accentBadge}`}>
          {project.lang}
        </span>
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-emerald-500"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Active
        </div>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className={`text-xs px-2 py-0.5 rounded-full border ${project.accentBadge}`}
          >
            {t}
          </span>
        ))}
      </div>

      {/* CTA */}
      <motion.a
        href={project.link}
        className={`inline-flex items-center gap-1.5 text-xs font-medium ${project.accentText} hover:opacity-80 transition-opacity mt-auto`}
        whileHover={{ x: 3 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        View Project
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </motion.a>
    </div>
  </motion.div>
);

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative" aria-label="Featured Projects">
      {/* Subtle section tint */}
      <div className="absolute inset-0 bg-slate-50/60 dark:bg-slate-900/40 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-xs font-medium mb-4 shadow-sm">
            Portfolio &nbsp;·&nbsp; {projects.length} Projects
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            A selection of work spanning backend APIs, full-stack apps, mobile solutions, and embedded systems
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
