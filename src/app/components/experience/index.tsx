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
    skills: ["Go", "C# .NET", "Microservices", "RabbitMQ", "gRPC", "MongoDB", "Redis", "Next.js", "Tailwind", "Redux"],
    accentColor: "#3fb950",
    dotBg: "rgba(63,185,80,0.15)",
    tagColor: "#3fb950",
    status: "ACTIVE",
    statusBg: "rgba(63,185,80,0.15)",
    statusColor: "#3fb950",
    statusBorder: "rgba(63,185,80,0.4)",
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
    accentColor: "#58a6ff",
    dotBg: "rgba(88,166,255,0.15)",
    tagColor: "#58a6ff",
    status: "MERGED",
    statusBg: "rgba(139,148,158,0.1)",
    statusColor: "#8b949e",
    statusBorder: "#30363d",
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
    accentColor: "#d2a8ff",
    dotBg: "rgba(210,168,255,0.15)",
    tagColor: "#d2a8ff",
    status: "MERGED",
    statusBg: "rgba(139,148,158,0.1)",
    statusColor: "#8b949e",
    statusBorder: "#30363d",
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
      {/* Git line */}
      {index < experiences.length - 1 && (
        <div
          className="absolute left-[19px] top-10 bottom-0 w-px"
          style={{ background: `linear-gradient(to bottom, ${exp.accentColor}50, transparent)` }}
        />
      )}

      <div className="flex items-start gap-4">
        {/* Commit dot */}
        <div className="flex-shrink-0 mt-1">
          <motion.div
            className="w-10 h-10 rounded-full flex items-center justify-center relative z-10"
            style={{ background: exp.dotBg, border: `1px solid ${exp.accentColor}50` }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: exp.accentColor }}
              animate={exp.status === "ACTIVE" ? { scale: [1, 1.4, 1], opacity: [1, 0.6, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Card */}
        <div className="flex-1 pb-8">
          <button className="w-full text-left" onClick={() => setOpen((o) => !o)}>
            <motion.div
              className="rounded-md p-4 cursor-pointer"
              style={{ background: "#161b22", border: "1px solid #30363d" }}
              whileHover={{ x: 4, borderColor: exp.accentColor + "60", boxShadow: `0 4px 20px ${exp.accentColor}15` }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Commit meta */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-terminal text-xs mb-3">
                <span style={{ color: "#e3b341" }}>commit</span>
                <span style={{ color: "#8b949e" }}>{exp.hash}</span>
                <span style={{ color: "#484f58" }}>on</span>
                <span style={{ color: exp.accentColor }}>{exp.branch}</span>
                <span
                  className="ml-auto px-1.5 py-0.5 text-xs font-terminal rounded-full"
                  style={{
                    background: exp.statusBg,
                    color: exp.statusColor,
                    border: `1px solid ${exp.statusBorder}`,
                  }}
                >
                  {exp.status}
                </span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold text-base mb-0.5" style={{ color: "#e6edf3" }}>{exp.title}</h3>
                  <div className="font-terminal text-sm font-medium" style={{ color: exp.accentColor }}>{exp.company}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-terminal text-xs" style={{ color: "#8b949e" }}>{exp.period}</div>
                  <div className="font-terminal text-xs mt-0.5" style={{ color: exp.accentColor }}>[{exp.duration}]</div>
                </div>
              </div>

              <div className="flex items-center gap-1 mt-3 font-terminal text-xs" style={{ color: "#484f58" }}>
                <motion.span animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }}>▶</motion.span>
                <span>{open ? "collapse" : "expand"} details</span>
              </div>
            </motion.div>
          </button>

          {/* Detail panel */}
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
                  className="p-4 font-terminal text-xs rounded-b-md"
                  style={{ background: "#0d1117", borderLeft: `1px solid #30363d`, borderRight: `1px solid #30363d`, borderBottom: `1px solid #30363d` }}
                >
                  <div className="mb-2 italic" style={{ color: "#484f58" }}>diff --git a/career.log b/career.log</div>
                  <div className="mb-3 leading-relaxed" style={{ color: "#8b949e", borderLeft: `2px solid ${exp.accentColor}50`, paddingLeft: "12px" }}>
                    <span style={{ color: "#3fb950" }}>+&nbsp;</span>{exp.description}
                  </div>
                  <div className="mb-2 italic" style={{ color: "#484f58" }}>// technologies used:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-2 py-0.5 rounded-sm font-terminal text-xs"
                        style={{ color: exp.tagColor, background: exp.dotBg, border: `1px solid ${exp.accentColor}30` }}
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
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-terminal text-xs mb-2" style={{ color: "#484f58" }}>
            # career log — {experiences.length} commits
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">git log</span>
            <span className="font-terminal text-xl" style={{ color: "#484f58" }}> --career --all</span>
          </h2>
          <div className="mt-3 font-terminal text-xs" style={{ color: "#484f58" }}>
            <span style={{ color: "#3fb950" }}>andika@dev</span>
            <span style={{ color: "#484f58" }}>:~$&nbsp;</span>
            <span style={{ color: "#c9d1d9" }}>git log --oneline --graph --decorate</span>
          </div>
        </motion.div>

        <div className="max-w-3xl">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.hash} exp={exp} index={i} />
          ))}
        </div>

        <motion.div
          className="font-terminal text-xs mt-2"
          style={{ color: "#484f58" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <span style={{ color: "#3fb950" }}>●</span> HEAD → main (origin/main, origin/HEAD)
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
