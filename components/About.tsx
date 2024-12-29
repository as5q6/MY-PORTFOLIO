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