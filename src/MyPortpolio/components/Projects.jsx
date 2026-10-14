import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './common/SectionTitle';
import ProjectCard from './common/ProjectCard';

const projects = [
    {
        title: 'Timeinlive - Enterprise Workforce Engine',
        type: 'Microservices & REST API',
        category: 'Microservices',
        description: 'Enterprise workforce microservices with real-time attendance tracking, geo-fencing validation, Spring Security JWT, and automated payroll pipelines.',
        tech: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'JWT', 'Redis'],
        link: 'https://play.google.com/store/apps/details?id=timeinlive.smartwork&hl=en_IN'
    },
    {
        title: 'Ondeen - Event & Booking Microservice',
        type: 'Distributed System',
        category: 'Microservices',
        description: 'Event booking backend handling high-concurrency ticket reservations, payment gateway callbacks, and distributed transactional consistency.',
        tech: ['Spring Boot', 'Kafka', 'Redis', 'PostgreSQL', 'Docker'],
        link: 'https://ondeen.app/'
    },
    {
        title: 'Bukih - Multi-Currency E-Commerce API',
        type: 'RESTful API Platform',
        category: 'Backend & APIs',
        description: 'High-throughput e-commerce backend with multi-currency digital wallet, double-entry ledger accounting, and Stripe payment webhook processing.',
        tech: ['Java', 'Spring Boot', 'Hibernate/JPA', 'MySQL', 'Stripe'],
        link: 'https://bukih.com/'
    },
    {
        title: 'UrExpert - B2B Freelance & Consultation API',
        type: 'Real-Time Backend',
        category: 'Backend & APIs',
        description: 'B2B platform backend for verified expert matching, contract milestones, secure escrow payouts, and WebSocket notifications.',
        tech: ['Spring Boot', 'WebSockets', 'PostgreSQL', 'Redis'],
        link: 'https://urxprt.com/'
    },
    {
        title: 'MEDirect - Healthcare Telemedicine Service',
        type: 'HIPAA Compliant API',
        category: 'Backend & APIs',
        description: 'Virtual clinical consultation backend with encrypted medical records, doctor scheduling engine, and role-based access control.',
        tech: ['Spring Boot', 'Spring Security', 'MongoDB', 'Docker'],
        link: 'https://medirect.link/'
    },
    {
        title: 'Simplefatoora - Invoicing & Tax Engine',
        type: 'Invoicing Microservice',
        category: 'Microservices',
        description: 'E-invoicing compliance service generating tax-compliant PDFs, real-time fiscal validation, and distributed batch export jobs.',
        tech: ['Spring Boot', 'PostgreSQL', 'MongoDB', 'REST APIs'],
        link: 'https://simplefatoora.com/en/'
    },
    {
        title: 'Holiday Homes - Property Reservation Engine',
        type: 'Booking Platform',
        category: 'Full Stack',
        description: 'Hotel and homestay reservation backend with dynamic pricing calculation, calendar lock management, and partner portal APIs.',
        tech: ['Spring Boot', 'MySQL', 'JPA / Hibernate', 'React.js'],
        link: 'https://www.holidayhomes.com/'
    },
    {
        title: 'Yourco - Workspace Management Cloud',
        type: 'Cloud Service',
        category: 'Full Stack',
        description: 'Scalable workspace resource allocation system with team permission hierarchies, automated usage telemetry, and AWS cloud deployment.',
        tech: ['Spring Boot', 'AWS EC2/S3', 'Docker', 'PostgreSQL'],
        link: 'https://www.yourco.app/'
    },
    {
        title: 'Ondeen Organiser - Event Operations System',
        type: 'Mobile & API Engine',
        category: 'Full Stack',
        description: 'Organizers event operations platform with real-time attendee check-in scanners, ticket validation, and push notification relays.',
        tech: ['Spring Boot API', 'Kafka', 'React Native', 'Firebase'],
        link: 'https://apps.apple.com/us/app/ondeen-organiser/id6740030819'
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
                    description="A showcase of enterprise backend systems, distributed microservices, and full-stack platforms engineered with Java Spring Boot."
                    align="left"
                />

                <div className="flex gap-1.5 sm:gap-2 p-1 sm:p-1.5 rounded-xl sm:rounded-2xl bg-slate-100/80 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-white/10">
                    {['All', 'Microservices', 'Backend & APIs', 'Full Stack'].map((f) => (
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
