import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`glass rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-slate-900/80' : 'bg-transparent border-transparent'}`}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-xl font-bold text-gradient"
                    >
                        RS.
                    </motion.div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, i) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="nav-link text-sm font-medium"
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-slate-400 hover:text-white"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900/95 border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-4 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
