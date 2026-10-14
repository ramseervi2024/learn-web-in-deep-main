import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight, Send, Linkedin } from 'lucide-react';
import { WhatsAppIcon } from './QuickContact';

const Contact = () => {
    const contactLinks = [
        {
            title: 'Email Me',
            subtitle: 'ramseervi4321@gmail.com',
            href: 'mailto:ramseervi4321@gmail.com',
            icon: null,
            target: '_self',
            hoverAccent: 'hover:border-blue-500/40 hover:bg-blue-500/5',
            arrowAccent: 'group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600',
        },
        {
            title: 'Call Me',
            subtitle: '+91 6360494477',
            href: 'tel:+916360494477',
            icon: null,
            target: '_self',
            hoverAccent: 'hover:border-emerald-500/40 hover:bg-emerald-500/5',
            arrowAccent: 'group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600',
        },
        {
            title: 'WhatsApp',
            subtitle: 'Message me instantly',
            href: 'https://wa.me/916360494477?text=Hi%20Ramesh%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you.',
            icon: 'whatsapp',
            target: '_blank',
            hoverAccent: 'hover:border-emerald-500/40 hover:bg-emerald-500/5',
            arrowAccent: 'group-hover:bg-[#25D366] group-hover:text-white group-hover:border-[#25D366]',
        },
        {
            title: 'LinkedIn',
            subtitle: 'Connect professionally',
            href: 'https://www.linkedin.com/in/ramesh-seervi-3976802b0/',
            icon: null,
            target: '_blank',
            hoverAccent: 'hover:border-purple-500/40 hover:bg-purple-500/5',
            arrowAccent: 'group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600',
        },
    ];

    return (
        <section id="contact" className="section-container mb-24 relative">
            {/* Ambient Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100vw,700px)] h-[min(100vw,700px)] bg-gradient-to-r from-violet-500/10 via-blue-500/10 to-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Main Contact Showcase Card matching reference design */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-3xl sm:rounded-[36px] border border-slate-200 dark:border-white/10 bg-gradient-to-br from-slate-50/90 via-white to-slate-100/90 dark:from-slate-900/80 dark:via-slate-900/60 dark:to-slate-800/80 backdrop-blur-2xl p-6 sm:p-10 md:p-14 lg:p-16 shadow-xl"
            >
                {/* Glow ring */}
                <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center relative">
                    {/* Left Column: Vision & Pitch */}
                    <div className="lg:col-span-6 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                            Get In Touch
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                            Ready to scale <br />
                            your <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 bg-clip-text text-transparent">vision?</span>
                        </h2>

                        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
                            Full Stack Developer specializing in Java Spring Boot, React.js, and React Native mobile applications. I partner with product teams and startups to build software that drives real results. Let's discuss your next project.
                        </p>

                        <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                            <span className="flex h-2.5 w-2.5 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            <span>Available for Full-time Roles & High-Impact Engineering Projects</span>
                        </div>
                    </div>

                    {/* Right Column: 4 Direct Contact Cards matching reference */}
                    <div className="lg:col-span-6 flex flex-col gap-4">
                        {contactLinks.map((item, idx) => (
                            <motion.a
                                key={item.title}
                                href={item.href}
                                target={item.target}
                                rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                whileHover={{ y: -3 }}
                                className={`group flex items-center justify-between p-4 sm:p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-800/50 backdrop-blur-md transition-all duration-300 ${item.hoverAccent} shadow-sm hover:shadow-md`}
                            >
                                <div className="flex items-center gap-4 min-w-0">
                                    {item.icon === 'whatsapp' ? (
                                        <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0 group-hover:scale-105 transition-transform">
                                            <WhatsAppIcon size={24} />
                                        </div>
                                    ) : null}

                                    <div className="min-w-0">
                                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 truncate">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>

                                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-700/50 flex items-center justify-center text-slate-700 dark:text-slate-200 shrink-0 transition-all duration-300 ${item.arrowAccent} group-hover:scale-105`}>
                                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Quick Contact Message Form */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 max-w-3xl mx-auto rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 backdrop-blur-xl p-6 sm:p-8 md:p-10"
            >
                <div className="text-center mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">Send a Direct Message</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Fill out this quick form or email <a href="mailto:ramseervi4321@gmail.com" className="text-blue-500 underline font-medium">ramseervi4321@gmail.com</a> directly.</p>
                </div>

                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:ramseervi4321@gmail.com?subject=Contact%20from%20Portfolio`; }}>
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                            <label className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">Your Name</label>
                            <input 
                                type="text" 
                                required
                                className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400 text-sm" 
                                placeholder="John Doe" 
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">Your Email</label>
                            <input 
                                type="email" 
                                required
                                className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400 text-sm" 
                                placeholder="john@example.com" 
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">Subject</label>
                        <input 
                            type="text" 
                            required
                            className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400 text-sm" 
                            placeholder="Full Stack Developer Opportunity / Project Inquiry" 
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">Message</label>
                        <textarea 
                            rows="4" 
                            required
                            className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all resize-none text-slate-900 dark:text-white placeholder-slate-400 text-sm" 
                            placeholder="Tell me about your role, backend/mobile architecture, or engineering project..."
                        ></textarea>
                    </div>

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/25 text-sm sm:text-base cursor-pointer"
                    >
                        Send Message <Send size={18} />
                    </motion.button>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;
