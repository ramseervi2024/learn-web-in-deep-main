import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProfileHub = () => {
  const navigate = useNavigate();

  const profileTypes = [
    {
      id: 'personal',
      title: 'Personal Profile',
      purpose: 'Job / Resume / Individual Career',
      benefits: ['Stable job opportunities', 'Career growth', 'Company hiring'],
      whereToUse: 'LinkedIn, Naukri, Interviews, Resume',
      income: 'Fixed Salary (Monthly)',
      risk: 'Low',
      bestFor: 'Full-time job, Career stability',
      color: 'from-blue-500 to-cyan-400',
      path: '/Profiles/Personal'
    },
    {
      id: 'freelancer',
      title: 'Freelancer Profile',
      purpose: 'Individual remote work / contract',
      benefits: ['Remote jobs', 'Dollar income', 'Flexible work'],
      whereToUse: 'Upwork, Toptal, Contra, Remote jobs',
      income: 'Medium to High',
      risk: 'Medium',
      bestFor: 'Remote work, Side income, Fast growth',
      color: 'from-purple-500 to-pink-400',
      path: '/Profiles/Freelance'
    },
    {
      id: 'company',
      title: 'Company Profile',
      purpose: 'Agency / Business / Team Branding',
      benefits: ['Bigger projects', 'Multiple clients', 'Business branding'],
      whereToUse: 'Website, Clients, Proposals',
      income: 'High but variable',
      risk: 'Medium',
      bestFor: 'Long-term business growth',
      color: 'from-amber-500 to-orange-400',
      path: '/Profiles/Company'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <header className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-8 tracking-tighter"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
              Personal Brand Architecture
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            One Developer. Three Profiles. Infinite Opportunities. <br/>
            Strategically designed to maximize stability, remote income, and business scaling.
          </motion.p>
        </header>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {profileTypes.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:bg-slate-900 transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${profile.color} opacity-5 blur-3xl group-hover:opacity-20 transition-opacity`} />
              
              <div className="h-full flex flex-col">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${profile.color} flex items-center justify-center mb-8 shadow-2xl`}>
                   {profile.id === 'personal' && (
                     <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                     </svg>
                   )}
                   {profile.id === 'freelancer' && (
                     <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.25b-5.25 21 5.25-5.25-21-5.25 21-13.25" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                     </svg>
                   )}
                   {profile.id === 'company' && (
                     <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5" />
                     </svg>
                   )}
                </div>

                <h2 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-white transition-colors">{profile.title}</h2>
                <p className="text-slate-400 mb-8 font-medium">{profile.purpose}</p>

                <div className="space-y-4 mb-12 flex-grow">
                  <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/50">
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold block mb-1">Key Benefits</span>
                    <ul className="text-sm space-y-1">
                      {profile.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-300">
                          <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${profile.color}`} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/50">
                      <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold block mb-1">Potential</span>
                      <span className="text-sm text-slate-300 font-semibold">{profile.income}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/50">
                      <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold block mb-1">Risk</span>
                      <span className="text-sm text-slate-300 font-semibold">{profile.risk}</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => navigate(profile.path)}
                  className={`w-full py-4 rounded-2xl bg-gradient-to-br ${profile.color} text-white font-bold tracking-wide hover:shadow-2xl hover:shadow-${profile.id === 'personal' ? 'blue' : profile.id === 'freelancer' ? 'purple' : 'amber'}-500/20 active:scale-[0.98] transition-all`}
                >
                  Enter Section
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Insight Section */}
        <section className="relative overflow-hidden bg-slate-900 border border-slate-800 rounded-[3rem] p-12 md:p-20 text-center">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)]" />
            <h3 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">The Hybrid Strategy</h3>
            <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-12 relative z-10">
                "Having all three profiles creates income security and career flexibility. Maintain your personal identity for stability, freelance for remote dollar income, and scale your company for long-term wealth."
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                {[
                  { label: "Stability", val: "High" },
                  { label: "Remote Income", val: "Dollar" },
                  { label: "Business Scale", val: "Agencies" },
                  { label: "Future", val: "30 LPA+" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-2">{stat.label}</p>
                    <p className="text-3xl font-black text-white">{stat.val}</p>
                  </div>
                ))}
            </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileHub;
