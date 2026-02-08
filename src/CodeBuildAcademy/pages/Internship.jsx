import { Award, GraduationCap, Briefcase, FileText, Linkedin, Github, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Internship() {
    return (
        <div className="bg-white min-h-screen pb-24">
            <section className="py-24 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                    <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                        Industry Verified Program
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-gray-900 tracking-tighter uppercase leading-[0.9]">Internship & <br /><span className="text-blue-600">Placement</span></h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
                        A rigorous 6-month program that transforms a student into a professional software engineer.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            { icon: Briefcase, title: 'Live Projects', desc: 'Work on assigned modules for active client projects with code reviews.' },
                            { icon: Award, title: 'Certificate', desc: 'Official internship completion certificate from Code & Build Studio.' },
                            { icon: Linkedin, title: 'Recommendations', desc: 'Personalized LinkedIn recommendation from our senior developer.' },
                            { icon: Github, title: 'GitHub Portfolio', desc: 'Every line of code you write adds value to your public profile.' },
                            { icon: FileText, title: 'Resume Building', desc: 'Resume revamp to highlight real-world tech stack and achievements.' },
                            { icon: GraduationCap, title: 'Final Placement', desc: 'Assistance in getting hired by our partner agencies or MNCs.' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-[3rem] border border-gray-100 hover:border-blue-600 transition-all group">
                                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-4">{item.title}</h3>
                                <p className="text-gray-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gray-900 text-white rounded-[4rem]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center space-y-8">
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">6-Month Transformation</h2>
                            <p className="text-lg text-blue-100 max-w-2xl mx-auto font-bold uppercase tracking-widest leading-loose">
                                We don't just teach modules, we build careers. Build, Deploy, Earn, and Repeat.
                            </p>
                            <div className="flex justify-center gap-6 mt-12 flex-wrap">
                                {['Live Dashboard access', 'Direct developer Slack', 'Code Review sessions', 'Mock HR Interviews'].map((t, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full border border-white/10">
                                        <CheckCircle2 className="w-4 h-4 text-white" />
                                        <span className="text-[10px] uppercase font-black tracking-widest">{t}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-12">
                                <Link to="/admission" className="inline-flex items-center gap-4 bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition-all shadow-2xl">
                                    Apply for Internship <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
