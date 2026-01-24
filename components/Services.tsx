
import React from 'react';
import { motion } from 'framer-motion';
import { GET_SERVICES, TRANSLATIONS } from '../constants';

interface Props {
  lang: 'pt' | 'en';
}

const Services: React.FC<Props> = ({ lang }) => {
  const services = GET_SERVICES(lang);
  const t = TRANSLATIONS[lang].services;

  return (
    <section id="services" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:text-right"
        >
          <h2 className="pixel-font text-2xl md:text-3xl text-[#00ffff] mb-3 uppercase">{t.title}</h2>
          <p className="vhs-font text-lg text-gray-500 uppercase tracking-widest">{t.desc}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02, 
                backgroundColor: 'rgba(255, 0, 255, 0.03)',
                borderColor: 'rgba(255, 0, 255, 0.3)' 
              }}
              className="p-8 border border-[#ff00ff]/10 bg-[#050505]/60 backdrop-blur-sm rounded-sm transition-all group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
                {service.icon}
              </div>
              <h3 className="pixel-font text-base text-white mb-4 group-hover:text-[#00ffff] transition-colors uppercase">
                {service.title}
              </h3>
              <p className="body-font text-sm md:text-base text-gray-400 leading-relaxed font-light">
                {service.description}
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-1 flex-1 bg-gray-900 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    className="h-full bg-[#ff00ff]"
                  />
                </div>
                <span className="pixel-font text-[8px] text-[#ff00ff]/60">LVL_99</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
