'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Full-stack developer with a passion for building scalable applications using modern technologies.
            Specialized in enterprise solutions using Java Spring Boot  with a focus on
            creating robust microservices and high-performance web applications. Experienced in both
            traditional enterprise environments and modern cloud-native architectures.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            My expertise spans across the full development lifecycle, from designing efficient backend systems
            to implementing responsive frontends. Proficient in optimizing application performance, implementing
            security best practices, and leveraging cloud platforms for scalable deployments.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 