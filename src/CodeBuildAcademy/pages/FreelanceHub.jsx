import React from 'react';
import { Zap, Users, Briefcase, TrendingUp, DollarSign, ShieldCheck } from 'lucide-react';

export default function FreelanceHub() {
    return (
        <div className="bg-white min-h-screen pb-24">
            <section className="py-24 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                    <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                        Earn While You Learn
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-gray-900 tracking-tighter">Code & Build <br /><span className="text-blue-600 italic">Freelance Studio</span></h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                        Academy brings real clients, students work under senior mentor, and the revenue is shared.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Briefcase, title: 'Real Client Access', desc: 'Academy handles sales and client acquisition. You focus on building.' },
                            { icon: Users, prev: 'Under Mentorship', desc: 'Senior developer direct supervision ensures industry-standard delivery.' },
                            { icon: DollarSign, title: 'Revenue Sharing', desc: 'Work on paid modules and get your share as you build the project.' },
                            { icon: TrendingUp, title: 'Portfolio Power', desc: 'Not just code, real deployed apps with your name in the contributors.' },
                            { icon: ShieldCheck, title: 'Delivery Standard', desc: 'Learn how to meet deadlines and handle professional revisions.' },
                            { icon: Zap, title: 'Agency Mindset', desc: 'Learn how to scale from a solo freelancer to a tech studio.' }
                        ].map((item, idx) => (
                            <div key={idx} className="p-10 rounded-[3rem] border border-gray-100 hover:border-blue-600 hover:shadow-2xl transition-all space-y-6 group">
                                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">{item.title || item.prev}</h3>
                                <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gray-900 text-white rounded-[4rem]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 space-y-8">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Freelance Revenue <br /><span className="text-blue-500 underline decoration-4 underline-offset-8">Sharing Model</span></h2>
                            <p className="text-xl text-gray-400 font-medium leading-relaxed italic">
                                "Hum chahte hain ki aap course ki fees freelancing se hi recover kar lein."
                            </p>
                            <ul className="space-y-6">
                                {[
                                    'Fixed percentage based on contribution',
                                    'Bonus for meeting strict deadlines',
                                    'Monthly payouts for ongoing maintenance',
                                    'Direct referral commissions for new clients'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span className="font-bold text-gray-300 uppercase tracking-widest text-[10px]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 bg-white/5 border border-white/10 p-12 rounded-[3.5rem] backdrop-blur-xl">
                            <h3 className="text-2xl font-black mb-10 text-center uppercase tracking-widest">Studio Workflow</h3>
                            <div className="space-y-4">
                                {[
                                    { s: 'Phase 01', t: 'Client Requirement Analysis' },
                                    { s: 'Phase 02', t: 'Student Module Assignment' },
                                    { s: 'Phase 03', t: 'Code Review & Integration' },
                                    { s: 'Phase 04', t: 'Staging & Final Delivery' }
                                ].map((step, i) => (
                                    <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/10 group hover:bg-blue-600/20 transition-all cursor-default">
                                        <span className="text-[10px] font-black text-blue-500">{step.s}</span>
                                        <span className="font-bold text-sm text-gray-200">{step.t}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
