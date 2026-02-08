import React from 'react';
import { Target, Heart, Award, Cpu } from 'lucide-react';

export default function About() {
    return (
        <div className="bg-white min-h-screen">
            {/* Intro Section */}
            <section className="py-24 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">Hamara Mission</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed italic">
                        "Founder is a 10-year experienced developer who left corporate job to empower small-town students with real coding skills and freelancing opportunities."
                    </p>
                </div>
            </section>

            {/* Founder Story */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="flex-1">
                            <div className="relative group">
                                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-blue-600 rounded-[3rem] -z-10 group-hover:rotate-3 transition-transform"></div>
                                <div className="bg-gray-200 aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl flex items-center justify-center text-gray-400 font-bold text-2xl">
                                    FOUNDER PHOTO
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 space-y-8">
                            <h2 className="text-4xl font-bold text-gray-900 underline decoration-blue-600 decoration-8 underline-offset-8">From Corporate to Coaching</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                10 saalo tak industry ke bade projects aur global clients ke saath kaam karne ke baad, maine realize kiya ki hamare hometown ke students ke paas talent toh hai, par industry-ready skills nahi.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Code & Build Academy sirf ek coaching center nahi hai, yeh ek Bridge hai jo students ko direct industry standards aur global opportunities se jodta hai. Hum yahan real client projects manage karte hain aur students ko usme involve karte hain.
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-8">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-blue-600">
                                        <Award className="w-5 h-5" />
                                        <span className="font-bold">10+ Years</span>
                                    </div>
                                    <p className="text-sm text-gray-500 italic">Industry Experience</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-blue-600">
                                        <Cpu className="w-5 h-5" />
                                        <span className="font-bold">50+ Projects</span>
                                    </div>
                                    <p className="text-sm text-gray-500 italic">Delivered Globally</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-24 bg-gray-900 text-white rounded-[4rem] mb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Values that Drive Us</h2>
                        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Target, title: 'Practical First', desc: 'Hum theory se pehle keyboard par focus karte hain. Jo seekho, woh turant build karo.' },
                            { icon: Heart, title: 'Hometown Proud', desc: 'Humare native town ke students ko global level par compete karne layak banana hai.' },
                            { icon: Award, title: 'Earn While Learn', desc: 'Freelance ki duniya se parichay karana hamara ek mukhya uddeshya hai.' }
                        ].map((val, i) => (
                            <div key={i} className="space-y-6 text-center md:text-left bg-white/5 p-8 rounded-3xl border border-white/10">
                                <val.icon className="w-10 h-10 text-blue-500 mx-auto md:mx-0" />
                                <h4 className="text-xl font-bold">{val.title}</h4>
                                <p className="text-gray-400 leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
