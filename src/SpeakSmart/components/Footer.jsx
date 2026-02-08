import React from 'react';
import { Mail, Phone, MapPin, Youtube, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <h3 className="text-2xl font-bold mb-4">
                        <span className="text-blue-400">SpeakSmart</span> <span className="text-yellow-400">India</span>
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                        Hum North India ke students ko confident banate hain, jo English bolne se darte hain.
                        Bina darr, bina hichkichahat — ab aap bhi bolenge!
                    </p>
                </div>

                <div>
                    <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><Link to="/courses" className="hover:text-yellow-400 transition">Our Courses</Link></li>
                        <li><Link to="/ai-practice" className="hover:text-yellow-400 transition">AI Practice</Link></li>
                        <li><Link to="/resources" className="hover:text-yellow-400 transition">Free Resources</Link></li>
                        <li><Link to="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li className="flex items-center space-x-3">
                            <Phone size={18} className="text-yellow-400" />
                            <span>+91 98765 43210</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Mail size={18} className="text-yellow-400" />
                            <span>help@speaksmartindia.com</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <MapPin size={18} className="text-yellow-400" />
                            <span>North India Center, Delhi/NCR</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                <p>© 2026 SpeakSmart India. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <Facebook size={20} className="hover:text-blue-400 cursor-pointer" />
                    <Instagram size={20} className="hover:text-pink-400 cursor-pointer" />
                    <Youtube size={20} className="hover:text-red-500 cursor-pointer" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
