import React, { useState } from 'react';
import roadmapData from "./roadmap";
import InterviewCrackRoadmap from "./InterviewCrackRoadmap";
import CareerPath from './CareerPath';
import { motion, AnimatePresence } from 'framer-motion';

export default function SkillCareerRoadmap() {
    const [viewMode, setViewMode] = useState('career'); // 'career' or 'interview'

    // Check if data exists to avoid crash
    if (!roadmapData || !roadmapData.platform || !roadmapData.platform.domains) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-xl font-semibold text-gray-500 animate-pulse">Loading Roadmap Data...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50/30">
            <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">{roadmapData.platform.name}</h1>
                        <p className="text-sm text-gray-500 hidden sm:block">{roadmapData.platform.tagline}</p>
                    </div>

                    {/* Modern Segmented Control */}
                    <div className="bg-gray-100 p-1 rounded-xl flex items-center shadow-inner">
                        <button
                            onClick={() => setViewMode('career')}
                            className={`relative px-6 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 z-10 
                                ${viewMode === 'career' ? 'text-blue-700' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            {viewMode === 'career' && (
                                <motion.div
                                    layoutId="viewToggle"
                                    className="absolute inset-0 bg-white rounded-lg shadow-sm border border-gray-200/50"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                Career Path
                            </span>
                        </button>
                        <button
                            onClick={() => setViewMode('interview')}
                            className={`relative px-6 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 z-10 
                                ${viewMode === 'interview' ? 'text-indigo-700' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            {viewMode === 'interview' && (
                                <motion.div
                                    layoutId="viewToggle"
                                    className="absolute inset-0 bg-white rounded-lg shadow-sm border border-gray-200/50"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                                Interview Prep
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="py-12">
                <AnimatePresence mode="wait">
                    {viewMode === 'interview' ? (
                        <motion.div
                            key="interview"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <InterviewCrackRoadmap />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="career"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <CareerPath />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}