"use client";

import { motion } from "framer-motion";

const Skills = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const skills = [
    {
      category: "Backend Development",
      color: "from-green-400 to-emerald-400",
      skills: [
        { name: "Go", icon: "🐹" },
        { name: "C# .NET", icon: "🔷" },
        { name: "Python", icon: "🐍" },
        { name: "PHP", icon: "🐘" },
        { name: "Laravel", icon: "🔴" },
      ],
    },
    {
      category: "Frontend & Full-Stack",
      color: "from-blue-400 to-cyan-400",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "TypeScript", icon: "🔷" },
        { name: "Tailwind CSS", icon: "💨" },
        { name: "Redux", icon: "🔄" },
      ],
    },
    {
      category: "Databases & Message Queues",
      color: "from-purple-400 to-pink-400",
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "Redis Cache", icon: "🔴" },
        { name: "Firebase", icon: "🔥" },
        { name: "RabbitMQ", icon: "🐰" },
        { name: "gRPC", icon: "⚡" },
      ],
    },
    {
      category: "Mobile & IoT",
      color: "from-orange-400 to-red-400",
      skills: [
        { name: "Java (Android)", icon: "☕" },
        { name: "Arduino", icon: "🔌" },
        { name: "IoT Systems", icon: "📡" },
        { name: "Embedded Systems", icon: "💾" },
        { name: "Microservices", icon: "🔗" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-900/50 to-blue-900/20"
      aria-label="Technical Skills"
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
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="glass-effect rounded-2xl p-6 border border-white/10"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="mb-6">
                <h3
                  className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center space-x-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-2xl flex-shrink-0">{skill.icon}</div>
                    <div className="flex-grow">
                      <span className="text-gray-300 font-medium block">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center mt-16" variants={itemVariants}>
          <p className="text-lg text-gray-300 mb-8">
            Always learning and exploring new technologies to stay ahead of the
            curve
          </p>
          <motion.div
            className="inline-flex items-center space-x-2 text-blue-400"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>Currently learning</span>
            <span className="font-semibold">AI/ML Integration</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
