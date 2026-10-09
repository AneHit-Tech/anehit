import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import SmoothScrollProvider from './components/common/SmoothScrollProvider';
import ScrollRevealManager from './components/common/ScrollRevealManager';
import FloatingScrollIndicator from './components/common/FloatingScrollIndicator';
import CustomCursor from './components/common/CustomCursor';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AboutPage from './pages/AboutPage';
import TechnologyPage from './pages/TechnologyPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScrollProvider>
        <ScrollToTop />
        <ScrollRevealManager />
        <FloatingScrollIndicator />
        <CustomCursor />
        <div className="flex flex-col min-h-screen bg-studio-bg text-studio-text selection:bg-cyan-500 selection:text-slate-950 font-sans">
          <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceId" element={<ServicesPage />} />
            <Route path="/case-studies" element={<WorkPage />} />
            <Route path="/case-studies/:projectId" element={<ProjectDetailPage />} />
            <Route path="/case-study" element={<Navigate to="/case-studies" replace />} />
            <Route path="/case-study/:projectId" element={<Navigate to="/case-studies/:projectId" replace />} />
            <Route path="/work" element={<Navigate to="/case-studies" replace />} />
            <Route path="/work/:projectId" element={<Navigate to="/case-studies/:projectId" replace />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
      </SmoothScrollProvider>
    </BrowserRouter>
  );
}
