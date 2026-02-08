import React from 'react';
import { BookOpen, Rocket, Share2, Briefcase, ArrowDown } from 'lucide-react';

const Step = ({ number, title, desc, icon: Icon, isLast }) => (
    <div className="flex flex-col items-center text-center max-w-sm mx-auto group">
        <div className="relative">
            <div className="w-24 h-24 rounded-[2rem] bg-white border-2 border-gray-100 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg group-hover:shadow-blue-200 group-hover:-translate-y-2">
                <Icon className="w-10 h-10" />
            </div>
            {!isLast && (
                <div className="hidden lg:block absolute top-12 -right-40 w-32 h-0.5 bg-gray-200">
                    <div className="absolute top-1/2 right-0 -mt-1.5 w-3 h-3 border-t-2 border-r-2 border-gray-300 rotate-45"></div>
                </div>
            )}
        </div>
        <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4">Step {number}</span>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
);

export default function ProjectTraining() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
                        Syllabus se bahar niklo, <br />
                        <span className="text-blue-600">Real Work Seekho.</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                        "Code & Build" ka matlab hai ki aap coding sirf screen par nahi, real life apps mein dekhenge.
                    </p>
                    <div className="flex justify-center">
                        <ArrowDown className="w-8 h-8 text-blue-600 animate-bounce" />
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
                        <Step
                            number="01"
                            title="Learn Basics"
                            desc="Pehle aap modern tech stack ke fundamentals seekhenge live coding sessions mein."
                            icon={BookOpen}
                        />
                        <Step
                            number="02"
                            title="Work on Live Project"
                            desc="Hamare real client projects par senior developer ki mentorhip mein kaam karein."
                            icon={Briefcase}
                        />
                        <Step
                            number="03"
                            title="Publish"
                            desc="Apni banayi hui websites aur apps ko Vercel, AWS aur Play Store par live karein."
                            icon={Rocket}
                        />
                        <Step
                            number="04"
                            title="Build Portfolio"
                            desc="Aapka portfolio ban gaya! Ab freelancing karein ya high-paying job ke liye apply karein."
                            icon={Share2}
                            isLast
                        />
                    </div>
                </div>
            </section>

            {/* Proof Section */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">"Agar aapne client ke project ko build aur publish kar diya, toh samajho aap senior dev bann gaye."</h2>
                            <p className="text-blue-400 font-bold text-xl">- Founder, Code & Build Academy</p>
                        </div>
                        <div className="flex-1 bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-xl">
                            <h3 className="text-2xl font-bold mb-8">What you get:</h3>
                            <ul className="space-y-6">
                                {['Direct Client Exposure', 'GitHub Profile Optimization', 'Resume that stands out', 'Freelance platform setup'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-gray-300">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
