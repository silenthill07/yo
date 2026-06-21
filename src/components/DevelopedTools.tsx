import React from 'react';
import { DEVELOPED_TOOLS } from '../data';
import { Terminal, Cpu, Eye, Volume2, Shield, Radio, Server, Code } from 'lucide-react';

export function DevelopedTools() {
  return (
    <section id="tools" className="py-24 bg-cyber-dark relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-[20%] right-[-150px] w-[300px] h-[300px] bg-cyber-blue/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Terminal className="w-4 h-4 text-cyber-blue font-mono" />
            <span className="font-mono text-xs text-cyber-blue uppercase tracking-widest">// CUSTOM BUILT SOFTWARE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            DEVELOPED TOOLS & SYSTEMS
          </h2>
          <p className="text-gray-400 font-sans text-sm">
            Proprietary software engines, custom intelligence systems, and advanced proof-of-concept security tools designed and built from scratch.
          </p>
        </div>

        {/* Tools Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEVELOPED_TOOLS.map((tool) => {
            const isEye = tool.title.includes('Eye');
            const isKeyEcho = tool.title.includes('KeyEcho');
            
            // Icon
            const ToolIcon = isEye ? Eye : (isKeyEcho ? Volume2 : Cpu);
            
            // Badge text
            const badgeText = isEye 
              ? 'COMPUTER VISION / SEC' 
              : (isKeyEcho ? 'CRYPTANALYSIS / POC' : 'HARDWARE / RF OPERATIONS');

            // Themes
            const themeColor = isKeyEcho ? 'green' : 'blue';
            const borderGlow = themeColor === 'blue' 
              ? 'hover:shadow-[0_0_15px_rgba(0,229,255,0.15)] hover:border-cyber-blue/30' 
              : 'hover:shadow-[0_0_15px_rgba(0,239,85,0.15)] hover:border-cyber-green/30';
            const accentText = themeColor === 'blue' ? 'text-cyber-blue' : 'text-cyber-green';
            const accentBadge = themeColor === 'blue' 
              ? 'bg-cyber-blue/10 text-cyber-blue border-cyber-blue/20' 
              : 'bg-cyber-green/10 text-cyber-green border-cyber-green/20';
            const activeBar = themeColor === 'blue' ? 'bg-cyber-blue' : 'bg-cyber-green';

            return (
              <div
                key={tool.id}
                className={`flex flex-col bg-cyber-card border border-white/[0.03] transition-all duration-300 rounded relative overflow-hidden p-6 sm:p-8 ${borderGlow}`}
              >
                {/* Tech active light indicator */}
                <div className={`absolute top-0 left-0 w-[4px] h-full ${activeBar}`}></div>

                {/* Header info */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2.5 rounded border ${themeColor === 'blue' ? 'bg-cyber-blue/5 border-cyber-blue/20' : 'bg-cyber-green/5 border-cyber-green/20'}`}>
                      <ToolIcon className={`w-5 h-5 ${accentText}`} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white tracking-wide">
                        {tool.title}
                      </h3>
                      <span className={`inline-block font-mono text-[9px] uppercase border px-2 py-0.5 rounded mt-1.5 ${accentBadge}`}>
                        {badgeText}
                      </span>
                    </div>
                  </div>
                  
                  {/* Status ping */}
                  <div className="flex items-center space-x-1.5 font-mono text-[10px] text-gray-500">
                    <span className={`w-1.5 h-1.5 rounded-full ${activeBar} animate-pulse`}></span>
                    <span className="hidden sm:inline">READY_STATE</span>
                  </div>
                </div>

                <p className="font-sans text-xs text-cyber-blue/80 font-semibold mb-4 leading-relaxed">
                  {tool.subtitle}
                </p>

                {/* Bullets */}
                <ul className="space-y-3 flex-1">
                  {tool.description.map((bullet, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-gray-450 leading-relaxed font-sans">
                      <span className={`font-mono font-bold mt-0.5 select-none ${accentText}`}>&gt;</span>
                      <span className="text-gray-300">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Hex coordinates decoration */}
                <div className="mt-6 pt-4 border-t border-white/[0.03] flex items-center justify-between font-mono text-[9px] text-gray-650 select-none">
                  <span>DEPLOYED: SIG_0x{tool.id.toUpperCase()}</span>
                  <span>INTELLIGENCE_ROUTING: PROD</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
