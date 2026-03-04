"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ─── Matrix Rain Canvas ─────────────────────────────────────── */
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

    const chars = "アイウエオカキクケコ01GOLANG>$#!{}[]();=></>go func type struct interface";
    const fontSize = 13;
    const cols = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(cols).fill(0).map(() => Math.random() * -50);

    const draw = () => {
      ctx.fillStyle = "rgba(8, 12, 20, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const progress = drops[i] / (canvas.height / fontSize);
        const alpha = Math.max(0.08, 1 - progress * 0.7);
        if (drops[i] === Math.floor(drops[i])) {
          ctx.fillStyle = `rgba(220, 255, 220, ${alpha * 0.9})`;
        } else {
          ctx.fillStyle = `rgba(0, 255, 65, ${alpha * 0.5})`;
        }
        ctx.font = `${fontSize}px GeistMono, monospace`;
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5;
      }
    };

    const id = setInterval(draw, 40);
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
      className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
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
      <span className="text-green-300">{displayed}</span>
      <span
        className="text-green-400 transition-opacity duration-75"
        style={{ opacity: showCursor ? 1 : 0 }}
      >
        ▮
      </span>
    </span>
  );
};

/* ─── Terminal Line (delayed reveal) ────────────────────────── */
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
      {/* Matrix rain background */}
      <MatrixRain />

      {/* Subtle scanline overlay */}
      <div className="absolute inset-0 scanlines pointer-events-none z-0" />

      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Terminal window */}
          <motion.div
            className="terminal-card rounded-none"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0d1117] border-b border-green-500/20">
              <motion.div
                className="w-3 h-3 rounded-full bg-red-500/80"
                whileHover={{ scale: 1.2 }}
              />
              <motion.div
                className="w-3 h-3 rounded-full bg-yellow-500/80"
                whileHover={{ scale: 1.2 }}
              />
              <motion.div
                className="w-3 h-3 rounded-full bg-green-500/80"
                whileHover={{ scale: 1.2 }}
              />
              <span className="ml-3 font-terminal text-xs text-gray-600">
                bash — andika@dev — 80×24
              </span>
              <div className="ml-auto flex items-center gap-1">
                <span className="font-terminal text-xs text-green-700">●</span>
                <span className="font-terminal text-xs text-gray-700">LIVE</span>
              </div>
            </div>

            {/* Terminal body */}
            <div className="p-6 md:p-10 font-terminal text-sm">
              <motion.p
                className="text-gray-600 mb-5 text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Last login: Wed Mar 4 08:00:00 2026 on ttys001
              </motion.p>

              {/* whoami */}
              <TermLine delay={0.5}>
                <div className="flex items-center gap-0 mb-1">
                  <span className="text-green-600">andika@dev</span>
                  <span className="text-gray-600">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-gray-500">$&nbsp;</span>
                  <span className="text-white">whoami</span>
                </div>
              </TermLine>
              <TermLine delay={0.85}>
                <p className="text-green-400 mb-4 pl-2">andika_dayu</p>
              </TermLine>

              {/* cat info.json */}
              <TermLine delay={1.1}>
                <div className="flex items-center gap-0 mb-1">
                  <span className="text-green-600">andika@dev</span>
                  <span className="text-gray-600">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-gray-500">$&nbsp;</span>
                  <span className="text-white">cat info.json</span>
                </div>
              </TermLine>

              <TermLine delay={1.4}>
                <div className="bg-[#05080f] border border-green-500/10 p-4 mb-4 text-xs leading-6">
                  <div className="text-cyan-300">{"{"}</div>
                  <div className="pl-4 space-y-1">
                    <div>
                      <span className="text-blue-400">&quot;name&quot;</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-orange-300">&quot;Muhammad Andika Dayu Anglita Putra&quot;</span>
                      <span className="text-gray-500">,</span>
                    </div>
                    <div>
                      <span className="text-blue-400">&quot;role&quot;</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-orange-300">&quot;<TypingEffect texts={roles} />&quot;</span>
                      <span className="text-gray-500">,</span>
                    </div>
                    <div>
                      <span className="text-blue-400">&quot;location&quot;</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-orange-300">&quot;Malang, Indonesia&quot;</span>
                      <span className="text-gray-500">,</span>
                    </div>
                    <div>
                      <span className="text-blue-400">&quot;experience&quot;</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-green-300">&quot;3+ years&quot;</span>
                      <span className="text-gray-500">,</span>
                    </div>
                    <div>
                      <span className="text-blue-400">&quot;stack&quot;</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-cyan-300">[</span>
                      <span className="text-orange-300"> &quot;Go&quot;</span>
                      <span className="text-gray-500">, </span>
                      <span className="text-orange-300">&quot;C#&quot;</span>
                      <span className="text-gray-500">, </span>
                      <span className="text-orange-300">&quot;Python&quot;</span>
                      <span className="text-gray-500">, </span>
                      <span className="text-orange-300">&quot;PHP&quot;</span>
                      <span className="text-cyan-300"> ]</span>
                      <span className="text-gray-500">,</span>
                    </div>
                    <div>
                      <span className="text-blue-400">&quot;status&quot;</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-green-400">&quot;available_for_hire&quot;</span>
                    </div>
                  </div>
                  <div className="text-cyan-300">{"}"}</div>
                </div>
              </TermLine>

              {/* describe command */}
              <TermLine delay={1.7}>
                <div className="flex items-center gap-0 mb-1">
                  <span className="text-green-600">andika@dev</span>
                  <span className="text-gray-600">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-gray-500">$&nbsp;</span>
                  <span className="text-white">describe --bio</span>
                </div>
              </TermLine>
              <TermLine delay={2.0}>
                <p className="text-gray-400 mb-4 pl-2 leading-relaxed text-xs max-w-xl">
                  Over 3 years building robust backend systems. Specialized in{" "}
                  <span className="text-green-400">microservices</span>,{" "}
                  <span className="text-cyan-400">RabbitMQ</span>,{" "}
                  <span className="text-cyan-400">gRPC</span>,{" "}
                  <span className="text-cyan-400">MongoDB</span>, and{" "}
                  <span className="text-cyan-400">Redis Cache</span> for
                  high-performance distributed applications.
                </p>
              </TermLine>

              {/* prompt + CTA buttons */}
              <TermLine delay={2.3}>
                <div className="flex items-center gap-0 mb-4">
                  <span className="text-green-600">andika@dev</span>
                  <span className="text-gray-600">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-gray-500">$&nbsp;</span>
                </div>
              </TermLine>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 mt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 0.5 }}
              >
                <motion.a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-green-500/60 text-green-400 text-xs font-terminal hover:bg-green-500/10 hover:border-green-400 transition-all group"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(0,255,65,0.25)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="text-green-700 group-hover:text-green-500">$</span>
                  ./view-projects.sh
                  <motion.span
                    className="text-green-600"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>

                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-700 text-gray-500 text-xs font-terminal hover:border-cyan-500/50 hover:text-cyan-400 transition-all group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="text-gray-700 group-hover:text-cyan-700">$</span>
                  ./contact-me.sh
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            className="text-center mt-8 font-terminal text-xs text-green-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div>▼ scroll to explore ▼</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
