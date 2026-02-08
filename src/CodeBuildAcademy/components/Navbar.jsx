import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code2, ChevronDown } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLabsOpen, setIsLabsOpen] = useState(false);

    const navLinks = [
        { title: 'Home', path: '/CodeBuildAcademy' },
        { title: 'Courses', path: '/CodeBuildAcademy/courses' },
        { title: 'Freelance Hub', path: '/CodeBuildAcademy/freelance' },
        { title: 'About', path: '/CodeBuildAcademy/about' },
        { title: 'Contact', path: '/CodeBuildAcademy/contact' },
    ];

    const labsLinks = [
        { title: 'DevOps Lab', path: '/CodeBuildAcademy/devops' },
        { title: 'App Publishing', path: '/CodeBuildAcademy/publishing' },
        { title: 'Internship', path: '/CodeBuildAcademy/internship' },
        { title: 'Confidence Training', path: '/CodeBuildAcademy/confidence' },
    ];

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                                <Code2 className="text-white w-6 h-6" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-gray-900 leading-tight">Code & Build</span>
                                <span className="text-[10px] font-bold text-blue-600 tracking-[0.2em]">ACADEMY + STUDIO</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-gray-600 hover:text-blue-600 font-semibold transition-colors text-xs uppercase tracking-wider"
                            >
                                {link.title}
                            </Link>
                        ))}

                        {/* Labs Dropdown */}
                        <div className="relative group">
                            <button
                                className="flex items-center gap-1 text-gray-600 hover:text-blue-600 font-semibold text-xs uppercase tracking-wider"
                                onMouseEnter={() => setIsLabsOpen(true)}
                            >
                                Labs <ChevronDown className="w-4 h-4" />
                            </button>
                            <div
                                className={`absolute top-full right-0 w-56 bg-white border border-gray-100 shadow-2xl rounded-2xl py-4 transition-all z-50 ${isLabsOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'}`}
                                onMouseLeave={() => setIsLabsOpen(false)}
                            >
                                {labsLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className="block px-6 py-3 text-sm font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link
                            to="/CodeBuildAcademy/admission"
                            className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 text-xs uppercase tracking-widest"
                        >
                            Join Academy
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 overflow-y-auto max-h-[calc(100vh-80px)]">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-4 text-lg font-bold text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                            >
                                {link.title}
                            </Link>
                        ))}
                        <div className="pt-4 border-t border-gray-100 mt-4">
                            <p className="px-3 mb-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">Specialized Labs</p>
                            {labsLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-4 text-lg font-bold text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                        <div className="pt-6">
                            <Link
                                to="/CodeBuildAcademy/admission"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center bg-blue-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-blue-700 shadow-lg"
                            >
                                Join Academy
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
