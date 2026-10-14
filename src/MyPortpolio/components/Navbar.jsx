import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Phone, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { WhatsAppIcon } from './QuickContact';

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
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 sm:py-4' : 'py-4 sm:py-6'}`}>
            <div className="px-5 sm:px-6 md:px-8 lg:px-10">
                <div className="mx-auto w-full max-w-7xl">
                    <div className={`glass rounded-xl sm:rounded-2xl px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-slate-900/80 shadow-sm dark:shadow-none' : 'bg-transparent border-transparent'}`}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-lg sm:text-xl font-bold text-gradient shrink-0"
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

                        <div className="flex items-center gap-2 sm:gap-3">
                            {/* Available Status Badge */}
                            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span>Available</span>
                            </div>

                            {/* Theme Toggle */}
                            <button
                                type="button"
                                onClick={toggleTheme}
                                aria-label={theme === 'dark' ? 'Switch to white theme' : 'Switch to black theme'}
                                className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5 transition-colors"
                            >
                                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                            </button>

                            {/* Let's Talk CTA Button */}
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-indigo-500/25 transition-all transform hover:scale-[1.02]"
                            >
                                <span>Let's Talk</span>
                                <ArrowUpRight size={15} />
                            </a>

                            {/* Mobile Menu Button */}
                            <div className="md:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                                    aria-label="Toggle menu"
                                >
                                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                                </button>
                            </div>
                        </div>
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
                        className="md:hidden bg-white/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-white/10 overflow-hidden backdrop-blur-xl"
                    >
                        <div className="px-5 py-4 space-y-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5 rounded-lg transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="pt-4 mt-4 border-t border-slate-200 dark:border-white/10 flex items-center gap-3">
                                <a
                                    href="https://github.com/ramseervi2024"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="GitHub"
                                    className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/ramesh-seervi-3976802b0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="LinkedIn"
                                    className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="https://wa.me/916360494477?text=Hi%20Ramesh%2C%20I%20saw%20your%20Java%20Spring%20Boot%20portfolio%20and%20would%20like%20to%20connect%21"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="WhatsApp"
                                    className="p-2 text-slate-500 hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
                                >
                                    <WhatsAppIcon size={20} />
                                </a>
                                <a
                                    href="tel:+916360494477"
                                    title="Call"
                                    className="p-2 text-slate-500 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                                >
                                    <Phone size={20} />
                                </a>
                                <a
                                    href="mailto:ramseervi4321@gmail.com"
                                    title="Email"
                                    className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                                >
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
