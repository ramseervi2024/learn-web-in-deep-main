import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './common/SectionTitle';
import ProjectCard from './common/ProjectCard';

const projects = [
    {
        title: 'Bukih - E-commerce',
        type: 'Web Platform',
        category: 'Web',
        description: 'Elegant perfume e-commerce platform with integrated multi-currency wallet.',
        tech: ['React.js', 'Redux', 'Node.js'],
        link: 'https://bukih.com/'
    },
    {
        title: 'Ondeen - Event Booking',
        type: 'Web Platform',
        category: 'Web',
        description: 'Event booking platform for browsing and booking events with payment integration.',
        tech: ['React.js', 'Firebase', 'Payment Gateway'],
        link: 'https://ondeen.app/'
    },
    {
        title: 'UrExpert - Freelancing Platform',
        type: 'Web Platform',
        category: 'Web',
        description: 'B2B platform for hiring experts, product auctions, and team collaboration.',
        tech: ['React.js', 'Redux', 'Node.js'],
        link: 'https://urxprt.com/'
    },
    {
        title: 'MEDirect - Healthcare',
        type: 'Web Platform',
        category: 'Web',
        description: 'Virtual clinics and healthcare platform for remote medical consultations.',
        tech: ['React.js', 'Firebase', 'Real-time'],
        link: 'https://medirect.link/'
    },
    {
        title: 'Simplefatoora - Invoice',
        type: 'Web Platform',
        category: 'Web',
        description: 'Invoice management system for businesses with tax compliance features.',
        tech: ['React.js', 'Node.js', 'MongoDB'],
        link: 'https://simplefatoora.com/en/'
    },
    {
        title: 'Holiday Homes - Booking',
        type: 'Web Platform',
        category: 'Web',
        description: 'Hotel and homestay booking website with admin panel for property owners.',
        tech: ['React.js', 'MongoDB', 'Express'],
        link: 'https://www.holidayhomes.com/'
    },
    {
        title: 'Yourco - Workspace',
        type: 'Web Platform',
        category: 'Web',
        description: 'Workspace management platform for modern businesses and teams.',
        tech: ['React.js', 'Node.js', 'AWS'],
        link: 'https://www.yourco.app/'
    },
    {
        title: 'Estaragroup - Corporate',
        type: 'Web Platform',
        category: 'Web',
        description: 'Corporate website for business group with portfolio and services.',
        tech: ['React.js', 'Tailwind', 'Firebase'],
        link: 'https://estaragroup.com/'
    },
    {
        title: 'Timeinlive - Productivity',
        type: 'Mobile App',
        category: 'Mobile',
        description: 'Workforce management app for tracking attendance and productivity reports.',
        tech: ['React Native', 'Real-time DB', 'Firebase'],
        link: 'https://play.google.com/store/apps/details?id=timeinlive.smartwork&hl=en_IN'
    },
    {
        title: 'Ondeen - iOS App',
        type: 'Mobile App',
        category: 'Mobile',
        description: 'Cross-platform iOS app for browsing and booking events with Apple Pay.',
        tech: ['React Native', 'Firebase', 'Apple Pay'],
        link: 'https://apps.apple.com/us/app/ondeen/id6740039443'
    },
    {
        title: 'Ondeen Organiser - iOS',
        type: 'Mobile App',
        category: 'Mobile',
        description: 'Event management platform for organizers to create and manage events.',
        tech: ['React Native', 'Firebase', 'Push Notifications'],
        link: 'https://apps.apple.com/us/app/ondeen-organiser/id6740030819'
    },
    {
        title: 'Bukih - iOS App',
        type: 'Mobile App',
        category: 'Mobile',
        description: 'E-commerce mobile app for perfume shopping with wallet integration.',
        tech: ['React Native', 'Redux', 'Stripe'],
        link: 'https://apps.apple.com/us/iphone/search?term=bukih'
    },
    {
        title: 'Bukih Driver - Android',
        type: 'Mobile App',
        category: 'Mobile',
        description: 'Delivery driver app for managing orders and navigation.',
        tech: ['React Native', 'Google Maps', 'Real-time'],
        link: 'https://play.google.com/store/apps/details?id=com.buikh.driver&hl=en_IN'
    },
    {
        title: 'Eirad Owner - Android',
        type: 'Mobile App',
        category: 'Mobile',
        description: 'Business owner app for managing services and customer requests.',
        tech: ['React Native', 'Firebase', 'Notifications'],
        link: 'https://play.google.com/store/apps/details?id=com.eirad&hl=en_IN'
    }
];

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="section-container relative">
            {/* Background gradient decoration */}
            <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-blue-600/10 rounded-full filter blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-purple-600/10 rounded-full filter blur-[100px] pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 md:mb-16 gap-4 sm:gap-6 md:gap-8 relative">
                <SectionTitle
                    eyebrow="Projects"
                    title="Featured Projects"
                    description="A showcase of mobile and web product work, built with reusable components and strong visual polish."
                    align="left"
                />

                <div className="flex gap-1.5 sm:gap-2 p-1 sm:p-1.5 rounded-xl sm:rounded-2xl bg-slate-100/80 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-white/10">
                    {['All', 'Web', 'Mobile'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs md:text-sm font-semibold transition-all duration-300 ${
                                filter === f 
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-slate-900 dark:text-white shadow-lg shadow-blue-500/25' 
                                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-100 dark:bg-white/5'
                            }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 relative"
            >
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            layout
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                            <ProjectCard {...project} accent={index % 2 === 0 ? 'blue' : 'emerald'} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default Projects;
