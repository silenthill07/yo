import React from 'react';
import { EDUCATION, PUBLICATIONS } from '../data';
import { GraduationCap, BookOpen, Terminal, Shield, Award, Calendar } from 'lucide-react';

export function EduPubs() {
  return (
    <section id="education" className="py-24 bg-cyber-gray relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] left-[-150px] w-[300px] h-[300px] bg-cyber-green/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Column A: Academic Background */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-cyber-green font-mono" />
              <span className="font-mono text-xs text-cyber-green uppercase tracking-widest">// ACADEMIC ROSTER</span>
            </div>
            
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                EDUCATION
              </h2>
              <p className="text-sm text-gray-400 font-sans leading-relaxed">
                Foundations in computer engineering and specialized military cyber warfare research.
              </p>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 bg-cyber-card border border-white/[0.03] hover:border-cyber-green/10 transition-all duration-300 rounded relative group"
                >
                  <span className="absolute top-4 right-4 text-white/[0.03] group-hover:text-cyber-green/10 transition-all duration-300">
                    <GraduationCap className="w-6 h-6" />
                  </span>

                  <div className="mb-2">
                    <h3 className="font-display text-base font-bold text-white group-hover:text-cyber-green transition-colors duration-200">
                      {edu.institution}
                    </h3>
                    <p className="font-sans text-xs text-gray-400 font-medium">
                      {edu.degree}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono mt-4 pt-3 border-t border-white/[0.03]">
                    {edu.grade ? (
                      <span className="text-cyber-green font-bold">{edu.grade}</span>
                    ) : (
                      <span className="text-gray-500">ACADEMICS_VERIFIED</span>
                    )}
                    {edu.year && (
                      <span className="text-gray-400 flex items-center space-x-1">
                        <Calendar className="w-3 h-3 text-cyber-blue mr-1" />
                        <span>{edu.year}</span>
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column B: Publications */}
          <div id="publications" className="space-y-8">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-cyber-green font-mono" />
              <span className="font-mono text-xs text-cyber-green uppercase tracking-widest">// CLASSIFIED LITERARY RELEASE</span>
            </div>
            
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                PUBLICATIONS & RESEARCH
              </h2>
              <p className="text-sm text-gray-400 font-sans leading-relaxed">
                Authored and contributed documentation detailing strategic methodologies and research insights.
              </p>
            </div>

            <div className="space-y-6">
              {PUBLICATIONS.map((pub) => (
                <div
                  key={pub.id}
                  className="p-6 bg-cyber-card border border-white/[0.03] hover:border-cyber-blue/15 transition-all duration-300 rounded relative group"
                >
                  {/* Decorative book icon watermark */}
                  <span className="absolute top-4 right-4 text-white/[0.03] group-hover:text-cyber-blue/10 transition-all duration-300">
                    <BookOpen className="w-6 h-6" />
                  </span>

                  <div className="mb-4">
                    <span className="font-mono text-[9px] px-2.5 py-0.5 rounded bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue uppercase font-bold tracking-wider inline-block mb-3">
                      Intel Manual / Book Release
                    </span>
                    <h3 className="font-display text-base font-bold text-gray-100 group-hover:text-white transition-colors duration-200 leading-snug">
                      "{pub.title}"
                    </h3>
                  </div>

                  <p className="font-sans text-xs text-gray-400 leading-relaxed mb-4">
                    {pub.description || "Strategic threat discourse with specialized research insight focusing on information systems."} Written under name: <strong className="text-white font-medium">{pub.authorName}</strong>.
                  </p>

                  <div className="flex items-center justify-between text-[10px] font-mono border-t border-white/[0.03] pt-4 select-none">
                    <span className="text-gray-500 uppercase tracking-widest">ACCESS: PUBLICLY SECURED</span>
                    <span className="text-[#00e5ff] font-bold">APPROVED RESEARCH</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
