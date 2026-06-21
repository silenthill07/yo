import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Github, Mail, MapPin, Terminal, Download, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onResumeClick: () => void;
}

export function Hero({ onResumeClick }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-cyber-dark cyber-grid">
      {/* Visual background gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-cyber-green/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-cyber-blue/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Subtle prompt terminal tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyber-gray/40 border border-white/[0.06] backdrop-blur-sm mb-6 shadow-sm"
        >
          <div className="w-2 h-2 rounded-full bg-cyber-green animate-pulse"></div>
          <span className="text-[11px] font-mono tracking-[0.2em] text-[#00ef55]/90 uppercase">
            OPERATOR DISPATCH: INITIALIZED
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4"
        >
          AHMED ELKHOLY
        </motion.h1>

        {/* Subtitles */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-6"
        >
          <p className="font-mono text-xs sm:text-sm tracking-wider text-cyber-blue font-medium uppercase min-h-[40px] flex items-center justify-center">
            Offensive Security Engineer <span className="mx-2 text-white/20">|</span> Red Team Operator <span className="mx-2 text-white/20">|</span> Vulnerability Researcher
          </p>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center space-x-2 text-gray-400 mb-8"
        >
          <MapPin className="w-4 h-4 text-cyber-green/80" />
          <span className="font-sans text-xs tracking-wide">Cairo, Egypt</span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={onResumeClick}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 border border-cyber-green hover:bg-cyber-green hover:text-black text-cyber-green text-sm font-mono tracking-wider transition-all duration-300 rounded shadow-sm hover:shadow-[0_0_15px_rgba(0,239,85,0.25)] cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD RESUME</span>
          </button>
          <a
            href="#engagements"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 border border-white/[0.1] hover:border-white/[0.3] hover:bg-white/[0.02] text-white text-sm font-mono tracking-wider transition-all duration-300 rounded"
          >
            <span>VIEW ENGAGEMENTS</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Social Icons & Connections */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center space-x-6"
        >
          <a
            href="https://linkedin.com/in/ahmed-elkholy222"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyber-green transition-colors p-2 rounded hover:bg-white/[0.02]"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/silenthill07"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyber-green transition-colors p-2 rounded hover:bg-white/[0.02]"
            title="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:ahmed1elkholy1@gmail.com"
            className="text-gray-400 hover:text-cyber-green transition-colors p-2 rounded hover:bg-white/[0.02]"
            title="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Decorative Bottom Mesh */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-cyber-dark to-transparent pointer-events-none"></div>
    </section>
  );
}
