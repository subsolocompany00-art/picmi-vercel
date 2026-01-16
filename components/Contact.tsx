
import React from 'react';
import { motion } from 'framer-motion';
import { TRANSLATIONS } from '../constants';

interface Props {
  lang: 'pt' | 'en';
}

const Contact: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang].contact;

  return (
    <section id="contact" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="pixel-font text-[#00ffff] text-xs tracking-[0.5em] mb-6 block uppercase">{t.tag}</span>
          <h2 className="body-font text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            {t.t1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#00ffff]">{t.t2}</span> {t.t3}
          </h2>
          <p className="vhs-font text-xl md:text-2xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">
            {t.desc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.a 
              href="https://wa.me/yournumber" 
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex flex-col items-center p-8 bg-white/[0.03] border border-white/10 rounded-sm hover:border-[#25D366]/50 transition-all group"
            >
              <div className="w-16 h-16 bg-[#25D366]/20 flex items-center justify-center rounded-full mb-4 group-hover:bg-[#25D366]/30 transition-colors">
                <span className="text-3xl text-[#25D366]">W</span>
              </div>
              <span className="pixel-font text-xs text-white mb-2">WHATSAPP</span>
              <span className="body-font text-gray-500 text-sm">{t.wa}</span>
            </motion.a>

            <motion.a 
              href="https://instagram.com/picmi" 
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex flex-col items-center p-8 bg-white/[0.03] border border-white/10 rounded-sm hover:border-[#ff00ff]/50 transition-all group"
            >
              <div className="w-16 h-16 bg-[#ff00ff]/20 flex items-center justify-center rounded-full mb-4 group-hover:bg-[#ff00ff]/30 transition-colors">
                <span className="text-3xl text-[#ff00ff]">I</span>
              </div>
              <span className="pixel-font text-xs text-white mb-2">INSTAGRAM</span>
              <span className="body-font text-gray-500 text-sm">{t.ig}</span>
            </motion.a>
          </div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-block relative p-[1px] bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#ff00ff] rounded-sm"
          >
            <a 
              href="mailto:contato@picmi.com" 
              className="flex items-center gap-3 px-10 py-5 bg-[#050505] text-white pixel-font text-sm hover:bg-transparent transition-all rounded-sm"
            >
              {t.email} <span className="opacity-50">📧</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-32 text-center opacity-40">
        <p className="text-2xl md:text-3xl text-white tracking-widest italic">
          𝓹𝓲𝓬𝓜𝓲  𝓯𝓻𝓸𝓶  𝓩/$
        </p>
      </div>
    </section>
  );
};

export default Contact;
