import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './common/SectionTitle';
import profileImage from '../profile.png';

const About = () => {
    return (
        <section id="about" className="section-container relative">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center relative">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass p-2 backdrop-blur-2xl">
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-xl hidden md:block"
                    >
                        <div className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold text-xl leading-tight">Full Stack Developer<br />& Problem Solver</div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <SectionTitle
                        eyebrow="About Me"
                        title={"Passionate About Building High-Performance Products"}
                        description="I build polished web and mobile experiences with a strong focus on performance, user experience, and scalable architecture."
                    />

                    <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                        <p>
                            Full Stack JavaScript Developer with <span className="text-white font-semibold">3.7+ years</span> of experience in building cross-platform mobile applications and responsive web interfaces using React Native, React.js, Node.js, and TypeScript.
                        </p>
                        <p>
                            I specialize in developing event management, e-commerce, productivity, healthcare, and service-based platforms with real-time data handling, API integration, payment gateways, and role-based user management.
                        </p>
                        <p>
                            My focus is always on creating scalable, user-focused digital products that deliver exceptional user experiences through clean code, modern UI/UX implementation, and performance optimization.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mt-12">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-xl"
                        >
                            <div className="text-white font-bold text-lg mb-1">Education</div>
                            <div className="text-sm text-slate-300">B.E. in Computer Science</div>
                            <div className="text-xs text-slate-400 italic mt-1">Bangalore Institute of Technology</div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 backdrop-blur-xl"
                        >
                            <div className="text-white font-bold text-lg mb-1">Location</div>
                            <div className="text-sm text-slate-300">Electronic City,</div>
                            <div className="text-xs text-slate-400">Bangalore, IN</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
