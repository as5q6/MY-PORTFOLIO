'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Profile from '@/components/Profile';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Articles from '@/components/Articles';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Articles />
      <Contact />
      <Footer />
    </motion.main>
  );
} 