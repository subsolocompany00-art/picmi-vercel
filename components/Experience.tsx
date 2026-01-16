
import React from 'react';
import { motion } from 'framer-motion';
import { TRANSLATIONS } from '../constants';

interface Props {
  lang: 'pt' | 'en';
}

const Experience: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang].experience;

  return (
    <section id="experience" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="pixel-font text-[#ff00ff] text-xs tracking-[0.4em] mb-4 block uppercase">{t.tag}</span>
          <h2 className="body-font text-4xl md:text-5xl font-bold text-white">{t.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision Produtora */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-sm relative group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <span className="pixel-font text-4xl">01</span>
            </div>
            <h3 className="pixel-font text-xl text-[#00ffff] mb-2">{t.visionTitle}</h3>
            <a href="https://instagram.com/vision_produtora" target="_blank" rel="noopener noreferrer" className="vhs-font text-lg text-[#ff00ff] hover:underline mb-6 block tracking-widest">
              {t.visionHandle}
            </a>
            <p className="body-font text-gray-300 text-lg leading-relaxed">
              {t.visionDesc}
            </p>
            <div className="mt-8 flex gap-2">
              <div className="w-2 h-2 bg-[#ff00ff]"></div>
              <div className="w-2 h-2 bg-[#ff00ff]/50"></div>
              <div className="w-2 h-2 bg-[#ff00ff]/20"></div>
            </div>
          </motion.div>

          {/* Photopark */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-sm relative group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <span className="pixel-font text-4xl">02</span>
            </div>
            <h3 className="pixel-font text-xl text-[#00ffff] mb-2">{t.photoparkTitle}</h3>
            <a href="https://instagram.com/photoparkbr" target="_blank" rel="noopener noreferrer" className="vhs-font text-lg text-[#ff00ff] hover:underline mb-6 block tracking-widest">
              {t.photoparkHandle}
            </a>
            <p className="body-font text-gray-300 text-lg leading-relaxed">
              {t.photoparkDesc}
            </p>
            <div className="mt-8 flex gap-2">
              <div className="w-2 h-2 bg-[#00ffff]"></div>
              <div className="w-2 h-2 bg-[#00ffff]/50"></div>
              <div className="w-2 h-2 bg-[#00ffff]/20"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#ff00ff]/5 blur-[100px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default Experience;
