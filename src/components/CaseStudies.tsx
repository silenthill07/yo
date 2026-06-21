import React, { useState } from 'react';
import { CASE_STUDIES } from '../data';
import { ShieldAlert, Crosshair, HelpCircle, Flame, CheckCircle, ExternalLink, Terminal, ChevronDown } from 'lucide-react';

export function CaseStudies() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="engagements" className="py-24 bg-cyber-dark relative overflow-hidden">
      {/* Background visual asset */}
      <div className="absolute top-[30%] left-[-100px] w-[300px] h-[300px] bg-cyber-green/5 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Terminal className="w-4 h-4 text-cyber-green font-mono" />
            <span className="font-mono text-xs text-cyber-green uppercase tracking-widest">// SECURE OPS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            ETHICAL ENGAGEMENTS
          </h2>
          <p className="text-gray-400 font-sans text-sm">
            Detailed case studies from authorized Red Team simulations, vulnerability disclosures, and critical infrastructure engagements.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => {
            const isExpanded = expandedId === study.id;
            return (
              <div
                key={study.id}
                className="group flex flex-col justify-between bg-cyber-card border border-white/[0.03] hover:border-cyber-green/30 transition-all duration-300 rounded shadow-md relative overflow-hidden"
              >
                {/* Tech bar accent */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyber-green/20 via-cyber-green/80 to-cyber-blue/20"></div>

                <div className="p-6 sm:p-8 flex-1">
                  {/* Category Target */}
                  <div className="flex items-center justify-between font-mono text-[11px] text-gray-500 mb-4 uppercase tracking-widest">
                    <span>{study.targetContext}</span>
                    <span className="text-cyber-green">RECON_OK</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-4 group-hover:text-cyber-green transition-colors duration-300 min-h-[56px] leading-tight">
                    {study.title}
                  </h3>

                  {/* Objective */}
                  <div className="mb-6">
                    <span className="font-mono text-[10px] uppercase text-cyber-blue tracking-wider block mb-1">
                      Objective:
                    </span>
                    <p className="font-sans text-xs text-gray-300 leading-relaxed">
                      {study.objective}
                    </p>
                  </div>

                  {/* Attack Vectors (Collapsible with elegant animations) */}
                  <div className="mb-6">
                    <button
                      onClick={() => toggleExpand(study.id)}
                      className="w-full flex items-center justify-between font-mono text-xs uppercase tracking-wider text-gray-400 hover:text-white transition-colors duration-200 outline-none"
                    >
                      <span>Attack Vectors</span>
                      <ChevronDown
                        className={`w-4 h-4 text-cyber-green transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isExpanded ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden space-y-2">
                        {study.attackVectors.map((vector, idx) => (
                          <div key={idx} className="flex items-start space-x-2 text-xs text-gray-400 leading-relaxed">
                            <span className="text-cyber-green font-mono font-bold mt-0.5">&gt;</span>
                            <span>{vector}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Impact Panel */}
                  <div className="p-4 rounded bg-cyber-dark/50 border border-white/[0.04] mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Flame className="w-3.5 h-3.5 text-red-500" />
                      <span className="font-mono text-[10px] text-red-500 font-bold uppercase tracking-wider">
                        Simulated Compromise Impact
                      </span>
                    </div>
                    <p className="font-sans text-xs text-gray-300 leading-relaxed">
                      {study.impact}
                    </p>
                  </div>
                </div>

                {/* Remediation Footer */}
                <div className="p-6 bg-cyber-dark/40 border-t border-white/[0.04]">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="w-3.5 h-3.5 text-cyber-green" />
                    <span className="font-mono text-[10px] text-cyber-green font-bold uppercase tracking-wider">
                      Remediation Outcome
                    </span>
                  </div>
                  <p className="font-sans text-xs text-gray-400 leading-relaxed">
                    {study.remediationOutcome}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
