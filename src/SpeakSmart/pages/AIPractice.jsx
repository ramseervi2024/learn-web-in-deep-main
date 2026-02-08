import React, { useState } from 'react';
import { Mic, Square, RefreshCcw, ThumbsUp, Activity, Volume2 } from 'lucide-react';

const AIPractice = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [feedback, setFeedback] = useState(null);

    const startRecording = () => {
        setIsRecording(true);
        setFeedback(null);
        // Mocking recording time
        setTimeout(() => {
            // Automatic stop after 3 seconds for demo
        }, 3000);
    };

    const stopRecording = () => {
        setIsRecording(false);
        // Mocking AI feedback
        setFeedback({
            fluency: "Good (75%)",
            confidence: "High (85%)",
            pronunciation: "Improve 'the' sound",
            speed: "Perfect (120 wpm)"
        });
    };

    return (
        <div className="bg-white min-h-screen py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-blue-900 mb-6">AI Speaking Partner</h1>
                <p className="text-xl text-gray-600 mb-12">
                    Ab kisi insaan ki zaroorat nahi! Click the mic and start talking.
                    Our AI will tell you how to improve.
                </p>

                <div className="bg-blue-50 border-2 border-dashed border-blue-200 rounded-3xl p-12 mb-12 flex flex-col items-center shadow-inner">
                    <div className={`relative mb-8 ${isRecording ? 'animate-pulse' : ''}`}>
                        <button
                            onClick={isRecording ? stopRecording : startRecording}
                            className={`w-32 h-32 rounded-full flex items-center justify-center transition shadow-2xl ${isRecording ? 'bg-red-500 scale-110' : 'bg-blue-600 hover:bg-blue-700'
                                }`}
                        >
                            {isRecording ? <Square fill="white" size={40} className="text-white" /> : <Mic size={48} className="text-white" />}
                        </button>
                        {isRecording && (
                            <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-red-400 animate-ping opacity-75"></div>
                        )}
                    </div>

                    <h2 className="text-2xl font-bold text-blue-800 mb-2">
                        {isRecording ? "Listening... Bolo aap, hum sun rahe hain!" : "Click the mic to speak"}
                    </h2>
                    <p className="text-gray-500 italic">"Hello, my name is Rahul and I want to improve my English."</p>
                </div>

                {feedback && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
                        {[
                            { label: "Fluency", value: feedback.fluency, icon: <Activity className="text-blue-500" /> },
                            { label: "Confidence", value: feedback.confidence, icon: <ThumbsUp className="text-green-500" /> },
                            { label: "Pronunciation", value: feedback.pronunciation, icon: <Volume2 className="text-orange-500" /> },
                            { label: "Speed", value: feedback.speed, icon: <RefreshCcw className="text-purple-500" /> }
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-white border border-gray-100 shadow-lg p-6 rounded-2xl flex items-center gap-4 text-left">
                                <div className="bg-gray-50 p-4 rounded-xl">{stat.icon}</div>
                                <div>
                                    <h4 className="text-gray-500 text-sm font-bold uppercase">{stat.label}</h4>
                                    <p className="text-xl font-bold text-gray-800">{stat.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-16 text-left bg-yellow-50 p-8 rounded-2xl border border-yellow-100">
                    <h3 className="font-bold text-xl mb-4 text-yellow-800">Tips for Today:</h3>
                    <ul className="space-y-3 text-yellow-700 font-medium">
                        <li>• Thoda dheere bolein (Speak a bit slowly)</li>
                        <li>• Take small pauses between sentences</li>
                        <li>• Keep your head straight while speaking</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AIPractice;
