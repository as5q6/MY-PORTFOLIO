'use client';

import { motion } from 'framer-motion';

const skills = {
  technical: [
    { name: "React/Next.js", level: "Expert", icon: "⚛️" },
    { name: "Angular", level: "Expert", icon: "🅰️" },
    { name: "Node.js", level: "Expert", icon: "📦" },
    { name: "TypeScript", level: "Expert", icon: "🔷" },
    { name: "Spring Boot", level: "Advanced", icon: "🍃" },
    { name: "AWS", level: "Advanced", icon: "☁️" },
    { name: "Azure", level: "Advanced", icon: "🌥️" },
    { name: "MongoDB", level: "Advanced", icon: "🗄️" },
    { name: "PostgreSQL", level: "Advanced", icon: "🐘" },
    { name: "Python", level: "Advanced", icon: "🐍" },
    { name: "Flask", level: "Advanced", icon: "🌶️" },
    { name: "Django", level: "Advanced", icon: "🎯" },
    { name: "Docker", level: "Advanced", icon: "🐋" },
    { name: "Kubernetes", level: "Advanced", icon: "⚓" },
    { name: "Git", level: "Advanced", icon: "🔄" },
    { name: "CI/CD", level: "Advanced", icon: "⚙️" },
    { name: "Jenkins", level: "Advanced", icon: "🔧" },
    { name: "Github Actions", level: "Advanced", icon: "🔨" },

  ],
  domains: [
    { name: "Banking & Finance", icon: "💰", years: "3+" },
    { name: "Energy Sector", icon: "⚡", years: "1+" },
    { name: "Healthcare", icon: "🏥", years: "2+" }
  ]
};

const experience = [
  {
    company: "Ameren",
    role: "Senior Software Engineer",
    period: "2023 - Present",
    tech: ["React", "Node.js", "AWS"]
  },
  {
    company: "Deutsche Bank",
    role: "Software Engineer",
    period: "2020 - 2022",
    tech: ["Angular", "Spring Boot", "Azure"]
  },
  {
    company: "Synechron & Boehringer",
    role: "Software Engineer",
    period: "2019 - 2023",
    tech: ["React", "Node.js", "MongoDB"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
            Experience & Skills
          </h2>
          <p className="text-gray-600 text-lg">
            5+ years of expertise in full-stack development
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {experience.map((job, index) => (
            <motion.div
              key={job.company}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-sm font-medium text-blue-600 mb-2">{job.period}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{job.role}</h3>
              <p className="text-gray-700 mb-3">{job.company}</p>
              <div className="flex flex-wrap gap-2">
                {job.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Technical Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {skills.technical.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg ${skill.level === 'Expert'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-white'
                      }`}
                    whileHover={{ y: -2 }}
                  >
                    <span>{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Domain Experience */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Industry Experience</h3>
              <div className="space-y-4">
                {skills.domains.map((domain) => (
                  <motion.div
                    key={domain.name}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{domain.icon}</span>
                      <span className="text-gray-900 font-medium">{domain.name}</span>
                    </div>
                    <span className="text-blue-600 font-medium">{domain.years} years</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 