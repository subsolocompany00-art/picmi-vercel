import React from 'react';
import { motion } from 'framer-motion';
import { TRANSLATIONS } from '../constants';

interface Props { lang: 'pt' | 'en'; }

const Contact: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang].contact;

  const WhatsAppIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-[0_0_8px_rgba(37,211,102,0.5)]">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 13.91 2.54 15.7 3.47 17.23L2 22L6.89 20.66C8.36 21.51 10.12 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 14.5C15.73 14.5 14.41 13.85 14.16 13.76C13.91 13.67 13.73 13.62 13.55 13.87C13.37 14.12 12.85 14.73 12.69 14.91C12.53 15.09 12.37 15.12 12.1 14.98C11.83 14.85 10.96 14.56 9.93 13.64C9.13 12.93 8.59 12.05 8.43 11.78C8.27 11.51 8.41 11.36 8.55 11.23C8.67 11.11 8.82 10.92 8.96 10.75C9.09 10.58 9.14 10.46 9.23 10.28C9.32 10.1 9.27 9.95 9.2 9.81C9.14 9.67 8.6 8.35 8.37 7.81C8.15 7.28 7.92 7.36 7.76 7.36C7.61 7.36 7.43 7.36 7.25 7.36C7.07 7.36 6.78 7.43 6.53 7.7C6.28 7.97 5.58 8.63 5.58 9.98C5.58 11.33 6.56 12.63 6.7 12.82C6.84 13.01 8.63 15.77 11.38 16.96C12.03 17.24 12.53 17.41 12.92 17.53C13.58 17.74 14.18 17.71 14.65 17.64C15.18 17.56 16.29 16.97 16.52 16.32C16.75 15.67 16.75 15.12 16.68 15C16.61 14.88 16.27 14.76 16 14.5Z" fill="#25D366"/>
      <rect x="1" y="1" width="22" height="22" rx="2" stroke="#25D366" strokeOpacity="0.1" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="#ff00ff" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="4" stroke="#ff00ff" strokeWidth="1.5"/>
      <circle cx="17.5" cy="6.5" r="1" fill="#ff00ff"/>
    </svg>
  );

  return (
    <section id="contact" className="py-40 relative overflow-hidden bg-[#050505]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/Qqcsjv8/MG-1117.jpg" 
          alt="" 
          className="w-full h-full object-cover select-none pointer-events-none"
        />
        {/* Subtle dark gradient overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div 
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="pixel-font text-[#00ffff] text-[10px] font-bold tracking-[0.6em] mb-8 block uppercase drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]"
          >
            [ {t.tag} ]
          </motion.div>
          
          <h2 className="pixel-font text-4xl md:text-7xl font-bold text-white mb-10 tracking-tighter leading-tight drop-shadow-lg">
            {t.t1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#00ffff]">{t.t2}</span> {t.t3}
          </h2>
          <p className="vhs-font text-xl md:text-2xl text-gray-200 mb-24 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            {t.desc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.a 
              href="https://w.app/picmi" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -5, backgroundColor: 'rgba(37, 211, 102, 0.1)' }}
              className="p-10 bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#25D366]/40 transition-all flex flex-col items-center group"
            >
              <WhatsAppIcon />
              <span className="pixel-font text-[10px] text-white mt-6 mb-2 group-hover:text-[#25D366] transition-colors">{t.wa}</span>
            </motion.a>

            <motion.a 
              href="https://instagram.com/pic_mi__/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -5, backgroundColor: 'rgba(255, 0, 255, 0.1)' }}
              className="p-10 bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#ff00ff]/40 transition-all flex flex-col items-center group"
            >
              <InstagramIcon />
              <span className="pixel-font text-[10px] text-white mt-6 mb-2 group-hover:text-[#ff00ff] transition-colors">{t.ig}</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;