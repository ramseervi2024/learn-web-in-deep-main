import React from 'react';
import { CheckCircle, ArrowRight, Play, Star, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-50 to-yellow-50 py-20 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-left space-y-6 z-10">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight">
                            Bina Darr, Bina Hichkichahat — <span className="text-blue-600 underline">English Bolo!</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 font-medium">
                            North India ke liye specially designed confidence & English coaching.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button
                                onClick={() => navigate('/courses')}
                                className="bg-blue-600 text-white px-8 py-4 rounded-xl text-xl font-bold shadow-xl hover:bg-blue-700 transition flex items-center justify-center gap-2"
                            >
                                Start Free Learning <ArrowRight size={22} />
                            </button>
                            <button
                                onClick={() => navigate('/resources')}
                                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl text-xl font-bold hover:bg-blue-50 transition"
                            >
                                Watch Demo
                            </button>
                        </div>
                        <div className="flex items-center gap-2 text-yellow-600 pt-2">
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={20} fill="currentColor" />)}
                            </div>
                            <span className="font-semibold">4.9/5 by 10,000+ Students</span>
                        </div>
                    </div>

                    <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
                        <div className="w-72 h-72 md:w-96 md:h-96 bg-yellow-400 rounded-full absolute -z-1 blur-3xl opacity-20"></div>
                        <img
                            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1000"
                            alt="Confident Student"
                            className="rounded-3xl shadow-2xl border-8 border-white w-full max-w-md object-cover aspect-square"
                        />
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
                        <p className="text-xl text-gray-600">Aapki apni language mein, aapka apna coaching.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Simple Hindi-English teaching", desc: "No complex grammar, just simple English through Hindi." },
                            { title: "Real-life conversations", desc: "Learn what to say at shops, doctors, or with strangers." },
                            { title: "Stage fear removal", desc: "Techniques to stop being scared of speaking in public." },
                            { title: "Daily speaking practice", desc: "Structured exercises to keep you consistent." },
                            { title: "AI speaking partner", desc: "Practice anytime with our friendly AI assistant." },
                            { title: "Confidence drills", desc: "Mindset training to remove 'sharm' and hesitation." }
                        ].map((feature, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-blue-50 border border-blue-100 hover:shadow-xl transition-shadow group">
                                <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
                                    <CheckCircle size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 text-lg">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Best Solutions Section */}
            <section className="py-20 px-6 bg-blue-900 text-white rounded-[3rem] mx-4 my-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 space-y-6">
                        <div className="bg-yellow-400 text-blue-900 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                            <Lightbulb size={32} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">Expert Solutions for Common Problems</h2>
                        <p className="text-xl text-blue-100 leading-relaxed font-medium">
                            Struggling with grammar? Thinking in Hindi? Fear of judged by others?
                            Humne in sabka solution examples ke sath banaya hai.
                        </p>
                        <button
                            onClick={() => navigate('/solutions')}
                            className="bg-yellow-400 text-blue-900 px-10 py-5 rounded-2xl text-xl font-bold shadow-xl hover:bg-yellow-300 transition-all transform hover:scale-105 active:scale-95 leading-none flex items-center gap-2"
                        >
                            See Best Solutions <ArrowRight size={22} />
                        </button>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            "Grammar Fear Removal",
                            "Direct English Thinking",
                            "Public Speaking Tips",
                            "1:1 Talk Examples"
                        ].map((tip, idx) => (
                            <div key={idx} className="bg-blue-800/50 p-6 rounded-2xl border border-blue-700/50 hover:bg-blue-800 transition">
                                <h4 className="font-bold text-lg mb-2 text-yellow-400">{idx + 1}. {tip}</h4>
                                <p className="text-sm text-blue-200">Real-life examples ke sath seekhein.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-20 px-6 bg-yellow-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Success Stories</h2>
                        <p className="text-xl text-gray-600">Students who changed their life with SpeakSmart India.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Rahul from Alwar", text: "Pehle main English sunke bhagta tha. Ab main bina darr ke interview de raha hoon!", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
                            { name: "Priya from Muzaffarnagar", text: "The mirror speaking technique helped me so much. People can't believe I'm from a village.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" },
                            { name: "Amit from Patna", text: "Daily practice scripts are amazing. Simple sentences but they make you look professional.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" }
                        ].map((story, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg border-b-4 border-blue-600">
                                <div className="flex items-center gap-4 mb-6">
                                    <img src={story.img} alt={story.name} className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400" />
                                    <div>
                                        <h4 className="font-bold text-lg">{story.name}</h4>
                                        <div className="flex text-yellow-500">
                                            {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-700 italic text-lg leading-relaxed italic block">"{story.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
