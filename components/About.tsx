'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
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

        <div className="about-grid">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <Image
              src="/assets/about-pic.png"
              alt="About profile picture"
              fill
              className="object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Experience Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center">
                    <Image
                      src="/assets/experience.png"
                      alt="Experience icon"
                      width={28}
                      height={28}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Experience</h3>
                    <p className="text-gray-600">5+ Years</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Software Developer at Ameren, Synechron, Deutsche Bank, and Boehringer Ingelheim
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center">
                    <Image
                      src="/assets/education.png"
                      alt="Education icon"
                      width={28}
                      height={28}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Education</h3>
                    <p className="text-gray-600">Master's Degree</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  B.Sc. Bachelors Degree<br />
                  M.Sc. Masters Degree
                </p>
              </motion.div>
            </div>

            {/* About Text */}
            <motion.div
              className="text-gray-600 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-lg leading-relaxed">
                I am a passionate Software Developer with over 5 years of experience in building robust web applications.
                My expertise spans across modern frameworks and technologies including Angular, React, Node.js, and Spring Boot.
              </p>
              <p className="text-lg leading-relaxed">
                I specialize in developing high-quality front-end experiences while also designing and implementing scalable
                back-end services and databases. My focus is on creating efficient, maintainable, and user-friendly solutions
                that solve real-world problems.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 