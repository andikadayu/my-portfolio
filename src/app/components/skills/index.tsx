"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Backend Development",
    icon: "⚙️",
    gradient: "from-emerald-500 to-teal-600",
    accentText: "text-emerald-700 dark:text-emerald-400",
    accentBadge:
      "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400",
    skills: [
      { name: "Go",       icon: "🐹" },
      { name: "C# .NET",  icon: "🔷" },
      { name: "Python",   icon: "🐍" },
      { name: "PHP",      icon: "🐘" },
      { name: "Laravel",  icon: "🔴" },
    ],
  },
  {
    title: "Frontend & Full-Stack",
    icon: "🎨",
    gradient: "from-blue-500 to-indigo-600",
    accentText: "text-blue-700 dark:text-blue-400",
    accentBadge:
      "bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400",
    skills: [
      { name: "React",        icon: "⚛️" },
      { name: "Next.js",      icon: "▲" },
      { name: "TypeScript",   icon: "📘" },
      { name: "Tailwind CSS", icon: "💨" },
      { name: "Redux",        icon: "🔄" },
    ],
  },
  {
    title: "Databases & Messaging",
    icon: "🗄️",
    gradient: "from-violet-500 to-purple-600",
    accentText: "text-violet-700 dark:text-violet-400",
    accentBadge:
      "bg-violet-50 dark:bg-violet-500/10 border-violet-200 dark:border-violet-500/20 text-violet-700 dark:text-violet-400",
    skills: [
      { name: "MongoDB",    icon: "🍃" },
      { name: "Redis",      icon: "🔴" },
      { name: "Firebase",   icon: "🔥" },
      { name: "RabbitMQ",   icon: "🐰" },
      { name: "gRPC",       icon: "⚡" },
    ],
  },
  {
    title: "Mobile & IoT",
    icon: "📱",
    gradient: "from-orange-500 to-amber-500",
    accentText: "text-orange-700 dark:text-orange-400",
    accentBadge:
      "bg-orange-50 dark:bg-orange-500/10 border-orange-200 dark:border-orange-500/20 text-orange-700 dark:text-orange-400",
    skills: [
      { name: "Java (Android)", icon: "☕" },
      { name: "Arduino",        icon: "🔌" },
      { name: "IoT Systems",    icon: "📡" },
      { name: "Embedded",       icon: "💾" },
      { name: "Microservices",  icon: "🔗" },
    ],
  },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

const SkillCard = ({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) => (
  <motion.div
    className="card rounded-2xl overflow-hidden"
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 250, damping: 20 }}
  >
    {/* Top accent bar */}
    <div className={`h-1 w-full bg-gradient-to-r ${category.gradient}`} />

    <div className="p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-xl shadow-md`}
        >
          {category.icon}
        </div>
        <h3 className={`font-semibold ${category.accentText}`}>
          {category.title}
        </h3>
      </div>

      {/* Skill badges */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, si) => (
          <motion.span
            key={skill.name}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${category.accentBadge}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 + si * 0.05, duration: 0.3 }}
            whileHover={{ scale: 1.07 }}
          >
            <span className="leading-none">{skill.icon}</span>
            <span>{skill.name}</span>
          </motion.span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  const totalSkills = skillCategories.reduce((a, c) => a + c.skills.length, 0);

  return (
    <section id="skills" className="py-24 relative" aria-label="Technical Skills">
      {/* Subtle section bg tint */}
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
            Technical Skills &nbsp;·&nbsp; {totalSkills} Technologies
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            My{" "}
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Technologies I use to craft scalable, high-performance applications
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {skillCategories.map((category, i) => (
            <SkillCard key={category.title} category={category} index={i} />
          ))}
        </div>

        {/* Currently learning footer */}
        <motion.div
          className="flex items-center justify-center gap-3 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-emerald-500"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-slate-400 dark:text-slate-500">Currently exploring:</span>
          <span className="text-blue-600 dark:text-blue-400 font-medium">AI/ML Integration</span>
          <span className="text-slate-300 dark:text-slate-600">·</span>
          <span className="text-violet-600 dark:text-violet-400 font-medium">LLM APIs</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
