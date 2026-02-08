import React from "react";
import Section from "../components/Section";

const Hero = () => {
    return (
        <Section id="hero" className="text-white">
            <div className="flex flex-col items-center md:items-start space-y-6">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                    EXPERIENCE <br />
                    <span className="text-orange-500 drop-shadow-[0_0_15px_rgba(255,165,0,0.5)]">
                        THE SLICE
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 max-w-lg font-light">
                    A cinematic journey through the world's finest wood-fired masterpieces.
                    Scroll to explore the art of pizza.
                </p>
                <button className="px-8 py-4 bg-orange-600 rounded-full font-bold hover:bg-orange-500 transition-all transform hover:scale-105 shadow-lg shadow-orange-900/40">
                    Order Now
                </button>
            </div>
        </Section>
    );
};

export default Hero;
