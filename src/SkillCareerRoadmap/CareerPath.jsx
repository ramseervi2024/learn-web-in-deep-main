import React, { useState } from 'react';
import roadmapData from "./roadmap";
import { motion, AnimatePresence } from 'framer-motion';

export default function CareerPath() {
    const [selectedDomain, setSelectedDomain] = useState('all');

    // Check if data exists to avoid crash
    if (!roadmapData || !roadmapData.platform || !roadmapData.platform.domains) {
        return <div className="p-8 text-center text-lg text-gray-600">Loading or Data Error...</div>;
    }

    const domains = roadmapData.platform.domains;
    const allDomainIds = ['all', ...domains.map(d => d.id)];

    const filteredDomains = selectedDomain === 'all'
        ? domains
        : domains.filter(d => d.id === selectedDomain);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Domain Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {allDomainIds.map(domId => {
                    const label = domId === 'all' ? 'All Paths' : (domains.find(d => d.id === domId)?.title || domId);
                    const isActive = selectedDomain === domId;

                    return (
                        <button
                            key={domId}
                            onClick={() => setSelectedDomain(domId)}
                            className={`relative px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300
                                ${isActive
                                    ? 'text-white shadow-lg shadow-blue-500/30'
                                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'}
                            `}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-blue-600 rounded-full"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{label}</span>
                        </button>
                    );
                })}
            </div>

            <motion.div layout className="space-y-16">
                <AnimatePresence mode="popLayout">
                    {filteredDomains.map((domain) => (
                        <motion.div
                            key={domain.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                        >
                            <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                                <h2 className="text-3xl font-bold text-gray-900">{domain.title}</h2>
                                <p className="text-gray-600 mt-2 text-lg">{domain.description}</p>
                            </div>

                            <div className="p-8 bg-gray-50/50">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {domain.levels.map((level, index) => (
                                        <motion.div
                                            key={level.level}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                            className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                                        >
                                            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-5 text-white">
                                                <h3 className="text-xl font-bold tracking-tight">{level.level}</h3>
                                                <p className="text-blue-100 text-sm font-medium mt-1 inline-flex items-center gap-1">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                    {level.experience} Experience
                                                </p>
                                            </div>

                                            <div className="p-6 flex-1 flex flex-col">
                                                <div className="mb-4">
                                                    <span className="inline-flex items-center bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wide border border-green-100">
                                                        💰 {level.salary_india}
                                                    </span>
                                                </div>

                                                <p className="text-gray-700 italic mb-6 text-sm leading-relaxed border-l-4 border-blue-100 pl-3">
                                                    "{level.goal || level.role}"
                                                </p>

                                                <div className="mb-6 flex-grow">
                                                    <h4 className="font-bold text-gray-900 mb-3 text-sm flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                                        Key Skills
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {level.skills.map((skill) => (
                                                            <span key={skill} className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md text-xs font-medium border border-gray-200 hover:bg-gray-200 transition-colors">
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {level.best_websites && (
                                                    <div className="mt-auto pt-5 border-t border-gray-100">
                                                        <h4 className="font-bold text-gray-900 mb-3 text-xs uppercase tracking-wider text-gray-500">Learning Resources</h4>
                                                        <ul className="space-y-2">
                                                            {level.best_websites.map((site) => (
                                                                <li key={site.name}>
                                                                    <a
                                                                        href={site.url}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="group text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1.5 hover:underline decoration-blue-300 underline-offset-2"
                                                                    >
                                                                        <span className="group-hover:translate-x-1 transition-transform">➜</span>
                                                                        {site.name}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}