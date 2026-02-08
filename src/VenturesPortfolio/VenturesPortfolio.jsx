import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Store, Camera, Wrench, Shirt, Sprout, Home,
  Utensils, Map, Tent, Briefcase, GraduationCap, Code,
  ArrowRight, Mail, Phone, MapPin, Linkedin, X, Menu,
  ChevronRight, CheckCircle2, AlertCircle, TrendingUp, Users, Target,
  Zap, Globe, ShieldCheck, Trophy, BadgeDollarSign
} from 'lucide-react';
import { businesses } from './data';
import './VenturesPortfolio.css';

const IconMap = {
  Store, Camera, Wrench, Shirt, Sprout, Home,
  Utensils, Map, Tent, Briefcase, GraduationCap, Code
};

// Navbar Component
const Navbar = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Academy & Studio', id: 'academy' },
    { label: 'Services', id: 'services' },
    { label: 'Connect', id: 'connect' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] nav-glass">
      <div className="container h-20 flex items-center justify-between">
        <div
          className="text-2xl font-extrabold tracking-tighter cursor-pointer flex items-center gap-2"
          onClick={() => setActivePage('home')}
        >
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">R</div>
          <span>RAMESH <span className="text-blue-600">VENTURES</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`text-sm font-semibold transition-all duration-300 relative group ${activePage === item.id ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'
                }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${activePage === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
          <button
            onClick={() => setActivePage('connect')}
            className="btn-premium btn-premium-dark"
          >
            Connect <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white border-b border-slate-100 overflow-hidden md:hidden px-6 py-8"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setIsOpen(false);
                  }}
                  className={`text-xl font-bold text-left ${activePage === item.id ? 'text-blue-600' : 'text-slate-500'
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setActivePage('connect');
                  setIsOpen(false);
                }}
                className="btn-premium btn-premium-dark w-full justify-center"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Business Detail Component (Advanced Design)
