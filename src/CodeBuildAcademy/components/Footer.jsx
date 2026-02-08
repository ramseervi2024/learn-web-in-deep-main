import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <Code2 className="text-white w-6 h-6" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-gray-900 leading-tight">Code & Build</span>
                                <span className="text-[10px] font-bold text-blue-600 tracking-[0.2em]">ACADEMY + STUDIO</span>
                            </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed font-medium text-sm">
                            Not just teaching — real industry training + live projects + freelancing + startup mindset.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
                                <a key={idx} href="#" className="bg-white p-2.5 rounded-full border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-all">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-gray-900 font-bold mb-6 text-[10px] uppercase tracking-[0.2em]">Explore Academy</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Courses', path: '/courses' },
                                { name: 'Freelance Hub', path: '/freelance' },
                                { name: 'Internship', path: '/internship' },
                                { name: 'Admission', path: '/admission' },
                            ].map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="text-gray-600 hover:text-blue-600 font-semibold transition-colors flex items-center gap-2 group text-xs uppercase tracking-widest">
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all font-bold" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Specialization Labs */}
                    <div>
                        <h4 className="text-gray-900 font-bold mb-6 text-[10px] uppercase tracking-[0.2em]">Specialization Labs</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'DevOps & Cloud', path: '/devops' },
                                { name: 'App Publishing', path: '/publishing' },
                                { name: 'Confidence Training', path: '/confidence' },
                                { name: 'Client Services', path: '/services' },
                            ].map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="text-gray-600 hover:text-blue-600 font-semibold transition-colors flex items-center gap-2 group text-xs uppercase tracking-widest">
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all font-bold" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter / CTA */}
                    <div className="bg-blue-600 rounded-[2rem] p-8 text-white relative overflow-hidden group shadow-2xl shadow-blue-100">
                        <div className="relative z-10">
                            <h4 className="font-black text-xl mb-4 leading-tight">Start Your <br />Industry Journey</h4>
                            <p className="text-blue-100 text-[10px] font-bold uppercase tracking-wider mb-6">
                                Join our studio and build your professional portfolio today.
                            </p>
                            <Link to="/admission" className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors text-xs uppercase tracking-widest shadow-xl">
                                Apply Now <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="absolute top-0 right-0 -mr-8 -mt-8 bg-blue-500 w-32 h-32 rounded-full opacity-20 group-hover:scale-110 transition-transform"></div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    <p>© 2026 Code & Build Academy + Studio. All rights reserved.</p>
                    <p>Join Code & Build Academy — Learn, Build & Earn.</p>
                </div>
            </div>
        </footer>
    );
}
