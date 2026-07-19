import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Download, ChevronRight } from 'lucide-react';
import InfoCard from './common/InfoCard';
import ActionButton from './common/ActionButton';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
            {/* Enhanced background decorative elements */}
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-emerald-600/30 to-teal-600/30 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-[150px]" />

            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 backdrop-blur-xl mb-8"
                        >
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                            <span className="text-sm font-semibold text-emerald-300">Available for Hire</span>
                        </motion.div>

                                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight tracking-tight">
                            Full Stack <br />
                            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">JavaScript</span> <br />
                            Developer
                        </h1>

                        <p className="text-base md:text-lg lg:text-xl text-slate-300 mb-8 md:mb-10 max-w-xl leading-relaxed">
                            I'm <span className="text-white font-semibold">Ramesh Seervi</span>, a Full Stack Developer with 3.7+ years of experience building scalable Web & Mobile applications with React, React Native, Node.js, and TypeScript.
                        </p>

                        <div className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-12">
                            <ActionButton
                                label="View Projects"
                                variant="primary"
                                icon={ChevronRight}
                                href="#projects"
                            />
                            <ActionButton
                                label="Download Resume"
                                variant="secondary"
                                icon={Download}
                                href="https://drive.google.com/file/d/1SMA6ouALJ9uzKEm-zFy-EbtYbQ5_N4l2/view?usp=sharing"
                                target="_blank"
                            />
                        </div>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-4 md:gap-8">
                            {[
                                { label: 'Experience', value: '3.7+ Years', color: 'text-blue-400' },
                                { label: 'Projects', value: '14+ Live', color: 'text-emerald-400' },
                                { label: 'Technologies', value: '10+', color: 'text-purple-400' }
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="flex flex-col"
                                >
                                    <span className={`text-xl md:text-2xl lg:text-3xl font-bold ${stat.color}`}>{stat.value}</span>
                                    <span className="text-xs md:text-sm text-slate-400">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                            <div className="relative glass rounded-3xl p-8 aspect-square flex items-center justify-center backdrop-blur-2xl">
                                {/* Enhanced visual element */}
                                <div className="relative w-full h-full">
                                    <motion.div
                                        animate={{
                                            rotate: [0, 360],
                                        }}
                                        transition={{
                                            duration: 20,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <div className="w-64 h-64 border-2 border-dashed border-blue-500/30 rounded-full" />
                                    </motion.div>
                                    <motion.div
                                        animate={{
                                            rotate: [360, 0],
                                        }}
                                        transition={{
                                            duration: 15,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <div className="w-48 h-48 border-2 border-dashed border-purple-500/30 rounded-full" />
                                    </motion.div>
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            rotate: [0, 10, 0, -10, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <div className="w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-xl border border-white/10 flex items-center justify-center">
                                            <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">RS</span>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Floating Stats */}
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-8 -right-8"
                        >
                            <InfoCard title="React Native" value="Expert" subtitle="Mobile Development" accent="blue" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-8 -left-8"
                        >
                            <InfoCard title="Full Stack" value="Pro" subtitle="End-to-End Solutions" accent="emerald" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
