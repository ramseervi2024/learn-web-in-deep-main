import React from "react";
import Section from "../components/Section";

const Story = () => {
    return (
        <Section id="story" className="text-white">
            <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Direct from Earth</h2>
                <p className="text-xl text-gray-400 italic font-serif">
                    "The secret isn't just in the oven, it's in the soil. We partner with local farmers who treat their land like family."
                </p>
                <div className="mt-12 h-1 w-24 bg-orange-600" />
            </div>
        </Section>
    );
};

export default Story;
