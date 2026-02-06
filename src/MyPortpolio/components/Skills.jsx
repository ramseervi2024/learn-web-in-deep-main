import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'Frontend & Mobile',
        skills: ['React Native', 'React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap']
    },
    {
        title: 'Tools & Technologies',
        skills: ['REST API', 'Figma', 'Postman', 'GitHub', 'Firebase', 'Redux']
    },
    {
        title: 'Backend (Learning/Interests)',
        skills: ['Node.js', 'Express.js', 'MongoDB']
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
        <section id="skills" className="section-container">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-bold mb-4"
                >
                    Technical <span className="text-gradient">Proficiency</span>
                </motion.h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    A collection of technologies I've mastered and work with daily to build exceptional products.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass p-8 rounded-3xl"
                    >
                        <h3 className="text-xl font-bold mb-6 text-white">{category.title}</h3>
                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill) => (
                                <span key={skill} className="skill-badge">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
