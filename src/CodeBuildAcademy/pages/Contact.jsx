import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';

const ContactItem = ({ icon: Icon, title, content, subContent }) => (
    <div className="flex gap-6 items-start p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-xl transition-all">
        <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 shrink-0">
            <Icon className="w-6 h-6" />
        </div>
        <div className="space-y-2">
            <h4 className="font-bold text-gray-900 text-lg underline decoration-blue-100 decoration-4">{title}</h4>
            <p className="text-gray-600 font-medium">{content}</p>
            {subContent && <p className="text-sm text-gray-400 font-medium">{subContent}</p>}
        </div>
    </div>
);

export default function Contact() {
    return (
        <div className="bg-gray-50 min-h-screen pt-20 pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 space-y-6">
                    <h1 className="text-4xl md:text-7xl font-black text-gray-900">Reach Out <span className="text-blue-600 italic">Directly.</span></h1>
                    <p className="text-xl text-gray-600 font-medium">Humein call karein, email karein ya direct milne aayein.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ContactItem
                                icon={Phone}
                                title="Call Us"
                                content="+91 98765 43210"
                                subContent="Available 9 AM - 8 PM"
                            />
                            <ContactItem
                                icon={Mail}
                                title="Email Us"
                                content="info@codebuildacademy.com"
                                subContent="Response in 24 hours"
                            />
                        </div>
                        <ContactItem
                            icon={MapPin}
                            title="Location"
                            content="101, Tech Tower, Main Market, Native Town"
                            subContent="Next to City Library, North India"
                        />

                        {/* Map Placeholder */}
                        <div className="relative group rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-gray-200 aspect-video flex items-center justify-center">
                            <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-colors"></div>
                            <div className="text-center space-y-4">
                                <MapPin className="w-16 h-16 text-blue-600 mx-auto" strokeWidth={1} />
                                <span className="font-bold text-gray-400 text-xl block">Interactive Google Map Placeholder</span>
                                <a href="https://maps.google.com" target="_blank" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
                                    Open in Google Maps <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[3rem] p-10 shadow-2xl shadow-blue-50 border border-gray-100 flex flex-col items-center text-center justify-center space-y-8">
                        <div className="bg-green-50 p-6 rounded-full text-green-600">
                            <MessageSquare className="w-12 h-12" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold text-gray-900">Quick Support on WhatsApp</h3>
                            <p className="text-gray-500 font-medium">Admission queries ya project requirement ke liye humein message karein.</p>
                        </div>
                        <a href="https://wa.me/919876543210" className="w-full bg-green-500 text-white py-5 rounded-2xl font-bold text-xl hover:bg-green-600 transition-all flex items-center justify-center gap-3 shadow-xl shadow-green-100">
                            Chat on WhatsApp
                        </a>
                        <div className="flex items-center gap-2 text-gray-400 font-bold uppercase tracking-widest text-xs">
                            <Clock className="w-4 h-4" />
                            <span>Active Now</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
