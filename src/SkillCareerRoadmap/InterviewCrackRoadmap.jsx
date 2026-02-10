import React, { useState } from 'react';
import interviewData from './interview_data';
import roadmapData from './roadmap'; // To get domain titles/descriptions matching IDs
import { motion, AnimatePresence } from 'framer-motion';

export default function InterviewCrackRoadmap() {
  const [selectedDomain, setSelectedDomain] = useState('frontend');

  // Get available domains from interviewData keys
  const availableDomains = Object.keys(interviewData);

  // Find domain details from roadmapData to display title/desc
  const domainInfo = roadmapData.platform.domains.find(d => d.id === selectedDomain);

  const currentInterviewData = interviewData[selectedDomain];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 mb-3">Interview Crack Roadmap</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Master your next tech interview from Junior to CTO with curated questions and strategies.</p>
      </header>

      {/* Domain Selector */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {availableDomains.map(dom => {
          // Try to find a nice name from roadmapData, fallback to ID
          const domName = roadmapData.platform.domains.find(d => d.id === dom)?.title || dom.toUpperCase();
          const isActive = selectedDomain === dom;
          return (
            <button
              key={dom}
              onClick={() => setSelectedDomain(dom)}
              className={`relative px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300
                                ${isActive
                  ? 'text-white shadow-lg shadow-indigo-500/30'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'}
                            `}
            >
              {isActive && (
                <motion.div
                  layoutId="activeInterviewTab"
                  className="absolute inset-0 bg-indigo-600 rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{domName}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Domain Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedDomain}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900">{domainInfo?.title || selectedDomain} Interview Guide</h2>
            <p className="text-gray-500 mt-2 text-lg">Focus areas and questions to crack the interview at every level.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentInterviewData?.map((levelData, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-br from-indigo-600 to-violet-700 p-5 text-white">
                  <h3 className="text-xl font-bold tracking-tight">{levelData.level}</h3>
                  <p className="text-indigo-100 text-sm font-medium mt-1">{levelData.experience}</p>
                </div>

                <div className="p-6 flex-1 flex flex-col space-y-6">
                  {/* Interview Focus */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 border-b border-gray-100 pb-1 text-xs uppercase tracking-wider text-indigo-600">Primary Focus</h4>
                    <p className="text-gray-700 text-sm font-medium leading-relaxed">{levelData.interview_focus}</p>
                  </div>

                  {/* Key Concepts */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 border-b border-gray-100 pb-1 text-xs uppercase tracking-wider text-indigo-600">Key Concepts</h4>
                    <div className="flex flex-wrap gap-2">
                      {levelData.key_concepts?.map((c, i) => (
                        <span key={i} className="bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-md text-xs font-semibold border border-indigo-100">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Common Questions */}
                  <div className="flex-grow">
                    <h4 className="font-bold text-gray-900 mb-3 border-b border-gray-100 pb-1 text-xs uppercase tracking-wider text-indigo-600">Common Questions</h4>
                    <ul className="space-y-2">
                      {levelData.common_questions?.map((q, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                          <span className="text-indigo-400 mt-1">•</span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tips */}
                  {levelData.tips && (
                    <div className="mt-auto pt-5 border-t border-gray-100 bg-yellow-50/50 -mx-6 -mb-6 p-5">
                      <h4 className="font-bold text-yellow-800 mb-2 text-xs uppercase tracking-wider flex items-center gap-1">
                        <span>💡</span> Pro Tips
                      </h4>
                      <ul className="space-y-1.5">
                        {levelData.tips.map((t, i) => (
                          <li key={i} className="text-yellow-900 text-xs italic leading-relaxed pl-1 border-l-2 border-yellow-300">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
