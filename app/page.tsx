'use client';

import Navbar from '@/components/Navbar';
import Profile from '@/components/Profile';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import SkillsSection from '@/components/SkillsSection';
import Articles from '@/components/Articles';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <SkillsSection />
      <Articles />
      <Contact />
      <Footer />
    </main>
  );
} 