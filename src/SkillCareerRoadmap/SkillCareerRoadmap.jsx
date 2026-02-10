import React, { useState } from 'react';
import roadmapData from "./roadmap";
import InterviewCrackRoadmap from "./InterviewCrackRoadmap";
import CareerPath from './CareerPath';

export default function SkillCareerRoadmap() {
    const [viewMode, setViewMode] = useState('career'); // 'career' or 'interview'

    // Check if data exists to avoid crash
    if (!roadmapData || !roadmapData.platform || !roadmapData.platform.domains) {
        return <div className="p-8">Loading or Data Error...</div>;
    }

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <header className="mb-10 text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{roadmapData.platform.name}</h1>
                <p className="text-xl text-gray-600 mb-6">{roadmapData.platform.tagline}</p>

                {/* View Switcher Toggles */}
                <div className="inline-flex bg-white p-1 rounded-xl shadow-sm border border-gray-200">
                    <button
                        onClick={() => setViewMode('career')}
                        className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 
                            ${viewMode === 'career' ? 'bg-blue-600 text-white shadow' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                        Career Path
                    </button>
                    <button
                        onClick={() => setViewMode('interview')}
                        className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 
                            ${viewMode === 'interview' ? 'bg-indigo-600 text-white shadow' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                        Interview Prep
                    </button>
                </div>
            </header>

            {viewMode === 'interview' ? (
                <InterviewCrackRoadmap />
            ) : (
                <CareerPath />
            )}
        </div>
    );
}