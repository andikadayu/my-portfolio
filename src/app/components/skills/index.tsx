"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  {
    category: "Backend Development",
    file: "backend.go",
    lang: "Go",
    color: "#3fb950",
    borderColor: "#30363d",
    bgTitle: "#161b22",
    glowColor: "rgba(63,185,80,0.1)",
    skills: [
      { name: "Go", icon: "🐹" },
      { name: "C# .NET", icon: "🔷" },
      { name: "Python", icon: "🐍" },
      { name: "PHP", icon: "🐘" },
      { name: "Laravel", icon: "🔴" },
    ],
  },
  {
    category: "Frontend & Full-Stack",
    file: "frontend.tsx",
    lang: "TypeScript",
    color: "#58a6ff",
    borderColor: "#30363d",
    bgTitle: "#161b22",
    glowColor: "rgba(88,166,255,0.1)",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Tailwind CSS", icon: "💨" },
      { name: "Redux", icon: "🔄" },
    ],
  },
  {
    category: "Databases & Messaging",
    file: "database.yaml",
    lang: "YAML",
    color: "#d2a8ff",
    borderColor: "#30363d",
    bgTitle: "#161b22",
    glowColor: "rgba(210,168,255,0.1)",
    skills: [
      { name: "MongoDB", icon: "🍃" },
      { name: "Redis Cache", icon: "🔴" },
      { name: "Firebase", icon: "🔥" },
      { name: "RabbitMQ", icon: "🐰" },
      { name: "gRPC", icon: "⚡" },
    ],
  },
  {
    category: "Mobile & IoT",
    file: "embedded.cpp",
    lang: "C++",
    color: "#ffa657",
    borderColor: "#30363d",
    bgTitle: "#161b22",
    glowColor: "rgba(255,166,87,0.1)",
    skills: [
      { name: "Java (Android)", icon: "☕" },
      { name: "Arduino", icon: "🔌" },
      { name: "IoT Systems", icon: "📡" },
      { name: "Embedded", icon: "💾" },
      { name: "Microservices", icon: "🔗" },
    ],
  },
];

const TerminalCard = ({
  category,
  index,
}: {
  category: (typeof skills)[0];
  index: number;
}) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <motion.div
      className="rounded-md overflow-hidden neon-hover"
      style={{ background: "#161b22", border: `1px solid ${category.borderColor}` }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      whileHover={{ boxShadow: `0 8px 30px ${category.glowColor}` }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-2.5 cursor-pointer select-none"
        style={{ background: "#21262d", borderBottom: "1px solid #30363d" }}
        onClick={() => setExpanded((e) => !e)}
      >
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-terminal text-xs text-[#8b949e] flex-1 ml-2">{category.file}</span>
        <span
          className="font-terminal text-xs px-1.5 py-0.5 rounded"
          style={{ color: category.color, background: "#0d1117", border: "1px solid #30363d" }}
        >
          {category.lang}
        </span>
        <motion.span
          className="font-terminal text-xs text-[#484f58] ml-2"
          animate={{ rotate: expanded ? 0 : -90 }}
          transition={{ duration: 0.2 }}
        >
          ▾
        </motion.span>
      </div>

      {/* Content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="p-4 font-terminal text-xs"
            style={{ background: "#161b22" }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Comment */}
            <div className="mb-3 italic" style={{ color: "#484f58" }}>
              // {category.category.toLowerCase().replace(/ /g, "_")}
            </div>

            {/* Skill list */}
            <div className="space-y-0.5">
              {category.skills.map((skill, si) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center gap-2 py-1.5"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 + si * 0.04, duration: 0.3 }}
                  whileHover={{ x: 3 }}
                >
                  <span style={{ color: "#484f58" }} className="select-none">&gt;</span>
                  <span className="text-base leading-none">{skill.icon}</span>
                  <span style={{ color: category.color }} className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-2 italic" style={{ color: "#484f58" }}>
              // {category.skills.length} skills loaded ✓
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden" aria-label="Technical Skills">
      {/* Faint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#21262d 1px, transparent 1px), linear-gradient(90deg, #21262d 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          opacity: 0.35,
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
          <div className="font-terminal text-xs mb-2" style={{ color: "#484f58" }}>
            # skills &amp; expertise — {skills.reduce((a, c) => a + c.skills.length, 0)} technologies
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">tech_stack</span>
            <span className="font-terminal text-2xl" style={{ color: "#484f58" }}>.json</span>
          </h2>
          <div className="mt-3 font-terminal text-xs" style={{ color: "#484f58" }}>
            <span style={{ color: "#3fb950" }}>andika@dev</span>
            <span style={{ color: "#484f58" }}>:~$&nbsp;</span>
            <span style={{ color: "#c9d1d9" }}>cat skills.json | jq</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {skills.map((category, i) => (
            <TerminalCard key={category.category} category={category} index={i} />
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="font-terminal text-xs flex items-center gap-3"
          style={{ color: "#8b949e" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.span
            style={{ color: "#3fb950" }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >●</motion.span>
          <span style={{ color: "#484f58" }}>Currently learning:</span>
          <span style={{ color: "#58a6ff" }}>AI/ML Integration</span>
          <span style={{ color: "#30363d" }}>|</span>
          <span style={{ color: "#3fb950" }}>LLM APIs</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
