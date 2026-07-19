import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-container mb-20 relative">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="text-center mb-8 md:mb-16 relative">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                >
                    Let's <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">Connect</span>
                </motion.h2>
                <p className="text-slate-300 text-base md:text-lg">Have a project in mind or just want to say hi?</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 relative">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl p-8 space-y-8">
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-50" />
                        
                        <div className="relative">
                            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

                            <div className="space-y-6">
                                <motion.a 
                                    href="mailto:ramseervi4321@gmail.com"
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl text-blue-400 group-hover:scale-110 transition-transform">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-400">Email Me</div>
                                        <div className="text-white font-medium group-hover:text-blue-300 transition-colors">ramseervi4321@gmail.com</div>
                                    </div>
                                </motion.a>

                                <motion.a 
                                    href="tel:+916360494477"
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="p-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-2xl text-emerald-400 group-hover:scale-110 transition-transform">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-400">Call Me</div>
                                        <div className="text-white font-medium group-hover:text-emerald-300 transition-colors">+91 6360494477</div>
                                    </div>
                                </motion.a>

                                <motion.div 
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl text-purple-400 group-hover:scale-110 transition-transform">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-400">Location</div>
                                        <div className="text-white font-medium group-hover:text-purple-300 transition-colors">Electronic City, Bangalore, IN</div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-xl p-8"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5" />
                        <div className="relative">
                            <h4 className="font-bold mb-2 text-lg">Open for Opportunities</h4>
                            <p className="text-sm text-slate-300">Currently looking for new challenges and interesting projects to contribute to. Available for full-time opportunities.</p>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl p-8"
                >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-30" />
                    
                    <form className="relative space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Name</label>
                                <input 
                                    type="text" 
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all text-white placeholder-slate-500" 
                                    placeholder="John Doe" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Email</label>
                                <input 
                                    type="email" 
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all text-white placeholder-slate-500" 
                                    placeholder="john@example.com" 
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Subject</label>
                            <input 
                                type="text" 
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all text-white placeholder-slate-500" 
                                placeholder="Project Inquiry" 
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Message</label>
                            <textarea 
                                rows="4" 
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all resize-none text-white placeholder-slate-500" 
                                placeholder="How can I help you?"
                            ></textarea>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/25"
                        >
                            Send Message <Send size={18} />
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
