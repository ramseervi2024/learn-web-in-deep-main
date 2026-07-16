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
        <section id="experience" className="section-container">
            <div className="mb-16">
                <SectionTitle
                    eyebrow="Experience"
                    title="Work Journey"
                    description="A timeline of roles and accomplishments built with reusable components to keep the portfolio consistent."
                    align="left"
                />
            </div>

            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
                    >
                        {/* Icon */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 glass text-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-transform group-hover:scale-125 duration-300">
                            <Briefcase size={18} />
                        </div>

                        {/* Content */}
                        <div className="w-[calc(100%-4rem)] md:w-[45%] glass p-6 rounded-3xl shadow-xl transition-all duration-300 hover:border-blue-500/30">
                            <div className="flex items-center justify-between mb-2">
                                <div className="font-bold text-white text-lg">{exp.role}</div>
                                <time className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold">
                                    <Calendar size={12} />
                                    {exp.period}
                                </time>
                            </div>
                            <div className="text-blue-400 font-medium text-sm mb-4">{exp.company}</div>
                            <ul className="space-y-2 list-disc list-inside text-sm text-slate-400">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
