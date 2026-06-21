/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CaseStudies } from './components/CaseStudies';
import { DevelopedTools } from './components/DevelopedTools';
import { ExperienceTimeline } from './components/Experience';
import { CertificationsGrid } from './components/Certifications';
import { EduPubs } from './components/EduPubs';
import { ContactForm } from './components/ContactForm';
import { ResumeViewer } from './components/ResumeViewer';
import { Shield, Terminal, ArrowUp, MessageCircle } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor screen positions to highlight Navbar corresponding tags
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 500);

      const sections = ['hero', 'about', 'engagements', 'tools', 'experience', 'certifications', 'education', 'publications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-cyber-dark text-gray-300 min-h-screen font-sans selection:bg-cyber-green selection:text-black antialiased relative">
      
      {/* Top Main navigation bar */}
      <Navbar activeSection={activeSection} />

      {/* Hero presentation with active secure modal capability */}
      <Hero onResumeClick={() => setIsResumeOpen(true)} />

      {/* About narrative details */}
      <About />

      {/* Case Studies grid */}
      <CaseStudies />

      {/* Developed Tools section */}
      <DevelopedTools />

      {/* Vertical Employment History Timeline */}
      <ExperienceTimeline />

      {/* Dynamic Certifications categorizing grid */}
      <CertificationsGrid />

      {/* Combined Education and Publications panels */}
      <EduPubs />

      {/* Interactive Cyberpunk Contact Panel */}
      <ContactForm />

      {/* Footer standard details */}
      <footer className="bg-cyber-dark border-t border-white/[0.04] py-12 relative overflow-hidden select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <Shield className="w-5 h-5 text-cyber-green" />
            <span className="font-display font-bold text-white text-xs uppercase tracking-wider">
              AHMED ELKHOLY <span className="text-cyber-green">|</span> RED OPERATIONS
            </span>
          </div>

          <div className="font-mono text-[10px] text-gray-500 text-center md:text-right">
            &copy; {new Date().getFullYear()} AHMED ELKHOLY. ALL RIGHTS RESERVED. SECURED VIA END-TO-END METHODOLOGIES
          </div>
        </div>
      </footer>

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded bg-cyber-card border border-cyber-green/40 hover:border-cyber-green text-cyber-green shadow-lg hover:shadow-[0_0_12px_rgba(0,239,85,0.3)] transition-all duration-300 z-40 animate-fade-in hover:-translate-y-1 cursor-pointer"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating WhatsApp Cyber Comms Button */}
      <a
        href="https://wa.me/201040159990"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 flex items-center space-x-2 px-4 py-3 bg-cyber-dark hover:bg-cyber-green/[0.08] text-cyber-green border border-cyber-green/50 hover:border-cyber-green rounded-full shadow-lg hover:shadow-[0_0_15px_rgba(0,239,85,0.4)] transition-all duration-300 z-40 cursor-pointer group"
        title="Connect via WhatsApp"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-cyber-green/20 animate-ping"></div>
          <MessageCircle className="w-5 h-5 relative z-10 text-cyber-green" />
        </div>
        <span className="font-mono text-[10px] tracking-widest font-bold uppercase hidden sm:inline-block">
          COMMS_LINK
        </span>
      </a>

      {/* Custom full resume printable viewer modal */}
      {isResumeOpen && <ResumeViewer onClose={() => setIsResumeOpen(false)} />}
    </div>
  );
}
