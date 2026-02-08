import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-yellow-400 py-12 px-6 text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                    Start your confidence journey today!
                </h2>
                <p className="text-lg md:text-xl text-blue-800 mb-8 font-medium">
                    Join thousands of students who are speaking English without any fear.
                </p>
                <button
                    onClick={() => navigate('/contact')}
                    className="bg-blue-600 text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95"
                >
                    Get Started Now — It's Free!
                </button>
            </div>
        </section>
    );
};

export default CTASection;
