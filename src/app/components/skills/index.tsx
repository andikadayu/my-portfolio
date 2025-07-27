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
        { name: "Go", level: 90 },
        { name: "C# .NET", level: 85 },
        { name: "Python", level: 80 },
        { name: "PHP", level: 85 },
        { name: "Laravel", level: 80 },
      ],
    },
    {
      category: "Frontend & Full-Stack",
      color: "from-blue-400 to-cyan-400",
      skills: [
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Redux", level: 75 },
      ],
    },
    {
      category: "Databases & Message Queues",
      color: "from-purple-400 to-pink-400",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "Redis Cache", level: 80 },
        { name: "Firebase", level: 75 },
        { name: "RabbitMQ", level: 80 },
        { name: "gRPC", level: 75 },
      ],
    },
    {
      category: "Mobile & IoT",
      color: "from-orange-400 to-red-400",
      skills: [
        { name: "Java (Android)", level: 75 },
        { name: "Arduino", level: 70 },
        { name: "IoT Systems", level: 70 },
        { name: "Embedded Systems", level: 65 },
        { name: "Microservices", level: 85 },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="w-full bg-gray-700 rounded-full h-2 overflow-hidden"
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.name} proficiency: ${skill.level}%`}
                    >
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                          ease: "easeOut" as const,
                        }}
                        viewport={{ once: true }}
                      />
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
