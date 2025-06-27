'use client';

import { motion } from 'framer-motion';

const skills = {
  technical: [
    { name: "React/Next.js", level: "Expert", icon: "⚛️" },
    { name: "Angular", level: "Expert", icon: "🅰️" },
    { name: "Node.js", level: "Expert", icon: "📦" },
    { name: "TypeScript", level: "Expert", icon: "🔷" },
    { name: "Spring Boot", level: "Expert", icon: "🍃" },
    { name: "AWS", level: "Expert", icon: "☁️" },
    { name: "Azure", level: "Advanced", icon: "🌥️" },
    { name: "GCP", level: "Advanced", icon: "🌏" },
    { name: "MongoDB", level: "Advanced", icon: "🗄️" },
    { name: "PostgreSQL", level: "Advanced", icon: "🐘" },
    { name: "Python", level: "Advanced", icon: "🐍" },
    { name: "Docker", level: "Advanced", icon: "🐋" },
    { name: "Kubernetes", level: "Advanced", icon: "⚓" },
    { name: "Git", level: "Advanced", icon: "🔄" },
    { name: "CI/CD", level: "Advanced", icon: "⚙️" },
    { name: "Jenkins", level: "Advanced", icon: "🔧" },
    { name: "Github Actions", level: "Advanced", icon: "🔨" },
    { name: "Agile/Scrum", level: "Advanced", icon: "📅" },
    { name: "Microservices", level: "Advanced", icon: "🔗" },
    { name: "RESTful APIs", level: "Advanced", icon: "🌐" },
    { name: "GraphQL", level: "Intermediate", icon: "📊" },
    { name: "Redux", level: "Intermediate", icon: "🔄" },
    { name: "Tailwind CSS", level: "Intermediate", icon: "🎨" },
    { name: "Material UI", level: "Intermediate", icon: "📦" },
    { name: "Bootstrap", level: "Intermediate", icon: "🧰" },
    

  ],
  domains: [
    { name: "Banking & Finance", icon: "💰", years: "3+" },
    { name: "Healthcare", icon: "🏥", years: "2+" },
    { name: "Retail", icon: "⚡", years: "2+" },
    { name: "E-commerce", icon: "🛒", years: "2+" },
    { name: "Telecommunications", icon: "📞", years: "1+" },
    { name: "Logistics", icon: "🚚", years: "1+" },
    { name: "Insurance", icon: "🛡️", years: "1+" },
    { name: "Education", icon: "🎓", years: "1+" },

  ]
};

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Clover Health | Jersey City, NJ",
    date: "Mar 2023 - Present",
  },
  {
    title: "Senior Software Engineer",
    company: "PNC Bank | Cleveland, OH",
    date: "Dec 2020 – Feb 2023",
  },
  {
    title: "Software Engineer",
    company: "Walmart & Magna Infotech",
    date: "Jan 2019 – Jun 2014",
  },
];

const industries = [
  { name: "Healthcare & Insurance", icon: "🏥 🛡️", description: "Healthcare Solutions" },
  { name: "Banking & Finance", icon: "💰 ", description: "Financial Services" },
  { name: "Payments & Fintech", icon: "💳", description: "Payment Systems" },
  { name: "Retail & E-commerce", icon: "🛍️ 🛒", description: "Retail & E-commerce Platforms" },
  { name: "Telecom & Media", icon: "📞 🎥", description: "Telecom & Media Services" },
  { name: "Logistics & Education", icon: "🚚 🎓", description: "Logistics & Educational Platforms" },

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
            10+ years of expertise in full-stack development
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-sm font-medium text-blue-600 mb-2">{experience.date}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{experience.title}</h3>
              <p className="text-gray-700 mb-3">{experience.company}</p>
              {/* <div className="flex flex-wrap gap-2">
                {experience.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div> */}
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <span className="text-5xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">
                        {industry.icon}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
                        {industry.name}
                      </h3>
                      <p className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {industry.description}
                      </p>
                    </div>
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