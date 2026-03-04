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
    color: "text-emerald-600",
    borderColor: "border-emerald-200",
    bgAccent: "bg-emerald-50",
    tagText: "text-emerald-700",
  },
  {
    cmd: "telegram",
    args: "@andikadayu",
    label: "Telegram",
    value: "@andikadayu",
    desc: "Message me on Telegram",
    link: "http://t.me/andikadayu",
    color: "text-sky-600",
    borderColor: "border-sky-200",
    bgAccent: "bg-sky-50",
    tagText: "text-sky-700",
  },
  {
    cmd: "echo",
    args: "$LOCATION",
    label: "Location",
    value: "Malang, Indonesia",
    desc: "Open to remote work worldwide",
    link: "#",
    color: "text-violet-600",
    borderColor: "border-violet-200",
    bgAccent: "bg-violet-50",
    tagText: "text-violet-700",
  },
];

const socialLinks = [
  {
    cmd: "gh",
    args: "andikadayu",
    label: "GitHub Personal",
    url: "https://github.com/andikadayu",
    desc: "Personal repos",
    color: "text-slate-700",
    borderColor: "border-slate-200",
    bgAccent: "bg-slate-50",
  },
  {
    cmd: "gh",
    args: "andikaventuro",
    label: "GitHub Work",
    url: "https://github.com/andikaventuro",
    desc: "Work repos",
    color: "text-slate-700",
    borderColor: "border-slate-200",
    bgAccent: "bg-slate-50",
  },
  {
    cmd: "linkedin",
    args: "--connect",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-andika-dayu-anglita-putra-796838142/",
    desc: "Professional network",
    color: "text-sky-600",
    borderColor: "border-sky-200",
    bgAccent: "bg-sky-50",
  },
];

const BlinkCursor = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setShow((s) => !s), 530);
    return () => clearInterval(t);
  }, []);
  return (
    <span
      className="text-emerald-500 transition-opacity duration-75"
      style={{ opacity: show ? 1 : 0 }}
    >
      ▮
    </span>
  );
};

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Cheerful gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/30 to-sky-50/30 pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(5,150,105,0.18) 1px, transparent 1px)`,
          backgroundSize: "26px 26px",
        }}
      />

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div className="mb-12" variants={itemVariants}>
          <div className="font-terminal text-xs text-slate-400 mb-2">
            # contact — establish connection
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">ssh</span>
            <span className="text-slate-400 text-xl font-terminal"> andika@malang.id</span>
          </h2>
          <div className="mt-3 font-terminal text-xs text-slate-400">
            <span className="text-emerald-600">local</span>
            <span className="text-slate-400">:~$&nbsp;</span>
            <span className="text-slate-700">ssh -i ~/.ssh/contact andika@andikadayu.my.id</span>
          </div>
        </motion.div>

        {/* SSH terminal window */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="terminal-card rounded-lg overflow-hidden max-w-2xl" style={{ boxShadow: "0 4px 24px rgba(5,150,105,0.1)" }}>
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-100">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="font-terminal text-xs text-slate-400 ml-2">
                ssh — andika@andikadayu.my.id — 80×24
              </span>
            </div>

            {/* Terminal body */}
            <div className="p-5 font-terminal text-xs space-y-4 bg-white">
              <div className="text-slate-400 italic">
                Connected to andikadayu.my.id · Welcome, traveller.
              </div>

              {contactMethods.map((method, i) => (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.4 }}
                >
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-emerald-600">andika@dev</span>
                    <span className="text-slate-400">:~$&nbsp;</span>
                    <span className="text-slate-700">{method.cmd}</span>
                    <span className="text-orange-500">&nbsp;{method.args}</span>
                  </div>
                  <motion.a
                    href={method.link}
                    className={`flex items-center gap-3 pl-3 border-l-2 ${method.borderColor} ${method.bgAccent} hover:opacity-80 transition-all p-2 rounded-r-sm group`}
                    whileHover={{ x: 4 }}
                  >
                    <div>
                      <div className={`${method.color} font-semibold`}>{method.value}</div>
                      <div className="text-slate-500">{method.desc}</div>
                    </div>
                    <span className="ml-auto text-slate-400 group-hover:text-emerald-500 transition-colors">
                      →
                    </span>
                  </motion.a>
                </motion.div>
              ))}

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
              >
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-emerald-600">andika@dev</span>
                  <span className="text-slate-400">:~$&nbsp;</span>
                  <span className="text-slate-700">send-email --subject</span>
                  <span className="text-orange-500">&nbsp;&quot;Let&apos;s collaborate&quot;</span>
                </div>
                <motion.a
                  href="mailto:dikapolk@gmail.com"
                  className="inline-flex items-center gap-2 mt-1 px-4 py-2 bg-emerald-500 text-white text-xs font-terminal rounded-sm hover:bg-emerald-600 transition-all shadow-sm"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 4px 16px rgba(5,150,105,0.35)",
                    y: -1,
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="text-emerald-200">$</span>
                  ./send-message.sh
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </motion.div>

              {/* Waiting prompt */}
              <div className="flex items-center gap-1">
                <span className="text-emerald-600">andika@dev</span>
                <span className="text-slate-400">:~$&nbsp;</span>
                <BlinkCursor />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social links — 3 cards (no WhatsApp) */}
        <motion.div variants={itemVariants}>
          <div className="font-terminal text-xs text-slate-400 mb-4">
            # social links — find me online
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`terminal-card border ${social.borderColor} rounded-lg p-3 neon-hover block ${social.bgAccent}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ y: -3, scale: 1.02 }}
              >
                <div className="font-terminal text-xs">
                  <div className="flex items-center gap-1 mb-1.5">
                    <span className="text-emerald-500">$</span>
                    <span className="text-slate-600">{social.cmd}</span>
                    <span className={`${social.color}`}>{social.args}</span>
                  </div>
                  <div className={`font-semibold text-xs ${social.color} mb-0.5`}>
                    {social.label}
                  </div>
                  <div className="text-slate-400 text-xs">{social.desc}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-16 pt-6 border-t border-slate-100"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-terminal text-xs text-slate-400">
            <div>
              <span className="text-emerald-500">©</span> 2024 Muhammad Andika Dayu Anglita Putra
            </div>
            <div className="flex items-center gap-2">
              <span>Built with</span>
              <span className="text-sky-600 font-medium">Next.js</span>
              <span>+</span>
              <span className="text-emerald-600 font-medium">Framer Motion</span>
              <span>+</span>
              <span className="text-blue-600 font-medium">TypeScript</span>
            </div>
            <div className="flex items-center gap-1">
              <motion.span
                className="text-emerald-500"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ●
              </motion.span>
              <span>// EOF</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
