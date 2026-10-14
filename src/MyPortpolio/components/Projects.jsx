import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './common/SectionTitle';
import ProjectCard from './common/ProjectCard';

const projects = [
    {
        title: 'Ondeen - Event & Booking Platform',
        type: 'Full Stack & Mobile',
        category: 'React Native Mobile',
        description: 'Cross-platform mobile apps for users and organizers with ticket booking, attendee management, Apple Pay, Google Pay, and Spring Boot REST APIs.',
        tech: ['React Native', 'Java Spring Boot', 'REST APIs', 'MySQL', 'Payment Gateway'],
        link: 'https://ondeen.app/'
    },
    {
        title: 'Bukih App - E-Commerce Platform',
        type: 'Mobile E-Commerce',
        category: 'React Native Mobile',
        description: 'Cross-platform e-commerce app with product browsing, cart, checkout, and Apple Pay, Mada, Visa, and American Express payment integrations.',
        tech: ['React Native', 'Node.js', 'REST APIs', 'Apple Pay', 'Mada'],
        link: 'https://bukih.com/'
    },
    {
        title: 'Timeinlive - Workforce Management App',
        type: 'Mobile & Enterprise Backend',
        category: 'Full Stack',
        description: 'Productivity and workforce app with real-time attendance tracking, product management, sales reports, and Spring Boot backend services.',
        tech: ['React Native', 'Java Spring Boot', 'REST APIs', 'MySQL', 'JWT'],
        link: 'https://play.google.com/store/apps/details?id=timeinlive.smartwork&hl=en_IN'
    },
    {
        title: 'UrExpert - Freelancing & Business Opportunities',
        type: 'Web Application',
        category: 'React.js Web',
        description: 'Freelancing and business marketplace with project listings, part-time jobs, milestone transactions, auctions, and role-based dashboards.',
        tech: ['React.js', 'Java Spring Boot', 'REST APIs', 'MySQL', 'Redux'],
        link: 'https://urxprt.com/'
    },
    {
        title: 'Venderlane - B2B E-Commerce & Vendor Platform',
        type: 'B2B Enterprise Portal',
        category: 'Full Stack',
        description: 'B2B platform connecting vendors and buyers with product catalogs, bulk purchasing, inventory tracking, and role-based permissions.',
        tech: ['React.js', 'Java Spring Boot', 'REST APIs', 'MySQL', 'Tailwind'],
        link: 'https://venderlane.com/'
    },
    {
        title: 'Treat-it - Salon & Beauty Booking Platform',
        type: 'Service Booking Web App',
        category: 'React.js Web',
        description: 'Salon and beauty booking platform with service listings, appointment scheduling, user and professional dashboards, and payment flows.',
        tech: ['React.js', 'Java Spring Boot', 'REST APIs', 'MySQL', 'Bootstrap'],
        link: 'https://treat-it.com/'
    },
    {
        title: 'Holiday-Home - Hotel & Homestay Platform',
        type: 'Hospitality Web App',
        category: 'React.js Web',
        description: 'Hotel and homestay booking portal with accommodation search, dynamic date filtering, reservation management, and admin controls.',
        tech: ['React.js', 'Java Spring Boot', 'REST APIs', 'MySQL', 'JPA'],
        link: 'https://holidayhomes.com/'
    },
    {
        title: 'Simplefatoora - Invoicing & Tax Engine',
        type: 'Microservices & Backend',
        category: 'Java Spring Boot',
        description: 'Automated e-invoicing compliance service with tax-compliant PDF generation, fiscal validation, and asynchronous batch jobs.',
        tech: ['Java Spring Boot', 'Microservices', 'PostgreSQL', 'Docker', 'REST APIs'],
        link: 'https://simplefatoora.com/en/'
    },
    {
        title: 'MEDirect - Healthcare Telemedicine Service',
        type: 'HIPAA Compliant API & Web',
        category: 'Java Spring Boot',
        description: 'Telemedicine platform with encrypted patient consultation records, doctor appointment scheduling, and role-based access control.',
        tech: ['Java Spring Boot', 'React.js', 'Spring Security', 'MongoDB', 'REST APIs'],
        link: 'https://medirect.link/'
    }
];

const categories = [
    { id: 'All', label: 'All' },
    { id: 'Full Stack', label: 'Full Stack' },
    { id: 'React Native Mobile', label: 'React Native' },
    { id: 'React.js Web', label: 'React.js' },
    { id: 'Java Spring Boot', label: 'Java Spring Boot' }
];

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    const counts = {
        'All': projects.length,
        'Full Stack': projects.filter(p => p.category === 'Full Stack').length,
        'React Native Mobile': projects.filter(p => p.category === 'React Native Mobile').length,
        'React.js Web': projects.filter(p => p.category === 'React.js Web').length,
        'Java Spring Boot': projects.filter(p => p.category === 'Java Spring Boot').length
    };

    return (
        <section id="projects" className="section-container relative">
            {/* Background gradient decoration */}
            <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-blue-600/10 rounded-full filter blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-purple-600/10 rounded-full filter blur-[100px] pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 md:mb-16 gap-4 sm:gap-6 md:gap-8 relative">
                <SectionTitle
                    eyebrow="Projects"
                    title="Featured Projects"
                    description="Real-world projects spanning Java Spring Boot backends, responsive React.js web portals, and cross-platform React Native apps."
                    align="left"
                />

                <div className="flex items-center justify-start md:justify-end w-full md:w-auto overflow-x-auto scrollbar-none py-1">
                    <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-100/90 dark:bg-slate-900/70 border border-slate-200/80 dark:border-white/10 backdrop-blur-2xl shadow-sm gap-1 shrink-0">
                        {categories.map((tab) => {
                            const isActive = filter === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => setFilter(tab.id)}
                                    className={`relative flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap shrink-0 select-none ${
                                        isActive
                                            ? 'text-white'
                                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5'
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeFilterPill"
                                            className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl shadow-lg shadow-blue-500/30"
                                            transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                                        />
                                    )}
                                    <span className="relative z-10 whitespace-nowrap">{tab.label}</span>
                                    <span
                                        className={`relative z-10 text-[10px] font-bold px-1.5 py-0.5 rounded-full transition-colors duration-200 ${
                                            isActive
                                                ? 'bg-white/25 text-white'
                                                : 'bg-slate-200/80 dark:bg-white/10 text-slate-500 dark:text-slate-400'
                                        }`}
                                    >
                                        {counts[tab.id]}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
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
