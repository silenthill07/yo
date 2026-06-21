import React from 'react';
import { Phone, Mail, MapPin, Terminal } from 'lucide-react';

export function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-cyber-dark relative overflow-hidden">
      {/* Background neon visual layout */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-cyber-green/[0.03] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="space-y-4 mb-12">
          <div className="flex items-center justify-center space-x-2">
            <Terminal className="w-4 h-4 text-cyber-green font-mono" />
            <span className="font-mono text-xs text-cyber-green uppercase tracking-widest">// SECURE ENDPOINT</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white animate-fade-in">
            CONTACT ME
          </h2>
          <p className="text-gray-400 font-sans text-sm leading-relaxed max-w-lg mx-auto">
            Want to schedule a red team simulation, request a vulnerability review, or discuss engineering opportunities? Get in touch directly via my secure channels.
          </p>
        </div>

        {/* Direct Information Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          <div className="flex flex-col items-center p-6 bg-cyber-card border border-white/[0.03] hover:border-cyber-green/20 transition-all duration-300 rounded group">
            <div className="p-3 rounded bg-cyber-dark text-cyber-green border border-cyber-green/20 mb-4 transition-colors group-hover:border-cyber-green">
              <Mail className="w-5 h-5" />
            </div>
            <p className="font-mono text-[9px] text-gray-500 uppercase tracking-widest mb-1">SECURED EMAIL</p>
            <a href="mailto:ahmed1elkholy1@gmail.com" className="text-sm font-sans text-gray-200 hover:text-cyber-green transition-colors font-medium break-all text-center">
              ahmed1elkholy1@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center p-6 bg-cyber-card border border-white/[0.03] hover:border-cyber-green/20 transition-all duration-300 rounded group">
            <div className="p-3 rounded bg-cyber-dark text-cyber-green border border-cyber-green/20 mb-4 transition-colors group-hover:border-cyber-green">
              <Phone className="w-5 h-5" />
            </div>
            <p className="font-mono text-[9px] text-gray-500 uppercase tracking-widest mb-1">DIRECT COMMUNICATOR</p>
            <a href="tel:01040159990" className="text-sm font-sans text-gray-200 hover:text-cyber-green transition-colors font-medium">
              01040159990
            </a>
          </div>

          <div className="flex flex-col items-center p-6 bg-cyber-card border border-white/[0.03] hover:border-cyber-green/20 transition-all duration-300 rounded group">
            <div className="p-3 rounded bg-cyber-dark text-cyber-green border border-cyber-green/20 mb-4 transition-colors group-hover:border-cyber-green">
              <MapPin className="w-5 h-5" />
            </div>
            <p className="font-mono text-[9px] text-gray-500 uppercase tracking-widest mb-1">OPERATION ROOT</p>
            <p className="text-sm font-sans text-gray-200 font-medium">Cairo, Egypt</p>
          </div>

        </div>

      </div>
    </section>
  );
}
