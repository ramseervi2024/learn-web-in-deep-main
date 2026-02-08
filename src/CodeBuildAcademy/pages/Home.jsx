import React from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight, Code, Server, Cloud, Smartphone, Globe, Search, Users,
    CheckCircle2, Sparkles, Zap, ShieldCheck, Rocket, Layout, BrainCircuit
} from 'lucide-react';

export default function Home() {
    const features = [
        { title: 'Live Project Training', icon: Code, desc: 'Real industry projects par senior dev ke saath kaam karein.' },
        { title: 'AI Coding Lab', icon: BrainCircuit, desc: 'ChatGPT, Copilot aur Cursor se 10x fast coding seekho.' },
        { title: 'Cloud & AWS Training', icon: Cloud, desc: 'Apps ko live server aur AWS par deploy karna seekho.' },
        { title: 'App Store Publishing', icon: Smartphone, desc: 'Android & iOS apps ko Play Store & App Store par live karein.' },
        { title: 'Freelancing Studio', icon: Zap, desc: 'Real clients ke projects handle karein aur earn karein.' },
        { title: 'Portfolio Builder', icon: Layout, desc: 'GitHub aur LinkedIn profile jo interviews clear karegi.' },
        { title: 'Confidence Training', icon: Users, desc: 'Technical English, communication aur mock interviews.' },
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 animate-in fade-in slide-in-from-bottom duration-700">
                        <Sparkles className="w-3 h-3" />
                        Not just a Class, It's a Software Studio
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-gray-900 mb-8 leading-[0.9] tracking-tighter">
                        Seekho. Build Karo. <br className="hidden md:block" />
                        <span className="text-blue-600">Publish Karo. Earn Karo.</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                        Real industry projects ke saath coding seekho — Apps banao, backend deploy karo, clients handle karo under senior mentorship.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/admission"
                            className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 flex items-center justify-center gap-3 group"
                        >
                            Join Academy <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/services"
                            className="bg-white text-gray-900 border-2 border-gray-100 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-3"
                        >
                            Give Your Project <Rocket className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 -mr-24 blur-3xl opacity-10 bg-blue-600 w-96 h-96 rounded-full -z-0"></div>
                <div className="absolute bottom-0 left-0 -ml-24 blur-3xl opacity-10 bg-blue-400 w-96 h-96 rounded-full -z-0"></div>
            </section>

            {/* Feature Grid */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter">Premium Features</h2>
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Everything you need to become a 10x Developer</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {features.map((feature, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-50 transition-all group relative overflow-hidden">
                                <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg font-black text-gray-900 mb-3 uppercase tracking-tight">{feature.title}</h3>
                                <p className="text-gray-500 font-medium text-sm leading-relaxed mb-6">{feature.desc}</p>
                                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 shadow-sm">
                                    <feature.icon className="w-20 h-20 -mr-6 -mt-6" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Model Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
                        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
                            <div className="flex-1 space-y-10">
                                <div className="space-y-4">
                                    <span className="text-blue-500 font-black text-xs uppercase tracking-[0.3em]">Our Success Model</span>
                                    <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
                                        Center should look like a <span className="text-blue-500 underline decoration-8 underline-offset-8">Software Company</span>, not a tuition class.
                                    </h2>
                                </div>
                                <p className="text-xl text-gray-400 font-medium leading-relaxed">
                                    Students senior developer ke mentorship mein real client projects par kaam karenge — websites, apps, dashboards, APIs. Hum aapko theory nahi, experience dete hain.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        'Direct interaction with clients',
                                        'Publishing on Play Store/App Store',
                                        'Build a professional portfolio while learning',
                                        'Revenue sharing in freelance projects'
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <ShieldCheck className="text-blue-500 w-6 h-6 shrink-0" />
                                            <span className="text-gray-200 font-bold text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link to="/training" className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all shadow-xl">
                                    See Training Process <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                            <div className="flex-1 w-full max-w-md lg:max-w-none">
                                <div className="relative">
                                    <div className="bg-blue-600/20 w-full h-full rounded-[3rem] absolute inset-4 -rotate-3 -z-10"></div>
                                    <div className="bg-white/5 border border-white/10 backdrop-blur-xl w-full aspect-square rounded-[3rem] p-8 flex flex-col justify-between group cursor-help">
                                        <div className="flex justify-between items-start">
                                            <div className="space-y-1">
                                                <div className="h-2 w-12 bg-blue-500 rounded-full"></div>
                                                <div className="h-2 w-24 bg-gray-700 rounded-full"></div>
                                            </div>
                                            <div className="bg-green-500/20 text-green-500 text-[10px] font-bold px-2 py-1 rounded-full">LIVE PREVIEW</div>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="text-center font-black text-3xl opacity-20 uppercase tracking-tighter">Real Client Project</div>
                                            <div className="grid grid-cols-3 gap-2">
                                                {[1, 2, 3, 4, 5, 6].map(i => (
                                                    <div key={i} className="h-12 bg-white/5 rounded-xl border border-white/5 animate-pulse" style={{ animationDelay: `${i * 100}ms` }}></div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-xs uppercase tracking-widest">Deploy in Progress</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: '10+ Years', desc: 'Global Industry Experience' },
                            { title: 'Project Based', desc: 'Real World Learning' },
                            { title: 'Freelance Hub', desc: 'Earn While You Learn' },
                            { title: 'Job Ready', desc: 'High Impact Portfolio' }
                        ].map((badge, i) => (
                            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 text-center space-y-2 hover:translate-y-[-8px] transition-all">
                                <div className="text-3xl font-black text-blue-600 tracking-tighter">{badge.title}</div>
                                <div className="text-xs font-black text-gray-400 uppercase tracking-widest">{badge.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
