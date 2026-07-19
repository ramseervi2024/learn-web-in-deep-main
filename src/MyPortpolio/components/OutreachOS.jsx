import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, ExternalLink, FileText, Video, Linkedin, Github, Mail, Phone, Calendar, DollarSign, Code, GraduationCap, MapPin, Briefcase, Target, Award, Zap, Users, TrendingUp, Building, Clock, Rocket, Shield, Heart, Lightbulb, Globe, Home, User, Search, Command, MessageSquare, Radio } from 'lucide-react';

const OutreachOS = () => {
    const [copied, setCopied] = useState(null);

    const quickAccess = [
        { id: 1, label: 'Resume URL', icon: FileText, value: 'https://drive.google.com/file/d/1SMA6ouALJ9uzKEm-zFy-EbtYbQ5_N4l2/view?usp=sharing', shortcut: 'Alt + 1' },
        { id: 2, label: 'Video Pitch URL', icon: Video, value: 'https://drive.google.com/file/d/1nlZ-unJ_i5oCUuqM9IO1x9ANcuHM-_XR/view?usp=drive_link', shortcut: 'Alt + 2' },
        { id: 3, label: 'LinkedIn Profile', icon: Linkedin, value: 'https://www.linkedin.com/in/ramesh-seervi-3976802b0', shortcut: 'Alt + 3' },
        { id: 4, label: 'GitHub Link', icon: Github, value: 'https://github.com/ramseervi2024', shortcut: 'Alt + 4' },
        { id: 5, label: 'Email Address', icon: Mail, value: 'ramseervi4321@gmail.com', shortcut: 'Alt + 5' },
        { id: 6, label: 'Phone Number', icon: Phone, value: '+91 6360494477', shortcut: 'Alt + 6' },
        { id: 7, label: 'Notice Period', icon: Calendar, value: '0 Days (Immediate Joiner)', shortcut: 'Alt + 7' },
        { id: 8, label: 'CTC / Expectations', icon: DollarSign, value: 'Current: 8.5 LPA | Expected: 12-16 LPA', shortcut: 'Alt + 8' },
        { id: 9, label: 'Skills', icon: Code, value: 'React Native, React.js, JavaScript, TypeScript, Node.js, MongoDB, Express.js, Redux, Firebase, AWS, Git', shortcut: 'Alt + 9' },
    ];

    const jobPortals = [
        { name: 'LinkedIn Radar', icon: Linkedin, color: 'from-blue-500 to-blue-600' },
        { name: 'Naukri Radar', icon: Briefcase, color: 'from-green-500 to-green-600' },
        { name: 'Instahyre Radar', icon: Users, color: 'from-purple-500 to-purple-600' },
        { name: 'Hirist Radar', icon: Building, color: 'from-orange-500 to-orange-600' },
        { name: 'Wellfound Radar', icon: Target, color: 'from-pink-500 to-pink-600' },
        { name: 'Indeed Radar', icon: Search, color: 'from-indigo-500 to-indigo-600' },
        { name: 'Glassdoor Radar', icon: Building, color: 'from-teal-500 to-teal-600' },
        { name: 'Cutshort Radar', icon: Zap, color: 'from-red-500 to-red-600' },
    ];

    const commandRoom = [
        { name: 'Pitch Tailor', icon: FileText, description: 'Customize pitches for different companies' },
        { name: 'Boolean Matrix', icon: Code, description: 'Advanced search string builder' },
        { name: 'Prep Buddy', icon: GraduationCap, description: 'Interview preparation assistant' },
        { name: 'ATS Matcher', icon: Shield, description: 'Resume optimization for ATS' },
        { name: 'Follow-up', icon: Clock, description: 'Automated follow-up reminders' },
        { name: 'Mock Sim', icon: Video, description: 'Mock interview simulator' },
    ];

    const interviewQA = [
        { question: 'Tell us about yourself', answer: 'Full Stack Developer with 3.7+ years of experience building scalable Web & Mobile applications using React Native, React.js, Node.js, and TypeScript. Specialized in event management, e-commerce, healthcare, and service-based platforms with real-time data handling and API integration.' },
        { question: 'Why are you looking for a change?', answer: 'Looking for a stable, growth-oriented role where I can contribute to impactful products and work with modern technologies while advancing my career as a Full Stack Developer.' },
        { question: 'Why do you want to join us?', answer: 'I want to join because of the opportunity to work on impactful products, modern tech stack, and clear growth path that aligns with my career goals.' },
        { question: 'Why should we hire you?', answer: 'Hands-on experience delivering live applications to real customers, immediate joiner, strong problem-solving skills, and end-to-end development expertise.' },
        { question: 'Biggest achievement?', answer: 'Delivered multiple live applications to real customers including e-commerce platforms, event booking systems, and healthcare platforms with positive user feedback.' },
        { question: 'Biggest challenge?', answer: 'Handling complex technical issues, optimizing performance under tight deadlines, and ensuring seamless user experience across different platforms.' },
        { question: 'Strengths', answer: 'Problem-solving, taking ownership of tasks, effective teamwork, quick learner, and attention to code quality.' },
        { question: 'Weaknesses', answer: 'Sometimes spend extra time refining code for quality, but working on balancing perfectionism with timely delivery.' },
        { question: 'Career goals', answer: 'To become a strong Full Stack Software Engineer building scalable, high-performance products and eventually take on technical leadership roles.' },
        { question: 'Preferred role', answer: 'Full Stack Developer, React Native Developer, or React.js Developer' },
        { question: 'Preferred location', answer: 'Bengaluru (Open to Remote and Hybrid opportunities)' },
        { question: 'Remote / Hybrid / Onsite?', answer: 'Open to Remote, Hybrid, and Onsite work arrangements' },
        { question: 'Have you led a team?', answer: 'No formal team lead experience, but have taken ownership of features and mentored junior developers.' },
        { question: 'Have you mentored juniors?', answer: 'Yes, I have assisted teammates with code reviews, technical guidance, and best practices.' },
        { question: 'What makes you different?', answer: 'Hands-on experience delivering end-to-end solutions, immediate availability, and strong adaptability to new technologies.' },
        { question: 'Current Responsibilities', answer: 'Develop and maintain mobile and web applications, implement new features, optimize performance, and collaborate with cross-functional teams.' },
    ];

    const copyToClipboard = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <section id="outreach-os" className="section-container relative">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100vw,800px)] h-[min(100vw,800px)] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-6 sm:mb-8 md:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                        Outreach <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">OS</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Quick access tools and resources for efficient job applications and networking
                    </p>
                </motion.div>

                {/* Quick Access Shortcuts */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-12 sm:mb-16"
                >
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-slate-900 dark:text-white flex items-center gap-2 sm:gap-3">
                        <Zap className="text-yellow-400" />
                        Quick Access Shortcuts
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        {quickAccess.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 backdrop-blur-xl p-3 sm:p-4 hover:border-blue-500/30 transition-all duration-300"
                                >
                                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <div className="p-1.5 sm:p-2 bg-blue-500/20 rounded-lg sm:rounded-xl text-blue-400">
                                                <Icon size={16} />
                                            </div>
                                            <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">{item.label}</span>
                                        </div>
                                        <span className="text-[10px] sm:text-xs text-slate-500 font-mono hidden sm:inline">{item.shortcut}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 truncate flex-1">{item.value}</p>
                                        <button
                                            onClick={() => copyToClipboard(item.value, item.id)}
                                            className="p-1 sm:p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-slate-200/80 dark:bg-white/10 transition-colors"
                                        >
                                            {copied === item.id ? (
                                                <Check size={14} className="text-green-400" />
                                            ) : (
                                                <Copy size={14} className="text-slate-500 dark:text-slate-400" />
                                            )}
                                        </button>
                                        {item.value.startsWith('http') && (
                                            <a
                                                href={item.value}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-1 sm:p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-slate-200/80 dark:bg-white/10 transition-colors"
                                            >
                                                <ExternalLink size={14} className="text-slate-500 dark:text-slate-400" />
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Job Portal Radars */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-12 sm:mb-16"
                >
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-slate-900 dark:text-white flex items-center gap-2 sm:gap-3">
                        <Radio className="text-blue-400" />
                        Job Portal Radars
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                        {jobPortals.map((portal, index) => {
                            const Icon = portal.icon;
                            return (
                                <motion.div
                                    key={portal.name}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 backdrop-blur-xl p-3 sm:p-4 md:p-6 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${portal.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                                    <div className="relative">
                                        <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${portal.color} text-slate-900 dark:text-white mb-2 sm:mb-3 group-hover:scale-110 transition-transform`}>
                                            <Icon size={20} />
                                        </div>
                                        <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">{portal.name}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Command Room */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-12 sm:mb-16"
                >
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-slate-900 dark:text-white flex items-center gap-2 sm:gap-3">
                        <Command className="text-purple-400" />
                        Command Room
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                        {commandRoom.map((tool, index) => {
                            const Icon = tool.icon;
                            return (
                                <motion.div
                                    key={tool.name}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 backdrop-blur-xl p-3 sm:p-4 md:p-6 hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative">
                                        <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-purple-500/20 text-purple-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                                            <Icon size={20} />
                                        </div>
                                        <h4 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 dark:text-white mb-1 sm:mb-2">{tool.name}</h4>
                                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">{tool.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Interview Q&A */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-slate-900 dark:text-white flex items-center gap-2 sm:gap-3">
                        <MessageSquare className="text-emerald-400" />
                        Interview Q&A
                    </h3>
                    <div className="space-y-2 sm:space-y-3 md:space-y-4">
                        {interviewQA.map((qa, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.03 }}
                                className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 backdrop-blur-xl hover:border-emerald-500/30 transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative p-3 sm:p-4 md:p-6">
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white flex-1">{qa.question}</h4>
                                        <button
                                            onClick={() => copyToClipboard(qa.answer, `qa-${index}`)}
                                            className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-slate-200/80 dark:bg-white/10 transition-colors shrink-0"
                                        >
                                            {copied === `qa-${index}` ? (
                                                <Check size={16} className="text-green-400" />
                                            ) : (
                                                <Copy size={16} className="text-slate-500 dark:text-slate-400" />
                                            )}
                                        </button>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{qa.answer}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OutreachOS;
