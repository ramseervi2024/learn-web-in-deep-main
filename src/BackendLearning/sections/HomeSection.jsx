import React from 'react';
import { ChevronRight } from 'lucide-react';
import CodeBlock from '../components/CodeBlock';
import ContentSection from '../components/ContentSection';

const HomeSection = () => (
    <div className="space-y-10">
        <ContentSection title="What is Backend Development?">
            <p>
                Backend development is the <strong>server-side logic</strong> that powers applications. While the frontend (UI) is what users see,
                the backend handles:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Data Storage & Retrieval</strong>: Databases (SQL, NoSQL)</li>
                <li><strong>Business Logic</strong>: Processing, validation, calculations</li>
                <li><strong>Authentication & Authorization</strong>: User identity and permissions</li>
                <li><strong>API Communication</strong>: Exposing endpoints for frontend/mobile apps</li>
            </ul>
        </ContentSection>

        <ContentSection title="Why Node.js?">
            <p>
                Node.js allows you to write backend code in <strong>JavaScript</strong>, the same language used for frontend development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="p-5 bg-gray-800/50 border border-gray-700 rounded-lg">
                    <p className="font-bold text-blue-400 mb-2">⚡ Non-Blocking I/O</p>
                    <p className="text-sm">Handles thousands of concurrent connections without creating new threads.</p>
                </div>
                <div className="p-5 bg-gray-800/50 border border-gray-700 rounded-lg">
                    <p className="font-bold text-green-400 mb-2">🚀 Event-Driven Architecture</p>
                    <p className="text-sm">Perfect for real-time applications (chat, notifications, live updates).</p>
                </div>
                <div className="p-5 bg-gray-800/50 border border-gray-700 rounded-lg">
                    <p className="font-bold text-purple-400 mb-2">📦 NPM Ecosystem</p>
                    <p className="text-sm">Over 2 million packages for any use case imaginable.</p>
                </div>
                <div className="p-5 bg-gray-800/50 border border-gray-700 rounded-lg">
                    <p className="font-bold text-yellow-400 mb-2">🔁 Full-Stack JS</p>
                    <p className="text-sm">Use the same language for frontend (React/Vue) and backend.</p>
                </div>
            </div>
        </ContentSection>

        <ContentSection title="Why Express.js?">
            <p>
                Express is a <strong>minimal and flexible</strong> Node.js web framework that provides:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li>Routing system for handling HTTP methods (GET, POST, PUT, DELETE)</li>
                <li>Middleware architecture for modular request processing</li>
                <li>Template engines (optional) for server-side rendering</li>
                <li>Production-ready features (error handling, security)</li>
            </ul>
        </ContentSection>

        <ContentSection title="Full-Stack Architecture">
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 rounded-2xl border border-blue-500/20">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-4">
                    <div className="text-center p-4 bg-gray-900 rounded-lg border border-gray-700 flex-1">
                        <p className="font-bold text-blue-400">Frontend</p>
                        <p className="text-xs text-gray-500 mt-1">React / Vue / Mobile</p>
                    </div>
                    <ChevronRight className="text-gray-700 hidden md:block" size={28} />
                    <div className="text-center p-4 bg-blue-600 rounded-lg shadow-xl flex-1">
                        <p className="font-bold text-white">Backend (Node + Express)</p>
                        <p className="text-xs text-blue-100 mt-1">API / Auth / Logic</p>
                    </div>
                    <ChevronRight className="text-gray-700 hidden md:block" size={28} />
                    <div className="text-center p-4 bg-gray-900 rounded-lg border border-gray-700 flex-1">
                        <p className="font-bold text-green-400">Database</p>
                        <p className="text-xs text-gray-500 mt-1">SQL / NoSQL</p>
                    </div>
                    <ChevronRight className="text-gray-700 hidden md:block" size={28} />
                    <div className="text-center p-4 bg-purple-600/30 rounded-lg border border-purple-500/30 flex-1">
                        <p className="font-bold text-purple-400">Cloud</p>
                        <p className="text-xs text-gray-500 mt-1">AWS / Azure</p>
                    </div>
                </div>
            </div>
        </ContentSection>
    </div>
);

export default HomeSection;
