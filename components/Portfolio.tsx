
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PHOTOS, TRANSLATIONS } from '../constants';
import { Photo } from '../types';

interface Props {
  lang: 'pt' | 'en';
}

const Portfolio: React.FC<Props> = ({ lang }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const t = TRANSLATIONS[lang].portfolio;

  const filteredPhotos = activeCategory === 'all' 
    ? PHOTOS 
    : PHOTOS.filter(p => p.category === activeCategory);

  const categories = [
    { id: 'all', label: t.all },
    { id: 'shows', label: t.categories.shows },
    { id: 'capa', label: t.categories.capa },
    { id: 'clipes', label: t.categories.clipes },
    { id: 'batalhas', label: t.categories.batalhas },
    { id: 'makingof', label: t.categories.makingof },
    { id: 'moda', label: t.categories.moda },
    { id: 'ecommerce', label: t.categories.ecommerce },
    { id: 'aniversario', label: t.categories.aniversario },
    { id: 'esportes', label: t.categories.esportes },
    { id: 'eventos', label: t.categories.eventos },
    { id: 'still', label: t.categories.still }
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="pixel-font text-3xl md:text-5xl text-[#ff00ff] mb-4 uppercase tracking-tighter">
            {t.title}
          </h2>
          <p className="vhs-font text-xl text-gray-400 mb-12 tracking-widest">{t.desc}</p>
          
          {/* Category Filter Menu */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 pixel-font text-[9px] md:text-[10px] transition-all duration-300 border-2 ${
                  activeCategory === cat.id 
                    ? 'bg-[#ff00ff] text-white border-[#ff00ff] shadow-[0_0_15px_rgba(255,0,255,0.4)]' 
                    : 'bg-transparent text-gray-500 border-white/10 hover:border-[#ff00ff]/50 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="min-h-[400px]">
          {filteredPhotos.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredPhotos.map((photo) => (
                  <motion.div
                    key={photo.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -10 }}
                    onClick={() => setSelectedPhoto(photo)}
                    className="relative aspect-square group cursor-pointer overflow-hidden border-2 border-transparent hover:border-[#ff00ff] transition-all duration-300"
                  >
                    <img 
                      src={photo.url} 
                      alt={photo.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ff00ff]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="pixel-font text-[8px] text-white/70 mb-2 uppercase">{t.categories[photo.category as keyof typeof t.categories]}</span>
                      <h3 className="pixel-font text-lg text-white">{photo.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-white/5 rounded-lg"
            >
              <div className="pixel-font text-gray-700 text-sm mb-4">404 CONTENT NOT FOUND</div>
              <p className="vhs-font text-gray-500 text-2xl uppercase tracking-widest">
                {lang === 'pt' ? 'Nenhum arquivo encontrado neste nível' : 'No files found at this level'}
              </p>
              <div className="mt-8 flex gap-4">
                <div className="w-12 h-1 bg-white/5"></div>
                <div className="w-12 h-1 bg-[#ff00ff]/20"></div>
                <div className="w-12 h-1 bg-white/5"></div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-[#050505]/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, rotateY: 90 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.9, rotateY: 90 }}
              className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
            >
              <img 
                src={selectedPhoto.url} 
                alt={selectedPhoto.title} 
                className="max-w-full max-h-[80vh] object-contain border-4 border-[#ff00ff] shadow-[0_0_30px_rgba(255,0,255,0.4)]"
              />
              <div className="mt-8 text-center">
                <h2 className="pixel-font text-2xl text-[#00ffff]">{selectedPhoto.title}</h2>
                <p className="vhs-font text-xl text-gray-400 mt-2 uppercase">
                  {t.categories[selectedPhoto.category as keyof typeof t.categories]} {t.moduleCompleted}
                </p>
              </div>
              <button 
                className="absolute top-0 right-0 p-4 pixel-font text-[#ff00ff] hover:text-[#00ffff]"
                onClick={() => setSelectedPhoto(null)}
              >
                [X] ESC
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
