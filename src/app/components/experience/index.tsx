"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "PT Venturo Pro Indonesia",
    period: "Oct 2022 – Present",
    duration: "2+ years",
    description:
      "Build and optimize APIs using Go and C# .NET. Work with microservices, RabbitMQ, gRPC, MongoDB, and Redis Cache. Develop web admin applications using Next.js, Tailwind, Shadcn, and Redux.",
    skills: ["Go", "C# .NET", "Microservices", "RabbitMQ", "gRPC", "MongoDB", "Redis", "Next.js", "Tailwind", "Redux"],
    gradient:    "from-emerald-500 to-teal-600",
    accentText:  "text-emerald-700 dark:text-emerald-400",
    accentBadge: "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400",
    dot:         "bg-emerald-500",
    lineColor:   "from-emerald-400/30",
    current: true,
  },
  {
    title: "Full Stack Developer",
    company: "CV Global Solusindo",
    period: "Jul 2021 – Feb 2022",
    duration: "8 months",
    description:
      "Developed enterprise websites and web crawling applications. Built desktop apps with Python and Android apps in Java with real-time Firebase location tracking. Designed embedded systems and IoT solutions with Arduino.",
    skills: ["Python", "Java", "Android", "Firebase", "Arduino", "IoT", "Web Crawling"],
    gradient:    "from-blue-500 to-indigo-600",
    accentText:  "text-blue-700 dark:text-blue-400",
    accentBadge: "bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400",
    dot:         "bg-blue-500",
    lineColor:   "from-blue-400/30",
    current: false,
  },
  {
    title: "Software Intern",
    company: "PT Internusa Cipta Solusi Perdana",
    period: "Jun 2019 – Jun 2020",
    duration: "1 year",
    description:
      "Built a warehouse dataset management website using Laravel and PHP. Handled data operations with MySQL and Microsoft Excel, gaining foundational web development experience.",
    skills: ["Laravel", "PHP", "MySQL", "Data Management", "Microsoft Excel"],
    gradient:    "from-violet-500 to-purple-600",
    accentText:  "text-violet-700 dark:text-violet-400",
    accentBadge: "bg-violet-50 dark:bg-violet-500/10 border-violet-200 dark:border-violet-500/20 text-violet-700 dark:text-violet-400",
    dot:         "bg-violet-500",
    lineColor:   "from-violet-400/30",
    current: false,
  },
];

const ExperienceCard = ({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) => {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.14, duration: 0.5, ease: "easeOut" }}
    >
      {/* Vertical timeline line */}
      {index < experiences.length - 1 && (
        <div
          className={`absolute left-[19px] top-12 bottom-0 w-px bg-gradient-to-b ${exp.lineColor} to-transparent`}
        />
      )}

      <div className="flex gap-5">
        {/* Timeline dot */}
        <div className="flex-shrink-0 mt-0.5">
          <motion.div
            className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm z-10 relative"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className={`w-3 h-3 rounded-full ${exp.dot}`}
              animate={exp.current ? { scale: [1, 1.4, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        {/* Card */}
        <div className="flex-1 pb-10">
          <motion.div
            className="card rounded-2xl overflow-hidden"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 250, damping: 22 }}
          >
            {/* Top accent */}
            <div className={`h-0.5 w-full bg-gradient-to-r ${exp.gradient}`} />

            <div className="p-5">
              {/* Header row */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-0.5">
                    {exp.title}
                  </h3>
                  <div className={`text-sm font-medium ${exp.accentText}`}>
                    {exp.company}
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-xs text-slate-500 dark:text-slate-400">{exp.period}</div>
                  <div className={`text-xs mt-0.5 font-medium ${exp.accentText}`}>
                    {exp.duration}
                  </div>
                </div>
              </div>

              {/* Footer: current badge + expand toggle */}
              <div className="flex items-center">
                {exp.current && (
                  <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/25 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-soft" />
                    Current Role
                  </span>
                )}
                <button
                  className={`ml-auto flex items-center gap-1 text-xs font-medium ${exp.accentText} hover:opacity-80 transition-opacity`}
                  onClick={() => setOpen((o) => !o)}
                >
                  <motion.svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </motion.svg>
                  {open ? "Collapse" : "Details"}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Expandable detail panel */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="mt-2 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className={`text-xs px-2.5 py-1 rounded-full border font-medium ${exp.accentBadge}`}
                        whileHover={{ scale: 1.06 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => (
  <section id="experience" className="py-24 relative" aria-label="Work Experience">
    <div className="container mx-auto px-4">
      {/* Section header */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-xs font-medium mb-4 shadow-sm">
          Work History &nbsp;·&nbsp; {experiences.length} Positions
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          Work{" "}
          <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          My professional journey building products across backend, full-stack, and embedded systems
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.company} exp={exp} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
