"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* ── Typing effect ─────────────────────────────────────────── */
const TypingEffect = ({ texts }: { texts: string[] }) => {
  const [displayed, setDisplayed] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= current.length) {
      timer = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!isDeleting && charIndex > current.length) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 40);
    } else {
      setIsDeleting(false);
      setTextIndex((t) => (t + 1) % texts.length);
    }
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span>
      <span className="text-blue-600 dark:text-blue-400 font-semibold">{displayed}</span>
      <motion.span
        className="inline-block w-0.5 h-5 bg-blue-500 dark:bg-blue-400 ml-0.5 align-middle"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </span>
  );
};

/* ── Stats ─────────────────────────────────────────────────── */
const stats = [
  { value: "3+",  label: "Years\nExperience" },
  { value: "20+", label: "Technologies\nMastered" },
  { value: "10+", label: "Projects\nShipped" },
];

/* ── Tech badges (hero row) ────────────────────────────────── */
const techBadges = ["Go", "C# .NET", "Python", "PHP", "React", "Next.js", "MongoDB", "Redis"];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/* ── About ─────────────────────────────────────────────────── */
const About = () => {
  const roles = [
    "Backend Developer",
    "Microservices Architect",
    "API Engineer",
    "Full-Stack Developer",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-28 relative overflow-hidden"
      aria-label="About Andika Dayu"
    >
      {/* Subtle ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-48 w-[500px] h-[500px] bg-blue-500/6 dark:bg-blue-500/4 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-violet-500/6 dark:bg-violet-500/4 rounded-full blur-3xl" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/15 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* ── Left: text content ───────────────────────── */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Available badge */}
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/25 text-emerald-700 dark:text-emerald-400 text-xs font-medium mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-soft" />
                  Open to new opportunities
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-4"
                variants={itemVariants}
              >
                Hi, I&apos;m{" "}
                <span className="gradient-text">Andika Dayu</span>
              </motion.h1>

              {/* Typing role */}
              <motion.div
                className="text-xl text-slate-600 dark:text-slate-400 mb-6 h-8"
                variants={itemVariants}
              >
                <TypingEffect texts={roles} />
              </motion.div>

              {/* Bio */}
              <motion.p
                className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-lg"
                variants={itemVariants}
              >
                Over 3 years building robust, scalable backend systems. Specialized in{" "}
                <span className="text-blue-600 dark:text-blue-400 font-medium">microservices</span>,{" "}
                <span className="text-violet-600 dark:text-violet-400 font-medium">distributed messaging</span>, and{" "}
                <span className="text-blue-600 dark:text-blue-400 font-medium">high-performance APIs</span>{" "}
                using Go, C#, RabbitMQ, gRPC, MongoDB, and Redis.
              </motion.p>

              {/* CTA buttons */}
              <motion.div className="flex flex-wrap gap-3" variants={itemVariants}>
                <motion.a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium text-sm shadow-lg shadow-blue-500/25 transition-colors"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  View My Work
                  <motion.svg
                    width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </motion.svg>
                </motion.a>

                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-300 dark:hover:border-blue-600/60 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm transition-all bg-white/50 dark:bg-slate-800/50"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  Get in Touch
                </motion.a>
              </motion.div>

              {/* Tech badges */}
              <motion.div
                className="mt-10 flex flex-wrap gap-2"
                variants={itemVariants}
              >
                {techBadges.map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.05 }}
                    whileHover={{ scale: 1.06, borderColor: "var(--accent-border)" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Right: avatar + stats ─────────────────────── */}
            <motion.div
              className="flex flex-col items-center gap-8"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              {/* Avatar card */}
              <div className="relative">
                <motion.div
                  className="w-52 h-52 rounded-3xl bg-gradient-to-br from-blue-500 via-blue-600 to-violet-600 flex items-center justify-center shadow-2xl shadow-blue-500/25"
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <span className="text-white text-6xl font-bold select-none">AD</span>
                </motion.div>

                {/* Floating badge — location */}
                <motion.div
                  className="absolute -bottom-3 -left-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 shadow-md flex items-center gap-1.5 text-xs"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ y: -2 }}
                >
                  <span>📍</span>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">Malang, Indonesia</span>
                </motion.div>

                {/* Floating badge — status */}
                <motion.div
                  className="absolute -top-3 -right-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 shadow-md flex items-center gap-1.5 text-xs"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  whileHover={{ y: -2 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-soft" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">Available</span>
                </motion.div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="card rounded-2xl p-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.12, duration: 0.4 }}
                    whileHover={{ y: -3 }}
                  >
                    <div className="text-2xl font-bold gradient-text leading-none mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 leading-tight whitespace-pre-line">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Scroll hint */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <motion.a
              href="#skills"
              className="inline-flex flex-col items-center gap-1.5 text-slate-400 dark:text-slate-500 text-xs hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span>Scroll to explore</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
