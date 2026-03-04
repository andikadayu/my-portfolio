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
    { href: "#about", label: "~/about", index: "01" },
    { href: "#skills", label: "~/skills", index: "02" },
    { href: "#projects", label: "~/projects", index: "03" },
    { href: "#experience", label: "~/experience", index: "04" },
    { href: "#contact", label: "~/contact", index: "05" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-[#080c14]/98 border-green-500/30 backdrop-blur-md"
          : "bg-[#080c14]/80 border-green-500/10 backdrop-blur-sm"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Top green scan line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/60 to-transparent"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo — terminal prompt */}
          <motion.a
            href="#about"
            className="font-terminal flex items-center gap-0 text-sm select-none"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <span className="text-green-600">root</span>
            <span className="text-gray-500">@</span>
            <span className="text-green-400">andika</span>
            <span className="text-gray-500">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-gray-500">$&nbsp;</span>
            <span className="text-green-300">andika_dayu</span>
            <span
              className={`text-green-400 transition-opacity duration-75 ${
                blink ? "opacity-100" : "opacity-0"
              }`}
            >
              ▮
            </span>
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="font-terminal group relative px-3 py-1.5 text-xs text-gray-500 hover:text-green-400 transition-colors duration-200"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ y: -1 }}
              >
                <span className="text-green-700 group-hover:text-green-500 transition-colors">
                  {link.index}&nbsp;
                </span>
                {link.label}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-px bg-green-500/60 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile toggle */}
          <motion.button
            className="md:hidden font-terminal text-green-500 text-xs px-2 py-1 border border-green-500/30 hover:border-green-500/60 hover:bg-green-500/5 transition-all"
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
              className="md:hidden mt-3 bg-[#0a0f1a] border border-green-500/20 p-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="font-terminal text-xs text-gray-600 mb-3">
                # navigation menu
              </div>
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 py-2 text-sm text-gray-400 hover:text-green-400 transition-colors font-terminal"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.25 }}
                  whileHover={{ x: 4 }}
                >
                  <span className="text-green-700">&gt;</span>
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
