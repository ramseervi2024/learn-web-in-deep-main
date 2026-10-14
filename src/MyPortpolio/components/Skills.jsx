import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'Java & Backend Development',
        icon: '☕',
        color: 'from-blue-500 to-indigo-500',
        skills: [
            'Java 17 / 21',
            'Spring Boot',
            'Spring MVC',
            'Spring Data JPA',
            'Hibernate ORM',
            'RESTful APIs',
            'Controller-Service-Repository',
            'Microservices',
            'Spring Cloud',
            'Kafka'
        ]
    },
    {
        title: 'Frontend Development',
        icon: '⚛️',
        color: 'from-cyan-500 to-blue-500',
        skills: [
            'React.js',
            'Redux Toolkit',
            'JavaScript (ES6+)',
            'TypeScript',
            'HTML5 & CSS3',
            'Tailwind CSS',
            'Bootstrap',
            'Responsive UI',
            'Reusable Components'
        ]
    },
    {
        title: 'Mobile Development',
        icon: '📱',
        color: 'from-emerald-500 to-teal-500',
        skills: [
            'React Native',
            'Expo',
            'Cross-Platform Apps (iOS/Android)',
            'Push Notifications',
            'Deep Linking',
            'Google Maps Integration',
            'Payment Gateways (Apple Pay, Mada)',
            'Native Device Features'
        ]
    },
    {
        title: 'Databases, Cloud & Tools',
        icon: '🛠️',
        color: 'from-purple-500 to-pink-500',
        skills: [
            'MySQL',
            'MongoDB',
            'Firebase',
            'PostgreSQL',
            'AWS (EC2, S3)',
            'Docker',
            'Kubernetes',
            'Git & GitHub',
            'Postman',
            'Android Studio & Xcode'
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="section-container relative">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100vw,600px)] h-[min(100vw,600px)] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="text-center mb-8 md:mb-16 relative">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                >
                    Technical <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">Proficiency</span>
                </motion.h2>
                <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
                    Full stack skills across enterprise Java Spring Boot backend services, modern React.js web interfaces, and production React Native mobile apps.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 relative">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 backdrop-blur-xl p-5 sm:p-6 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-500 hover:scale-[1.02] flex flex-col justify-between"
                    >
                        {/* Gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                        
                        <div>
                            {/* Icon */}
                            <motion.div 
                                className="text-3xl sm:text-4xl mb-3"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {category.icon}
                            </motion.div>
                            
                            <h3 className="text-lg sm:text-xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                                {category.title}
                            </h3>
                            
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {category.skills.map((skill, skillIdx) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 + skillIdx * 0.03 }}
                                        className="px-2.5 py-1 text-[11px] font-semibold bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-slate-700 dark:text-white/80 hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