const BusinessDetail = ({ business, onClose }) => {
  if (!business) return null;
  const Icon = IconMap[business.iconName] || Store;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] bg-white overflow-y-auto"
    >
      <header className="detail-header">
        <div className="header-accent-blur"></div>
        <div className="container relative">
          <button
            onClick={onClose}
            className="absolute -top-24 left-0 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all z-[1001]"
          >
            <ArrowRight size={24} className="rotate-180" />
          </button>

          <div className="max-w-4xl">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Icon size={40} className="text-blue-500" />
                <span className="tag-premium">{business.category}</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold mb-6">{business.name}</h1>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl font-medium">
                {business.shortDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="stats-grid">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="stat-card">
            <div className="flex items-center gap-3 text-slate-500 mb-2 font-bold text-xs uppercase tracking-widest">
              <BadgeDollarSign size={16} /> Investment Range
            </div>
            <p className="text-2xl font-extrabold text-slate-900">{business.investmentAmount}</p>
          </motion.div>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="stat-card">
            <div className="flex items-center gap-3 text-slate-500 mb-2 font-bold text-xs uppercase tracking-widest">
              <Trophy size={16} /> Est. Monthly Rev.
            </div>
            <p className="text-2xl font-extrabold text-blue-600">{business.monthlyIncome}</p>
          </motion.div>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="stat-card">
            <div className="flex items-center gap-3 text-slate-500 mb-2 font-bold text-xs uppercase tracking-widest">
              <Zap size={16} /> Break-even
            </div>
            <p className="text-2xl font-extrabold text-slate-900">{business.breakEvenPeriod}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-24">
          <div className="lg:col-span-7 space-y-16">
            <section>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Visionary Overview</h2>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                {business.detailedOverview}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-8">Executive Workflow</h2>
              <div className="space-y-6">
                {business.workflowSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-6 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex-shrink-0 flex items-center justify-center font-bold text-lg text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-lg text-slate-700 font-semibold pt-2">{step}</p>
                      <div className="h-px w-0 group-hover:w-full bg-slate-100 mt-4 transition-all duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
                <Target size={32} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Market Potential</h3>
                <p className="text-slate-600 leading-relaxed">{business.marketOpportunity}</p>
              </div>
              <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
                <Users size={32} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Core Audience</h3>
                <p className="text-slate-600 leading-relaxed">{business.targetAudience}</p>
              </div>
            </section>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="sticky top-32 space-y-10">
              <section className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 opacity-20 filter blur-3xl"></div>
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <BadgeDollarSign className="text-blue-400" /> Investment Blueprint
                </h2>
                <div className="space-y-6">
                  {business.investmentBreakdown.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-white/10 pb-4">
                      <span className="text-white/70 font-medium">{item.item}</span>
                      <span className="font-bold text-blue-400">{item.cost}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-white/50 text-xs uppercase font-bold tracking-widest mb-2">Projected Outcomes</p>
                  <p className="text-lg italic font-medium leading-relaxed">"{business.monthlyIncomeEstimate}"</p>
                </div>
              </section>

              <div className="grid grid-cols-1 gap-6">
                <div className="p-8 border border-slate-100 rounded-[2rem] bg-white hover:border-blue-200 transition-all">
                  <h4 className="font-bold flex items-center gap-2 mb-4">
                    <TrendingUp size={20} className="text-blue-600" /> Scalability Plan
                  </h4>
                  <p className="text-slate-600 text-sm font-medium">{business.scalabilityPlan}</p>
                </div>
                <div className="p-8 border border-slate-100 rounded-[2rem] bg-white hover:border-blue-200 transition-all">
                  <h4 className="font-bold flex items-center gap-2 mb-4">
                    <Globe size={20} className="text-blue-600" /> Expansion Strategy
                  </h4>
                  <p className="text-slate-600 text-sm font-medium">{business.expansionPlan}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="py-24 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-2">Vision by Ramesh Ventures</h2>
            <p className="text-slate-500 font-medium tracking-wide flex items-center gap-2">
              <ShieldCheck size={18} className="text-green-500" /> Institutional Grade Opportunities
            </p>
          </div>
          <button
            onClick={onClose}
            className="btn-premium btn-premium-dark px-12 py-5 text-lg"
          >
            Close Analysis
          </button>
        </footer>
      </div>
    </motion.div>
  );
};

// Home Component
const HomeView = ({ setActivePage, setSelectedBusiness }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    {/* Hero Section */}
    <section className="min-h-[80vh] flex items-center justify-center text-center overflow-hidden relative py-20">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full filter blur-[100px] opacity-40 animate-pulse"></div>
      <div className="container relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-2 px-6 rounded-full bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-[0.2em] mb-8">
            Private Portfolio • Ramesh Seervi
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tight">
            Building <span className="text-gradient">Tier-Elite</span> <br /> Ventures for Bharat
          </h1>
          <p className="text-xl md:text-3xl text-slate-500 mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
            12 institutional-grade businesses with 50L - 1Cr deployment scale. <br className="hidden md:block" />
            Digitizing regional markets with high-order execution.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button
              onClick={() => setActivePage('portfolio')}
              className="btn-premium btn-premium-dark text-lg px-12 py-5"
            >
              Explore Portfolio <ArrowRight size={20} />
            </button>
            <button
              onClick={() => setActivePage('connect')}
              className="btn-premium btn-premium-outline text-lg px-12 py-5"
            >
              Connect (Visionaries Only)
            </button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Founder Summary */}
    <section className="py-32 bg-slate-50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">10+ Years of Craft <br /> Now Building Legacy</h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
              "Formerly architecting global systems — now building localized powerhouses in my hometown. My mission is to bridge the gap between high-tech vision and rural execution."
            </p>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                <Users size={28} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Foundational Excellence</h4>
                <p className="text-sm text-slate-500 font-medium tracking-wide">Studio + Academy Ecosystem</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'Scale', val: '50L - 1Cr+', icon: BadgeDollarSign },
              { label: 'Expertise', val: '10+ Years', icon: Trophy },
              { label: 'Focus', val: 'India (Bharat)', icon: Globe },
              { label: 'Delivery', val: 'High Grade', icon: ShieldCheck }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <item.icon size={24} className="text-blue-600 mb-4" />
                <h5 className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-1">{item.label}</h5>
                <p className="text-xl font-bold text-slate-900">{item.val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Preview Cards */}
    <section className="py-32">
      <div className="container">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight">Institutional High-Tiers</h2>
          <button onClick={() => setActivePage('portfolio')} className="text-blue-600 font-bold flex items-center gap-2 group">
            Full Portfolio <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {businesses.slice(0, 4).map((biz) => {
            const Icon = IconMap[biz.iconName] || Store;
            return (
              <div
                key={biz.id}
                onClick={() => setSelectedBusiness(biz)}
                className="group cursor-pointer"
              >
                <div className="h-full p-8 border border-slate-100 rounded-[2rem] bg-white group-hover:border-blue-600 group-hover:-translate-y-2 transition-all duration-500">
                  <Icon size={32} className="text-slate-900 mb-6 group-hover:text-blue-600 transition-colors" />
                  <h3 className="font-bold text-xl mb-2">{biz.name}</h3>
                  <p className="text-sm text-slate-500 font-medium mb-6">{biz.shortDescription}</p>
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-all">
                    Analyze Details <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  </motion.div>
);

// Main App Component
export default function VenturesPortfolio() {
  const [activePage, setActivePage] = useState('home');
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage, selectedBusiness]);

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return <HomeView setActivePage={setActivePage} setSelectedBusiness={setSelectedBusiness} />;

      case 'portfolio':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container pb-32">
            <header className="mb-24">
              <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs">The Collective</span>
              <h1 className="text-5xl md:text-7xl font-black mt-6 tracking-tight">Enterprise Portfolio</h1>
              <p className="text-xl md:text-2xl text-slate-500 mt-6 max-w-3xl font-medium">12 high-CAPEX ventures designed for state-level dominance and massive regional impact.</p>
            </header>
            <div className="business-grid">
              {businesses.map((biz) => {
                const Icon = IconMap[biz.iconName] || Store;
                return (
                  <motion.div
                    key={biz.id}
                    className="business-card"
                    onClick={() => setSelectedBusiness(biz)}
                  >
                    <div className="card-icon-box">
                      <Icon size={28} />
                    </div>
                    <span className="text-[0.65rem] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{biz.category}</span>
                    <h3 className="text-2xl font-black text-slate-900 mt-1 mb-4">{biz.name}</h3>
                    <p className="text-slate-500 text-sm font-medium mb-8 flex-grow leading-relaxed">{biz.shortDescription}</p>
                    <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-900">{biz.investmentAmount}</span>
                      <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 transition-all">
                        <ChevronRight size={16} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        );

      case 'academy':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container pb-32">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                  <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs">Talent Hub</span>
                  <h1 className="text-5xl md:text-7xl font-black mt-6 leading-tight">Code & Build <br /> Mega-Campus</h1>
                  <p className="text-xl text-slate-600 mt-8 font-medium leading-relaxed">
                    The intellectual engine of Ramesh Ventures. A 20,000 sq.ft. residential ecosystem where the next generation of 'Bharat Developers' is born.
                  </p>
                  <div className="mt-12 space-y-8">
                    {[
                      { title: 'AI Specialized Labs', desc: 'Hardware-intensive labs for local AI-agent orchestration.', icon: Zap },
                      { title: 'Global Incubation', desc: 'Pushing code directly to international markets from day one.', icon: Globe },
                      { title: 'Project Pipeline', desc: 'Top students move directly into the Global Studio projects.', icon: TrendingUp }
                    ].map((f, i) => (
                      <div key={i} className="flex gap-6">
                        <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-slate-900">
                          <f.icon size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-xl">{f.title}</h4>
                          <p className="text-slate-500 font-medium">{f.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="w-full aspect-square bg-slate-900 rounded-[4rem] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-blue-600/30 to-transparent"></div>
                    <GraduationCap size={160} className="text-white relative z-10" strokeWidth={1} />
                    <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/10 backdrop-blur-xl rounded-[2.5rem] border border-white/20">
                      <p className="text-white font-bold text-lg mb-2">Current Batch Capacity</p>
                      <p className="text-blue-400 font-black text-3xl">200+ Students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'services':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container pb-32">
            <header className="mb-24">
              <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8">Specialized <br /> Studio Services</h1>
              <p className="text-xl md:text-3xl text-slate-500 font-medium max-w-4xl leading-relaxed">High-fidelity engineering for international startups and institutional government projects.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { title: 'Enterprise Mobile', desc: 'React Native architecture for millions of users.', icon: Target },
                { title: 'Custom AI Agents', desc: 'Internal automation engines for complex B2B tasks.', icon: Zap },
                { title: 'Institutional Cloud', desc: 'AWS/GCP/Azure orchestration at massive scale.', icon: ShieldCheck },
                { title: 'High-Latency Web', desc: 'Performance-obsessed engineering for heavy traffic.', icon: Globe },
                { title: 'Product Spinoffs', desc: 'Venture-building as a service (VBaaS).', icon: Trophy },
                { title: 'Compliance Tech', desc: 'Fintech and Legal-tech digitization modules.', icon: BadgeDollarSign }
              ].map((s, idx) => (
                <div key={idx} className="p-10 border border-slate-100 rounded-[3rem] hover:bg-slate-900 group transition-all duration-500">
                  <s.icon size={36} className="text-blue-600 mb-8 group-hover:text-blue-400 group-hover:scale-110 transition-all" />
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{s.title}</h3>
                  <p className="text-slate-500 group-hover:text-slate-400 font-medium transition-colors">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-32 bg-slate-50 p-12 md:p-24 rounded-[5rem] border border-slate-100">
              <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                  <h2 className="text-4xl font-extrabold mb-8 tracking-tight">Requirement Analysis</h2>
                  <p className="text-lg text-slate-600 mb-8 font-medium italic">"We select only 2 high-order projects per month to ensure architectural perfection."</p>
                  <ul className="space-y-6">
                    <li className="flex items-center gap-4 text-slate-900 font-bold">
                      <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white"><CheckCircle2 size={12} /></span>
                      Project Scoping in 48h
                    </li>
                    <li className="flex items-center gap-4 text-slate-900 font-bold">
                      <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white"><CheckCircle2 size={12} /></span>
                      Direct Architect Support
                    </li>
                    <li className="flex items-center gap-4 text-slate-900 font-bold">
                      <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white"><CheckCircle2 size={12} /></span>
                      IP Protection Guaranteed
                    </li>
                  </ul>
                </div>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input className="form-input-premium" type="text" placeholder="Principal Name" />
                  <input className="form-input-premium" type="email" placeholder="Business Email" />
                  <select className="form-input-premium">
                    <option>Engagement: Enterprise Studio</option>
                    <option>Engagement: Venture Partnership</option>
                    <option>Engagement: Academy Hire</option>
                  </select>
                  <textarea className="form-input-premium h-40" placeholder="Describe the deployment scale and vision..."></textarea>
                  <button className="btn-premium btn-premium-dark w-full py-5 text-lg justify-center mt-4">Initiate Discussion</button>
                </form>
              </div>
            </div>
          </motion.div>
        );

      case 'connect':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container pb-32 min-h-[60vh] flex items-center justify-center">
            <div className="max-w-3xl w-full text-center">
              <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tight">Align Visions</h1>
              <div className="p-12 md:p-20 bg-slate-900 text-white rounded-[4rem] mb-16 shadow-2xl relative overflow-hidden">
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-600 opacity-20 filter blur-[100px]"></div>
                <p className="text-2xl md:text-3xl font-medium leading-relaxed italic relative z-10">
                  "We are not seeking capital. We are seeking architectural and market alignment. If your vision matches our deployment scale, we welcome high-level conversations."
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                {[
                  { label: 'Network', value: 'hello@ramesh.ventures', icon: Mail },
                  { label: 'Direct', value: '+91 XXXX-XXXXXX', icon: Phone },
                  { label: 'Hub', value: 'Bharat', icon: MapPin },
                  { label: 'Social', value: 'Ramesh Seervi', icon: Linkedin }
                ].map((c, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-4 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                      <c.icon size={24} />
                    </div>
                    <p className="text-xs font-black uppercase text-slate-400 tracking-widest mb-1">{c.label}</p>
                    <p className="font-bold text-slate-900 text-sm">{c.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="ventures-portfolio bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main>
        <AnimatePresence mode="wait">
          <motion.div key={activePage}>
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="py-24 border-t border-slate-100 bg-slate-50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div className="max-w-sm">
              <h2 className="text-2xl font-black tracking-tighter mb-6">RAMESH VENTURES</h2>
              <p className="text-slate-500 font-medium leading-relaxed">
                Institutional-grade infrastructure building for the next decade of India's growth.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-16">
              <div>
                <h5 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-6">Ecosystem</h5>
                <ul className="space-y-4 text-sm font-bold text-slate-900">
                  <li>Portfolio</li>
                  <li>Academy</li>
                  <li>Studio</li>
                </ul>
              </div>
              <div>
                <h5 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-6">Connect</h5>
                <ul className="space-y-4 text-sm font-bold text-slate-900">
                  <li>LinkedIn</li>
                  <li>Email</li>
                  <li>Privacy</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm font-bold text-slate-400 flex items-center gap-2">
              Ramesh Ventures — Building for <span className="bg-slate-900 text-white px-3 py-1 rounded-full text-[10px] tracking-widest">BHARAT</span>
            </p>
            <p className="text-slate-300 text-xs font-bold uppercase tracking-widest">© 2026 Institutional Vision</p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedBusiness && (
          <BusinessDetail
            business={selectedBusiness}
            onClose={() => setSelectedBusiness(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
