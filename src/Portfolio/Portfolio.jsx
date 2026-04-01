import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Portfolio1 from './Portfolio1';
import Portfolio2 from './Portfolio2';
import Portfolio3 from './Portfolio3';
import Portfolio4 from './Portfolio4';
import Portfolio5 from './Portfolio5';
import Portfolio6 from './Portfolio6';
import Portfolio7 from './Portfolio7';
import Portfolio8 from './Portfolio8';

function PortfolioDirectory() {
    const portfolios = [
        { id: 1, title: 'Modern Clean', desc: 'Minimalist, content-focused design.' },
        { id: 2, title: 'Dark Mode Pro', desc: 'Sleek dark theme for developers.' },
        { id: 3, title: 'Creative Studio', desc: 'Bold typography and interactive elements.' },
        { id: 4, title: 'Photography Focus', desc: 'Image-heavy layout for visual artists.' },
        { id: 5, title: 'Tech Startup', desc: 'Professional, trustworthy design.' },
        { id: 6, title: 'Bento Grid', desc: 'Trendy grid-based layout for quick access.' },
        { id: 7, title: 'Deep Space', desc: 'Immersive, dark space-themed experience.' },
        { id: 8, title: 'Cinematic 3D', desc: 'High-end, glassmorphic WebGL experience.' },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white p-8 md:p-12 font-sans selection:bg-blue-500/30">
            <div className="max-w-7xl mx-auto">
                <header className="mb-16 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
                            My Portfolios
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
                        Explore 8 unique, high-end portfolio designs crafted with React, Tailwind CSS, and advanced animations.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {portfolios.map((portfolio) => (
                        <Link
                            key={portfolio.id}
                            to={`/portfolio/${portfolio.id}`}
                            className="group relative flex flex-col justify-between p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                <span className="text-4xl font-black text-blue-500">{portfolio.id}</span>
                            </div>

                            <div className="z-10 relative">
                                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500/20 group-hover:text-blue-400 text-slate-400 transition-colors">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold mb-3 text-slate-100 group-hover:text-white transition-colors">{portfolio.title}</h2>
                                <p className="text-slate-400 text-sm leading-relaxed">{portfolio.desc}</p>
                            </div>

                            <div className="mt-8 flex items-center text-sm font-medium text-blue-400 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                View Portfolio
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

const BackButton = () => (
    <Link
        to="/"
        className="fixed bottom-6 left-6 z-50 bg-slate-900/80 backdrop-blur-md border border-slate-700 text-white p-3 rounded-full hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-2xl flex items-center gap-2 group"
        title="Back to All Portfolios"
    >
        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="hidden group-hover:block pr-2 font-medium text-sm whitespace-nowrap">Home</span>
    </Link>
);

export default function Portfolio() {
    return (
        <Routes>
            <Route path="/" element={<PortfolioDirectory />} />
            <Route path="/portfolio/1" element={<><BackButton /><Portfolio1 /></>} />
            <Route path="/portfolio/2" element={<><BackButton /><Portfolio2 /></>} />
            <Route path="/portfolio/3" element={<><BackButton /><Portfolio3 /></>} />
            <Route path="/portfolio/4" element={<><BackButton /><Portfolio4 /></>} />
            <Route path="/portfolio/5" element={<><BackButton /><Portfolio5 /></>} />
            <Route path="/portfolio/6" element={<><BackButton /><Portfolio6 /></>} />
            <Route path="/portfolio/7" element={<><BackButton /><Portfolio7 /></>} />
            <Route path="/portfolio/8" element={<><BackButton /><Portfolio8 /></>} />
        </Routes>
    );
}
