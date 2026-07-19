import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './ThemeContext';

const MyPortfolio = () => {
    return (
        <ThemeProvider>
            <Navbar />
            <main className="bg-white dark:bg-slate-950 transition-colors duration-300">
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </ThemeProvider>
    );
};

export default MyPortfolio;
