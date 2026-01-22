
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TRANSLATIONS } from '../constants';

interface Props {
  lang: 'pt' | 'en';
  onAcademicClick: () => void;
}

const Navbar: React.FC<Props> = ({ lang, onAcademicClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const t = TRANSLATIONS[lang].nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { name: t.home, href: '#home', action: () => scrollToSection('home') },
    { name: t.about, href: '#about', action: () => scrollToSection('about') },
    { name: t.academic, action: onAcademicClick },
    { name: t.experience, href: '#experience', action: () => scrollToSection('experience') },
    { name: t.socials, href: '#socials', action: () => scrollToSection('socials') },
    { name: t.portfolio, href: '#portfolio', action: () => scrollToSection('portfolio') },
    { name: t.services, href: '#services', action: () => scrollToSection('services') },
    { name: t.contact, href: '#contact', action: () => window.open('https://w.app/picmi', '_blank') },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-[#050505]/90 backdrop-blur-md py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('home')} 
          className="pixel-font text-2xl text-[#ff00ff] tracking-tighter hover:text-[#00ffff] transition-colors"
        >
          picMi
        </button>
        
        <ul className="hidden lg:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <button 
                onClick={item.action}
                className="vhs-font text-xl text-white hover:text-[#ff00ff] transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ffff] transition-all group-hover:w-full"></span>
              </button>
            </li>
          ))}
        </ul>
        
        <div className="lg:hidden">
          <button className="pixel-font text-[#ff00ff] text-xs">MENU</button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
