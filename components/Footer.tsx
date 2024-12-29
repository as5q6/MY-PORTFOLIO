'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Shaik Afrid Ali</h3>
              <p className="text-gray-600">
                Full Stack Developer specializing in modern web technologies and scalable solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:afridshk33@gmail.com"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    afridshk33@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/afridali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/AfridShaik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600">
              © {currentYear} Shaik Afrid Ali. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 