import React from 'react';

const ContentSection = ({ title, children }) => (
    <div className="mb-10">
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <div className="text-gray-300 leading-relaxed space-y-4">
            {children}
        </div>
    </div>
);

export default ContentSection;
