import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CompanyPortfolio1 from './CompanyPortfolio1';
import CompanyPortfolio2 from './CompanyPortfolio2';
import CompanyPortfolio3 from './CompanyPortfolio3';
import CompanyPortfolio4 from './CompanyPortfolio4';
import CompanyPortfolio5 from './CompanyPortfolio5';
import CompanyPortfolio6 from './CompanyPortfolio6';
import CompanyPortfolio7 from './CompanyPortfolio7';
import CompanyPortfolio8 from './CompanyPortfolio8';
import CompanyPortfolio9 from './CompanyPortfolio9';
import CompanyPortfolio10 from './CompanyPortfolio10';
import CompanyPortfolio11 from './CompanyPortfolio11';
import CompanyPortfolio12 from './CompanyPortfolio12';
import CompanyPortfolio13 from './CompanyPortfolio13';
import CompanyPortfolio14 from './CompanyPortfolio14';
import CompanyPortfolio15 from './CompanyPortfolio15';
import CompanyPortfolio16 from './CompanyPortfolio16';
import CompanyPortfolio17 from './CompanyPortfolio17';
import CompanyPortfolio18 from './CompanyPortfolio18';
import CompanyPortfolio19 from './CompanyPortfolio19';
import CompanyPortfolio20 from './CompanyPortfolio20';
import CompanyPortfolio21 from './CompanyPortfolio21';
import CompanyPortfolio22 from './CompanyPortfolio22';
import CompanyPortfolio23 from './CompanyPortfolio23';
import CompanyPortfolio24 from './CompanyPortfolio24';
import CompanyPortfolio25 from './CompanyPortfolio25';
import CompanyPortfolio26 from './CompanyPortfolio26';
import CompanyPortfolio27 from './CompanyPortfolio27';
import CompanyPortfolio28 from './CompanyPortfolio28';

