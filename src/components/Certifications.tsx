import React, { useState } from 'react';
import { CERTIFICATIONS } from '../data';
import { Award, Terminal, Filter, ShieldCheck, Flame, Cpu, Users } from 'lucide-react';

export function CertificationsGrid() {
  const [filter, setFilter] = useState<'all' | 'offensive' | 'leadership' | 'infra'>('all');

  const categories = [
    { id: 'all', name: 'All Credentials', icon: Award },
    { id: 'offensive', name: 'Offensive & Core Security', icon: Flame },
    { id: 'leadership', name: 'Leadership & Resiliency', icon: Users },
    { id: 'infra', name: 'Infrastructure & Standards', icon: Cpu },
  ];

  const filteredCerts = CERTIFICATIONS.filter(
    (cert) => filter === 'all' || cert.category === filter
  );

  return (
    <section id="certifications" className="py-24 bg-cyber-dark relative overflow-hidden">
      {/* Glow asset */}
      <div className="absolute top-[40%] right-[-100px] w-[350px] h-[350px] bg-cyber-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Terminal className="w-4 h-4 text-cyber-green font-mono" />
            <span className="font-mono text-xs text-cyber-green uppercase tracking-widest">// VALIDATED COMPETENCIES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            CERTIFICATIONS
          </h2>
          <p className="text-gray-400 font-sans text-sm">
            Elite industry-standard credentials validating red teaming warfare operations, organizational resiliency training, and executive infrastructure governance.
          </p>
        </div>

        {/* Filter categories tabs panel */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`flex items-center space-x-2 px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-300 border rounded cursor-pointer ${
                  isActive
                    ? 'bg-cyber-green text-black border-cyber-green shadow-[0_0_12px_rgba(0,239,85,0.25)] font-bold'
                    : 'bg-cyber-card text-gray-400 border-white/[0.04] hover:border-white/[0.15] hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Badges Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, idx) => {
            // Determine dynamic accents based on categories
            const isOffensive = cert.category === 'offensive';
            const isLeadership = cert.category === 'leadership';
            const accentClass = isOffensive
              ? 'group-hover:border-cyber-green/45 group-hover:shadow-[0_0_15px_rgba(0,239,85,0.1)]'
              : isLeadership
              ? 'group-hover:border-cyber-blue/45 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.1)]'
              : 'group-hover:border-white/20 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.03)]';

            const badgeDotClass = isOffensive
              ? 'bg-cyber-green'
              : isLeadership
              ? 'bg-cyber-blue'
              : 'bg-gray-400';

            const categoryTag = isOffensive
              ? 'OFFSEC / AD'
              : isLeadership
              ? 'LEADERSHIP'
              : 'INFRASTRUCTURE';

            return (
              <div
                key={idx}
                className={`p-6 bg-cyber-card border border-white/[0.03] rounded transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${accentClass}`}
              >
                {/* Visual badge highlight vector accent lines */}
                <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden pr-2 pt-2">
                  <div
                    className={`absolute top-0 right-0 w-16 h-[1px] transform rotate-45 translate-x-4 translate-y-3 ${
                      isOffensive ? 'bg-cyber-green/35' : isLeadership ? 'bg-cyber-blue/35' : 'bg-gray-700'
                    }`}
                  ></div>
                </div>

                <div>
                  {/* Category Pill Tag */}
                  <div className="flex items-center space-x-2 mb-3">
                    <span className={`w-1.5 h-1.5 rounded-full ${badgeDotClass}`}></span>
                    <span className="font-mono text-[9px] text-gray-500 tracking-widest uppercase font-bold">
                      {categoryTag}
                    </span>
                  </div>

                  {/* Title of Certification */}
                  <h3 className="font-display text-sm sm:text-base font-bold text-gray-100 group-hover:text-white transition-colors duration-200 leading-snug mb-1">
                    {cert.name}
                  </h3>
                  
                  {/* Issuer details */}
                  <p className="font-mono text-[11px] text-gray-400">
                    {cert.issuer}
                  </p>
                </div>

                {/* Simulated authentication indicator */}
                <div className="mt-4 pt-3 border-t border-white/[0.03] flex items-center justify-between text-[10px] font-mono select-none">
                  <span className="text-gray-500 uppercase tracking-widest">STATE: VALIDATED</span>
                  <ShieldCheck
                    className={`w-3.5 h-3.5 ${
                      isOffensive ? 'text-cyber-green' : isLeadership ? 'text-cyber-blue' : 'text-gray-400'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
