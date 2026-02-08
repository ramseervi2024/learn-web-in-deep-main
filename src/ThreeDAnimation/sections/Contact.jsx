import React from "react";
import Section from "../components/Section";

const Contact = () => {
    return (
        <Section id="contact" className="text-white">
            <div className="flex flex-col items-center text-center space-y-12">
                <h2 className="text-5xl md:text-7xl font-bold">Visit the Crust</h2>
                <div className="flex flex-col md:flex-row gap-12 text-lg uppercase tracking-widest text-gray-500">
                    <div>
                        <p className="text-white font-bold mb-2">Location</p>
                        <p>123 Pizza Lane, Naples</p>
                    </div>
                    <div>
                        <p className="text-white font-bold mb-2">Hours</p>
                        <p>Mon - Sun | 12pm - 11pm</p>
                    </div>
                    <div>
                        <p className="text-white font-bold mb-2">Social</p>
                        <p>@TheSliceOfficial</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