function CompanyPortfolioDirectory() {
    const CompanyPortfolios = [
        { id: 1, title: 'Enterprise Clean', desc: 'Minimalist, corporate-grade design.' },
        { id: 2, title: 'Agency Dark', desc: 'Sleek dark theme for software agencies.' },
        { id: 3, title: 'Strategic Studio', desc: 'Bold typography and interactive elements for consultancies.' },
        { id: 4, title: 'Brand Showcase', desc: 'Image-heavy layout for portfolio-driven businesses.' },
        { id: 5, title: 'Tech Venture', desc: 'Professional, trustworthy design for SaaS startups.' },
        { id: 6, title: 'Bento Agency', desc: 'Trendy grid-based layout for diverse service offerings.' },
        { id: 7, title: 'Deep Space Ops', desc: 'Immersive, dark space-themed experience for tech ops.' },
        { id: 8, title: 'Cinematic Agency', desc: 'High-end, glassmorphic WebGL experience for premium brands.' },
        { id: 9, title: 'AI Business', desc: 'Neon glow UI with AI assistant style intro for AI ventures.' },
        { id: 10, title: '3D Interactive', desc: 'WebGL models with scroll-triggered camera movement for product agencies.' },
        { id: 11, title: 'Glassmorphism Biz', desc: 'Frosted cards with glowing borders and soft gradients for modern startups.' },
        { id: 12, title: 'Brand Storytelling', desc: 'Presentation-style sections with deep scroll narrative for marketing agencies.' },
        { id: 13, title: 'Software Console', desc: 'Dashboard UI with terminal and file explorer for dev-focused teams.' },
        { id: 14, title: 'Mobile First App', desc: 'iOS/Android transitions with bottom navigation for app agencies.' },
        { id: 15, title: 'Bento Grid Pro', desc: 'Advanced grid with hover previews and dynamic business stats.' },
        { id: 16, title: 'Premium Scale', desc: 'Minimal black and gold theme with big typography for elite business.' },
        { id: 17, title: 'Neuro Grid', desc: 'Bioluminescent connections & neural nodes.' },
        { id: 18, title: 'Quantum UI', desc: 'Refractive glass & "entangled" hover states.' },
        { id: 19, title: 'Cyber Pulse', desc: 'Neon glitch & digital pulse animations.' },
        { id: 20, title: 'Nova Interface', desc: 'High-contrast stellar editorial layout.' },
        { id: 21, title: 'Code Matrix', desc: 'Digital rain & terminal-focused monochrome UI.' },
        { id: 22, title: 'Dev Nexus', desc: 'Node-based connection graphs & electric accents.' },
        { id: 23, title: 'Stack Horizon', desc: 'Isometric architecture & perspective-shifting layers.' },
        { id: 24, title: 'API Core', desc: 'Endpoint style patterns & high-fidelity agency interfaces.' },
        { id: 25, title: 'Elite Studio', desc: 'Minimalist luxury & high-end editorial typography.' },
        { id: 26, title: 'Prime Digital', desc: 'High-energy agency aesthetic & dynamic overlays.' },
        { id: 27, title: 'Vertex Agency', desc: 'Geometric structural design & architectural grids.' },
        { id: 28, title: 'Apex Portfolio', desc: 'Pinnacle technical polish & cinematic agency reveals.' },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white p-8 md:p-12 font-sans selection:bg-orange-500/30">
            <div className="max-w-7xl mx-auto">
                <header className="mb-16 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500">
                            Agency & Company Solutions
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
                        High-end business architectures designed for scaling, professional branding, and premium client acquisition.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {CompanyPortfolios.map((portfolio) => (
                        <Link
                            key={portfolio.id}
                            to={`${portfolio.id}`}
                            className="group relative flex flex-col justify-between p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/10 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                <span className="text-4xl font-black text-orange-500">{portfolio.id}</span>
                            </div>

                            <div className="z-10 relative">
                                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500/20 group-hover:text-orange-400 text-slate-400 transition-colors">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold mb-3 text-slate-100 group-hover:text-white transition-colors">{portfolio.title}</h2>
                                <p className="text-slate-400 text-sm leading-relaxed">{portfolio.desc}</p>
                            </div>

                            <div className="mt-8 flex items-center text-sm font-medium text-orange-400 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                View Business Layout
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

export default function CompanyPortfolio() {
    return (
        <Routes>
            <Route path="/" element={<CompanyPortfolioDirectory />} />
            <Route path="1" element={<><BackButton /><CompanyPortfolio1 /></>} />
            <Route path="2" element={<><BackButton /><CompanyPortfolio2 /></>} />
            <Route path="3" element={<><BackButton /><CompanyPortfolio3 /></>} />
            <Route path="4" element={<><BackButton /><CompanyPortfolio4 /></>} />
            <Route path="5" element={<><BackButton /><CompanyPortfolio5 /></>} />
            <Route path="6" element={<><BackButton /><CompanyPortfolio6 /></>} />
            <Route path="7" element={<><BackButton /><CompanyPortfolio7 /></>} />
            <Route path="8" element={<><BackButton /><CompanyPortfolio8 /></>} />
            <Route path="9" element={<><BackButton /><CompanyPortfolio9 /></>} />
            <Route path="10" element={<><BackButton /><CompanyPortfolio10 /></>} />
            <Route path="11" element={<><BackButton /><CompanyPortfolio11 /></>} />
            <Route path="12" element={<><BackButton /><CompanyPortfolio12 /></>} />
            <Route path="13" element={<><BackButton /><CompanyPortfolio13 /></>} />
            <Route path="14" element={<><BackButton /><CompanyPortfolio14 /></>} />
            <Route path="15" element={<><BackButton /><CompanyPortfolio15 /></>} />
            <Route path="16" element={<><BackButton /><CompanyPortfolio16 /></>} />
            <Route path="17" element={<><BackButton /><CompanyPortfolio17 /></>} />
            <Route path="18" element={<><BackButton /><CompanyPortfolio18 /></>} />
            <Route path="19" element={<><BackButton /><CompanyPortfolio19 /></>} />
            <Route path="20" element={<><BackButton /><CompanyPortfolio20 /></>} />
            <Route path="21" element={<><BackButton /><CompanyPortfolio21 /></>} />
            <Route path="22" element={<><BackButton /><CompanyPortfolio22 /></>} />
            <Route path="23" element={<><BackButton /><CompanyPortfolio23 /></>} />
            <Route path="24" element={<><BackButton /><CompanyPortfolio24 /></>} />
            <Route path="25" element={<><BackButton /><CompanyPortfolio25 /></>} />
            <Route path="26" element={<><BackButton /><CompanyPortfolio26 /></>} />
            <Route path="27" element={<><BackButton /><CompanyPortfolio27 /></>} />
            <Route path="28" element={<><BackButton /><CompanyPortfolio28 /></>} />
        </Routes>
    );
}
