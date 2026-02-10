import React, { useState } from 'react';
import interviewData from './interview_data';
import roadmapData from './roadmap'; // To get domain titles/descriptions matching IDs

export default function InterviewCrackRoadmap() {
  const [selectedDomain, setSelectedDomain] = useState('frontend');

  // Get available domains from interviewData keys
  const availableDomains = Object.keys(interviewData);

  // Find domain details from roadmapData to display title/desc
  const domainInfo = roadmapData.platform.domains.find(d => d.id === selectedDomain);

  const currentInterviewData = interviewData[selectedDomain];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-2">Interview Crack Roadmap</h1>
        <p className="text-xl text-gray-600">Master your next tech interview from Junior to CTO</p>
      </header>

      {/* Domain Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {availableDomains.map(dom => {
          // Try to find a nice name from roadmapData, fallback to ID
          const domName = roadmapData.platform.domains.find(d => d.id === dom)?.title || dom.toUpperCase();
          return (
            <button
              key={dom}
              onClick={() => setSelectedDomain(dom)}
              className={`px-6 py-2 rounded-full font-semibold transition-all shadow-sm
                                ${selectedDomain === dom
                  ? 'bg-blue-600 text-white shadow-md scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}
                            `}
            >
              {domName}
            </button>
          );
        })}
      </div>

      {/* Selected Domain Content */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">{domainInfo?.title || selectedDomain} Interview Guide</h2>
          <p className="text-gray-500 mt-2">Curated questions and focus areas for every stage of your career.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentInterviewData?.map((levelData, idx) => (
            <div key={idx} className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-indigo-600 p-4 text-white">
                <h3 className="text-xl font-bold">{levelData.level}</h3>
                <p className="text-indigo-100 text-sm">{levelData.experience}</p>
              </div>

              <div className="p-6 flex-1 flex flex-col space-y-6">
                {/* Interview Focus */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 border-b pb-1 text-sm uppercase tracking-wide">Primary Focus</h4>
                  <p className="text-gray-700 text-sm font-medium">{levelData.interview_focus}</p>
                </div>

                {/* Key Concepts */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 border-b pb-1 text-sm uppercase tracking-wide">Key Concepts</h4>
                  <div className="flex flex-wrap gap-2">
                    {levelData.key_concepts?.map((c, i) => (
                      <span key={i} className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-xs font-semibold border border-indigo-100">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Common Questions */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 border-b pb-1 text-sm uppercase tracking-wide">Common Questions</h4>
                  <ul className="list-disc list-outside ml-4 space-y-1">
                    {levelData.common_questions?.map((q, i) => (
                      <li key={i} className="text-gray-600 text-sm">{q}</li>
                    ))}
                  </ul>
                </div>

                {/* Tips */}
                {levelData.tips && (
                  <div className="mt-auto pt-4 border-t border-gray-100 bg-yellow-50 -mx-6 -mb-6 p-4">
                    <h4 className="font-bold text-yellow-800 mb-2 text-xs uppercase tracking-wide">💡 Pro Tips</h4>
                    <ul className="space-y-1">
                      {levelData.tips.map((t, i) => (
                        <li key={i} className="text-yellow-900 text-xs italic flex items-start gap-1">
                          <span>•</span> {t}
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
    </div>
  );
}
