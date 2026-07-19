import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'Frontend & Mobile',
        icon: '🎨',
        color: 'from-blue-500 to-purple-500',
        skills: ['React Native', 'React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux']
    },
    {
        title: 'Backend & Database',
        icon: '⚙️',
        color: 'from-emerald-500 to-teal-500',
        skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Authentication', 'Firebase']
    },
    {
        title: 'Tools & DevOps',
        icon: '🛠️',
        color: 'from-orange-500 to-red-500',
        skills: ['Git & GitHub', 'AWS', 'Postman', 'Figma', 'Payment Gateway Integration', 'Push Notifications']
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Skills = () => {
    return (
        <section id="skills" className="section-container relative">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="text-center mb-8 md:mb-16 relative">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                >
                    Technical <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">Proficiency</span>
                </motion.h2>
                <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
                    A comprehensive collection of technologies I've mastered and work with daily to build exceptional products.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 relative">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15, duration: 0.5 }}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl p-8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]"
                    >
                        {/* Gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                        
                        {/* Icon */}
                        <motion.div 
                            className="text-4xl mb-4"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {category.icon}
                        </motion.div>
                        
                        <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                            {category.title}
                        </h3>
                        
                        <div className="flex flex-wrap gap-2.5">
                            {category.skills.map((skill, skillIdx) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15 + skillIdx * 0.05 }}
                                    className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 rounded-full text-white/80 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
