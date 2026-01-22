import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PHOTOS, TRANSLATIONS } from '../constants';
import { Photo } from '../types';

interface Props {
  lang: 'pt' | 'en';
}

// Componente Interno para Imagem com Carregamento Otimizado
const OptimizedImage: React.FC<{ photo: Photo; categoryLabel: string; onClick: () => void; priority: boolean }> = ({ photo, categoryLabel, onClick, priority }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="relative group cursor-pointer overflow-hidden rounded-sm border border-white/5 hover:border-[#00ffff]/50 transition-all duration-500 shadow-xl aspect-[3/4] md:aspect-auto"
    >
      {/* Shimmer Placeholder */}
      <div className={`absolute inset-0 z-0 shimmer transition-opacity duration-300 ${isLoaded ? 'opacity-0' : 'opacity-100'}`} />
      
      <img 
        src={photo.url} 
        alt={photo.title} 
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "low"}
        decoding={priority ? "sync" : "async"}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover block transition-all duration-500 group-hover:scale-105 img-fade-in ${isLoaded ? 'img-loaded' : ''}`} 
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 z-20">
        <div className="border-l-2 border-[#00ffff] pl-4">
          <span className="pixel-font text-[8px] text-[#00ffff] mb-2 block uppercase tracking-widest">
            {categoryLabel}
          </span>
          <h3 className="pixel-font text-sm text-white leading-tight">{photo.title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio: React.FC<Props> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('destaque');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const t = TRANSLATIONS[lang].portfolio;

  const filteredPhotos = PHOTOS.filter(p => p.category === activeCategory);

  const categories = [
    { id: 'destaque', label: t.categories.destaque },
    { id: 'shows', label: t.categories.shows },
    { id: 'capa', label: t.categories.capa },
    { id: 'clipes', label: t.categories.clipes, isLink: true },
    { id: 'batalhas', label: t.categories.batalhas },
    { id: 'makingof', label: t.categories.makingof },
    { id: 'moda', label: t.categories.moda },
    { id: 'ecommerce', label: t.categories.ecommerce },
    { id: 'aniversario', label: t.categories.aniversario },
    { id: 'esportes', label: t.categories.esportes },
    { id: 'eventos', label: t.categories.eventos },
    { id: 'still', label: t.categories.still }
  ];

  const handleCategoryClick = (cat: { id: string, isLink?: boolean }) => {
    if (cat.id === 'clipes') {
      window.open('https://youtu.be/_mUKt3h_LSk?si=8Wc_J5neZJ1xVpsG', '_blank');
    } else {
      setActiveCategory(cat.id);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03 } 
    },
    exit: { opacity: 0, transition: { duration: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring' as const, stiffness: 120, damping: 18 }
    }
  };

  return (
    <section id="portfolio" className="py-32 bg-[#050505] relative scroll-mt-20">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff00ff]/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="pixel-font text-3xl md:text-5xl text-[#ff00ff] mb-6 uppercase tracking-tighter">
            {t.title}
          </h2>
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-12 bg-[#00ffff]/30"></div>
            <p className="vhs-font text-xl text-gray-400 tracking-[0.2em]">{t.desc}</p>
            <div className="h-px w-12 bg-[#00ffff]/30"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-20">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat)}
                className={`px-5 py-2 pixel-font text-[9px] md:text-[10px] transition-all duration-500 border-2 relative overflow-hidden group ${
                  activeCategory === cat.id 
                    ? 'text-white border-[#ff00ff] shadow-[0_0_20px_rgba(255,0,255,0.3)]' 
                    : 'text-gray-500 border-white/5 hover:border-[#00ffff]/50 hover:text-white'
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#ff00ff] z-0"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {cat.label}
                  {cat.id === 'clipes' && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:opacity-100">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  )}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              {filteredPhotos.map((photo) => (
                <motion.div key={photo.id} variants={itemVariants}>
                  <OptimizedImage 
                    photo={photo} 
                    categoryLabel={t.categories[photo.category as keyof typeof t.categories]} 
                    onClick={() => setSelectedPhoto(photo)}
                    priority={activeCategory === 'destaque'} 
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          {filteredPhotos.length === 0 && (
            <div className="flex flex-col items-center justify-center py-40 border-2 border-dashed border-white/5 rounded-sm">
              <div className="pixel-font text-[#ff00ff] text-xs mb-6 animate-pulse">SYSTEM_ERROR: NULL_CONTENT</div>
              <p className="vhs-font text-gray-500 text-3xl uppercase tracking-[0.3em]">
                {lang === 'pt' ? 'ÁREA NÃO MAPEADA' : 'UNMAPPED AREA'}
              </p>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050505]/98 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
            >
              <img 
                src={selectedPhoto.url} 
                alt={selectedPhoto.title} 
                className="max-w-full max-h-[80vh] object-contain border border-white/10 shadow-2xl"
              />
              <div className="mt-8 text-center">
                <h2 className="pixel-font text-xl text-[#00ffff] mb-2">{selectedPhoto.title}</h2>
                <p className="vhs-font text-lg text-gray-500 uppercase">{t.categories[selectedPhoto.category as keyof typeof t.categories]}</p>
              </div>
              <button className="absolute top-4 right-4 pixel-font text-[#ff00ff] text-[10px] hover:text-white transition-colors">
                [ FECHAR X ]
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;