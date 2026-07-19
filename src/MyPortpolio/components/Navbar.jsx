import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../ThemeContext';

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

                    <div className="flex items-center gap-1 sm:gap-2">
                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label={theme === 'dark' ? 'Switch to white theme' : 'Switch to black theme'}
                            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5 transition-colors"
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        <div className="hidden md:flex items-center space-x-1">
                            <a href="https://github.com/ramseervi2024" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/ramesh-seervi-3976802b0" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:ramseervi4321@gmail.com" className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
                                <Mail size={20} />
                            </a>
                        </div>

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
                            <div className="pt-4 mt-4 border-t border-slate-200 dark:border-white/10 flex gap-4">
                                <a
                                    href="https://github.com/ramseervi2024"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/ramesh-seervi-3976802b0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="mailto:ramseervi4321@gmail.com"
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
