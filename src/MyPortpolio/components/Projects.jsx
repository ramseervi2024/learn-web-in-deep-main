import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe } from 'lucide-react';

const projects = [
    {
        title: 'Ondeen - Event Booking',
        type: 'Mobile App',
        category: 'Mobile',
        description: 'Cross-platform app for browsing and booking events using Apple Pay/Google Pay.',
        tech: ['React Native', 'Firebase', 'Apple Pay'],
        link: '#'
    },
    {
        title: 'UrExpert - Freelancing Platform',
        type: 'Web Platform',
        category: 'Web',
        description: 'B2B platform for hiring experts, product auctions, and team collaboration.',
        tech: ['React.js', 'Redux', 'Node.js'],
        link: '#'
    },
    {
        title: 'Bukih - E-commerce',
        type: 'Mobile App',
        category: 'Mobile',
        description: 'Elegant perfume e-commerce app with integrated multi-currency wallet.',
        tech: ['React Native', 'Redux', 'Stripe'],
        link: '#'
    },
    {
        title: 'Treat-it - Beauty Booking',
        type: 'Web Application',
        category: 'Web',
        description: 'Salon and home beauty service booking platform with real-time scheduling.',
        tech: ['React', 'Firebase', 'Tailwind'],
        link: '#'
    },
    {
        title: 'Timeinlive - Productivity',
        type: 'Mobile App',
        category: 'Mobile',
        description: 'Workforce management app for tracking attendance and reports.',
        tech: ['React Native', 'Real-time DB'],
        link: '#'
    },
    {
        title: 'Holiday-Home - Booking',
        type: 'Web Application',
        category: 'Web',
        description: 'Hotel and homestay booking website with admin panel for owners.',
        tech: ['React', 'MongoDB', 'Express'],
        link: '#'
    }
];

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="section-container">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Featured <span className="text-gradient">Projects</span>
                    </motion.h2>
                    <p className="text-slate-400">A showcase of my recent mobile and web development work.</p>
                </div>

                <div className="flex gap-2 glass p-1.5 rounded-2xl">
                    {['All', 'Web', 'Mobile'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-6 py-2 rounded-xl text-sm font-medium transition-all ${filter === f ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div
                layout
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.title}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="project-card flex flex-col h-full group"
                        >
                            <div className="relative aspect-video bg-slate-800 flex items-center justify-center group">
                                {project.category === 'Mobile' ? <Smartphone size={48} className="text-slate-700 group-hover:text-blue-500/50 transition-colors" /> : <Globe size={48} className="text-slate-700 group-hover:text-emerald-500/50 transition-colors" />}

                                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <button className="p-3 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform">
                                        <ExternalLink size={20} />
                                    </button>
                                    <button className="p-3 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform">
                                        <Github size={20} />
                                    </button>
                                </div>
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-bold uppercase tracking-wider text-blue-400">{project.type}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                <p className="text-sm text-slate-400 mb-6 flex-grow">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-[10px] px-2 py-1 bg-white/5 rounded-md text-slate-300 font-medium uppercase border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default Projects;
