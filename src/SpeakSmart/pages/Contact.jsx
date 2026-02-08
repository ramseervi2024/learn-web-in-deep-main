import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="py-32 px-6 flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
                <div className="bg-green-100 text-green-600 w-24 h-24 rounded-full flex items-center justify-center mb-8 animate-bounce">
                    <CheckCircle size={48} />
                </div>
                <h1 className="text-4xl font-bold mb-4">Shukriya! (Thank You)</h1>
                <p className="text-xl text-gray-600 mb-8">
                    Humne aapki details note kar li hain. Humari team aapko jaldi hi call karegi.
                </p>
                <button
                    onClick={() => window.location.href = '/'}
                    className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
                >
                    Go Back Home
                </button>
            </div>
        );
    }

    return (
        <div className="bg-blue-50 py-20 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Let's connect!</h1>
                    <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                        Aapke mann mein koi sawal hai? Ya phir free counseling session chahiye?
                        Humein batayein, hum aapke saath hain.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
                            <h4 className="font-bold text-gray-900 mb-1">Office Location</h4>
                            <p className="text-gray-600">North India Center, Main Road, New Delhi</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
                            <h4 className="font-bold text-gray-900 mb-1">Working Hours</h4>
                            <p className="text-gray-600">Morning 9:00 AM to Evening 8:00 PM</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Ready to start? Fill this form:</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Full Name</label>
                            <input
                                required
                                type="text"
                                placeholder="Aapka Naam"
                                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Phone Phone</label>
                                <input
                                    required
                                    type="tel"
                                    placeholder="98765-XXXXX"
                                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">City / Village</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Aapke Sheher ka Naam"
                                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Your English Level</label>
                            <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition">
                                <option>Bilkul Shuruat (Beginner)</option>
                                <option>Thodi bahut (Intermediate)</option>
                                <option>Bol leta hoon par darr lagta hai (Advanced)</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl shadow-xl hover:bg-blue-700 transition flex items-center justify-center gap-3 text-lg"
                        >
                            Send My Details <Send size={20} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
