import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import FreelancerPortfolio1 from './FreelancerPortfolio1';
import FreelancerPortfolio2 from './FreelancerPortfolio2';
import FreelancerPortfolio3 from './FreelancerPortfolio3';
import FreelancerPortfolio4 from './FreelancerPortfolio4';
import FreelancerPortfolio5 from './FreelancerPortfolio5';
import FreelancerPortfolio6 from './FreelancerPortfolio6';
import FreelancerPortfolio7 from './FreelancerPortfolio7';
import FreelancerPortfolio8 from './FreelancerPortfolio8';
import FreelancerPortfolio9 from './FreelancerPortfolio9';
import FreelancerPortfolio10 from './FreelancerPortfolio10';
import FreelancerPortfolio11 from './FreelancerPortfolio11';
import FreelancerPortfolio12 from './FreelancerPortfolio12';
import FreelancerPortfolio13 from './FreelancerPortfolio13';
import FreelancerPortfolio14 from './FreelancerPortfolio14';
import FreelancerPortfolio15 from './FreelancerPortfolio15';
import FreelancerPortfolio16 from './FreelancerPortfolio16';
import FreelancerPortfolio17 from './FreelancerPortfolio17';
import FreelancerPortfolio18 from './FreelancerPortfolio18';
import FreelancerPortfolio19 from './FreelancerPortfolio19';
import FreelancerPortfolio20 from './FreelancerPortfolio20';
import FreelancerPortfolio21 from './FreelancerPortfolio21';
import FreelancerPortfolio22 from './FreelancerPortfolio22';
import FreelancerPortfolio23 from './FreelancerPortfolio23';
import FreelancerPortfolio24 from './FreelancerPortfolio24';
import FreelancerPortfolio25 from './FreelancerPortfolio25';
import FreelancerPortfolio26 from './FreelancerPortfolio26';
import FreelancerPortfolio27 from './FreelancerPortfolio27';
import FreelancerPortfolio28 from './FreelancerPortfolio28';

