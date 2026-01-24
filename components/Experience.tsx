
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
    <section id="experience" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="pixel-font text-[#ff00ff] text-[10px] tracking-[0.4em] mb-3 block uppercase">{t.tag}</span>
          <h2 className="pixel-font text-2xl md:text-4xl font-bold text-white tracking-tighter uppercase">
            {t.title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision Produtora */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-8 bg-white/[0.01] border border-white/5 rounded-sm relative group flex flex-col h-full overflow-hidden transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="pixel-font text-xl text-[#00ffff] mb-2 uppercase tracking-tighter">{t.visionTitle}</h3>
                <a href="https://instagram.com/vision_produtora" target="_blank" rel="noopener noreferrer" className="vhs-font text-lg text-[#ff00ff] hover:text-[#00ffff] transition-colors tracking-widest uppercase">
                  {t.visionHandle}
                </a>
              </div>
              <span className="pixel-font text-3xl opacity-5 group-hover:opacity-20 transition-opacity">01</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {visionPhotos.map((photo, idx) => (
                <div key={idx} className="relative aspect-square overflow-hidden rounded-sm border border-white/5">
                  <img 
                    src={photo.url} 
                    alt={photo.alt} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  />
                </div>
              ))}
            </div>

            <div className="bg-white/[0.02] p-5 border-l border-[#ff00ff] mb-6">
               <p className="body-font text-gray-400 text-base leading-relaxed italic font-light">
                 {t.visionDesc}
               </p>
            </div>
            
            <div className="mt-auto flex justify-between items-center">
              <span className="pixel-font text-[8px] text-[#00ffff]/40 animate-pulse">VISION_SYNC_ACTIVE</span>
            </div>
          </motion.div>

          {/* Photopark + Mundo Pixar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-8 bg-white/[0.01] border border-[#00ffff]/10 rounded-sm relative group flex flex-col h-full shadow-lg transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="pixel-font text-xl text-[#00ffff] mb-2 uppercase tracking-tighter">{t.photoparkTitle}</h3>
                <a href="https://instagram.com/photoparkbr" target="_blank" rel="noopener noreferrer" className="vhs-font text-lg text-[#ff00ff] hover:text-[#00ffff] transition-colors tracking-widest uppercase">
                  {t.photoparkHandle}
                </a>
              </div>
              <span className="pixel-font text-3xl opacity-5 group-hover:opacity-20 transition-opacity">02</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="relative aspect-square overflow-hidden rounded-sm border border-white/5">
                <img src="https://i.ibb.co/FkHmBQF8/IMG-5107.png" alt="Photopark Work I" className="w-full h-full object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-sm border border-white/5">
                <img src="https://i.ibb.co/cKTR8CHy/IMG-1308.jpg" alt="Photopark Work II" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="bg-white/[0.02] p-5 border-l border-[#ff00ff] mb-6">
               <p className="body-font text-gray-400 text-base leading-relaxed italic font-light">
                 {t.photoparkDesc}
               </p>
            </div>

            <div className="mt-auto flex justify-between items-center">
              <span className="pixel-font text-[8px] text-[#00ffff]/40 animate-pulse">PHOTOPARK_ACTIVE_NODE</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
