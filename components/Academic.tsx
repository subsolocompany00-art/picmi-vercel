
import React from 'react';
import { motion } from 'framer-motion';
import { TRANSLATIONS } from '../constants';

interface Props {
  lang: 'pt' | 'en';
}

const Academic: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang].academic;

  return (
    <section id="academic" className="py-20 bg-[#050505] relative overflow-hidden border-y border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="pixel-font text-[#00ffff] text-[10px] tracking-[0.4em] mb-3 block uppercase">{t.tag}</span>
          <h2 className="pixel-font text-2xl md:text-4xl font-bold text-white tracking-tighter uppercase">{t.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -3, borderColor: '#ff00ff' }}
            className="p-6 border border-white/10 bg-[#0a0a0a] rounded-sm relative group transition-all"
          >
            <div className="flex items-start gap-5">
              <div className="text-3xl group-hover:animate-pulse">🎓</div>
              <div>
                <h3 className="pixel-font text-base text-white mb-2 uppercase">{t.item1Title}</h3>
                <span className="vhs-font text-[#00ffff] text-sm tracking-widest uppercase mb-3 block">
                  {t.item1Sub}
                </span>
                <p className="body-font text-sm md:text-base text-gray-400 leading-relaxed">
                  {t.item1Desc}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -3, borderColor: '#ff00ff' }}
            className="p-6 border border-white/10 bg-[#0a0a0a] rounded-sm relative group transition-all"
          >
            <div className="flex items-start gap-5">
              <div className="text-3xl group-hover:animate-pulse">🎞️</div>
              <div>
                <h3 className="pixel-font text-base text-white mb-2 uppercase">{t.item2Title}</h3>
                <span className="vhs-font text-[#ff00ff] text-sm tracking-widest uppercase mb-3 block">
                  {t.item2Sub}
                </span>
                <p className="body-font text-sm md:text-base text-gray-400 leading-relaxed">
                  {t.item2Desc}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-6 relative rounded-sm max-w-4xl mx-auto border border-white/5 bg-[#0a0a0a] shadow-xl"
        >
          <div className="relative z-10">
            <div className="pixel-font text-[8px] text-[#00ffff]/50 mb-4 uppercase tracking-[0.2em]">academic_log_entry</div>
            <p className="vhs-font text-lg md:text-xl text-gray-100 leading-relaxed italic">
              {t.fullContent}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Academic;
