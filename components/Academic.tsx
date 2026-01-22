import React from 'react';
import { motion } from 'framer-motion';
import { TRANSLATIONS } from '../constants';

interface Props {
  lang: 'pt' | 'en';
}

const Academic: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang].academic;

  return (
    <section id="academic" className="py-24 bg-[#050505] relative overflow-hidden border-y border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="pixel-font text-[#00ffff] text-xs tracking-[0.4em] mb-4 block uppercase">{t.tag}</span>
          <h2 className="pixel-font text-3xl md:text-4xl font-bold text-white tracking-tighter">{t.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, borderColor: '#ff00ff' }}
            className="p-8 border-2 border-white/10 bg-[#0a0a0a] rounded-sm relative group transition-colors"
          >
            <div className="flex items-start gap-6">
              <div className="text-4xl group-hover:animate-bounce">🎓</div>
              <div>
                <h3 className="pixel-font text-lg text-white mb-2">{t.item1Title}</h3>
                <span className="vhs-font text-[#00ffff] text-sm tracking-widest uppercase mb-4 block">
                  {t.item1Sub}
                </span>
                <p className="body-font text-gray-400 leading-relaxed">
                  {t.item1Desc}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5, borderColor: '#ff00ff' }}
            className="p-8 border-2 border-white/10 bg-[#0a0a0a] rounded-sm relative group transition-colors"
          >
            <div className="flex items-start gap-6">
              <div className="text-4xl group-hover:animate-bounce">🎞️</div>
              <div>
                <h3 className="pixel-font text-lg text-white mb-2">{t.item2Title}</h3>
                <span className="vhs-font text-[#ff00ff] text-sm tracking-widest uppercase mb-4 block">
                  {t.item2Sub}
                </span>
                <p className="body-font text-gray-400 leading-relaxed">
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
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 relative rounded-sm max-w-4xl mx-auto overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl"
        >
          <div className="relative z-10">
            <div className="pixel-font text-[9px] text-[#00ffff] mb-4 uppercase opacity-50">Mastery_Log: Data_Stream</div>
            <p className="vhs-font text-xl md:text-2xl text-gray-100 leading-relaxed">
              {t.fullContent}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Academic;