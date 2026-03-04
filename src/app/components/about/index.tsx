"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ─── Matrix Rain ─────────────────────────────────────────────
   Muted green/blue chars on #0d1117 background — comfortable,
   not harsh.
──────────────────────────────────────────────────────────────*/
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
      ctx.fillStyle = "rgba(13, 17, 23, 0.07)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const progress = drops[i] / (canvas.height / fontSize);
        const alpha = Math.max(0.04, (1 - progress * 0.75) * 0.45);
        ctx.fillStyle = Math.random() > 0.88
          ? `rgba(88, 166, 255, ${alpha * 1.5})`   /* blue highlight */
          : `rgba(63, 185, 80, ${alpha})`;           /* muted green */
        ctx.font = `${fontSize}px GeistMono, monospace`;
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.45;
      }
    };

    const id = setInterval(draw, 42);
    const ro = new ResizeObserver(setSize);
    ro.observe(canvas);
    return () => { clearInterval(id); ro.disconnect(); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-100 pointer-events-none" />;
};

/* ─── Typing Effect ──────────────────────────────────────────*/
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
      timer = setTimeout(() => { setDisplayed(current.slice(0, charIndex)); setCharIndex((c) => c + 1); }, 90);
    } else if (!isDeleting && charIndex > current.length) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => { setDisplayed(current.slice(0, charIndex - 1)); setCharIndex((c) => c - 1); }, 45);
    } else {
      setIsDeleting(false);
      setTextIndex((t) => (t + 1) % texts.length);
    }
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span>
      <span style={{ color: "#ffa657" }}>{displayed}</span>
      <span style={{ opacity: showCursor ? 1 : 0, color: "#3fb950" }}>▮</span>
    </span>
  );
};

/* ─── Delayed terminal line ──────────────────────────────────*/
const TermLine = ({ delay, children }: { delay: number; children: React.ReactNode }) => (
  <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay, duration: 0.4 }}>
    {children}
  </motion.div>
);

/* ─── Prompt prefix ──────────────────────────────────────────*/
const Prompt = () => (
  <span className="select-none font-terminal text-sm">
    <span style={{ color: "#3fb950" }}>andika@dev</span>
    <span style={{ color: "#484f58" }}>:</span>
    <span style={{ color: "#d2a8ff" }}>~</span>
    <span style={{ color: "#484f58" }}>$&nbsp;</span>
  </span>
);

