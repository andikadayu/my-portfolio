"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Warehouse Management System (Laravel + React)",
    description:
      "Developed comprehensive warehouse management system with inventory tracking, order management, and real-time stock monitoring. Features automated reorder points and detailed reporting.",
    tech: ["Laravel", "React", "MySQL", "REST APIs"],
    image: "/api/placeholder/400/250",
    link: "#",
  },
  {
    title: "Frontend Development (Next.js, Tailwind, Redux)",
    description:
      "Built and optimized web admin applications using Next.js for server-side rendering, Tailwind CSS for styling, and Redux for state management. Created modern, responsive interfaces for enterprise applications.",
    tech: ["Next.js", "Tailwind CSS", "Redux", "TypeScript"],
    image: "/api/placeholder/400/250",
    link: "#",
  },
  {
    title: "API Optimization & Microservices (Go/C#)",
    description:
      "Enhanced API performance through strategic optimization and refactoring using Go and C#. Implemented microservices architecture, reducing response times and improving scalability.",
    tech: ["Go", "C#", "Microservices", "Docker"],
    image: "/api/placeholder/400/250",
    link: "#",
  },
  {
    title: "Mobile & Desktop Applications",
    description:
      "Developed cross-platform mobile applications for Android using Java and desktop applications using various technologies. Focus on performance and user experience optimization.",
    tech: ["Java", "Android", "Desktop Apps", "Cross-platform"],
    image: "/api/placeholder/400/250",
    link: "#",
  },
  {
    title: "IoT & Embedded Systems (Arduino)",
    description:
      "Created IoT solutions and embedded systems using Arduino platforms. Developed sensor integration, data collection systems, and real-time monitoring applications for various use cases.",
    tech: ["Arduino", "IoT", "C++", "Embedded Systems"],
    image: "/api/placeholder/400/250",
    link: "#",
  },
  {
    title: "Web Crawling & Data Processing",
    description:
      "Built advanced web crawling solutions for data extraction and processing. Implemented automated data collection systems with robust error handling and data validation.",
    tech: ["Python", "Web Scraping", "Data Processing", "Automation"],
    image: "/api/placeholder/400/250",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here are some of the projects I've worked on, showcasing my expertise
          in backend development, full-stack applications, and various
          technologies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full transition-all duration-300 hover:bg-white/10 hover:border-white/20">
              <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <div className="w-full h-full flex items-center justify-center text-white/50">
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <a
                  href={project.link}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  View Details
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
