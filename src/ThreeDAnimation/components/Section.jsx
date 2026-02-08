import React from "react";
import { motion } from "framer-motion";

const Section = ({ children, className = "", id }) => {
    return (
        <section
            id={id}
            className={`min-h-screen flex items-center justify-center relative p-8 md:p-24 ${className}`}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl w-full z-10"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
