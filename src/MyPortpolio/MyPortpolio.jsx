import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function MyPortpolio() {
    return (
        <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-blue-500/30">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
            </main>

            <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-sm">
                <div className="max-w-7xl mx-auto px-4">
                    <p>© {new Date().getFullYear()} Ramesh Seervi. Built with React & Framer Motion.</p>
                </div>
            </footer>
        </div>
    );
}

export default MyPortpolio;