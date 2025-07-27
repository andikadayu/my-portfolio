"use client";

import { motion } from "framer-motion";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "dikapolk@gmail.com",
      description: "Drop me a line anytime",
      link: "mailto:dikapolk@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "📞",
      title: "Telegram",
      value: "@andikadayu",
      description: "Message me on Telegram",
      link: "http://t.me/andikadayu",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Malang, Indonesia",
      description: "Open to remote work",
      link: "#",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub Personal",
      icon: "🐙",
      url: "https://github.com/andikadayu",
      description: "Check out my repositories",
      gradient: "from-gray-600 to-gray-800",
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://www.linkedin.com/in/muhammad-andika-dayu-anglita-putra-796838142/",
      description: "Professional network",
      gradient: "from-blue-600 to-blue-800",
    },
    {
      name: "GitHub Work",
      icon: "🐙",
      url: "https://github.com/andikaventuro",
      description: "Check out my repositories",
      gradient: "from-gray-600 to-gray-800",
    },
    {
      name: "WhatsApp",
      icon: "💬",
      url: "https://wa.me/6282174620190",
      description: "Quick messages",
      gradient: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900/50 to-blue-900/20"
    >
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your next project? Let's create something amazing
            together
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.link}
              className="group glass-effect rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 block"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${method.gradient} mb-4 text-2xl`}
                >
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {method.title}
                </h3>
                <p
                  className={`font-semibold mb-2 bg-gradient-to-r ${method.gradient} bg-clip-text text-transparent`}
                >
                  {method.value}
                </p>
                <p className="text-gray-400 text-sm">{method.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="glass-effect rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to start a project?
            </h3>
            <p className="text-gray-300 mb-6">
              I'm currently available for backend development projects and
              exciting opportunities. Let's discuss how we can build robust and
              scalable solutions together.
            </p>
            <motion.a
              href="mailto:dikapolk@gmail.com"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Send me an email</span>
              <span>✉️</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Follow me on social media
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-effect rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 text-center"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${social.gradient} mb-3 text-xl`}
                >
                  {social.icon}
                </div>
                <h4 className="font-semibold text-white mb-1">{social.name}</h4>
                <p className="text-gray-400 text-xs">{social.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center mt-16 pt-8 border-t border-white/10"
          variants={itemVariants}
        >
          <p className="text-gray-400">
            © 2024 Muhammad Andika Dayu Anglita Putra. Made with ❤️ using
            Next.js and Tailwind CSS
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
