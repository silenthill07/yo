import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Terminal } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Engagements', href: '#engagements' },
    { name: 'Tools', href: '#tools' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cyber-dark/80 backdrop-blur-md border-b border-white/[0.05] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo / Brand */}
          <a
            href="#"
            className="flex items-center space-x-3 text-white font-display uppercase tracking-wider text-sm sm:text-base font-bold group"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded border border-cyber-green/50 bg-cyber-green/5 transition-all group-hover:border-cyber-green group-hover:bg-cyber-green/10">
              <Shield className="w-4 h-4 text-cyber-green" />
              <div className="absolute -inset-0.5 bg-cyber-green/20 rounded blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span>
              Ahmed <span className="text-cyber-green">Elkholy</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-mono tracking-widest uppercase transition-all duration-300 relative py-1 hover:text-white ${
                    isActive ? 'text-cyber-green' : 'text-gray-400'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyber-green"></span>
                  )}
                </a>
              );
            })}
            <a
              href="#contact"
              className="text-xs font-mono tracking-widest uppercase px-4 py-2 border border-cyber-green/40 hover:border-cyber-green bg-cyber-green/5 hover:bg-cyber-green/10 text-cyber-green text-center transition-all rounded"
            >
              Secure Channel
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded text-gray-400 hover:text-white hover:bg-cyber-gray focus:outline-none transition-all"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6 text-cyber-green" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-cyber-gray border-b border-white/[0.05] py-4 px-6 space-y-3 transition-all duration-300 transform ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm font-mono tracking-wider text-gray-300 hover:text-cyber-green border-b border-white/[0.02] last:border-0"
          >
            &gt; {link.name.toUpperCase()}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="block text-center text-xs font-mono tracking-widest uppercase py-3 border border-cyber-green rounded bg-cyber-green/5 text-cyber-green hover:bg-cyber-green/10"
        >
          Secure Channel
        </a>
      </div>
    </nav>
  );
}
