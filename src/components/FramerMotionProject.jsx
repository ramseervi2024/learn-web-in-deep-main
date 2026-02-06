import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Terminal, Cpu, Globe, Zap, Mail, Github, Twitter, Linkedin, ChevronDown } from 'lucide-react';

const NavItem = ({ children }) => (
    <motion.a
        href="#"
        whileHover={{ scale: 1.1, color: '#a78bfa' }}
        className="text-gray-300 transition-colors font-medium px-4 py-2"
    >
        {children}
    </motion.a>
);

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        whileHover={{ y: -5, scale: 1.02 }}
        className="bg-gray-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl group hover:border-purple-500/50 transition-colors"
    >
        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
            <Icon className="text-white w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-400 leading-relaxed font-light">{description}</p>
    </motion.div>
);

export default function FramerMotionProject() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className="min-h-screen bg-black selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden">
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 z-[100]"
                style={{ scaleX, transformOrigin: "0%" }}
            />

            {/* Floating Navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-8 py-4 bg-gray-900/60 backdrop-blur-2xl border border-white/10 rounded-full flex items-center gap-8 shadow-[0_0_50px_-12px_rgba(168,85,247,0.4)]"
            >
                <div className="hidden md:flex items-center gap-4">
                    <NavItem>Home</NavItem>
                    <NavItem>Services</NavItem>
                    <NavItem>Projects</NavItem>
                    <NavItem>Contact</NavItem>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-purple-600 px-6 py-2 rounded-full text-white font-semibold transition-all hover:bg-purple-500"
                >
                    Let's Talk
                </motion.button>
            </motion.nav>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.2),transparent_70%)]" />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
                </motion.div>

                <motion.div style={{ y: textY }} className="relative z-10 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-1.5 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm"
                    >
                        <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            Welcome to the future of animation
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter"
                    >
                        Design that <br />
                        <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent italic">
                            breathes.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="max-w-2xl mx-auto text-xl text-gray-400 font-light leading-relaxed mb-12"
                    >
                        Creating immersive digital experiences through fluid motion,
                        cutting-edge technology, and artistic vision.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-black rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl shadow-white/10"
                        >
                            Get Started
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/5 transition-all"
                        >
                            Watch Video
                        </motion.button>
                    </motion.div>
                </motion.div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
                >
                    <ChevronDown size={32} />
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="py-32 px-4 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl font-bold text-white mb-6"
                        >
                            Our Dynamic Solutions
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-gray-400 text-lg max-w-2xl mx-auto"
                        >
                            We combine artistic design with powerful animations to deliver
                            unmatched digital performance and user engagement.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Terminal}
                            title="Modern Tech"
                            description="Built with the latest frameworks like React 19 and Framer Motion for buttery smooth performance."
                            delay={0.1}
                        />
                        <FeatureCard
                            icon={Zap}
                            title="Hyper Fast"
                            description="Optimized for speed. Every animation is GPU accelerated and performs flawlessly on all devices."
                            delay={0.2}
                        />
                        <FeatureCard
                            icon={Cpu}
                            title="Custom Logic"
                            description="Tailored scroll behaviors and complex state management to create unique user journeys."
                            delay={0.3}
                        />
                        <FeatureCard
                            icon={Globe}
                            title="Worldwide Presence"
                            description="Accessible, responsive, and global designs that resonate with users everywhere."
                            delay={0.4}
                        />
                        <FeatureCard
                            icon={Mail}
                            title="Smart Integration"
                            description="Easily connect with your favorite tools and platforms using our robust API layer."
                            delay={0.5}
                        />
                        <FeatureCard
                            icon={Linkedin}
                            title="Future Ready"
                            description="Scalable architecture that grows with your business and evolving digital trends."
                            delay={0.6}
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center backdrop-blur-xl"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                        Ready to make some <br />
                        <span className="text-purple-400">magic happen?</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        Join 5,000+ creators who are building the next generation
                        of the web with Framer Motion and modern aesthetics.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl font-bold text-xl shadow-2xl shadow-purple-500/20 transition-all hover:brightness-110"
                    >
                        Start Your Journey
                    </motion.button>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="py-20 px-4 border-t border-white/5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-gray-500">
                    <div className="text-2xl font-bold text-white">
                        FramerMotion<span className="text-purple-500">Project</span>
                    </div>
                    <div className="flex gap-8">
                        <Twitter className="cursor-pointer hover:text-white transition-colors" />
                        <Github className="cursor-pointer hover:text-white transition-colors" />
                        <Linkedin className="cursor-pointer hover:text-white transition-colors" />
                    </div>
                    <p className="font-light">© 2026 FramerMotionProject. All rights reserved.</p>
                </div>
            </footer>
        </div >
    );
}