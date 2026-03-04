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
      "Go",
      "C# .NET",
      "Microservices",
      "RabbitMQ",
      "gRPC",
      "MongoDB",
      "Redis",
      "Next.js",
      "Tailwind",
      "Redux",
    ],
    color: "text-green-400",
    borderColor: "border-green-500/30",
    dotColor: "bg-green-500",
    lineColor: "from-green-500",
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
    color: "text-cyan-400",
    borderColor: "border-cyan-500/30",
    dotColor: "bg-cyan-500",
    lineColor: "from-cyan-500",
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
    color: "text-purple-400",
    borderColor: "border-purple-500/30",
    dotColor: "bg-purple-500",
    lineColor: "from-purple-500",
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
      {/* Git commit line (vertical) */}
      {index < experiences.length - 1 && (
        <div className="absolute left-[19px] top-10 bottom-0 w-px bg-gradient-to-b from-green-500/30 to-transparent" />
      )}

      {/* Commit dot */}
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 flex flex-col items-center">
          <motion.div
            className={`w-10 h-10 rounded-none border ${exp.borderColor} ${exp.dotColor}/20 flex items-center justify-center font-terminal text-xs ${exp.color} relative z-10`}
            whileHover={{ scale: 1.1 }}
            style={{ background: "rgba(8,12,20,0.95)" }}
          >
            <motion.div
              className={`w-2 h-2 rounded-full ${exp.dotColor}`}
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
          {/* Commit header (clickable) */}
          <button
            className="w-full text-left"
            onClick={() => setOpen((o) => !o)}
          >
            <motion.div
              className={`terminal-card border ${exp.borderColor} p-4 neon-hover cursor-pointer`}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Commit line */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-terminal text-xs mb-2">
                <span className="text-yellow-500/80">commit</span>
                <span className="text-orange-400/80">{exp.hash}</span>
                <span className="text-gray-600">on branch</span>
                <span className={exp.color}>{exp.branch}</span>
                <span
                  className={`ml-auto px-1.5 py-0.5 text-xs font-terminal border ${
                    exp.status === "ACTIVE"
                      ? "border-green-500/50 text-green-400 bg-green-500/10"
                      : "border-gray-600/50 text-gray-500 bg-gray-800/30"
                  }`}
                >
                  {exp.status}
                </span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-white font-semibold text-base mb-0.5">
                    {exp.title}
                  </h3>
                  <div className={`font-terminal text-sm ${exp.color}`}>
                    {exp.company}
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-terminal text-xs text-gray-500">
                    {exp.period}
                  </div>
                  <div className={`font-terminal text-xs ${exp.color} mt-0.5`}>
                    [{exp.duration}]
                  </div>
                </div>
              </div>

              {/* Toggle hint */}
              <div className="flex items-center gap-1 mt-2 font-terminal text-xs text-gray-700">
                <motion.span animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }}>
                  ▶
                </motion.span>
                <span>{open ? "collapse" : "expand"} details</span>
              </div>
            </motion.div>
          </button>

          {/* Expandable details */}
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
                  className={`border border-t-0 ${exp.borderColor} bg-[#05080f] p-4 font-terminal text-xs`}
                >
                  {/* diff output style */}
                  <div className="text-gray-600 mb-2">
                    diff --git a/career.log b/career.log
                  </div>
                  <div className="mb-3 text-gray-400 leading-relaxed border-l-2 border-green-500/30 pl-3">
                    <span className="text-green-600">+&nbsp;</span>
                    {exp.description}
                  </div>

                  {/* Tech tags */}
                  <div className="text-gray-600 mb-2">// technologies used:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className={`px-2 py-0.5 border ${exp.borderColor} ${exp.color} text-xs font-terminal bg-[#080c14]`}
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
    <section
      id="experience"
      className="py-20 relative overflow-hidden"
    >
      {/* Faint grid bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,255,65,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.02) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
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
            # career log — {experiences.length} commits
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">git log</span>
            <span className="text-gray-600 text-xl font-terminal"> --career --all</span>
          </h2>
          <div className="mt-3 font-terminal text-xs text-gray-600">
            <span className="text-green-700">andika@dev</span>
            <span className="text-gray-700">:~$&nbsp;</span>
            <span className="text-white">git log --oneline --graph --decorate</span>
          </div>
        </motion.div>

        {/* Commit log */}
        <div className="max-w-3xl">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.hash} exp={exp} index={i} />
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="font-terminal text-xs text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <span className="text-green-600">●</span> HEAD → main (origin/main, origin/HEAD)
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
