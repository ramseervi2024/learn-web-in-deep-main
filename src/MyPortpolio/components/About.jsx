import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './common/SectionTitle';
import profileImage from '../profile.png';

const About = () => {
    return (
        <section id="about" className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="aspect-[4/5] rounded-3xl overflow-hidden glass p-2">
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl hidden md:block">
                        <div className="text-blue-400 font-bold text-xl leading-tight">Problem Solver &<br />Innovator</div>
                    </div>
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

                    <div className="space-y-6 text-slate-400 leading-relaxed">
                        <p>
                            React Native Developer with 3 years of experience in building cross-platform mobile applications and responsive web interfaces using React Native and React.js.
                        </p>
                        <p>
                            I specialize in developing event management, e-commerce, productivity, and service-based platforms with real-time data handling, API integration, and role-based user management.
                        </p>
                        <p>
                            My focus is always on creating scalable, user-focused digital products that deliver exceptional user experiences through clean code and modern UI/UX implementation.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mt-12">
                        <div>
                            <div className="text-white font-bold text-lg">Education</div>
                            <div className="text-sm text-slate-400 mt-2">B.E. in Computer Science</div>
                            <div className="text-xs text-slate-500 italic">Bangalore Institute of Technology</div>
                        </div>
                        <div>
                            <div className="text-white font-bold text-lg">Location</div>
                            <div className="text-sm text-slate-400 mt-2">Electronic City,</div>
                            <div className="text-xs text-slate-500">Bangalore, IN</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
