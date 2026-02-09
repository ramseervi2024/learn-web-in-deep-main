import React from 'react';

const CodeBlock = ({ code, language = 'javascript' }) => (
    <div className="bg-gray-900 rounded-lg p-6 my-6 overflow-x-auto border border-gray-800">
        <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-800">
            <span className="text-xs font-mono text-gray-500 uppercase">{language}</span>
            <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
        </div>
        <pre className="text-sm font-mono text-blue-300">
            <code>{code}</code>
        </pre>
    </div>
);

export default CodeBlock;
