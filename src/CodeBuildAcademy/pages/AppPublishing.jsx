import React from 'react';
import { Smartphone, PackageCheck, AlertTriangle, ShieldAlert, Globe, ArrowDown, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function AppPublishing() {
    return (
        <div className="bg-white min-h-screen pb-24">
            <section className="py-24 bg-blue-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                    <div className="flex justify-center gap-2 mb-4">
                        <div className="bg-gray-900 text-white p-3 rounded-2xl"><Smartphone className="w-6 h-6" /></div>
                        <div className="bg-blue-600 text-white p-3 rounded-2xl"><Globe className="w-6 h-6" /></div>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-gray-900 tracking-tighter uppercase leading-[0.9]">App Publishing <br /><span className="text-blue-600">Lab</span></h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                        Student-led deployments. Handle Google Play Console & Apple App Store rejection issues like a pro.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: PackageCheck, title: 'Create Accounts', desc: 'Step-by-step guidance on creating developer accounts for Play & App Store.' },
                            { icon: Smartphone, title: 'Release Management', desc: 'Managing Alpha, Beta, and Production tracks efficiently.' },
                            { icon: ShieldAlert, title: 'Policy Support', desc: 'Learning how to comply with complex store policies and privacy guidelines.' },
                            { icon: AlertTriangle, title: 'Rejection Fixes', desc: 'Common rejection reasons aur unhe solve karne ka real experience.' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 hover:bg-white hover:border-blue-600 hover:shadow-2xl transition-all space-y-4 group">
                                <item.icon className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">{item.title}</h3>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-900 text-white rounded-[4rem] overflow-hidden p-12 md:p-20 relative">
                        <div className="absolute right-0 top-0 opacity-10 p-20 pointer-events-none">
                            <Smartphone className="w-96 h-96 transform rotate-12" />
                        </div>
                        <div className="relative z-10 max-w-2xl space-y-8">
                            <h2 className="text-4xl font-black tracking-tighter uppercase">From APK to Store Approval</h2>
                            <p className="text-xl text-gray-400 font-medium">
                                "Hum sirf app banana nahi, use duniya tak pahunchana sikhate hain."
                            </p>
                            <div className="space-y-6">
                                {[
                                    'Code signing & Key management',
                                    'Asset generation (Icon, Screenshots, Graphics)',
                                    'App Privacy Policy generation',
                                    'Handling Store reviewer feedback'
                                ].map((step, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="bg-blue-600 p-2 rounded-full ring-4 ring-blue-600/20 group-hover:ring-blue-600/40 transition-all">
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="font-black text-xs uppercase tracking-widest text-gray-300">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
