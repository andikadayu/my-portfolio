"use client";

import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "PT Venturo Pro Indonesia",
      period: "Oct 2022 - Present",
      duration: "2+ years",
      description:
        "Build and optimize APIs using Go and C# .NET. Work with microservices, RabbitMQ, gRPC, MongoDB, and Redis Cache. Develop web admin applications using Next.js, Tailwind, Shadcn, and Redux.",
      skills: [
        "Go",
        "C# .NET",
        "Microservices",
        "RabbitMQ",
        "gRPC",
        "MongoDB",
        "Redis",
        "Next.js",
        "Tailwind",
        "Redux",
      ],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Full Stack Developer",
      company: "CV Global Solusindo",
      period: "Jul 2021 - Feb 2022",
      duration: "8 months",
      description:
        "Developed enterprise websites, including web crawling applications. Created desktop applications with Python. Built Android apps with Java for real-time location tracking with Firebase. Developed embedded systems and IoT solutions with Arduino.",
      skills: [
        "Python",
        "Java",
        "Android",
        "Firebase",
        "Arduino",
        "IoT",
        "Web Crawling",
      ],
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Intern",
      company: "PT Internusa Cipta Solusi Perdana",
      period: "Jun 2019 - Jun 2020",
      duration: "1 year",
      description:
        "Built a website to manage large datasets in a warehouse using Laravel and PHP. Managed data using Microsoft Excel and gained foundational experience in web development.",
      skills: ["Laravel", "PHP", "MySQL", "Data Management", "Microsoft Excel"],
      gradient: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-900/50 to-purple-900/20"
    >
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey and career milestones
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + "-" + index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div
                  className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${exp.gradient} border-4 border-gray-900 z-10`}
                ></div>

                <motion.div
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="glass-effect rounded-2xl p-6 border border-white/10">
                    <div className="mb-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${exp.gradient} text-white`}
                      >
                        {exp.duration}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>

                    <h4
                      className={`text-lg font-semibold mb-2 bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}
                    >
                      {exp.company}
                    </h4>

                    <p className="text-gray-400 text-sm mb-4">{exp.period}</p>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <div className="hidden md:block md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
