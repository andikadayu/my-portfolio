"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  {
    category: "Backend Development",
    file: "backend.go",
    lang: "Go",
    color: "text-green-400",
    borderColor: "border-green-500/30",
    glowColor: "rgba(0,255,65,0.15)",
    skills: [
      { name: "Go", icon: "🐹", level: 90 },
      { name: "C# .NET", icon: "🔷", level: 88 },
      { name: "Python", icon: "🐍", level: 82 },
      { name: "PHP", icon: "🐘", level: 80 },
      { name: "Laravel", icon: "🔴", level: 78 },
    ],
  },
  {
    category: "Frontend & Full-Stack",
    file: "frontend.tsx",
    lang: "TypeScript",
    color: "text-cyan-400",
    borderColor: "border-cyan-500/30",
    glowColor: "rgba(0,212,255,0.15)",
    skills: [
      { name: "React", icon: "⚛️", level: 85 },
      { name: "Next.js", icon: "▲", level: 83 },
      { name: "TypeScript", icon: "🔷", level: 82 },
      { name: "Tailwind CSS", icon: "💨", level: 88 },
      { name: "Redux", icon: "🔄", level: 78 },
    ],
  },
  {
    category: "Databases & Messaging",
    file: "database.yaml",
    lang: "YAML",
    color: "text-purple-400",
    borderColor: "border-purple-500/30",
    glowColor: "rgba(168,85,247,0.15)",
    skills: [
      { name: "MongoDB", icon: "🍃", level: 88 },
      { name: "Redis Cache", icon: "🔴", level: 85 },
      { name: "Firebase", icon: "🔥", level: 80 },
      { name: "RabbitMQ", icon: "🐰", level: 82 },
      { name: "gRPC", icon: "⚡", level: 80 },
    ],
  },
  {
    category: "Mobile & IoT",
    file: "embedded.cpp",
    lang: "C++",
    color: "text-orange-400",
    borderColor: "border-orange-500/30",
    glowColor: "rgba(251,146,60,0.15)",
    skills: [
      { name: "Java (Android)", icon: "☕", level: 78 },
      { name: "Arduino", icon: "🔌", level: 75 },
      { name: "IoT Systems", icon: "📡", level: 73 },
      { name: "Embedded", icon: "💾", level: 70 },
      { name: "Microservices", icon: "🔗", level: 90 },
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
      className={`terminal-card border ${category.borderColor} rounded-none overflow-hidden neon-hover`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      style={{ boxShadow: `0 0 0 1px rgba(0,0,0,0.5)` }}
      whileHover={{ boxShadow: `0 0 30px ${category.glowColor}` }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-2 bg-[#0d1117] border-b border-white/5 cursor-pointer select-none"
        onClick={() => setExpanded((e) => !e)}
      >
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <span className="font-terminal text-xs text-gray-600 flex-1 ml-2">
          {category.file}
        </span>
        <span
          className={`font-terminal text-xs px-1.5 py-0.5 bg-[#1a1a2e] ${category.color}`}
        >
          {category.lang}
        </span>
        <motion.span
          className="font-terminal text-xs text-gray-600 ml-2"
          animate={{ rotate: expanded ? 0 : -90 }}
          transition={{ duration: 0.2 }}
        >
          ▾
        </motion.span>
      </div>

      {/* Code content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="p-4 font-terminal text-xs"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Comment */}
            <div className="text-gray-600 mb-3">
              // {category.category.toLowerCase().replace(/ /g, "_")}
            </div>

            {/* Skill entries */}
            {category.skills.map((skill, si) => (
              <motion.div
                key={skill.name}
                className="mb-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 + si * 0.05, duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">&gt;</span>
                    <span className={`${category.color}`}>{skill.name}</span>
                    <span className="text-gray-700">=</span>
                    <span className="text-orange-400/80">
                      {skill.level}
                      <span className="text-gray-600">%</span>
                    </span>
                  </div>
                  <span className="text-gray-700">{skill.icon}</span>
                </div>

                {/* Progress bar */}
                <div className="h-px bg-gray-800 relative overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${
                      category.color.includes("green")
                        ? "from-green-600 to-green-400"
                        : category.color.includes("cyan")
                        ? "from-cyan-600 to-cyan-400"
                        : category.color.includes("purple")
                        ? "from-purple-600 to-purple-400"
                        : "from-orange-600 to-orange-400"
                    }`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: skill.level / 100 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1 + si * 0.07 + 0.3,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
              </motion.div>
            ))}

            {/* Closing line */}
            <div className="text-gray-600 mt-2">
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
    <section
      id="skills"
      className="py-20 relative overflow-hidden"
      aria-label="Technical Skills"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-3 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,255,65,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.03) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-terminal text-xs text-gray-600 mb-2">
            # skills &amp; expertise — {skills.reduce((a, c) => a + c.skills.length, 0)} technologies
          </div>
          <div className="flex items-end gap-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">tech_stack</span>
              <span className="text-gray-600 text-2xl">.json</span>
            </h2>
          </div>
          <div className="mt-3 font-terminal text-xs text-gray-600">
            <span className="text-green-700">andika@dev</span>
            <span className="text-gray-700">:~$&nbsp;</span>
            <span className="text-white">cat skills.json | jq</span>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {skills.map((category, i) => (
            <TerminalCard key={category.category} category={category} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          className="font-terminal text-xs text-gray-600 flex items-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.span
            className="text-green-500"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ●
          </motion.span>
          <span>Currently learning:</span>
          <span className="text-cyan-400">AI/ML Integration</span>
          <span className="text-gray-700">|</span>
          <span className="text-green-400">LLM APIs</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
