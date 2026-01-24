
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PHOTOS, TRANSLATIONS } from '../constants';
import { Photo } from '../types';

interface Props {
  lang: 'pt' | 'en';
}

const OptimizedImage: React.FC<{ photo: Photo; categoryLabel: string; onClick: () => void; priority: boolean }> = ({ photo, categoryLabel, onClick, priority }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.01 }}
      onClick={onClick}
      className="relative group cursor-pointer overflow-hidden rounded-sm border border-white/5 hover:border-[#00ffff]/30 transition-all duration-500 shadow-sm break-inside-avoid mb-2 md:mb-4 bg-transparent"
    >
      {/* Shimmer Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 z-0 shimmer transition-opacity duration-300 min-h-[100px]" />
      )}
      
      <img 
        src={photo.url} 
        alt={photo.title} 
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "low"}
        decoding={priority ? "sync" : "async"}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-auto block transition-all duration-700 md:group-hover:scale-[1.03] img-fade-in ${isLoaded ? 'img-loaded' : ''}`} 
      />
      
      {/* Overlay minimalista - Otimizado para visualização limpa */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-2 md:p-4 z-20 pointer-events-none">
        <div className="border-l-2 border-[#00ffff] pl-2">
          <span className="pixel-font text-[6px] md:text-[7px] text-[#00ffff] mb-0.5 block uppercase tracking-widest">
            {categoryLabel}
          </span>
          <h3 className="pixel-font text-[7px] md:text-[9px] text-white leading-tight uppercase truncate">{photo.title}</h3>
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
      transition: { staggerChildren: 0.02 } 
    },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <section id="portfolio" className="py-10 md:py-20 bg-[#050505] relative scroll-mt-20">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff00ff]/20 to-transparent"></div>
      
      <div className="max-w-[1600px] mx-auto px-2 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 md:mb-12 text-center"
        >
          <h2 className="pixel-font text-xl md:text-4xl text-[#ff00ff] mb-2 md:mb-4 uppercase tracking-tighter">
            {t.title}
          </h2>
          <p className="vhs-font text-sm md:text-lg text-gray-500 tracking-[0.2em] mb-6 md:mb-8">{t.desc}</p>
          
          <div className="flex flex-wrap justify-center gap-1.5 md:gap-3 mb-8 md:mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat)}
                className={`px-3 py-1.5 md:px-4 md:py-2 pixel-font text-[7px] md:text-[9px] transition-all duration-300 border-2 relative overflow-hidden group ${
                  activeCategory === cat.id 
                    ? 'text-white border-[#ff00ff] shadow-[0_0_15px_rgba(255,0,255,0.2)]' 
                    : 'text-gray-500 border-white/5 hover:border-[#00ffff]/40 hover:text-white'
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#ff00ff] z-0"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {cat.label}
                  {cat.id === 'clipes' && (
                    <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:opacity-100">
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

        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2 md:gap-4 space-y-2 md:space-y-4"
            >
              {filteredPhotos.map((photo) => (
                <OptimizedImage 
                  key={photo.id}
                  photo={photo} 
                  categoryLabel={t.categories[photo.category as keyof typeof t.categories]} 
                  onClick={() => setSelectedPhoto(photo)}
                  priority={activeCategory === 'destaque'} 
                />
              ))}
            </motion.div>
          </AnimatePresence>
          
          {filteredPhotos.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 border border-dashed border-white/5 rounded-sm">
              <div className="pixel-font text-[#ff00ff] text-[8px] mb-3 animate-pulse uppercase">NULL_CONTENT_FOUND</div>
              <p className="vhs-font text-gray-500 text-xl uppercase tracking-[0.2em]">
                {lang === 'pt' ? 'GALERIA VAZIA' : 'EMPTY GALLERY'}
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
            className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-full max-h-full flex flex-col items-center justify-center"
            >
              <img 
                src={selectedPhoto.url} 
                alt={selectedPhoto.title} 
                className="max-w-full max-h-[85vh] object-contain border border-white/10 shadow-2xl"
              />
              <div className="mt-4 md:mt-6 text-center">
                <h2 className="pixel-font text-[9px] md:text-base text-[#00ffff] mb-1">{selectedPhoto.title}</h2>
                <p className="vhs-font text-[10px] md:text-sm text-gray-500 uppercase tracking-widest">{t.categories[selectedPhoto.category as keyof typeof t.categories]}</p>
              </div>
              <button className="absolute -top-12 right-0 pixel-font text-[#ff00ff] text-[8px] md:text-[9px] hover:text-white transition-colors bg-white/5 px-3 py-1 rounded-sm border border-white/10">
                CLOSE [ ESC ]
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
