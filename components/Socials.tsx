
import React from 'react';
import { motion } from 'framer-motion';
import { TRANSLATIONS } from '../constants';

interface Props {
  lang: 'pt' | 'en';
}

const Socials: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang].socials;

  const socialProfiles = [
    {
      name: t.fotografia,
      url: 'https://www.instagram.com/pic_mi__/',
      color: '#ff00ff',
      handle: '@pic_mi__',
      label: lang === 'pt' ? 'FOTOGRAFIA' : 'PHOTOGRAPHY'
    },
    {
      name: t.producoes,
      url: 'https://www.instagram.com/picmi_prod/',
      color: '#00ffff',
      handle: '@picmi_prod',
      label: lang === 'pt' ? 'PRODUÇÕES' : 'PRODUCTIONS'
    }
  ];

  const InstagramIcon = ({ color }: { color: string }) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: `drop-shadow(0 0 8px ${color}66)` }}>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke={color} strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="5" stroke={color} strokeWidth="1.5"/>
      <circle cx="18" cy="6" r="1.5" fill={color}/>
    </svg>
  );

  return (
    <section id="socials" className="py-20 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff00ff]/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="pixel-font text-[#00ffff] text-[9px] tracking-[0.5em] mb-4 block uppercase opacity-80">
            [ {t.tag} ]
          </span>
          <h2 className="pixel-font text-2xl md:text-4xl font-bold text-white mb-6 tracking-tighter uppercase">
            {t.title}
          </h2>
          <p className="vhs-font text-lg text-gray-500 max-w-2xl mx-auto uppercase tracking-widest">
            {t.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {socialProfiles.map((profile, index) => (
            <motion.a
              key={profile.handle}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02, 
                borderColor: profile.color,
                backgroundColor: 'rgba(255, 255, 255, 0.01)'
              }}
              whileTap={{ scale: 0.98 }}
              className="relative group p-8 border border-white/5 bg-white/[0.01] rounded-sm transition-all duration-500 flex flex-col items-center text-center overflow-hidden"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                <InstagramIcon color={profile.color} />
              </div>

              <span className="vhs-font text-[#00ffff] text-xs tracking-[0.3em] mb-2 uppercase opacity-50 group-hover:opacity-100 group-hover:text-white transition-all">
                {profile.label}
              </span>
              
              <h3 className="pixel-font text-sm md:text-base text-white mb-4 group-hover:text-[#ff00ff] transition-colors uppercase">
                {profile.name}
              </h3>

              <div className="px-4 py-1.5 bg-white/5 border border-white/5 rounded-full">
                <span className="vhs-font text-gray-400 text-base tracking-widest group-hover:text-white transition-colors">
                  {profile.handle}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Socials;
