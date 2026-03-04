"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ─── Matrix Rain — dark chars on light bg ──────────────────── */
const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setSize();

    const chars = "アイウエオカキ01GOLANG>$#!{}[]()=></>go func type struct interface select chan";
    const fontSize = 13;
    const cols = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(cols).fill(0).map(() => Math.random() * -60);

    const draw = () => {
      // Fade with the page background color
      ctx.fillStyle = "rgba(240, 249, 255, 0.07)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const progress = drops[i] / (canvas.height / fontSize);
        const alpha = Math.max(0.04, (1 - progress * 0.75) * 0.3);
        // Alternate: lead char slightly brighter
        if (Math.random() > 0.85) {
          ctx.fillStyle = `rgba(5, 150, 105, ${alpha * 1.8})`;
        } else {
          ctx.fillStyle = `rgba(8, 145, 178, ${alpha})`;
        }
        ctx.font = `${fontSize}px GeistMono, monospace`;
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.45;
      }
    };

    const id = setInterval(draw, 42);
    const ro = new ResizeObserver(setSize);
    ro.observe(canvas);

    return () => {
      clearInterval(id);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
    />
  );
};

/* ─── Typing Effect ──────────────────────────────────────────── */
const TypingEffect = ({ texts }: { texts: string[] }) => {
  const [displayed, setDisplayed] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cur = setInterval(() => setShowCursor((s) => !s), 530);
    return () => clearInterval(cur);
  }, []);

  useEffect(() => {
    const current = texts[textIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= current.length) {
      timer = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 90);
    } else if (!isDeleting && charIndex > current.length) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 45);
    } else {
      setIsDeleting(false);
      setTextIndex((t) => (t + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span>
      <span className="text-emerald-700">{displayed}</span>
      <span
        className="text-emerald-500 transition-opacity duration-75"
        style={{ opacity: showCursor ? 1 : 0 }}
      >
        ▮
      </span>
    </span>
  );
};

/* ─── Delayed terminal line ──────────────────────────────────── */
const TermLine = ({
  delay,
  children,
}: {
  delay: number;
  children: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -8 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.4 }}
  >
    {children}
  </motion.div>
);

/* ─── Prompt prefix ──────────────────────────────────────────── */
const Prompt = () => (
  <span className="select-none">
    <span className="text-emerald-600">andika@dev</span>
    <span className="text-slate-400">:</span>
    <span className="text-sky-500">~</span>
    <span className="text-slate-400">$&nbsp;</span>
  </span>
);

