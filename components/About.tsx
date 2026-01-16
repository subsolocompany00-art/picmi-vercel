
import React from 'react';
import { motion } from 'framer-motion';
import { TRANSLATIONS } from '../constants';

interface Props {
  lang: 'pt' | 'en';
}

const About: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang].about;

  return (
    <section id="about" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-32 h-32 border-l border-t border-[#ff00ff]/30"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 border-r border-b border-[#00ffff]/30"></div>
            <img 
              src="https://images.unsplash.com/photo-1542038783-0adba5826920?auto=format&fit=crop&q=80&w=800" 
              alt="Câmera Profissional" 
              className="w-full h-auto rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="pixel-font text-[#00ffff] text-xs tracking-[0.4em] mb-4 block">{t.tag}</span>
            <h2 className="body-font text-4xl md:text-5xl font-bold text-white mb-8">{t.title}</h2>
            
            <div className="space-y-6">
              <p className="body-font text-lg md:text-xl text-gray-300 leading-relaxed font-light">{t.p1}</p>
              <p className="body-font text-lg text-gray-400 leading-relaxed border-l-2 border-[#ff00ff] pl-8 py-2 italic">{t.p2}</p>
              <p className="body-font text-lg text-gray-300 leading-relaxed">{t.p3}</p>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <span className="pixel-font text-[#ff00ff] text-2xl block mb-1">100+</span>
                <span className="vhs-font text-gray-500 text-sm tracking-widest uppercase">{t.projects}</span>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <span className="pixel-font text-[#00ffff] text-2xl block mb-1">∞</span>
                <span className="vhs-font text-gray-500 text-sm tracking-widest uppercase">{t.creativity}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
