import React from 'react';
import { EXPERIENCES } from '../data';
import { Briefcase, Terminal, ArrowDownRight, Calendar } from 'lucide-react';

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 bg-cyber-gray relative overflow-hidden">
      {/* Decorative background grid line */}
      <div className="absolute top-0 left-[25%] lg:left-[50%] w-[1px] h-full bg-gradient-to-b from-transparent via-white/[0.04] to-transparent pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Terminal className="w-4 h-4 text-cyber-green font-mono" />
            <span className="font-mono text-xs text-cyber-green uppercase tracking-widest">// DEPLOYMENT HISTORY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            EXPERIENCE
          </h2>
          <p className="text-gray-400 font-sans text-sm">
            Operational trajectory spanning continuous vulnerability disclosure, Red Teaming management, and corporate shift leadership.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative">
          {/* Vertical central path ruler */}
          <div className="absolute top-0 bottom-0 left-6 lg:left-1/2 w-[2px] bg-white/[0.05] pointer-events-none"></div>

          <div className="space-y-16">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={exp.id} className="relative flex flex-col lg:flex-row items-start lg:items-center">
                  
                  {/* Timeline Pulse Node */}
                  <div className="absolute left-6 lg:left-1/2 w-4 h-4 rounded-full bg-cyber-dark border-2 border-cyber-green transform -translate-x-[7px] z-20 shadow-[0_0_8px_rgba(0,239,85,0.4)] flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-cyber-green"></div>
                  </div>

                  {/* Date indicator in the timeline column panel */}
                  <div className={`hidden lg:block w-1/2 pr-12 text-right ${isEven ? 'order-1 lg:order-1' : 'order-1 lg:order-2 pl-12 text-left'}`}>
                    <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded bg-cyber-card border border-white/[0.03] text-xs font-mono text-cyber-blue select-none">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.date}</span>
                    </div>
                  </div>

                  {/* Card Container */}
                  <div
                    className={`w-full lg:w-1/2 pl-14 lg:pl-0 ${
                      isEven 
                        ? 'order-2 lg:order-2 lg:pl-12' 
                        : 'order-2 lg:order-1 lg:pr-12'
                    }`}
                  >
                    <div className="p-6 sm:p-8 bg-cyber-card border border-white/[0.03] hover:border-cyber-green/20 transition-all duration-300 rounded shadow-md relative group">
                      
                      {/* Corner cyber dot marker */}
                      <span className="absolute top-3 right-3 text-white/[0.05] group-hover:text-cyber-green/10 transition-colors duration-300">
                        <Briefcase className="w-5 h-5" />
                      </span>

                      {/* Info header */}
                      <div className="mb-4">
                        {/* Mobile active date badge */}
                        <div className="inline-flex lg:hidden items-center space-x-1 px-2.5 py-0.5 rounded bg-cyber-dark border border-white/[0.03] text-[10px] font-mono text-cyber-blue mb-2">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.date}</span>
                        </div>
                        
                        <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-cyber-green transition-colors duration-200">
                          {exp.role}
                        </h3>
                        
                        <p className="font-mono text-xs text-cyber-blue uppercase tracking-widest mt-1">
                          {exp.company}
                        </p>
                      </div>

                      {/* Achievement bullet items */}
                      <ul className="space-y-3 font-sans text-xs text-gray-400 leading-relaxed">
                        {exp.description.map((desc, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-cyber-green font-mono mr-2.5 mt-0.5">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
