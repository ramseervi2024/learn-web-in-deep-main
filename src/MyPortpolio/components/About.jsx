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
                                alt="Ramesh Seervi"
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
                        <div className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold text-base sm:text-lg md:text-xl leading-tight">Full Stack Developer<br />Java · React · React Native</div>
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
                        title={"Engineering Robust Backends, Web & Cross-Platform Mobile Apps"}
                        description="Bridging high-concurrency Java Spring Boot microservices with intuitive React.js web interfaces and seamless React Native mobile apps."
                    />

                    <div className="space-y-4 sm:space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base md:text-lg">
                        <p>
                            Full Stack Software Developer with <span className="text-slate-900 dark:text-white font-semibold">approximately 4 years of experience</span> in web and mobile application development, backend services, and REST API integration across enterprise ecosystems.
                        </p>
                        <p>
                            Proficient in <span className="text-slate-900 dark:text-white font-semibold">Java, Spring Boot, Spring MVC, Spring Data JPA, Hibernate</span> on the backend, alongside <span className="text-slate-900 dark:text-white font-semibold">React.js, React Native, JavaScript, TypeScript, and SQL</span>. Experienced in developing application features, integrating frontend and backend components, implementing authentication and role-based access control (RBAC), and managing database operations.
                        </p>
                        <p>
                            Passionate about microservices architecture, distributed systems, cloud-native application development, and scalable enterprise solutions with high reliability and clean code standards.
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
                            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">B.E. in Computer Science (8.2 CGPA)</div>
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
                            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">Bengaluru, Karnataka, India</div>
                            <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">Open for Relocation / Remote</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
