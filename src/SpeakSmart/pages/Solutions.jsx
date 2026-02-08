import React from 'react';
import { Lightbulb, CheckCircle, XCircle, MessageSquare, TrendingUp, HelpCircle } from 'lucide-react';

const SolutionCard = ({ solution }) => {
    return (
        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 mb-16 flex flex-col">
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-8 md:p-12 text-white">
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-yellow-400 p-3 rounded-2xl text-blue-900">
                        <Lightbulb size={28} />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest opacity-80 leading-none">Expert Solution</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{solution.problem}</h2>
                <p className="text-xl text-blue-100 italic leading-relaxed font-medium">"{solution.hindiProblem}"</p>
            </div>

            <div className="p-8 md:p-12 space-y-12">
                {/* One to One Talk Example */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <MessageSquare className="text-blue-600" /> One-to-One Talk Example
                    </h3>
                    <div className="bg-blue-50 p-8 rounded-3xl space-y-6">
                        <div className="flex gap-4">
                            <XCircle className="text-red-500 shrink-0 mt-1" />
                            <div>
                                <p className="font-bold text-red-600 text-sm uppercase mb-1">Common Mistake</p>
                                <p className="text-lg font-medium text-gray-700">"{solution.wrongTalk}"</p>
                            </div>
                        </div>
                        <div className="flex gap-4 pt-4 border-t border-blue-100">
                            <CheckCircle className="text-green-500 shrink-0 mt-1" />
                            <div>
                                <p className="font-bold text-green-600 text-sm uppercase mb-1">Expert Improvement</p>
                                <p className="text-lg font-bold text-blue-900">"{solution.correctTalk}"</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                            <HelpCircle className="text-blue-600" /> Why this happens?
                        </h4>
                        <p className="text-lg text-gray-600 leading-relaxed">{solution.reason}</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                            <TrendingUp className="text-green-600" /> Best Practice
                        </h4>
                        <p className="text-lg text-gray-600 leading-relaxed">{solution.practice}</p>
                    </div>
                </div>

                {/* Key Improvement */}
                <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
                    <p className="text-yellow-800 font-bold text-lg">💡 Quick Tip: <span className="font-normal">{solution.tip}</span></p>
                </div>
            </div>
        </div>
    );
};

const Solutions = () => {
    const expertSolutions = [
        {
            problem: "Fear of grammar while speaking",
            hindiProblem: "Kya mere saba words thik hain? Grammar galat toh nahi hogi?",
            wrongTalk: "I... go... market... yesterday... no, I wented... ummm...",
            correctTalk: "I went to the market yesterday. (Focus on message, not perfection!)",
            reason: "Students focus too much on 'rules' and forget that English is just a tool for communication.",
            practice: "Start with simple 3-word sentences. It's okay to make small mistakes as long as the other person understands you.",
            tip: "Speak 10% slower. It gives your brain time to choose the right words without panicking."
        },
        {
            problem: "Thinking in Hindi, then translating",
            hindiProblem: "Pehle dimaag mein Hindi sentence banata hoon, phir English mein translate karne mein der lagti hai.",
            wrongTalk: "[Long Silence] ... My name is Rahul... [Pause] ... I live in... [Pause]",
            correctTalk: "I live in Delhi. I like reading books. (Short, direct, no heavy translation!)",
            reason: "Translation takes 3x more brain power than direct speaking. It causes the 'English block'.",
            practice: "Start labeling things in your room in English. Instead of 'Pankha', say 'Fan'. Teach your brain to think in English nouns first.",
            tip: "Use filler words like 'Well...', 'Actually...', 'You see...' to bridge the gap while you think."
        },
        {
            problem: "Shy to speak in front of others",
            hindiProblem: "Akela bol leta hoon, par kisi ke saamne bolte hi gala sukh jaata hai.",
            wrongTalk: "[Whispering] Yes... no... okay...",
            correctTalk: "[Clear Voice] No problem, I can do that! (Voice modulation & Eye contact!)",
            reason: "Stage fear comes from the fear of judgment. You think people are laughing at your English.",
            practice: "Start speaking with people who won't judge you - children, or even your pet. Join a community of learners with the same level.",
            tip: "Stand straight. Body language sends a signal to your brain that you are confident."
        },
        {
            problem: "Small town identity fear",
            hindiProblem: "Mujhe lagta hai mera accent 'desi' hai, log mera mazaak udayenge.",
            wrongTalk: "I am coming from... [Trying to speak in fake US accent] ... New York style...",
            correctTalk: "I am from Bihar and I am proud of it. Let's talk about work. (Clarity > Accent!)",
            reason: "Accent doesn't matter as long as your pronunciation is clear. Most global CEOs have thick accents!",
            practice: "Focus on 'Neutral Accent'. Speak clearly, pronounce the last sounds of words like 'd' in 'bold' and 't' in 'smart'.",
            tip: "Listen to English news for 5 mins daily. Notice how they pronounce common words."
        }
    ];

    return (
        <div className="bg-blue-50 py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-20">
                    <span className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest mb-6 inline-block leading-none">Expert Solutions</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-6 leading-tight">
                        Real Problems, <span className="text-blue-600 underline">Best Solutions.</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Humne North India के हजारों स्टूडेंट्स के साथ काम किया है. ये रहे सबसे कॉमन प्रॉब्लम्स और उनके बेस्ट सलूशन्स.
                    </p>
                </div>

                {expertSolutions.map((solution, idx) => (
                    <SolutionCard key={idx} solution={solution} />
                ))}

                <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl text-center border border-blue-100">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Need a personalized solution?</h2>
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        Every student is different. Join a one-to-one counseling session with our experts.
                    </p>
                    <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-blue-700 transition shadow-xl transform hover:scale-105 active:scale-95 leading-none">
                        Book Your 1:1 Talk Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Solutions;
