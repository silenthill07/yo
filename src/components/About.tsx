import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Star, Award, Code, Globe, Terminal, User } from 'lucide-react';

export function About() {
  const coreCompetencies = [
    { name: 'Adversary Emulation', desc: 'Simulating sophisticated state-sponsored threat behaviors and persistent actors.' },
    { name: 'Vulnerability Research', desc: 'Deep dive source code reviews and architectural flaw identification.' },
    { name: 'Active Directory Attacks', desc: 'Pass-the-hash, ticket forge attacks, Kerberoasting, and multi-domain control takeover.' },
    { name: 'ICS/OT Infrastructure', desc: 'Hardening industrial control systems and legacy SCADA network integrations.' },
  ];

  return (
    <section id="about" className="py-24 bg-cyber-gray relative overflow-hidden">
      {/* Decorative vertical light streak */}
      <div className="absolute top-0 right-[15%] w-[1px] h-full bg-gradient-to-b from-transparent via-cyber-green/10 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Visual Element */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <div className="flex items-center space-x-2 mb-4">
                <Terminal className="w-4 h-4 text-cyber-green font-mono" />
                <span className="font-mono text-xs text-cyber-green uppercase tracking-widest">
                  // PROFILE OVERVIEW
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
                ABOUT ME
              </h2>
              <p className="text-gray-400 font-sans text-sm leading-relaxed mb-6">
                Bridging the gap between offensive operations and defensive posture by proving risk through execution.
              </p>
              
              {/* Decorative Terminal Code Card */}
              <div className="rounded bg-cyber-card border border-white/[0.04] p-5 font-mono text-[11px] text-gray-400 leading-normal space-y-2 select-none shadow-lg">
                <div className="flex items-center space-x-1.5 pb-2 mb-2 border-b border-white/[0.04]">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
                  <span className="text-white/40 pl-2 text-[10px]">operator@safeguard:~</span>
                </div>
                <div><span className="text-cyber-green">$</span> whoami</div>
                <div className="text-white font-semibold">ahmed_elkholy</div>
                <div><span className="text-cyber-green">$</span> cat profile.json | grep -E "OSCP|CISSP|FBINAA"</div>
                <div className="text-cyber-blue">
                   "certifications": ["OSCP", "CEH Master", "OSEE", "CISSP"],<br />
                   "leadership": "FBINAA Leadership Graduate"
                </div>
                <div><span className="text-cyber-green">$</span> ls -la core_competencies/</div>
                <div className="text-gray-500">
                  drwxr-xr-x  ad_exploitation/ <br />
                  drwxr-xr-x  adversary_emulation/ <br />
                  drwxr-xr-x  vulnerability_research/
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Text & Core Competencies */}
          <div className="lg:col-span-7 space-y-10">
            <div className="relative">
              {/* Large quote asset */}
              <span className="absolute -top-10 -left-6 text-white/[0.02] font-display text-8xl pointer-events-none select-none">
                “
              </span>
              <p className="text-gray-200 font-sans text-base sm:text-lg leading-relaxed relative z-10 font-normal">
                A highly accomplished Offensive Security Engineer and Red Teamer holding elite industry certifications including OSCP, CEH Master, and CISSP. Demonstrated expertise in advanced vulnerability research, cyber warfare operations, and critical infrastructure protection. Combines deep technical penetration testing capabilities with formally recognized leadership acumen (FBINAA graduate) to drive strategic security initiatives, uncover critical flaws, and fortify organizational defenses. Author and active contributor to the cybersecurity community.
              </p>
            </div>

            {/* Core Competencies Grid */}
            <div>
              <h3 className="font-display text-white text-base font-semibold uppercase tracking-wider mb-6 flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-cyber-green" />
                <span>Operational Anchors</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreCompetencies.map((comp, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-cyber-card rounded border border-white/[0.03] hover:border-cyber-green/20 transition-all duration-300"
                  >
                    <div className="font-mono text-xs text-cyber-green uppercase tracking-wider mb-2 font-semibold">
                      {comp.name}
                    </div>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      {comp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
