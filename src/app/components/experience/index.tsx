"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    hash: "a3f9d12",
    title: "Full Stack Developer",
    company: "PT Venturo Pro Indonesia",
    period: "Oct 2022 - Present",
    duration: "2+ years",
    branch: "main",
    description:
      "Build and optimize APIs using Go and C# .NET. Work with microservices, RabbitMQ, gRPC, MongoDB, and Redis Cache. Develop web admin applications using Next.js, Tailwind, Shadcn, and Redux.",
    skills: [
      "Go", "C# .NET", "Microservices", "RabbitMQ", "gRPC",
      "MongoDB", "Redis", "Next.js", "Tailwind", "Redux",
    ],
    color: "text-emerald-600",
    borderColor: "border-emerald-200",
    bgAccent: "bg-emerald-50",
    dotColor: "bg-emerald-500",
    lineColor: "from-emerald-300",
    tagBg: "bg-emerald-50",
    tagBorder: "border-emerald-200",
    tagText: "text-emerald-700",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-700",
    badgeBorder: "border-emerald-300",
    status: "ACTIVE",
  },
  {
    hash: "b7c2e45",
    title: "Full Stack Developer",
    company: "CV Global Solusindo",
    period: "Jul 2021 - Feb 2022",
    duration: "8 months",
    branch: "feature/multi-platform",
    description:
      "Developed enterprise websites, web crawling applications. Created desktop applications with Python. Built Android apps with Java for real-time location tracking with Firebase. Developed embedded systems and IoT solutions with Arduino.",
    skills: ["Python", "Java", "Android", "Firebase", "Arduino", "IoT", "Web Crawling"],
    color: "text-sky-600",
    borderColor: "border-sky-200",
    bgAccent: "bg-sky-50",
    dotColor: "bg-sky-500",
    lineColor: "from-sky-300",
    tagBg: "bg-sky-50",
    tagBorder: "border-sky-200",
    tagText: "text-sky-700",
    badgeBg: "bg-slate-100",
    badgeText: "text-slate-500",
    badgeBorder: "border-slate-200",
    status: "MERGED",
  },
  {
    hash: "c1a8f33",
    title: "Intern",
    company: "PT Internusa Cipta Solusi Perdana",
    period: "Jun 2019 - Jun 2020",
    duration: "1 year",
    branch: "internship/warehouse",
    description:
      "Built a website to manage large datasets in a warehouse using Laravel and PHP. Managed data using Microsoft Excel and gained foundational experience in web development.",
    skills: ["Laravel", "PHP", "MySQL", "Data Management", "Microsoft Excel"],
    color: "text-violet-600",
    borderColor: "border-violet-200",
    bgAccent: "bg-violet-50",
    dotColor: "bg-violet-500",
    lineColor: "from-violet-300",
    tagBg: "bg-violet-50",
    tagBorder: "border-violet-200",
    tagText: "text-violet-700",
    badgeBg: "bg-slate-100",
    badgeText: "text-slate-500",
    badgeBorder: "border-slate-200",
    status: "MERGED",
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
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      {/* Vertical git line */}
      {index < experiences.length - 1 && (
        <div
          className={`absolute left-[19px] top-10 bottom-0 w-0.5 bg-gradient-to-b ${exp.lineColor} to-transparent`}
        />
      )}

      <div className="flex items-start gap-4">
        {/* Commit dot */}
        <div className="flex-shrink-0 flex flex-col items-center mt-1">
          <motion.div
            className={`w-10 h-10 rounded-full border-2 ${exp.borderColor} ${exp.bgAccent} flex items-center justify-center relative z-10 shadow-sm`}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className={`w-2.5 h-2.5 rounded-full ${exp.dotColor}`}
              animate={
                exp.status === "ACTIVE"
                  ? { scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }
                  : {}
              }
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Card */}
        <div className="flex-1 pb-8">
          <button className="w-full text-left" onClick={() => setOpen((o) => !o)}>
            <motion.div
              className={`terminal-card border ${exp.borderColor} rounded-lg p-4 neon-hover cursor-pointer`}
              whileHover={{ x: 4, boxShadow: `0 4px 20px ${exp.dotColor === "bg-emerald-500" ? "rgba(5,150,105,0.15)" : exp.dotColor === "bg-sky-500" ? "rgba(8,145,178,0.15)" : "rgba(124,58,237,0.12)"}` }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Commit meta */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-terminal text-xs mb-3">
                <span className="text-amber-600">commit</span>
                <span className="text-slate-400">{exp.hash}</span>
                <span className="text-slate-400">on</span>
                <span className={`${exp.color} font-medium`}>{exp.branch}</span>
                <span
                  className={`ml-auto px-1.5 py-0.5 text-xs font-terminal border rounded-full ${exp.badgeBg} ${exp.badgeText} ${exp.badgeBorder}`}
                >
                  {exp.status}
                </span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-slate-800 font-bold text-base mb-0.5">
                    {exp.title}
                  </h3>
                  <div className={`font-terminal text-sm ${exp.color} font-medium`}>
                    {exp.company}
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-terminal text-xs text-slate-400">{exp.period}</div>
                  <div className={`font-terminal text-xs ${exp.color} mt-0.5`}>
                    [{exp.duration}]
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 mt-3 font-terminal text-xs text-slate-400">
                <motion.span
                  animate={{ rotate: open ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  ▶
                </motion.span>
                <span>{open ? "collapse" : "expand"} details</span>
              </div>
            </motion.div>
          </button>

          {/* Expandable detail panel */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div
                  className={`border border-t-0 ${exp.borderColor} ${exp.bgAccent} rounded-b-lg p-4 font-terminal text-xs`}
                >
                  <div className="text-slate-400 mb-2 italic">
                    diff --git a/career.log b/career.log
                  </div>
                  <div className="mb-3 text-slate-600 leading-relaxed border-l-2 border-emerald-300 pl-3">
                    <span className="text-emerald-500">+&nbsp;</span>
                    {exp.description}
                  </div>
                  <div className="text-slate-400 mb-2 italic">// technologies used:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className={`px-2 py-0.5 border rounded-sm ${exp.tagBg} ${exp.tagBorder} ${exp.tagText}`}
                        whileHover={{ scale: 1.05 }}
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

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Cheerful gradient bg band */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 pointer-events-none" />

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
            # career log — {experiences.length} commits
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">git log</span>
            <span className="text-slate-400 text-xl font-terminal"> --career --all</span>
          </h2>
          <div className="mt-3 font-terminal text-xs text-slate-400">
            <span className="text-emerald-600">andika@dev</span>
            <span className="text-slate-400">:~$&nbsp;</span>
            <span className="text-slate-700">git log --oneline --graph --decorate</span>
          </div>
        </motion.div>

        <div className="max-w-3xl">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.hash} exp={exp} index={i} />
          ))}
        </div>

        <motion.div
          className="font-terminal text-xs text-slate-400 mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <span className="text-emerald-500">●</span> HEAD → main (origin/main, origin/HEAD)
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
