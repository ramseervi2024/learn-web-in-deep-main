import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto"
        >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full flex items-center justify-between md:gap-12 shadow-2xl">
                <div className="font-black text-2xl tracking-tighter text-white">SLICE</div>
                <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-gray-400">
                    <a href="#hero" className="hover:text-white transition-colors">Hero</a>
                    <a href="#about" className="hover:text-white transition-colors">About</a>
                    <a href="#menu" className="hover:text-white transition-colors">Menu</a>
                    <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                </div>
                <button className="bg-orange-500 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-orange-600 transition-all">
                    Book Table
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
