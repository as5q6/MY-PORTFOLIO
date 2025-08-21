'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { links } from '@/config/links';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="nav-container">
                <div className="nav-content">
                    <Link href="/" className="logo">
                        Shaik Afrid Ali
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="nav-links">
                        <li>
                            <Link href={links.nav.about}>About</Link>
                        </li>
                        <li>
                            <Link href={links.nav.experience}>Experience</Link>
                        </li>
                        <li>
                            <Link href={links.nav.articles}>Technical Articles</Link>
                        </li>
                        <li>
                            <Link href={links.nav.contact}>Contact</Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button className="mobile-nav-button" onClick={toggleMenu}>
                        <div className="relative w-6 h-5">
                            <span className={`absolute w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'top-2 rotate-45' : 'top-0'}`} />
                            <span className={`absolute w-full h-0.5 bg-white top-2 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                            <span className={`absolute w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-nav"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                    >
                        <nav className="mobile-nav-links">
                            <Link href={links.nav.about} onClick={toggleMenu}>
                                About
                            </Link>
                            <Link href={links.nav.experience} onClick={toggleMenu}>
                                Experience
                            </Link>
                            <Link href={links.nav.articles} onClick={toggleMenu}>
                                Articles
                            </Link>
                            <Link href={links.nav.contact} onClick={toggleMenu}>
                                Contact
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
} 