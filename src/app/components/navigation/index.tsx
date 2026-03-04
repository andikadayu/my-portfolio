"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [blink, setBlink] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about",      label: "~/about",      index: "01" },
    { href: "#skills",     label: "~/skills",     index: "02" },
    { href: "#projects",   label: "~/projects",   index: "03" },
    { href: "#experience", label: "~/experience", index: "04" },
    { href: "#contact",    label: "~/contact",    index: "05" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#0d1117]/98 border-[#30363d] backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-[#0d1117]/80 border-[#21262d] backdrop-blur-sm"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Thin accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3fb950]/50 to-transparent" />

      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">

          {/* Logo — terminal prompt */}
          <motion.a
            href="#about"
            className="font-terminal flex items-center text-sm select-none"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <span className="text-[#3fb950]">root</span>
            <span className="text-[#484f58]">@</span>
            <span className="text-[#58a6ff]">andika</span>
            <span className="text-[#484f58]">:</span>
            <span className="text-[#d2a8ff]">~</span>
            <span className="text-[#484f58]">$&nbsp;</span>
            <span className="text-[#c9d1d9]">andika_dayu</span>
            <span
              className="text-[#3fb950] ml-px transition-opacity duration-75"
              style={{ opacity: blink ? 1 : 0 }}
            >▮</span>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="font-terminal group relative px-3 py-1.5 text-xs text-[#8b949e] hover:text-[#e6edf3] transition-colors duration-150"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.35 }}
                whileHover={{ y: -1 }}
              >
                <span className="text-[#484f58] group-hover:text-[#3fb950] transition-colors">
                  {link.index}&nbsp;
                </span>
                {link.label}
                {/* Underline */}
                <motion.div
                  className="absolute bottom-0 left-3 right-3 h-px bg-gradient-to-r from-[#3fb950] to-[#58a6ff] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile toggle */}
          <motion.button
            className="md:hidden font-terminal text-[#3fb950] text-xs px-2 py-1 border border-[#30363d] hover:border-[#3fb950]/50 hover:bg-[#3fb950]/5 transition-all"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {isOpen ? "[×]" : "[≡]"}
          </motion.button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-3 bg-[#161b22] border border-[#30363d] p-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="font-terminal text-xs text-[#484f58] mb-3"># navigation menu</div>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 py-2 text-sm text-[#8b949e] hover:text-[#3fb950] transition-colors font-terminal"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                  whileHover={{ x: 4 }}
                >
                  <span className="text-[#3fb950]">&gt;</span>
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
