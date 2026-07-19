import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

const experiences = [
    {
        role: 'React & React Native Developer',
        company: 'Imcrinox, Bengaluru',
        period: 'NOV 2022 - PRESENT',
        description: [
            'Developed and deployed 4+ React Native mobile applications for Android and iOS platforms.',
            'Integrated RESTful APIs using Axios, optimizing API performance.',
            'Implemented Firebase for authentication, push notifications, and real-time database features.',
            'Collaborated with designers via Figma to ensure pixel-perfect UI/UX consistency.'
        ]
    },
    {
        role: 'Web Developer Intern',
        company: 'Gridrnd, Bengaluru',
        period: 'FEB 2022 – OCT 2022',
        description: [
            'Implemented responsive web interfaces using React.js, Redux, HTML, CSS, and JavaScript.',
            'Learned and integrated RESTful APIs using Axios and built backend services with Node.js/Express.',
            'Improved UI/UX design for client websites through consistent collaboration.'
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section-container relative">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="mb-8 md:mb-16 relative">
                <SectionTitle
                    eyebrow="Experience"
                    title="Work Journey"
                    description="A timeline of professional roles and accomplishments showcasing my growth and expertise in full-stack development."
                    align="left"
                />
            </div>

            <div className="relative space-y-8 md:space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500/30 before:to-transparent">
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2, duration: 0.6 }}
                        className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
                    >
                        {/* Icon */}
                        <motion.div 
                            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 shadow-lg shadow-blue-500/20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"
                            whileHover={{ scale: 1.2, rotate: 180 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Briefcase size={20} />
                        </motion.div>

                        {/* Content */}
                        <motion.div 
                            className="w-[calc(100%-5rem)] md:w-[45%] relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl p-8 shadow-xl transition-all duration-500 hover:border-blue-500/30 hover:shadow-blue-500/20 hover:scale-[1.02]"
                            whileHover={{ y: -5 }}
                        >
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="relative">
                                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                                    <h3 className="font-bold text-white text-xl">{exp.role}</h3>
                                    <time className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-xs font-semibold">
                                        <Calendar size={12} />
                                        {exp.period}
                                    </time>
                                </div>
                                <div className="text-blue-400 font-semibold text-sm mb-4">{exp.company}</div>
                                <ul className="space-y-3">
                                    {exp.description.map((item, i) => (
                                        <motion.li 
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.2 + i * 0.1 }}
                                            className="flex items-start gap-3 text-sm text-slate-300"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
