import React from 'react';

const SectionHeader = ({ title, subtitle, icon: Icon }) => (
    <div className="mb-10">
        <div className="flex items-center space-x-4 mb-3">
            <div className="p-3 bg-blue-600/10 rounded-xl border border-blue-600/20">
                <Icon className="text-blue-500" size={28} />
            </div>
            <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
        <p className="text-lg text-gray-400 leading-relaxed">{subtitle}</p>
    </div>
);

export default SectionHeader;