/* ─── About ──────────────────────────────────────────────────*/
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
      <MatrixRain />

      {/* Very faint ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#3fb950]/4 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#58a6ff]/4 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">

          {/* Terminal window */}
          <motion.div
            className="terminal-card rounded-md overflow-hidden"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px #30363d" }}
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#161b22] border-b border-[#30363d]">
              <motion.div className="w-3 h-3 rounded-full bg-[#ff5f57]" whileHover={{ scale: 1.2 }} />
              <motion.div className="w-3 h-3 rounded-full bg-[#febc2e]" whileHover={{ scale: 1.2 }} />
              <motion.div className="w-3 h-3 rounded-full bg-[#28c840]" whileHover={{ scale: 1.2 }} />
              <span className="ml-3 font-terminal text-xs text-[#484f58]">bash — andika@dev — 80×24</span>
              <div className="ml-auto flex items-center gap-1.5">
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-[#3fb950]"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="font-terminal text-xs text-[#484f58]">LIVE</span>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 md:p-10 font-terminal text-sm bg-[#0d1117]">
              <motion.p className="text-xs mb-5" style={{ color: "#484f58" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                Last login: Wed Mar 4 08:00:00 2026 on ttys001
              </motion.p>

              <TermLine delay={0.5}>
                <div className="flex items-center mb-1"><Prompt /><span style={{ color: "#c9d1d9" }}>whoami</span></div>
              </TermLine>
              <TermLine delay={0.85}>
                <p className="mb-4 pl-2 font-semibold" style={{ color: "#3fb950" }}>andika_dayu</p>
              </TermLine>

              <TermLine delay={1.1}>
                <div className="flex items-center mb-1"><Prompt /><span style={{ color: "#c9d1d9" }}>cat info.json</span></div>
              </TermLine>

              <TermLine delay={1.4}>
                <div className="p-4 mb-4 text-xs leading-7 rounded-sm" style={{ background: "#161b22", border: "1px solid #30363d" }}>
                  <div style={{ color: "#8b949e" }}>{"{"}</div>
                  <div className="pl-4 space-y-0.5">
                    <div>
                      <span style={{ color: "#79c0ff" }}>&quot;name&quot;</span>
                      <span style={{ color: "#8b949e" }}>: </span>
                      <span style={{ color: "#a5d6ff" }}>&quot;Muhammad Andika Dayu Anglita Putra&quot;</span>
                      <span style={{ color: "#484f58" }}>,</span>
                    </div>
                    <div>
                      <span style={{ color: "#79c0ff" }}>&quot;role&quot;</span>
                      <span style={{ color: "#8b949e" }}>: </span>
                      <span style={{ color: "#a5d6ff" }}>&quot;<TypingEffect texts={roles} />&quot;</span>
                      <span style={{ color: "#484f58" }}>,</span>
                    </div>
                    <div>
                      <span style={{ color: "#79c0ff" }}>&quot;location&quot;</span>
                      <span style={{ color: "#8b949e" }}>: </span>
                      <span style={{ color: "#a5d6ff" }}>&quot;Malang, Indonesia&quot;</span>
                      <span style={{ color: "#484f58" }}>,</span>
                    </div>
                    <div>
                      <span style={{ color: "#79c0ff" }}>&quot;experience&quot;</span>
                      <span style={{ color: "#8b949e" }}>: </span>
                      <span style={{ color: "#ffa657" }}>&quot;3+ years&quot;</span>
                      <span style={{ color: "#484f58" }}>,</span>
                    </div>
                    <div>
                      <span style={{ color: "#79c0ff" }}>&quot;stack&quot;</span>
                      <span style={{ color: "#8b949e" }}>: </span>
                      <span style={{ color: "#8b949e" }}>[</span>
                      <span style={{ color: "#ffa657" }}> &quot;Go&quot;</span>
                      <span style={{ color: "#484f58" }}>,</span>
                      <span style={{ color: "#ffa657" }}> &quot;C#&quot;</span>
                      <span style={{ color: "#484f58" }}>,</span>
                      <span style={{ color: "#ffa657" }}> &quot;Python&quot;</span>
                      <span style={{ color: "#484f58" }}>,</span>
                      <span style={{ color: "#ffa657" }}> &quot;PHP&quot;</span>
                      <span style={{ color: "#8b949e" }}> ]</span>
                      <span style={{ color: "#484f58" }}>,</span>
                    </div>
                    <div>
                      <span style={{ color: "#79c0ff" }}>&quot;status&quot;</span>
                      <span style={{ color: "#8b949e" }}>: </span>
                      <span style={{ color: "#3fb950" }}>&quot;available_for_hire ✓&quot;</span>
                    </div>
                  </div>
                  <div style={{ color: "#8b949e" }}>{"}"}</div>
                </div>
              </TermLine>

              <TermLine delay={1.7}>
                <div className="flex items-center mb-1"><Prompt /><span style={{ color: "#c9d1d9" }}>describe --bio</span></div>
              </TermLine>
              <TermLine delay={2.0}>
                <p className="mb-4 pl-2 leading-relaxed text-xs max-w-xl" style={{ color: "#8b949e" }}>
                  Over 3 years building robust backend systems. Specialized in{" "}
                  <span style={{ color: "#3fb950" }}>microservices</span>,{" "}
                  <span style={{ color: "#58a6ff" }}>RabbitMQ</span>,{" "}
                  <span style={{ color: "#58a6ff" }}>gRPC</span>,{" "}
                  <span style={{ color: "#58a6ff" }}>MongoDB</span>, and{" "}
                  <span style={{ color: "#58a6ff" }}>Redis Cache</span> for
                  high-performance distributed applications.
                </p>
              </TermLine>

              <TermLine delay={2.3}>
                <div className="flex items-center mb-5"><Prompt /></div>
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-terminal transition-all group"
                  style={{ background: "#238636", color: "#ffffff", border: "1px solid #2ea043" }}
                  whileHover={{ scale: 1.02, boxShadow: "0 4px 20px rgba(63,185,80,0.3)", y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span style={{ color: "#7ee787" }}>$</span>
                  ./view-projects.sh
                  <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                </motion.a>

                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-terminal transition-all"
                  style={{ background: "transparent", color: "#c9d1d9", border: "1px solid #30363d" }}
                  whileHover={{ scale: 1.02, y: -1, borderColor: "#58a6ff", color: "#58a6ff" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span style={{ color: "#484f58" }}>$</span>
                  ./contact-me.sh
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            className="text-center mt-8 font-terminal text-xs"
            style={{ color: "#484f58" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.6 }}
          >
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
              ▼ scroll to explore ▼
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
