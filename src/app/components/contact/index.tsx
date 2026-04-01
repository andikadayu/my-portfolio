"use client";

import { motion } from "framer-motion";

const contactMethods = [
  {
    icon: "✉️",
    label: "Email",
    value: "dikapolk@gmail.com",
    desc: "Drop me a line anytime",
    link: "mailto:dikapolk@gmail.com",
    gradient:    "from-emerald-500 to-teal-600",
    accentText:  "text-emerald-700 dark:text-emerald-400",
  },
  {
    icon: "💬",
    label: "Telegram",
    value: "@andikadayu",
    desc: "Message me on Telegram",
    link: "http://t.me/andikadayu",
    gradient:    "from-blue-500 to-indigo-600",
    accentText:  "text-blue-700 dark:text-blue-400",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Malang, Indonesia",
    desc: "Open to remote work worldwide",
    link: "#",
    gradient:    "from-violet-500 to-purple-600",
    accentText:  "text-violet-700 dark:text-violet-400",
  },
];

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socialLinks = [
  {
    icon: <GitHubIcon />,
    label: "GitHub (Personal)",
    url: "https://github.com/andikadayu",
    desc: "Personal projects",
  },
  {
    icon: <GitHubIcon />,
    label: "GitHub (Work)",
    url: "https://github.com/andikaventuro",
    desc: "Work repos",
  },
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-andika-dayu-anglita-putra-796838142/",
    desc: "Professional profile",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Contact = () => (
  <section id="contact" className="py-24 relative" aria-label="Contact">
    <div className="container mx-auto px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Section header */}
        <motion.div className="mb-12 text-center" variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-xs font-medium mb-4 shadow-sm">
            Contact Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Get in{" "}
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            I&apos;m always open to discussing new opportunities, collaborations, or interesting projects
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact method cards */}
          <motion.div className="grid gap-3 mb-8" variants={itemVariants}>
            {contactMethods.map((method, i) => (
              <motion.a
                key={method.label}
                href={method.link}
                className="card rounded-2xl p-4 flex items-center gap-4 group"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ x: 4 }}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center text-2xl flex-shrink-0 shadow-md`}
                >
                  {method.icon}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">
                    {method.label}
                  </div>
                  <div className={`font-semibold text-sm truncate ${method.accentText}`}>
                    {method.value}
                  </div>
                  <div className="text-xs text-slate-400 dark:text-slate-500">{method.desc}</div>
                </div>

                {/* Arrow */}
                <motion.svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  className="text-slate-300 dark:text-slate-600 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors flex-shrink-0"
                  animate={{ x: 0 }}
                  whileHover={{ x: 3 }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.svg>
              </motion.a>
            ))}
          </motion.div>

          {/* Primary CTA */}
          <motion.div className="text-center mb-10" variants={itemVariants}>
            <motion.a
              href="mailto:dikapolk@gmail.com"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium shadow-lg shadow-blue-500/25 transition-colors"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span>Send me an email</span>
              <motion.svg
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </motion.svg>
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants}>
            <p className="text-center text-xs text-slate-400 dark:text-slate-500 mb-4">
              Find me online
            </p>
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card rounded-2xl p-4 text-center group"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex justify-center mb-2 text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {social.icon}
                  </div>
                  <div className="text-xs font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                    {social.label}
                  </div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                    {social.desc}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            className="mt-16 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 dark:text-slate-500 border-t border-slate-200 dark:border-slate-800"
            variants={itemVariants}
          >
            <div>© 2024 Muhammad Andika Dayu Anglita Putra</div>
            <div className="flex items-center gap-1.5">
              <span>Built with</span>
              <span className="text-blue-500 dark:text-blue-400 font-medium">Next.js</span>
              <span>·</span>
              <span className="text-violet-500 dark:text-violet-400 font-medium">Framer Motion</span>
              <span>·</span>
              <span className="text-sky-500 dark:text-sky-400 font-medium">TypeScript</span>
            </div>
            <div className="flex items-center gap-1.5">
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span>Online</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Contact;
