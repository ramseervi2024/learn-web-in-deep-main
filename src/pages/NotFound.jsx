import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Ghost, Map, Compass } from 'lucide-react';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center relative overflow-hidden font-sans">
            {/* Immersive Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                
                {/* Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: Math.random() * 1000, x: Math.random() * 1000 }}
                        animate={{ 
                            opacity: [0.1, 0.3, 0.1],
                            y: [null, Math.random() * -100],
                            x: [null, (Math.random() - 0.5) * 50]
                        }}
                        transition={{ 
                            duration: Math.random() * 10 + 10, 
                            repeat: Infinity, 
                            ease: "linear" 
                        }}
                        className="absolute w-1 h-1 bg-white rounded-full"
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="relative mb-8">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ 
                                opacity: 1,
                                y: 0,
                                textShadow: [
                                    "0 0 20px rgba(59,130,246,0.5)",
                                    "0 0 60px rgba(59,130,246,0.8)",
                                    "0 0 20px rgba(59,130,246,0.5)"
                                ]
                            }}
                            transition={{ 
                                opacity: { duration: 1 },
                                y: { duration: 1 },
                                textShadow: { duration: 3, repeat: Infinity }
                            }}
                            className="text-[12rem] md:text-[22rem] font-black leading-none tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-b from-blue-400 via-white to-blue-600 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                        >
                            404
                        </motion.h1>
                        
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <motion.div
                                animate={{ y: [0, -25, 0], rotate: [0, 8, -8, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Ghost size={140} className="text-white/20 blur-[1px]" strokeWidth={1} />
                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-4">
                            Lost in <span className="text-blue-400">Digital Space</span>.
                        </h2>
                        <p className="text-lg text-slate-400 font-light leading-relaxed mb-12">
                            The coordinates you are looking for do not exist in our current nexus. 
                            It seems you've drifted beyond the known boundaries of this server.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button
                                onClick={() => navigate(-1)}
                                className="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all text-sm font-bold uppercase tracking-[0.2em]"
                            >
                                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                                Go Back
                            </button>
                            
                            <button
                                onClick={() => navigate('/')}
                                className="group flex items-center gap-3 px-8 py-4 bg-blue-600 rounded-full hover:bg-blue-500 transition-all text-sm font-bold uppercase tracking-[0.2em] shadow-xl shadow-blue-500/20"
                            >
                                <Home size={18} />
                                Return Home
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Status Bar */}
            <div className="absolute bottom-12 inset-x-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] z-10 opacity-50">
                <div className="flex items-center gap-4">
                    <Compass size={14} className="animate-spin-slow" />
                    <span>System Error: PAGE_NOT_FOUND</span>
                </div>
                <div className="flex items-center gap-8">
                    <span>Protocol: HTTP/3</span>
                    <span>Status: Disconnected</span>
                </div>
            </div>

            <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default NotFound;