function FreelancerPortfolioDirectory() {
    const FreelancerPortfolios = [
        { id: 1, title: 'Remote Clean', desc: 'Minimalist, content-focused design for remote devs.' },
        { id: 2, title: 'Dark Mode Pro', desc: 'Sleek dark theme for individual contractors.' },
        { id: 3, title: 'Creative Studio', desc: 'Bold typography for high-end creative freelancers.' },
        { id: 4, title: 'Photography Focus', desc: 'Image-heavy layout for freelance visual artists.' },
        { id: 5, title: 'Tech StartUp', desc: 'Professional, trustworthy design for SaaS freelancers.' },
        { id: 6, title: 'Bento Grid', desc: 'Trendy grid-based layout for quick skill access.' },
        { id: 7, title: 'Deep Space Remote', desc: 'Immersive, dark space-themed experience for global work.' },
        { id: 8, title: 'Cinematic 3D', desc: 'High-end, glassmorphic WebGL experience for top-tier experts.' },
        { id: 9, title: 'AI Assistant Style', desc: 'Neon glow UI with AI assistant style intro for AI devs.' },
        { id: 10, title: '3D Interactive', desc: 'WebGL models with scroll-triggered camera movement.' },
        { id: 11, title: 'Glassmorphism Pro', desc: 'Frosted cards with glowing borders and soft gradients.' },
        { id: 12, title: 'Storytelling Nomad', desc: 'Presentation-style sections with deep scroll narrative for digital nomads.' },
        { id: 13, title: 'Developer OS', desc: 'Dashboard UI with terminal and file explorer.' },
        { id: 14, title: 'Mobile App Style', desc: 'iOS/Android transitions with bottom navigation.' },
        { id: 15, title: 'Bento Grid v2', desc: 'Advanced grid with hover previews and dynamic stats.' },
        { id: 20, title: 'Nova Interface', desc: 'High-contrast stellar editorial layout.' },
        { id: 21, title: 'Code Matrix', desc: 'Digital rain & terminal-focused monochrome UI.' },
        { id: 22, title: 'Dev Nexus', desc: 'Node-based connection graphs & electric accents.' },
        { id: 23, title: 'Stack Horizon', desc: 'Isometric architecture & perspective-shifting layers.' },
        { id: 24, title: 'API Core', desc: 'Endpoint style patterns & high-fidelity service interfaces.' },
        { id: 25, title: 'Elite Studio', desc: 'Minimalist luxury & high-end editorial typography.' },
        { id: 26, title: 'Prime Digital', desc: 'High-energy agency aesthetic & dynamic overlays.' },
        { id: 27, title: 'Vertex Agency', desc: 'Geometric structural design & architectural grids.' },
        { id: 28, title: 'Apex Portfolio', desc: 'Pinnacle technical polish & cinematic solo reveals.' },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white p-8 md:p-12 font-sans selection:bg-purple-500/30">
            <div className="max-w-7xl mx-auto">
                <header className="mb-16 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-500">
                            Freelance & Remote Portfolios
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
                        Specialized layouts for individual contractors aiming for global remote roles and dollar-denominated income.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {FreelancerPortfolios.map((portfolio) => (
                        <Link
                            key={portfolio.id}
                            to={`${portfolio.id}`}
                            className="group relative flex flex-col justify-between p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                <span className="text-4xl font-black text-purple-500">{portfolio.id}</span>
                            </div>

                            <div className="z-10 relative">
                                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-500/20 group-hover:text-purple-400 text-slate-400 transition-colors">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.25b-5.25 21 5.25-5.25-21-5.25 21-13.25" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold mb-3 text-slate-100 group-hover:text-white transition-colors">{portfolio.title}</h2>
                                <p className="text-slate-400 text-sm leading-relaxed">{portfolio.desc}</p>
                            </div>

                            <div className="mt-8 flex items-center text-sm font-medium text-purple-400 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                View Freelance Portfolio
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
        to="/Profiles"
        className="fixed bottom-6 left-6 z-50 bg-slate-900/80 backdrop-blur-md border border-slate-700 text-white p-3 rounded-full hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-2xl flex items-center gap-2 group"
        title="Back to Profiles Hub"
    >
        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="hidden group-hover:block pr-2 font-medium text-sm whitespace-nowrap">Home</span>
    </Link>
);

export default function FreelancerPortfolio() {
    return (
        <Routes>
            <Route path="/" element={<FreelancerPortfolioDirectory />} />
            <Route path="1" element={<><BackButton /><FreelancerPortfolio1 /></>} />
            <Route path="2" element={<><BackButton /><FreelancerPortfolio2 /></>} />
            <Route path="3" element={<><BackButton /><FreelancerPortfolio3 /></>} />
            <Route path="4" element={<><BackButton /><FreelancerPortfolio4 /></>} />
            <Route path="5" element={<><BackButton /><FreelancerPortfolio5 /></>} />
            <Route path="6" element={<><BackButton /><FreelancerPortfolio6 /></>} />
            <Route path="7" element={<><BackButton /><FreelancerPortfolio7 /></>} />
            <Route path="8" element={<><BackButton /><FreelancerPortfolio8 /></>} />
            <Route path="9" element={<><BackButton /><FreelancerPortfolio9 /></>} />
            <Route path="10" element={<><BackButton /><FreelancerPortfolio10 /></>} />
            <Route path="11" element={<><BackButton /><FreelancerPortfolio11 /></>} />
            <Route path="12" element={<><BackButton /><FreelancerPortfolio12 /></>} />
            <Route path="13" element={<><BackButton /><FreelancerPortfolio13 /></>} />
            <Route path="14" element={<><BackButton /><FreelancerPortfolio14 /></>} />
            <Route path="15" element={<><BackButton /><FreelancerPortfolio15 /></>} />
            <Route path="16" element={<><BackButton /><FreelancerPortfolio16 /></>} />
            <Route path="17" element={<><BackButton /><FreelancerPortfolio17 /></>} />
            <Route path="18" element={<><BackButton /><FreelancerPortfolio18 /></>} />
            <Route path="19" element={<><BackButton /><FreelancerPortfolio19 /></>} />
            <Route path="20" element={<><BackButton /><FreelancerPortfolio20 /></>} />
            <Route path="21" element={<><BackButton /><FreelancerPortfolio21 /></>} />
            <Route path="22" element={<><BackButton /><FreelancerPortfolio22 /></>} />
            <Route path="23" element={<><BackButton /><FreelancerPortfolio23 /></>} />
            <Route path="24" element={<><BackButton /><FreelancerPortfolio24 /></>} />
            <Route path="25" element={<><BackButton /><FreelancerPortfolio25 /></>} />
            <Route path="26" element={<><BackButton /><FreelancerPortfolio26 /></>} />
            <Route path="27" element={<><BackButton /><FreelancerPortfolio27 /></>} />
            <Route path="28" element={<><BackButton /><FreelancerPortfolio28 /></>} />
        </Routes>
    );
}
