import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import OutreachOS from './components/OutreachOS';
import Contact from './components/Contact';

function PortfolioShell() {
    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-white text-slate-700 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-200 selection:bg-blue-500/30">
            <Navbar />
            <main className="w-full overflow-x-hidden">
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <OutreachOS />
                <Contact />
            </main>

            <footer className="py-12 border-t border-slate-200 text-center text-slate-500 text-sm dark:border-white/5">
                <div className="max-w-7xl mx-auto px-5 sm:px-6">
                    <p>© {new Date().getFullYear()} Ramesh Seervi. Built with React & Framer Motion.</p>
                </div>
            </footer>
        </div>
    );
}

function MyPortpolio() {
    return (
        <ThemeProvider>
            <PortfolioShell />
        </ThemeProvider>
    );
}

export default MyPortpolio;
