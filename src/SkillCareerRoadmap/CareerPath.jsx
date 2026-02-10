
import React, { useState } from 'react';
import roadmapData from "./roadmap";

export default function CareerPath() {

    // Check if data exists to avoid crash
    if (!roadmapData || !roadmapData.platform || !roadmapData.platform.domains) {
        return <div className="p-8">Loading or Data Error...</div>;
    }

    return (
        <div className="max-w-7xl mx-auto">
            {roadmapData.platform.domains.map((domain) => (
                <div key={domain.id} className="mb-16 bg-white rounded-xl shadow-sm p-8 border border-gray-200">
                    <div className="mb-8 border-b pb-4">
                        <h2 className="text-3xl font-bold text-gray-800">{domain.title}</h2>
                        <p className="text-gray-500 mt-2">{domain.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {domain.levels.map((level) => (
                            <div key={level.level} className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div className="bg-blue-600 p-4 text-white">
                                    <h3 className="text-xl font-bold">{level.level}</h3>
                                    <p className="text-blue-100 text-sm">{level.experience} Experience</p>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="mb-4">
                                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold uppercase tracking-wide">
                                            {level.salary_india}
                                        </span>
                                    </div>

                                    <p className="text-gray-700 italic mb-6 text-sm">"{level.goal || level.role}"</p>

                                    <div className="mb-6">
                                        <h4 className="font-bold text-gray-900 mb-2 border-b pb-1">Skills</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {level.skills.map((skill) => (
                                                <span key={skill} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium border border-gray-300">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {level.best_websites && (
                                        <div className="mt-auto pt-4 border-t border-gray-100">
                                            <h4 className="font-bold text-gray-900 mb-2 text-sm">Best Learning Resources</h4>
                                            <ul className="space-y-1">
                                                {level.best_websites.map((site) => (
                                                    <li key={site.name}>
                                                        <a
                                                            href={site.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1 hover:underline"
                                                        >
                                                            ➜ {site.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>

    );
}