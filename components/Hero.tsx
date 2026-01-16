
import React from 'react';
import { motion } from 'framer-motion';
import { TRANSLATIONS } from '../constants';

interface Props {
  lang: 'pt' | 'en';
}

const Hero: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang].hero;
  
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Video/Atmosphere */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-panning-over-a-large-city-at-night-42171-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40"></div>
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#ff00ff]/20 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#00ffff]/10 blur-[150px] rounded-full"
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pixel-font text-xs md:text-sm text-[#ff00ff] tracking-[0.3em] mb-8 block uppercase"
          >
            {t.tagline}
          </motion.span>
          
          <h1 className="body-font text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
            {t.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#00ffff]">{t.titleAccent}</span>.
          </h1>
          
          <p className="vhs-font text-2xl md:text-4xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed tracking-wide">
            {t.desc}
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255,0,255,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-[#ff00ff] text-white pixel-font text-xs tracking-widest hover:bg-[#ff00ff]/90 transition-all rounded-sm"
            >
              {t.btnWork}
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, borderColor: '#00ffff', color: '#00ffff' }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 border border-white/20 text-white pixel-font text-xs tracking-widest hover:border-[#00ffff]/50 transition-all rounded-sm backdrop-blur-sm"
            >
              {t.btnQuote}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
