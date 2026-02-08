import { Mic, Users, MessageSquare, Presentation, Search, Star, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function Communication() {
    return (
        <div className="bg-white min-h-screen pb-24">
            <section className="py-24 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                    <span className="text-xs font-black text-blue-600 uppercase tracking-[0.3em]">Soft Skills Lab</span>
                    <h1 className="text-5xl md:text-8xl font-black text-gray-900 tracking-tighter uppercase leading-[0.9]">Confidence <br /><span className="text-blue-600">Training</span></h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                        Communication + Technical English in Hinglish. Crack MNC interviews and Global Freelance calls.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { icon: Mic, title: 'Public Speaking', desc: 'Bolne ki jhijhak khatam karein with regular technical presentations.' },
                            { icon: Search, title: 'Mock Interviews', desc: 'Real senior developers ke saath simulated interview sessions.' },
                            { icon: MessageCircle, title: 'Hinglish Mastery', desc: 'Learn how to explain your code in professional English-Hindi mix.' },
                            { icon: Presentation, title: 'Presentation Skills', desc: 'Zoom calls aur client meetings handle karne ka sahi tarika seekho.' }
                        ].map((item, idx) => (
                            <div key={idx} className="p-10 rounded-[3.5rem] bg-gray-50 border border-gray-100 hover:border-blue-600 hover:bg-white transition-all space-y-6 group">
                                <div className="bg-blue-600 text-white p-5 rounded-3xl w-fit group-hover:scale-110 transition-transform">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-lg text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gray-900 text-white rounded-[4rem]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex-1 space-y-12">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight uppercase">Crack the <br /><span className="text-blue-500 italic font-medium">Technical Call.</span></h2>
                            <div className="space-y-8">
                                {[
                                    'How to introduce yourself professionally',
                                    'Answering "Technical Gap" questions',
                                    'Explaining complex GitHub projects in simple words',
                                    'Live feedback on body language & eye contact'
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="bg-blue-600/20 text-blue-500 p-2 rounded-lg h-fit shrink-0">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <span className="text-lg font-bold text-gray-300 uppercase tracking-widest text-xs leading-[1.8]">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 w-full max-w-md">
                            <div className="aspect-[4/5] bg-white rounded-[4rem] p-12 flex flex-col justify-center gap-10 text-gray-900 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8">
                                    <Star className="w-12 h-12 text-yellow-400 fill-yellow-400 animate-pulse" />
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tighter leading-none">Confidence is <br /><span className="text-blue-600">50% Success</span></h3>
                                <p className="text-gray-500 font-medium leading-relaxed">
                                    Coding aane ke baad bhi agar aap use explain nahi kar pa rahe, toh woh skill adhuri hai. Hum use pura karte hain.
                                </p>
                                <div className="space-y-4">
                                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-600 w-[90%] animate-in slide-in-from-left duration-1000"></div>
                                    </div>
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Confidence Level Growth</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
