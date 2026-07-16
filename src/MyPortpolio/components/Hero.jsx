import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Download, ChevronRight } from 'lucide-react';
import InfoCard from './common/InfoCard';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background decorative elements */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-emerald-500/20 rounded-full blur-[100px] animate-pulse" />

            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                            <span className="text-sm font-medium text-emerald-400">Available for Hire</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Crafting <span className="text-gradient">Seamless</span> Digital Experiences
                        </h1>

                        <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
                            I'm <span className="text-white font-semibold">Ramesh Seervi</span>, a Web & Mobile App Developer specialized in building high-performance applications with React & React Native.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold flex items-center gap-2 transition-colors shadow-lg shadow-blue-500/25"
                            >
                                View Projects <ChevronRight size={20} />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 glass text-white rounded-2xl font-semibold flex items-center gap-2"
                            >
                                Resume <Download size={20} />
                            </motion.button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                            <div className="relative glass rounded-3xl p-8 aspect-square flex flex-center">
                                {/* Visual placeholder for a 3D element or profile graphic */}
                                <div className="w-full h-full border-2 border-dashed border-white/10 rounded-2xl flex items-center justify-center">
                                    <motion.div
                                        animate={{
                                            rotate: [0, 10, 0, -10, 0],
                                            y: [0, -10, 0]
                                        }}
                                        transition={{
                                            duration: 6,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <MousePointer2 size={120} className="text-blue-500/50" />
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Stats or Badges */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10"
                        >
                            <InfoCard title="Experience" value="3+ Years" subtitle="Building polished interfaces" accent="blue" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-10 -left-10"
                        >
                            <InfoCard title="Projects" value="4+ Apps" subtitle="Published and live" accent="emerald" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
