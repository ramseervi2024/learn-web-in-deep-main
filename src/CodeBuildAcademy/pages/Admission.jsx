import React from 'react';
import { User, School, Phone, MapPin, BookMarked, Send, Sparkles } from 'lucide-react';

export default function Admission() {
    return (
        <div className="bg-white min-h-screen pt-20 pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    {/* Text Side */}
                    <div className="flex-1 space-y-10">
                        <div className="space-y-4">
                            <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-tight">Open for 2026 Batch</span>
                            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">Join the <br /><span className="text-blue-600 underline">Academy.</span></h1>
                        </div>

                        <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                            Apply today and start working on real industry projects from the first month. No prior experience needed, only a hunger to learn.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: Sparkles, title: 'Learn Modern Stack', desc: 'React, Node, AWS, & React Native.' },
                                { icon: BookMarked, title: 'Hands-on Practice', desc: 'Real projects, no boring slides.' }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6 items-start">
                                    <div className="bg-blue-50 p-4 rounded-2xl text-blue-600">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="flex-1 w-full max-w-xl">
                        <div className="bg-white border-2 border-gray-100 rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-blue-50">
                            <h3 className="text-3xl font-bold text-gray-900 mb-8">Registration Form</h3>

                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input type="text" placeholder="Your Name" className="w-full pl-14 pr-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 outline-none" />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                                        <div className="relative">
                                            <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input type="tel" placeholder="+91" className="w-full pl-14 pr-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 outline-none" />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-gray-700 ml-1">College/University</label>
                                        <div className="relative">
                                            <School className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input type="text" placeholder="Name of College" className="w-full pl-14 pr-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 outline-none" />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-gray-700 ml-1">City/Village</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input type="text" placeholder="Where are you from?" className="w-full pl-14 pr-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 outline-none" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Course Interested In</label>
                                    <div className="grid grid-cols-2 gap-4">
                                        {['Mobile App', 'Backend', 'Full Stack', 'Freelancing'].map((course) => (
                                            <label key={course} className="relative flex items-center p-4 rounded-xl border-2 border-gray-100 cursor-pointer hover:border-blue-600 has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50 transition-all">
                                                <input type="radio" name="course" className="hidden" />
                                                <span className="font-bold text-gray-600 select-none">{course}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <button type="submit" className="w-full bg-blue-600 text-white py-6 rounded-2xl font-bold text-xl hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-3">
                                    Submit Application <Send className="w-5 h-5" />
                                </button>

                                <p className="text-xs text-gray-500 text-center">By clicking submit, you agree to our terms of training.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
