"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  {
    category: "Backend Development",
    file: "backend.go",
    lang: "Go",
    color: "text-emerald-600",
    barFrom: "from-emerald-500",
    barTo: "to-teal-400",
    borderColor: "border-emerald-200",
    bgAccent: "bg-emerald-50",
    glowColor: "rgba(5,150,105,0.12)",
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
    color: "text-sky-600",
    barFrom: "from-sky-500",
    barTo: "to-cyan-400",
    borderColor: "border-sky-200",
    bgAccent: "bg-sky-50",
    glowColor: "rgba(8,145,178,0.12)",
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
    color: "text-violet-600",
    barFrom: "from-violet-500",
    barTo: "to-purple-400",
    borderColor: "border-violet-200",
    bgAccent: "bg-violet-50",
    glowColor: "rgba(124,58,237,0.12)",
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
    color: "text-orange-600",
    barFrom: "from-orange-500",
    barTo: "to-amber-400",
    borderColor: "border-orange-200",
    bgAccent: "bg-orange-50",
    glowColor: "rgba(234,88,12,0.1)",
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
      className={`terminal-card border ${category.borderColor} rounded-lg overflow-hidden neon-hover`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      whileHover={{ boxShadow: `0 8px 30px ${category.glowColor}` }}
    >
      {/* Title bar — light macOS style */}
      <div
        className={`flex items-center gap-2 px-4 py-2.5 ${category.bgAccent} border-b ${category.borderColor} cursor-pointer select-none`}
        onClick={() => setExpanded((e) => !e)}
      >
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="font-terminal text-xs text-slate-500 flex-1 ml-2">
          {category.file}
        </span>
        <span
          className={`font-terminal text-xs px-1.5 py-0.5 bg-white border ${category.borderColor} rounded ${category.color}`}
        >
          {category.lang}
        </span>
        <motion.span
          className="font-terminal text-xs text-slate-400 ml-2"
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
            className="p-4 font-terminal text-xs bg-white"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Comment header */}
            <div className="text-slate-400 mb-3 italic">
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
                transition={{ delay: index * 0.06 + si * 0.05, duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">&gt;</span>
                    <span className={`${category.color} font-medium`}>{skill.name}</span>
                    <span className="text-slate-300">=</span>
                    <span className="text-orange-500">
                      {skill.level}
                      <span className="text-slate-400">%</span>
                    </span>
                  </div>
                  <span className="text-base">{skill.icon}</span>
                </div>

                {/* Progress track */}
                <div className="h-1 bg-slate-100 rounded-full relative overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${category.barFrom} ${category.barTo} rounded-full`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: skill.level / 100 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08 + si * 0.07 + 0.3,
                      duration: 0.9,
                      ease: "easeOut",
                    }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
              </motion.div>
            ))}

            {/* Footer line */}
            <div className="text-slate-400 mt-2 italic">
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
      className="py-20 relative overflow-hidden bg-white/40"
      aria-label="Technical Skills"
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(5,150,105,0.15) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
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
          <div className="font-terminal text-xs text-slate-400 mb-2">
            # skills &amp; expertise — {skills.reduce((a, c) => a + c.skills.length, 0)} technologies
          </div>
          <div className="flex items-end gap-3 flex-wrap">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">tech_stack</span>
              <span className="text-slate-400 text-2xl">.json</span>
            </h2>
          </div>
          <div className="mt-3 font-terminal text-xs text-slate-400">
            <span className="text-emerald-600">andika@dev</span>
            <span className="text-slate-400">:~$&nbsp;</span>
            <span className="text-slate-700">cat skills.json | jq</span>
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
          className="font-terminal text-xs text-slate-400 flex items-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.span
            className="text-emerald-500"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ●
          </motion.span>
          <span className="text-slate-500">Currently learning:</span>
          <span className="text-sky-600 font-medium">AI/ML Integration</span>
          <span className="text-slate-300">|</span>
          <span className="text-emerald-600 font-medium">LLM APIs</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
