import React, { lazy, Suspense } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CTASection from './components/CTASection';

// Individual Pages
import Home from './pages/Home';
// Lazy load others for performance
const Courses = lazy(() => import('./pages/Courses'));
const AIPractice = lazy(() => import('./pages/AIPractice'));
const Resources = lazy(() => import('./pages/Resources'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const ResourceReader = lazy(() => import('./pages/ResourceReader'));
const Solutions = lazy(() => import('./pages/Solutions'));

export default function SpeakSmart() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />

      <main className="flex-grow">
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/ai-practice" element={<AIPractice />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/resource/:id" element={<ResourceReader />} />
          </Routes>
        </Suspense>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
}
