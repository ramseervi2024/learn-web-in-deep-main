import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './common/SectionTitle';
import profileImage from '../profile.png';

const About = () => {
    return (
        <section id="about" className="section-container relative">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100vw,600px)] h-[min(100vw,600px)] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center relative min-w-0">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-md mx-auto lg:mx-0 w-full min-w-0"
                >
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                        <div className="relative aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden glass p-1.5 sm:p-2 backdrop-blur-2xl">
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                            />
                        </div>
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -right-4 sm:-right-6 md:-right-8 glass p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-xl hidden md:block"
                    >
                        <div className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold text-base sm:text-lg md:text-xl leading-tight">Java Backend Developer<br />& Problem Solver</div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="min-w-0 w-full"
                >
                    <SectionTitle
                        eyebrow="About Me"
                        title={"Passionate About Building High-Performance Backend Systems"}
                        description="I architect robust, secure, and distributed server-side architectures with a strong focus on high throughput, database optimization, and clean code."
                    />

                    <div className="space-y-4 sm:space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base md:text-lg">
                        <p>
                            Java Spring Boot Developer with <span className="text-slate-900 dark:text-white font-semibold">4+ years</span> of hands-on experience designing and deploying production microservices, secure RESTful APIs, and database architectures using Java 17/21, Spring Boot 3, Spring Security, Hibernate/JPA, PostgreSQL, and Redis.
                        </p>
                        <p>
                            I specialize in enterprise microservice ecosystems including API Gateways, Service Discovery, distributed caching, asynchronous messaging with Apache Kafka, Docker containerization, and AWS cloud deployments.
                        </p>
                        <p>
                            My focus is always on engineering scalable, fault-tolerant backend solutions that deliver exceptional performance through clean layered architecture, database indexing/query tuning, and comprehensive test coverage.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-xl"
                        >
                            <div className="text-slate-900 dark:text-white font-bold text-base sm:text-lg md:text-xl mb-1">Education</div>
                            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">B.E. in Computer Science</div>
                            <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 italic mt-1">Bangalore Institute of Technology</div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 backdrop-blur-xl"
                        >
                            <div className="text-slate-900 dark:text-white font-bold text-base sm:text-lg md:text-xl mb-1">Location</div>
                            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">Electronic City,</div>
                            <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">Bangalore, IN</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
