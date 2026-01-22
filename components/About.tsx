import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TRANSLATIONS } from '../constants';

interface Props {
  lang: 'pt' | 'en';
}

const About: React.FC<Props> = ({ lang }) => {
  const [loadedMain, setLoadedMain] = useState(false);
  const [loadedSec, setLoadedSec] = useState(false);
  const t = TRANSLATIONS[lang].about;

  return (
    <section id="about" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Lado das Imagens - Layout de Colagem */}
          <div className="relative h-[500px] md:h-[650px] flex items-center justify-center lg:justify-start">
            {/* Decorações de Fundo */}
            <div className="absolute -top-10 -left-10 w-32 h-32 border-l border-t border-[#ff00ff]/30 hidden md:block"></div>
            <div className="absolute -bottom-10 right-10 w-32 h-32 border-r border-b border-[#00ffff]/30 hidden md:block"></div>
            
            {/* Foto 1 - Principal (Millena) */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute left-0 top-0 w-[65%] md:w-[60%] z-20"
            >
              <div className={`aspect-[4/5] rounded-sm overflow-hidden border border-white/10 shadow-2xl ${!loadedMain ? 'shimmer' : ''}`}>
                <img 
                  src="https://i.ibb.co/LXT8GLP3/50tonsdebritto-209.jpg" 
                  alt="Millena Almeida - picMi" 
                  onLoad={() => setLoadedMain(true)}
                  className={`w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 img-fade-in ${loadedMain ? 'img-loaded' : ''}`}
                />
              </div>
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#ff00ff] z-30"></div>
            </motion.div>

            {/* Foto 2 - Nova Imagem (Sobreposta) */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="absolute right-0 bottom-0 md:bottom-10 w-[65%] md:w-[60%] z-30"
            >
              <div className={`aspect-[4/5] rounded-sm overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] ${!loadedSec ? 'shimmer' : ''}`}>
                <img 
                  src="https://i.ibb.co/r2vMpw7m/DE84-BADA-47-CC-4432-86-E0-4-F3-CC00-CFA89.jpg" 
                  alt="Millena Almeida - picMi Portfolio" 
                  onLoad={() => setLoadedSec(true)}
                  className={`w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 img-fade-in ${loadedSec ? 'img-loaded' : ''}`}
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#00ffff] z-40"></div>
            </motion.div>
          </div>

          {/* Lado do Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="pixel-font text-[#00ffff] text-xs tracking-[0.4em] mb-4 block">{t.tag}</span>
            <h2 className="pixel-font text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">{t.title}</h2>
            
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