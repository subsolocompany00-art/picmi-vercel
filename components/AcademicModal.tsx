
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TRANSLATIONS } from '../constants';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lang: 'pt' | 'en';
}

const AcademicModal: React.FC<Props> = ({ isOpen, onClose, lang }) => {
  const t = TRANSLATIONS[lang].academic;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#050505]/95 backdrop-blur-2xl"
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateX: 20 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotateX: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-[#0a0a0a] border-4 border-[#ff00ff] p-10 md:p-16 shadow-[0_0_80px_rgba(255,0,255,0.4)] rounded-sm overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            </div>

            <div className="absolute -top-1 -left-1 w-12 h-12 border-t-8 border-l-8 border-[#00ffff]"></div>
            <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-8 border-r-8 border-[#00ffff]"></div>

            <motion.button
              whileHover={{ scale: 1.2, rotate: 90, color: '#ffffff' }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 flex items-center justify-center border-2 border-[#ff00ff] bg-[#ff00ff]/10 text-[#ff00ff] pixel-font text-2xl z-20 hover:bg-[#ff00ff] transition-all"
              aria-label="Fechar"
            >
              {t.close}
            </motion.button>

            <div className="mb-12 flex flex-col items-start gap-4">
              <span className="pixel-font text-[#00ffff] text-[10px] md:text-[12px] animate-pulse uppercase tracking-[0.5em]">
                {t.statusTitle}
              </span>
              <h2 className="pixel-font text-3xl md:text-5xl text-white uppercase tracking-tighter leading-none">
                {t.title}
              </h2>
            </div>

            <div className="relative">
              <div className="body-font text-white text-xl md:text-2xl lg:text-3xl leading-relaxed md:leading-snug whitespace-pre-wrap font-medium drop-shadow-sm">
                {t.fullContent}
              </div>
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-gradient-to-b from-transparent via-[#ff00ff]/20 to-transparent h-12 animate-scan-slow"></div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
              <div className="flex gap-4">
                <div className="px-5 py-2 bg-[#ff00ff]/10 border border-[#ff00ff]/50 rounded-sm">
                  <span className="pixel-font text-[9px] md:text-[11px] text-[#ff00ff]">SKILL_MASTERY: MAX</span>
                </div>
                <div className="px-5 py-2 bg-[#00ffff]/10 border border-[#00ffff]/50 rounded-sm">
                  <span className="pixel-font text-[9px] md:text-[11px] text-[#00ffff]">LANG: FLUENT_ENG</span>
                </div>
              </div>
              <div className="pixel-font text-[10px] text-white/20 uppercase tracking-widest">
                picMi_Protocol_v3.0
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AcademicModal;
