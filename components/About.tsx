'use client';

import { motion } from 'framer-motion';
import { DotLottiePlayer } from '@dotlottie/react-player';
import { links } from '@/config/links';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.p
            className="text-gray-600 text-lg mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get To Know More
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            About Me
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lottie-container h-[400px] flex items-center justify-center"
          >
            <DotLottiePlayer
              src={links.animations.developer}
              autoplay
              loop
              style={{ width: '110%', height: '110%' }}
            />
          </motion.div>

          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">👨‍💻</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Experience</h3>
                    <p className="text-gray-600">5+ Years</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Software Developer at Ameren, Synechron, Deutsche Bank, and Boehringer Ingelheim
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Education</h3>
                    <p className="text-gray-600">Master&apos;s Degree</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  B.Sc. Bachelor&apos;s Degree<br />
                  M.Sc. Master&apos;s Degree
                </p>
              </motion.div>
            </div>

            <motion.div
              className="text-gray-600 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-lg leading-relaxed">
                As a Senior Software Engineer with 5+ years of experience, I've delivered mission-critical solutions across Banking, Healthcare, and Energy sectors. My technical expertise encompasses the full modern web stack - from React/Next.js and Angular for responsive frontends, to Node.js, Spring Boot, and Python for robust backend services. I'm proficient in cloud platforms (AWS, Azure) and have extensive experience with containerization (Docker, Kubernetes) and CI/CD practices.
              </p>
              <p className="text-lg leading-relaxed">
                What sets me apart is my proven track record of driving technical innovation while delivering business value. At Deutsche Bank, I optimized trading platforms; at Ameren, I'm modernizing energy infrastructure; and in healthcare, I've built HIPAA-compliant applications. I bring expertise in microservices architecture, distributed systems, and both SQL (PostgreSQL) and NoSQL (MongoDB) databases. I'm passionate about clean code, performance optimization, and implementing best practices in security and scalability.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 