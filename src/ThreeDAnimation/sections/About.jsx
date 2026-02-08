import React from "react";
import Section from "../components/Section";

const About = () => {
    return (
        <Section id="about" className="text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold">The Heritage</h2>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        Our story begins in the heart of Naples, where the tradition of
                        hand-stretched dough and sun-ripened tomatoes was born. Every
                        pizza we craft is a tribute to this ancient culinary art.
                    </p>
                    <div className="flex gap-4">
                        <div className="p-4 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10">
                            <span className="block text-3xl font-bold text-orange-400">100%</span>
                            <span className="text-xs uppercase tracking-widest text-gray-500">Organic</span>
                        </div>
                        <div className="p-4 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10">
                            <span className="block text-3xl font-bold text-orange-400">24h</span>
                            <span className="text-xs uppercase tracking-widest text-gray-500">Fermented</span>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block" />
            </div>
        </Section>
    );
};

export default About;
