
import React from 'react';
import { motion } from 'framer-motion';
import { TRANSLATIONS } from '../constants';

interface Props {
  lang: 'pt' | 'en';
}

const Experience: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang].experience;

  const visionPhotos = [
    { url: 'https://i.ibb.co/1fv17XRG/IMG-1186.jpg', alt: 'Vision I' },
    { url: 'https://i.ibb.co/4Rd3Tt8k/IMG-1187.jpg', alt: 'Vision II' }
  ];

  return (
    <section id="experience" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="pixel-font text-[#ff00ff] text-xs tracking-[0.4em] mb-4 block uppercase">{t.tag}</span>
          <h2 className="pixel-font text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase">
            {t.title}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Vision Produtora - Layout replicado do Photopark */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="p-10 bg-white/[0.02] border border-white/10 rounded-sm relative group flex flex-col h-full overflow-hidden"
          >
            <div className="flex justify-between items-start mb-10">
              <div>
                <h3 className="pixel-font text-2xl text-[#00ffff] mb-2 uppercase tracking-tighter">{t.visionTitle}</h3>
                <a href="https://instagram.com/vision_produtora" target="_blank" rel="noopener noreferrer" className="vhs-font text-xl text-[#ff00ff] hover:text-[#00ffff] transition-colors tracking-widest">
                  {t.visionHandle}
                </a>
              </div>
              <span className="pixel-font text-4xl opacity-10 group-hover:opacity-30 transition-opacity">01</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-10">
              {visionPhotos.map((photo, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.03 }} 
                  className="relative aspect-square overflow-hidden rounded-sm border border-white/10 shadow-lg"
                >
                  <img 
                    src={photo.url} 
                    alt={photo.alt} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                  />
                </motion.div>
              ))}
            </div>

            <div className="bg-white/[0.03] p-6 border-l-2 border-[#ff00ff] mb-8">
               <p className="body-font text-gray-300 text-lg md:text-xl leading-relaxed italic font-light">
                 {t.visionDesc}
               </p>
            </div>
            
            <div className="mt-auto flex justify-between items-center">
              <span className="pixel-font text-[10px] text-[#00ffff] animate-pulse">VISION_DATA_LOADED</span>
            </div>
          </motion.div>

          {/* Photopark + Mundo Pixar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="p-10 bg-white/[0.02] border border-[#00ffff]/20 rounded-sm relative group flex flex-col h-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="flex justify-between items-start mb-10">
              <div>
                <h3 className="pixel-font text-2xl text-[#00ffff] mb-2 uppercase tracking-tighter">{t.photoparkTitle}</h3>
                <a href="https://instagram.com/photoparkbr" target="_blank" rel="noopener noreferrer" className="vhs-font text-xl text-[#ff00ff] hover:text-[#00ffff] transition-colors tracking-widest">
                  {t.photoparkHandle}
                </a>
              </div>
              <span className="pixel-font text-4xl opacity-10 group-hover:opacity-30 transition-opacity">02</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-10">
              <motion.div whileHover={{ scale: 1.03 }} className="relative aspect-square overflow-hidden rounded-sm border border-white/10 shadow-lg">
                <img src="https://i.ibb.co/FkHmBQF8/IMG-5107.png" alt="Photopark Work I" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} className="relative aspect-square overflow-hidden rounded-sm border border-white/10 shadow-lg">
                <img src="https://i.ibb.co/cKTR8CHy/IMG-1308.jpg" alt="Photopark Work II" className="w-full h-full object-cover" />
              </motion.div>
            </div>

            <div className="bg-white/[0.03] p-6 border-l-2 border-[#ff00ff] mb-8">
               <p className="body-font text-gray-300 text-lg leading-relaxed italic font-light">
                 {t.photoparkDesc}
               </p>
            </div>

            <div className="mt-auto flex justify-between items-center">
              <span className="pixel-font text-[10px] text-[#00ffff] animate-pulse">ACTIVE_EXPERIENCE</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
