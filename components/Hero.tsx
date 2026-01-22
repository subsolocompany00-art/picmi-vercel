import React from 'react';
import { motion } from 'framer-motion';
import { TRANSLATIONS } from '../constants';

interface Props {
  lang: 'pt' | 'en';
  onAcademicClick: () => void;
}

const Hero: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang].hero;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-20">
      {/* Background Image Layer (Fixed) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: 'url(https://i.ibb.co/hFLv9wqX/IMG-0060.jpg)',
        }}
      >
        {/* Dark Overlay for Legibility (40-60%) */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        {/* Deep Gradient Transition to next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/20 z-0"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pixel-font text-[10px] md:text-sm text-[#ff00ff] tracking-[0.3em] mb-6 md:mb-8 block uppercase drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]"
          >
            {t.tagline}
          </motion.span>
          
          <h1 className="pixel-font text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-10 leading-tight tracking-tighter drop-shadow-2xl">
            {t.title1} <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#00ffff] drop-shadow-[0_0_15px_rgba(255,0,255,0.4)]">{t.titleAccent}</span>.
          </h1>
          
          <p className="vhs-font text-2xl md:text-4xl text-gray-200 mb-10 md:mb-12 max-w-4xl mx-auto leading-snug md:leading-relaxed tracking-wide drop-shadow-md">
            {t.desc}
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mt-8 md:mt-16 max-w-5xl mx-auto">
            <motion.button
              onClick={() => scrollToSection('portfolio')}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,0,255,0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-6 md:px-8 py-4 md:py-5 bg-[#ff00ff] text-white pixel-font text-[11px] md:text-[11px] tracking-widest transition-all rounded-sm border-2 border-[#ff00ff] shadow-[0_0_20px_rgba(255,0,255,0.3)]"
            >
              {t.btnPortfolio}
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('about')}
              whileHover={{ scale: 1.05, borderColor: '#00ffff', color: '#00ffff' }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 md:flex-none px-6 md:px-8 py-4 md:py-5 border-2 border-white/20 text-white pixel-font text-[10px] md:text-[11px] tracking-widest hover:border-[#00ffff]/50 transition-all rounded-sm backdrop-blur-sm"
            >
              {t.btnAbout}
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('academic')}
              whileHover={{ scale: 1.05, borderColor: '#00ffff', color: '#00ffff' }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 md:flex-none px-6 md:px-8 py-4 md:py-5 border-2 border-white/20 text-white pixel-font text-[10px] md:text-[11px] tracking-widest hover:border-[#00ffff]/50 transition-all rounded-sm backdrop-blur-sm"
            >
              {t.btnAcademic}
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('experience')}
              whileHover={{ scale: 1.05, borderColor: '#00ffff', color: '#00ffff' }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-6 md:px-8 py-4 md:py-5 border-2 border-white/20 text-white pixel-font text-[10px] md:text-[11px] tracking-widest hover:border-[#00ffff]/50 transition-all rounded-sm backdrop-blur-sm"
            >
              {t.btnExperience}
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('socials')}
              whileHover={{ scale: 1.05, borderColor: '#ff00ff', color: '#ff00ff' }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 md:flex-none px-6 md:px-8 py-4 md:py-5 border-2 border-white/20 text-white pixel-font text-[10px] md:text-[11px] tracking-widest hover:border-[#ff00ff]/50 transition-all rounded-sm backdrop-blur-sm"
            >
              {t.btnSocials}
            </motion.button>

            <motion.button
              onClick={() => window.open('https://w.app/picmi', '_blank')}
              whileHover={{ scale: 1.05, borderColor: '#ff00ff', color: '#ff00ff' }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 md:flex-none px-6 md:px-8 py-4 md:py-5 border-2 border-white/20 text-white pixel-font text-[10px] md:text-[11px] tracking-widest hover:border-[#ff00ff]/50 transition-all rounded-sm backdrop-blur-sm"
            >
              {t.btnContact}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Orbs (Opacity adjusted for the new background) */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#ff00ff]/20 blur-[120px] rounded-full pointer-events-none"
      />
    </section>
  );
};

export default Hero;