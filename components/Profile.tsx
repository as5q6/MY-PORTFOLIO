'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { links } from '@/config/links';

export default function Profile() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center md:text-left space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h2 className="text-gray-600 text-lg font-medium">Hello, I&apos;m</h2>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Shaik Afrid Ali
              </h1>
              <p className="text-2xl text-gray-600 mt-4">
                Software Developer
              </p>
            </div>

            <p className="text-gray-600 text-lg max-w-xl">
              Passionate about crafting exceptional web experiences with modern technologies.
              Specializing in full-stack development with React, Node.js, and cloud solutions.
            </p>

            <div className="flex justify-center md:justify-start">
              <Link
                href={links.nav.contact}
                className="btn btn-primary"
              >
                Contact Me
              </Link>
            </div>

            <div className="flex gap-6 justify-center md:justify-start pt-4">
              <motion.a
                href={links.social.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Image
                  src="/assets/github.png"
                  alt="GitHub Profile"
                  width={24}
                  height={24}
                  className="opacity-75 hover:opacity-100"
                />
              </motion.a>
              <motion.a
                href={links.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Image
                  src="/assets/linkedin.png"
                  alt="LinkedIn Profile"
                  width={24}
                  height={24}
                  className="opacity-75 hover:opacity-100"
                />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] mx-auto">
              <Image
                src="/assets/profile-pic.png"
                alt="Shaik Afrid Ali profile"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 