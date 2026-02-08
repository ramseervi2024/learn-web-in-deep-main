import React from 'react';
import { Book, Lock, ShieldCheck, MessageCircle, Briefcase } from 'lucide-react';

const CourseCard = ({ module }) => {
    return (
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-12">
            <div className={`bg-gradient-to-r ${module.color} p-8 text-white`}>
                <div className="flex items-center gap-4 mb-2">
                    {module.icon}
                    <span className="text-sm font-bold uppercase tracking-widest opacity-80">{module.tag}</span>
                </div>
                <h2 className="text-3xl font-bold">{module.title}</h2>
            </div>
            <div className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">What you will learn:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {module.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-lg text-gray-600">
                            <ShieldCheck className="text-green-500 mt-1 shrink-0" size={20} />
                            <span>{topic}</span>
                        </li>
                    ))}
                </ul>
                <button className="mt-8 w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition">
                    View Detailed Syllabus
                </button>
            </div>
        </div>
    );
};

const Courses = () => {
    const modules = [
        {
            title: "Module 1: Fear Removal & Confidence",
            tag: "The Foundation",
            icon: <Lock size={28} />,
            color: "from-orange-400 to-red-500",
            topics: [
                "Why we fear speaking English?",
                "Mindset training for village students",
                "Mirror speaking techniques",
                "Breathing techniques for anxiety",
                "Small town mindset block removal"
            ]
        },
        {
            title: "Module 2: Basic English Speaking",
            tag: "Daily Usage",
            icon: <Book size={28} />,
            color: "from-blue-400 to-indigo-600",
            topics: [
                "Daily used 'Magic Words'",
                "Simple sentence structures",
                "Common mistakes & how to avoid them",
                "A-Z Pronunciation practice",
                "English Listening habits"
            ]
        },
        {
            title: "Module 3: Real-Life Conversations",
            tag: "Practical Skills",
            icon: <MessageCircle size={28} />,
            color: "from-green-400 to-teal-600",
            topics: [
                "Shop & Market conversation",
                "Doctor visit vocabulary",
                "Job interview basics (Introduction)",
                "Talking on phone confidently",
                "Initiating talk with strangers"
            ]
        },
        {
            title: "Module 4: Personality & Body Language",
            tag: "Leadership",
            icon: <Briefcase size={28} />,
            color: "from-purple-400 to-pink-600",
            topics: [
                "Eye contact secrets",
                "The 'Super' Posture",
                "Voice tone & modulation",
                "Effective hand gestures",
                "Confidence drills for stage"
            ]
        }
    ];

    return (
        <div className="bg-blue-50 py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Learning Modules</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Step-by-step training designed to take you from a shy speaker to a confident communicator.
                    </p>
                </div>

                {modules.map((module, idx) => (
                    <CourseCard key={idx} module={module} />
                ))}
            </div>
        </div>
    );
};

export default Courses;
