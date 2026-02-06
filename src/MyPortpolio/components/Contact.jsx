import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-container mb-20">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-bold mb-4"
                >
                    Let's <span className="text-gradient">Connect</span>
                </motion.h2>
                <p className="text-slate-400">Have a project in mind or just want to say hi?</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="glass p-8 rounded-3xl space-y-8">
                        <h3 className="text-2xl font-bold">Contact Information</h3>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-400">Email Me</div>
                                    <div className="text-white font-medium">ramseervi4321@gmail.com</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-400">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-400">Call Me</div>
                                    <div className="text-white font-medium">+91 6360494477</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-purple-500/10 rounded-2xl text-purple-400">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-400">Location</div>
                                    <div className="text-white font-medium">Electronic City, Bangalore, IN</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass p-8 rounded-3xl bg-blue-600/5 border-blue-500/10">
                        <h4 className="font-bold mb-2">Open for Opportunities</h4>
                        <p className="text-sm text-slate-400">Currently looking for new challenges and interesting projects to contribute to.</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass p-8 rounded-3xl"
                >
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Name</label>
                                <input type="text" className="w-full px-4 py-3 glass rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Email</label>
                                <input type="email" className="w-full px-4 py-3 glass rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">Subject</label>
                            <input type="text" className="w-full px-4 py-3 glass rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="Project Inquiry" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">Message</label>
                            <textarea rows="4" className="w-full px-4 py-3 glass rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none" placeholder="How can I help you?"></textarea>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
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
