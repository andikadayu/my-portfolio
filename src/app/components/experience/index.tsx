'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'PT Venturo Pro Indoesia',
    role: 'Full Stack Developer',
    date: 'Oct 2022 - Present',
    description: [
      'Build and optimize APIs using Go and C# .NET.',
      'Work with microservices, RabbitMQ, gRPC, MongoDB, and Redis Cache.',
      'Develop web admin applications using Next.js, Tailwind, Shadcn, and Redux.',
    ],
  },
  {
    company: 'CV Global Solusindo',
    role: 'Full Stack Developer',
    date: 'Jul 2021 - Feb 2022',
    description: [
      'Developed enterprise websites, including web crawling applications.',
      'Created desktop applications with Python.',
      'Built Android apps with Java for real-time location tracking with Firebase.',
      'Developed embedded systems and IoT solutions with Arduino.',
    ],
  },
  {
    company: 'PT Internusa Cipta Solusi Perdana',
    role: 'Intern',
    date: 'Jun 2019 - Jun 2020',
    description: [
      'Built a website to manage large datasets in a warehouse using Laravel and PHP.',
      'Managed data using Microsoft Excel.',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="container mx-auto py-24 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-[rgb(var(--border-color))] h-full border left-1/2 transform -translate-x-1/2 hidden md:block"></div>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'md:right-timeline' : 'md:left-timeline'} flex-col md:flex-row`}
            variants={itemVariants}
          >
            <div className="order-1 w-full md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-[rgb(var(--secondary-accent))] shadow-xl w-8 h-8 rounded-full mb-4 md:mb-0"></div>
            <div className="order-1 bg-[rgb(var(--card-background))] rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 border border-[rgb(var(--border-color))] ">
              <h3 className="mb-3 font-bold text-xl text-[rgb(var(--primary-accent))] ">{exp.role}</h3>
              <p className="text-sm leading-snug tracking-wide text-[rgb(var(--foreground-rgb))] text-opacity-100">{exp.company} - {exp.date}</p>
              <ul className="list-disc list-inside mt-2 text-[rgb(var(--foreground-rgb))] ">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}