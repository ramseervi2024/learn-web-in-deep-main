import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './common/SectionTitle';
import ProjectCard from './common/ProjectCard';

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
                <SectionTitle
                    eyebrow="Projects"
                    title="Featured Projects"
                    description="A showcase of mobile and web product work, built with reusable components and strong visual polish."
                    align="left"
                />

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
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default Projects;
