import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Courses from './pages/Courses';
import ProjectTraining from './pages/ProjectTraining';
import Services from './pages/Services';
import Admission from './pages/Admission';
import About from './pages/About';
import Contact from './pages/Contact';

// New Advanced Pages
import FreelanceHub from './pages/FreelanceHub';
import DevOpsLab from './pages/DevOpsLab';
import AppPublishing from './pages/AppPublishing';
import Internship from './pages/Internship';
import Communication from './pages/Communication';

export default function App() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="courses" element={<Courses />} />
                    <Route path="training" element={<ProjectTraining />} />
                    <Route path="services" element={<Services />} />
                    <Route path="admission" element={<Admission />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />

                    {/* Advanced Routes */}
                    <Route path="freelance" element={<FreelanceHub />} />
                    <Route path="devops" element={<DevOpsLab />} />
                    <Route path="publishing" element={<AppPublishing />} />
                    <Route path="internship" element={<Internship />} />
                    <Route path="confidence" element={<Communication />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}