/* ─── About Section ──────────────────────────────────────────── */
const About = () => {
  const roles = [
    "Senior Backend Developer",
    "Microservices Architect",
    "API Engineer",
    "Go & C# Developer",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden"
      aria-label="About Andika Dayu"
    >
      {/* Matrix rain — very subtle on light bg */}
      <MatrixRain />

      {/* Cheerful gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-100/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Terminal window — macOS light style */}
          <motion.div
            className="terminal-card rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ boxShadow: "0 8px 40px rgba(5,150,105,0.12), 0 2px 8px rgba(0,0,0,0.07)" }}
          >
            {/* Title bar — light gray macOS style */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-100">
              <motion.div
                className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors cursor-pointer"
                whileHover={{ scale: 1.15 }}
              />
              <motion.div
                className="w-3 h-3 rounded-full bg-amber-400 hover:bg-amber-500 transition-colors cursor-pointer"
                whileHover={{ scale: 1.15 }}
              />
              <motion.div
                className="w-3 h-3 rounded-full bg-emerald-400 hover:bg-emerald-500 transition-colors cursor-pointer"
                whileHover={{ scale: 1.15 }}
              />
              <span className="ml-3 font-terminal text-xs text-slate-400">
                bash — andika@dev — 80×24
              </span>
              <div className="ml-auto flex items-center gap-1.5">
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="font-terminal text-xs text-slate-400">LIVE</span>
              </div>
            </div>

            {/* Terminal body — white */}
            <div className="p-6 md:p-10 font-terminal text-sm bg-white">
              <motion.p
                className="text-slate-400 mb-5 text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Last login: Wed Mar 4 08:00:00 2026 on ttys001
              </motion.p>

              {/* whoami */}
              <TermLine delay={0.5}>
                <div className="flex items-center gap-0 mb-1">
                  <Prompt />
                  <span className="text-slate-800">whoami</span>
                </div>
              </TermLine>
              <TermLine delay={0.85}>
                <p className="text-emerald-600 font-semibold mb-4 pl-2">
                  andika_dayu
                </p>
              </TermLine>

              {/* cat info.json */}
              <TermLine delay={1.1}>
                <div className="flex items-center gap-0 mb-1">
                  <Prompt />
                  <span className="text-slate-800">cat info.json</span>
                </div>
              </TermLine>

              <TermLine delay={1.4}>
                <div className="bg-slate-50 border border-slate-100 rounded p-4 mb-4 text-xs leading-7">
                  <div className="text-cyan-600">{"{"}</div>
                  <div className="pl-4 space-y-0.5">
                    <div>
                      <span className="text-sky-600">&quot;name&quot;</span>
                      <span className="text-slate-500">: </span>
                      <span className="text-emerald-700">&quot;Muhammad Andika Dayu Anglita Putra&quot;</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div>
                      <span className="text-sky-600">&quot;role&quot;</span>
                      <span className="text-slate-500">: </span>
                      <span className="text-emerald-700">&quot;<TypingEffect texts={roles} />&quot;</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div>
                      <span className="text-sky-600">&quot;location&quot;</span>
                      <span className="text-slate-500">: </span>
                      <span className="text-emerald-700">&quot;Malang, Indonesia&quot;</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div>
                      <span className="text-sky-600">&quot;experience&quot;</span>
                      <span className="text-slate-500">: </span>
                      <span className="text-orange-500">&quot;3+ years&quot;</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div>
                      <span className="text-sky-600">&quot;stack&quot;</span>
                      <span className="text-slate-500">: </span>
                      <span className="text-cyan-600">[</span>
                      <span className="text-orange-500"> &quot;Go&quot;</span>
                      <span className="text-slate-400">,</span>
                      <span className="text-orange-500"> &quot;C#&quot;</span>
                      <span className="text-slate-400">,</span>
                      <span className="text-orange-500"> &quot;Python&quot;</span>
                      <span className="text-slate-400">,</span>
                      <span className="text-orange-500"> &quot;PHP&quot;</span>
                      <span className="text-cyan-600"> ]</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div>
                      <span className="text-sky-600">&quot;status&quot;</span>
                      <span className="text-slate-500">: </span>
                      <span className="text-emerald-600 font-semibold">&quot;available_for_hire ✓&quot;</span>
                    </div>
                  </div>
                  <div className="text-cyan-600">{"}"}</div>
                </div>
              </TermLine>

              {/* Bio command */}
              <TermLine delay={1.7}>
                <div className="flex items-center gap-0 mb-1">
                  <Prompt />
                  <span className="text-slate-800">describe --bio</span>
                </div>
              </TermLine>
              <TermLine delay={2.0}>
                <p className="text-slate-500 mb-4 pl-2 leading-relaxed text-xs max-w-xl">
                  Over 3 years building robust backend systems. Specialized in{" "}
                  <span className="text-emerald-600 font-medium">microservices</span>,{" "}
                  <span className="text-sky-600 font-medium">RabbitMQ</span>,{" "}
                  <span className="text-sky-600 font-medium">gRPC</span>,{" "}
                  <span className="text-sky-600 font-medium">MongoDB</span>, and{" "}
                  <span className="text-sky-600 font-medium">Redis Cache</span> for
                  high-performance distributed applications.
                </p>
              </TermLine>

              {/* Prompt line */}
              <TermLine delay={2.3}>
                <div className="flex items-center gap-0 mb-5">
                  <Prompt />
                </div>
              </TermLine>

              {/* CTA buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 0.5 }}
              >
                <motion.a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 text-white text-xs font-terminal rounded-sm hover:bg-emerald-600 transition-all group shadow-sm"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 4px 20px rgba(5,150,105,0.4)",
                    y: -1,
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="text-emerald-200">$</span>
                  ./view-projects.sh
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>

                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-emerald-300 text-emerald-700 text-xs font-terminal rounded-sm hover:bg-emerald-50 hover:border-emerald-400 transition-all"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="text-emerald-400">$</span>
                  ./contact-me.sh
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            className="text-center mt-8 font-terminal text-xs text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ▼ scroll to explore ▼
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
