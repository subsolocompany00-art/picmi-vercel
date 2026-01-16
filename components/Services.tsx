
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
    <section id="services" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-right"
        >
          <h2 className="pixel-font text-3xl text-[#00ffff] mb-4">{t.title}</h2>
          <p className="vhs-font text-xl text-gray-400">{t.desc}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.03, 
                backgroundColor: 'rgba(255, 0, 255, 0.05)',
                boxShadow: '0 0 20px rgba(255, 0, 255, 0.2)' 
              }}
              className="p-8 border-2 border-[#ff00ff]/20 rounded-lg transition-all group"
            >
              <div className="text-5xl mb-6 group-hover:scale-125 transition-transform inline-block">
                {service.icon}
              </div>
              <h3 className="pixel-font text-lg text-white mb-4 group-hover:text-[#00ffff] transition-colors">
                {service.title}
              </h3>
              <p className="body-font text-gray-400 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-8 flex items-center gap-2">
                <div className="h-2 flex-1 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                    className="h-full bg-[#ff00ff]"
                  />
                </div>
                <span className="pixel-font text-[10px] text-[#ff00ff]">LVL. 99</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
