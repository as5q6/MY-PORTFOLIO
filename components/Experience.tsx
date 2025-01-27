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

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Amren",
    date: "2022 - Present",
    description: [
      "Led development of microservices architecture using Spring Boot and Django REST framework",
      "Optimized database performance across PostgreSQL and MongoDB deployments",
      "Implemented CI/CD pipelines for hybrid Java/Python applications",
      "Reduced API response times by 60% through caching and optimization"
    ]
  },
  {
    title: "Software Engineer",
    company: "Synechron",
    date: "2020 - 2022",
    description: [
      "Developed scalable APIs using Django and Spring Boot microservices",
      "Implemented real-time data processing with Kafka and Celery",
      "Created automated testing suites for Python and Java codebases",
      "Improved system reliability with comprehensive monitoring solutions"
    ]
  },
  {
    title: "Software Developer",
    company: "Deutsche Bank & Boehringer Ingelheim",
    date: "2018 - 2020",
    description: [
      "Built and maintained enterprise applications using Spring Boot and Django",
      "Designed RESTful APIs serving 1M+ daily requests",
      "Implemented authentication systems using OAuth2 and JWT",
      "Optimized application performance and reduced loading times by 40%"
    ]
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