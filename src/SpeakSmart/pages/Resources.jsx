import React from 'react';
import { Download, FileText, PlayCircle, Clock, CheckCircle2 } from 'lucide-react';

const Resources = () => {
    const resources = [
        {
            type: "PDF Notes",
            title: "100 Daily Used Sentences (Hindi-English)",
            icon: <FileText className="text-red-500" />,
            size: "2.4 MB",
            color: "bg-red-50"
        },
        {
            type: "Practice Script",
            title: "Restaurant Conversation Practice Script",
            icon: <CheckCircle2 className="text-green-500" />,
            size: "1.1 MB",
            color: "bg-green-50"
        },
        {
            type: "Speaking Challenge",
            title: "10-Minute Morning Mirror Drill",
            icon: <Clock className="text-blue-500" />,
            size: "5 min audio",
            color: "bg-blue-50"
        },
        {
            type: "Audio Lesson",
            title: "The Art of Introduction (Hinglish)",
            icon: <PlayCircle className="text-purple-500" />,
            size: "12 min audio",
            color: "bg-purple-50"
        }
    ];

    return (
        <div className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Free Study Resources</h1>
                    <p className="text-xl text-gray-600">Download notes, scripts and listen to audio lessons anywhere.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {resources.map((item, idx) => (
                        <div key={idx} className={`${item.color} p-8 rounded-3xl border border-white shadow-sm flex items-center justify-between hover:shadow-md transition group`}>
                            <div className="flex items-center gap-6">
                                <div className="bg-white p-4 rounded-2xl shadow-sm group-hover:scale-110 transition">
                                    {item.icon}
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.type}</span>
                                    <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                                    <span className="text-sm text-gray-500">{item.size}</span>
                                </div>
                            </div>
                            <button className="bg-white p-3 rounded-full text-blue-600 shadow-sm hover:bg-blue-600 hover:text-white transition">
                                <Download size={24} />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-10 md:p-16 rounded-[3rem] text-white overflow-hidden relative">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-6">More coming every week!</h2>
                        <p className="text-xl opacity-90 mb-8 max-w-lg leading-relaxed">
                            Hum har hafte naye practice scripts aur audio lessons upload karte hain.
                            Keep checking this page for more free items.
                        </p>
                        <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition">
                            Subscribe for Updates
                        </button>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                </div>
            </div>
        </div>
    );
};

export default Resources;
