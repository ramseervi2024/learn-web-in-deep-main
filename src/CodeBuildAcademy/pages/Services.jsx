import React from 'react';
import { Smartphone, Globe, Layers, Cloud, Settings, LifeBuoy, ArrowRight, Check } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, desc }) => (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-blue-600 transition-all group">
        <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
            <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
);

export default function Services() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero */}
            <section className="py-24 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-balance">
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Let's Build Your <br /><span className="text-blue-600">Next Big Idea.</span></h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto italic">
                        "North India based, Global Standards ke apps aur websites."
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Services Grid */}
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ServiceCard
                                icon={Smartphone}
                                title="Mobile App Development"
                                desc="Android & iOS platforms ke liye high-performance apps."
                            />
                            <ServiceCard
                                icon={Globe}
                                title="Website Development"
                                desc="Fast, responsive aur modern websites jo Google par rank karein."
                            />
                            <ServiceCard
                                icon={Layers}
                                title="Backend APIs"
                                desc="Secure aur scalable server-side systems."
                            />
                            <ServiceCard
                                icon={Cloud}
                                title="AWS Deployment"
                                desc="Cloud setup aur server maintenance services."
                            />
                            <ServiceCard
                                icon={Settings}
                                title="SEO Optimization"
                                desc="Aapki digital presence ko search experts ke saath maximize karien."
                            />
                            <ServiceCard
                                icon={LifeBuoy}
                                title="Maintenance & Support"
                                desc="24/7 technical support aur regular updates."
                            />
                        </div>

                        {/* Form Column */}
                        <div className="bg-white rounded-[3rem] p-10 shadow-2xl shadow-blue-100 border border-gray-100 relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-gray-900 mb-8">Discuss Your Project</h3>
                                <form className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2 font-mono uppercase tracking-tighter">Your Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 transition-all outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2 font-mono uppercase tracking-tighter">Phone Number</label>
                                        <input type="tel" placeholder="+91 00000 00000" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 transition-all outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2 font-mono uppercase tracking-tighter">Project Type</label>
                                        <select className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 transition-all outline-none appearance-none">
                                            <option>Mobile App</option>
                                            <option>Website</option>
                                            <option>E-commerce</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2 font-mono uppercase tracking-tighter">Requirements</label>
                                        <textarea placeholder="Briefly describe what you need..." rows="4" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 transition-all outline-none resize-none"></textarea>
                                    </div>
                                    <button type="submit" className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-2">
                                        Send Quotation Request <ArrowRight className="w-5 h-5" />
                                    </button>
                                </form>
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-blue-50 w-32 h-32 rounded-full -z-0"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-16 text-center">Why local businesses trust us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            'Direct communication with lead developer',
                            'Cost-effective and high-quality build',
                            'Local support and maintenance'
                        ].map((text, i) => (
                            <div key={i} className="flex gap-4 items-center">
                                <div className="bg-white/20 p-2 rounded-lg">
                                    <Check className="w-6 h-6" />
                                </div>
                                <span className="text-lg font-medium">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
