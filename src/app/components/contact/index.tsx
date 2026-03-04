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
    color: "text-green-400",
    borderColor: "border-green-500/30",
  },
  {
    cmd: "telegram",
    args: "@andikadayu",
    label: "Telegram",
    value: "@andikadayu",
    desc: "Message me on Telegram",
    link: "http://t.me/andikadayu",
    color: "text-cyan-400",
    borderColor: "border-cyan-500/30",
  },
  {
    cmd: "echo",
    args: "$LOCATION",
    label: "Location",
    value: "Malang, Indonesia",
    desc: "Open to remote work worldwide",
    link: "#",
    color: "text-purple-400",
    borderColor: "border-purple-500/30",
  },
];

const socialLinks = [
  {
    cmd: "gh",
    args: "profile andikadayu",
    label: "GitHub Personal",
    url: "https://github.com/andikadayu",
    desc: "Personal repositories",
    color: "text-gray-400",
    borderColor: "border-gray-600/30",
  },
  {
    cmd: "gh",
    args: "profile andikaventuro",
    label: "GitHub Work",
    url: "https://github.com/andikaventuro",
    desc: "Work repositories",
    color: "text-gray-400",
    borderColor: "border-gray-600/30",
  },
  {
    cmd: "linkedin",
    args: "--connect",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-andika-dayu-anglita-putra-796838142/",
    desc: "Professional network",
    color: "text-blue-400",
    borderColor: "border-blue-500/30",
  },
  {
    cmd: "whatsapp",
    args: "+62 821 7462 0190",
    label: "WhatsApp",
    url: "https://wa.me/6282174620190",
    desc: "Quick messages",
    color: "text-green-400",
    borderColor: "border-green-500/30",
  },
];

const BlinkCursor = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setShow((s) => !s), 530);
    return () => clearInterval(t);
  }, []);
  return (
    <span className={`text-green-400 transition-opacity duration-75 ${show ? "opacity-100" : "opacity-0"}`}>
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
      {/* Subtle bg grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,255,65,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.015) 1px, transparent 1px)`,
          backgroundSize: "55px 55px",
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
          <div className="font-terminal text-xs text-gray-600 mb-2">
            # contact — establish connection
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">ssh</span>
            <span className="text-gray-600 text-xl font-terminal"> andika@malang.id</span>
          </h2>
          <div className="mt-3 font-terminal text-xs text-gray-600">
            <span className="text-green-700">local</span>
            <span className="text-gray-700">:~$&nbsp;</span>
            <span className="text-white">ssh -i ~/.ssh/contact andika@andikadayu.my.id</span>
          </div>
        </motion.div>

        {/* Contact methods — terminal session output */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="terminal-card rounded-none max-w-2xl">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#0d1117] border-b border-green-500/20">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <span className="font-terminal text-xs text-gray-600 ml-2">
                ssh — andika@andikadayu.my.id — 80×24
              </span>
            </div>

            {/* Terminal body */}
            <div className="p-5 font-terminal text-xs space-y-4">
              <div className="text-gray-600">
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
                  {/* Command line */}
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-green-600">andika@dev</span>
                    <span className="text-gray-600">:~$&nbsp;</span>
                    <span className="text-white">{method.cmd}</span>
                    <span className="text-orange-300">&nbsp;{method.args}</span>
                  </div>
                  {/* Output */}
                  <motion.a
                    href={method.link}
                    className={`flex items-start gap-3 pl-3 border-l-2 ${method.borderColor} hover:bg-green-500/5 transition-all p-2 group`}
                    whileHover={{ x: 4 }}
                  >
                    <div>
                      <div className={`${method.color} font-semibold`}>
                        {method.value}
                      </div>
                      <div className="text-gray-600">{method.desc}</div>
                    </div>
                    <span className="ml-auto text-gray-700 group-hover:text-green-500 transition-colors">
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
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-green-600">andika@dev</span>
                  <span className="text-gray-600">:~$&nbsp;</span>
                  <span className="text-white">send-email --subject</span>
                  <span className="text-orange-300">&nbsp;&quot;Let&apos;s collaborate&quot;</span>
                </div>
                <motion.a
                  href="mailto:dikapolk@gmail.com"
                  className="inline-flex items-center gap-2 mt-2 px-4 py-2 border border-green-500/50 text-green-400 text-xs font-terminal hover:bg-green-500/10 hover:border-green-400 transition-all"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(0,255,65,0.2)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="text-green-700">$</span>
                  ./send-message.sh
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </motion.div>

              {/* Prompt waiting */}
              <div className="flex items-center gap-1">
                <span className="text-green-600">andika@dev</span>
                <span className="text-gray-600">:~$&nbsp;</span>
                <BlinkCursor />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div variants={itemVariants}>
          <div className="font-terminal text-xs text-gray-600 mb-4">
            # social links — find me online
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`terminal-card border ${social.borderColor} p-3 neon-hover block`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ y: -3 }}
              >
                <div className="font-terminal text-xs">
                  <div className="flex items-center gap-1 mb-1.5">
                    <span className="text-green-600">$</span>
                    <span className="text-white">{social.cmd}</span>
                    <span className={`${social.color} text-xs`}>{social.args}</span>
                  </div>
                  <div className={`font-semibold text-xs ${social.color} mb-0.5`}>
                    {social.label}
                  </div>
                  <div className="text-gray-700 text-xs">{social.desc}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-16 pt-6 border-t border-green-500/10"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-terminal text-xs text-gray-700">
            <div>
              <span className="text-green-600">©</span> 2024 Muhammad Andika Dayu Anglita Putra
            </div>
            <div className="flex items-center gap-2">
              <span>Built with</span>
              <span className="text-cyan-600">Next.js</span>
              <span>+</span>
              <span className="text-green-600">Framer Motion</span>
              <span>+</span>
              <span className="text-blue-600">TypeScript</span>
            </div>
            <div className="flex items-center gap-1">
              <motion.span
                className="text-green-500"
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
