
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
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: `drop-shadow(0 0 8px ${color}88)` }}>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke={color} strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="5" stroke={color} strokeWidth="1.5"/>
      <circle cx="18" cy="6" r="1.5" fill={color}/>
    </svg>
  );

  return (
    <section id="socials" className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff00ff]/20 to-transparent"></div>
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="pixel-font text-[#00ffff] text-[10px] tracking-[0.5em] mb-6 block uppercase animate-pulse">
            [ {t.tag} ]
          </span>
          <h2 className="pixel-font text-3xl md:text-5xl font-bold text-white mb-8 tracking-tighter">
            {t.title}
          </h2>
          <p className="vhs-font text-xl text-gray-500 max-w-2xl mx-auto uppercase tracking-widest">
            {t.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {socialProfiles.map((profile, index) => (
            <motion.a
              key={profile.handle}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                borderColor: profile.color,
                boxShadow: `0 20px 40px ${profile.color}15`
              }}
              whileTap={{ scale: 0.98 }}
              className="relative group p-12 bg-white/[0.02] border-2 border-white/10 rounded-sm transition-all duration-500 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Scanline Effect on Hover */}
              <motion.div 
                animate={{ y: [-100, 300] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100"
              />

              <div className="mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <InstagramIcon color={profile.color} />
              </div>

              <span className="vhs-font text-[#00ffff] text-sm tracking-[0.3em] mb-2 uppercase opacity-60 group-hover:opacity-100 group-hover:text-white transition-all">
                {profile.label}
              </span>
              
              <h3 className="pixel-font text-lg md:text-xl text-white mb-4 group-hover:text-[#ff00ff] transition-colors">
                {profile.name}
              </h3>

              <div className="px-6 py-2 bg-white/5 border border-white/10 rounded-full">
                <span className="vhs-font text-gray-400 text-lg tracking-widest group-hover:text-white transition-colors">
                  {profile.handle}
                </span>
              </div>

              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/5 group-hover:border-[${profile.color}]/40 transition-colors`}></div>
              <div className={`absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/5 group-hover:border-[${profile.color}]/40 transition-colors`}></div>
            </motion.a>
          ))}
        </div>

        {/* Bottom Deco */}
        <div className="mt-24 flex justify-center opacity-20">
          <div className="pixel-font text-[8px] text-gray-500 tracking-[1em] uppercase">
            Visual_Access_Granted_2024
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;
