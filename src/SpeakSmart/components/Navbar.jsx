import React, { useState } from 'react';
import { Menu, X, Phone, User, BookOpen, Mic, Home, Info, Gift, Lightbulb } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/SpeakSmart', icon: <Home size={20} /> },
        { name: 'Courses', path: '/SpeakSmart/courses', icon: <BookOpen size={20} /> },
        { name: 'Solutions', path: '/SpeakSmart/solutions', icon: <Lightbulb size={20} /> },
        { name: 'AI Practice', path: '/SpeakSmart/ai-practice', icon: <Mic size={20} /> },
        { name: 'Resources', path: '/SpeakSmart/resources', icon: <Gift size={20} /> },
        { name: 'About', path: '/SpeakSmart/about', icon: <Info size={20} /> },
        { name: 'Contact', path: '/SpeakSmart/contact', icon: <Phone size={20} /> },
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link to="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-blue-600">SpeakSmart</span>
                        <span className="text-2xl font-bold text-yellow-500">India</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`${location.pathname === link.path
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-600 hover:text-blue-500'
                                    } transition-colors duration-200 py-2 font-medium`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-blue-600 focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Links */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium ${location.pathname === link.path
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-500'
                                    }`}
                            >
                                {link.icon}
                                <span>{link.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
