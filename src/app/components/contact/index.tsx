"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const contactMethods = [
  {
    cmd: "mail",
    args: "dikapolk@gmail.com",
    label: "Email",
    value: "dikapolk@gmail.com",
    desc: "Drop me a line anytime",
    link: "mailto:dikapolk@gmail.com",
    accentColor: "#3fb950",
  },
  {
    cmd: "telegram",
    args: "@andikadayu",
    label: "Telegram",
    value: "@andikadayu",
    desc: "Message me on Telegram",
    link: "http://t.me/andikadayu",
    accentColor: "#58a6ff",
  },
  {
    cmd: "echo",
    args: "$LOCATION",
    label: "Location",
    value: "Malang, Indonesia",
    desc: "Open to remote work worldwide",
    link: "#",
    accentColor: "#d2a8ff",
  },
];

const socialLinks = [
  {
    cmd: "gh",
    args: "andikadayu",
    label: "GitHub Personal",
    url: "https://github.com/andikadayu",
    desc: "Personal repos",
    accentColor: "#c9d1d9",
  },
  {
    cmd: "gh",
    args: "andikaventuro",
    label: "GitHub Work",
    url: "https://github.com/andikaventuro",
    desc: "Work repos",
    accentColor: "#c9d1d9",
  },
  {
    cmd: "linkedin",
    args: "--connect",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-andika-dayu-anglita-putra-796838142/",
    desc: "Professional network",
    accentColor: "#58a6ff",
  },
];

const BlinkCursor = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setShow((s) => !s), 530);
    return () => clearInterval(t);
  }, []);
  return <span style={{ color: "#3fb950", opacity: show ? 1 : 0 }} className="transition-opacity duration-75">▮</span>;
};

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header */}
          <motion.div className="mb-12" variants={itemVariants}>
            <div className="font-terminal text-xs mb-2" style={{ color: "#484f58" }}># contact — establish connection</div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">ssh</span>
              <span className="font-terminal text-xl" style={{ color: "#484f58" }}> andika@malang.id</span>
            </h2>
            <div className="mt-3 font-terminal text-xs" style={{ color: "#484f58" }}>
              <span style={{ color: "#3fb950" }}>local</span>
              <span style={{ color: "#484f58" }}>:~$&nbsp;</span>
              <span style={{ color: "#c9d1d9" }}>ssh -i ~/.ssh/contact andika@andikadayu.my.id</span>
            </div>
          </motion.div>

          {/* SSH terminal */}
          <motion.div variants={itemVariants} className="mb-8">
            <div
              className="rounded-md overflow-hidden max-w-2xl"
              style={{ background: "#161b22", border: "1px solid #30363d", boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
            >
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#21262d", borderBottom: "1px solid #30363d" }}>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-terminal text-xs ml-2" style={{ color: "#484f58" }}>
                  ssh — andika@andikadayu.my.id — 80×24
                </span>
              </div>

              {/* Body */}
              <div className="p-5 font-terminal text-xs space-y-4" style={{ background: "#0d1117" }}>
                <div className="italic" style={{ color: "#484f58" }}>Connected to andikadayu.my.id · Welcome, traveller.</div>

                {contactMethods.map((method, i) => (
                  <motion.div
                    key={method.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.4 }}
                  >
                    <div className="flex items-center gap-1 mb-1">
                      <span style={{ color: "#3fb950" }}>andika@dev</span>
                      <span style={{ color: "#484f58" }}>:~$&nbsp;</span>
                      <span style={{ color: "#c9d1d9" }}>{method.cmd}</span>
                      <span style={{ color: "#ffa657" }}>&nbsp;{method.args}</span>
                    </div>
                    <motion.a
                      href={method.link}
                      className="flex items-center gap-3 p-2 rounded-sm group transition-all"
                      style={{ borderLeft: `2px solid ${method.accentColor}40`, paddingLeft: "12px", background: method.accentColor + "08" }}
                      whileHover={{ x: 4, background: method.accentColor + "14" }}
                    >
                      <div>
                        <div className="font-semibold" style={{ color: method.accentColor }}>{method.value}</div>
                        <div style={{ color: "#8b949e" }}>{method.desc}</div>
                      </div>
                      <span className="ml-auto transition-colors" style={{ color: "#484f58" }}>→</span>
                    </motion.a>
                  </motion.div>
                ))}

                {/* CTA */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.45 }}>
                  <div className="flex items-center gap-1 mb-2">
                    <span style={{ color: "#3fb950" }}>andika@dev</span>
                    <span style={{ color: "#484f58" }}>:~$&nbsp;</span>
                    <span style={{ color: "#c9d1d9" }}>send-email --subject</span>
                    <span style={{ color: "#ffa657" }}>&nbsp;&quot;Let&apos;s collaborate&quot;</span>
                  </div>
                  <motion.a
                    href="mailto:dikapolk@gmail.com"
                    className="inline-flex items-center gap-2 mt-1 px-4 py-2 text-xs font-terminal rounded-sm transition-all"
                    style={{ background: "#238636", color: "#ffffff", border: "1px solid #2ea043" }}
                    whileHover={{ scale: 1.02, boxShadow: "0 4px 16px rgba(63,185,80,0.3)", y: -1 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span style={{ color: "#7ee787" }}>$</span>
                    ./send-message.sh
                    <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                  </motion.a>
                </motion.div>

                {/* Waiting prompt */}
                <div className="flex items-center gap-1">
                  <span style={{ color: "#3fb950" }}>andika@dev</span>
                  <span style={{ color: "#484f58" }}>:~$&nbsp;</span>
                  <BlinkCursor />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants}>
            <div className="font-terminal text-xs mb-4" style={{ color: "#484f58" }}># social links — find me online</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md p-3 block neon-hover"
                  style={{ background: "#161b22", border: "1px solid #30363d" }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  whileHover={{ y: -3, borderColor: social.accentColor + "50" }}
                >
                  <div className="font-terminal text-xs">
                    <div className="flex items-center gap-1 mb-1.5">
                      <span style={{ color: "#3fb950" }}>$</span>
                      <span style={{ color: "#8b949e" }}>{social.cmd}</span>
                      <span style={{ color: social.accentColor }}>{social.args}</span>
                    </div>
                    <div className="font-semibold text-xs mb-0.5" style={{ color: social.accentColor }}>{social.label}</div>
                    <div className="text-xs" style={{ color: "#484f58" }}>{social.desc}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            className="mt-16 pt-6 font-terminal text-xs flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ color: "#484f58", borderTop: "1px solid #21262d" }}
            variants={itemVariants}
          >
            <div><span style={{ color: "#3fb950" }}>©</span> 2024 Muhammad Andika Dayu Anglita Putra</div>
            <div className="flex items-center gap-2">
              <span>Built with</span>
              <span style={{ color: "#58a6ff" }}>Next.js</span>
              <span>+</span>
              <span style={{ color: "#3fb950" }}>Framer Motion</span>
              <span>+</span>
              <span style={{ color: "#79c0ff" }}>TypeScript</span>
            </div>
            <div className="flex items-center gap-1">
              <motion.span style={{ color: "#3fb950" }} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }}>●</motion.span>
              <span>// EOF</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
