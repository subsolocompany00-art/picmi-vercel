
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  onSelect: (lang: 'pt' | 'en') => void;
}

const PixelFlagBR = () => (
  <div className="w-32 h-20 bg-[#009c3b] relative overflow-hidden border-2 border-white/20 shadow-lg group-hover:shadow-[#00ff00]/20 transition-all duration-300">
    {/* Losango Amarelo - Ajustado para proporções oficiais com clip-path */}
    <div 
      className="absolute inset-[10%] bg-[#ffdf00]" 
      style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} 
    />
    {/* Círculo Azul */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#002776] rounded-full border border-black/10" />
    {/* Faixa Branca (Arco) */}
    <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-[2px] bg-white -rotate-[15deg] rounded-full shadow-sm" />
    {/* Overlay de Scanlines para efeito CRT */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20 pointer-events-none" />
  </div>
);

const PixelFlagUS = () => (
  <div className="w-32 h-20 bg-white relative overflow-hidden border-2 border-white/20 shadow-lg group-hover:shadow-[#ff0000]/20 transition-all duration-300 flex flex-col">
    {/* Listras Vermelhas */}
    {[0, 1, 2, 3, 4, 5, 6].map(i => (
      <div key={i} className={`h-[14.2%] w-full ${i % 2 === 0 ? 'bg-[#b22234]' : 'bg-white'}`} />
    ))}
    {/* Cantão Azul */}
    <div className="absolute top-0 left-0 w-[45%] h-[50%] bg-[#3c3b6e] p-1 grid grid-cols-3 grid-rows-3 gap-1">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="w-1 h-1 bg-white rounded-full opacity-60" />
      ))}
    </div>
    {/* Scanline overlay for flag */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20 pointer-events-none" />
  </div>
);

const LanguageSelector: React.FC<Props> = ({ onSelect }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#050505] flex flex-col items-center justify-center z-[90]"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <h2 className="pixel-font text-xl md:text-2xl text-[#00ffff] mb-16 tracking-widest animate-pulse">
          SELECT YOUR LANGUAGE
        </h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          {/* Opção Português */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onSelect('pt')}
            className="flex flex-col items-center group"
          >
            <div className="mb-6 relative">
              <div className="absolute -inset-4 bg-[#00ff00]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <PixelFlagBR />
            </div>
            <span className="pixel-font text-sm text-white group-hover:text-[#ff00ff] transition-colors tracking-tighter">
              PORTUGUÊS (BR)
            </span>
          </motion.button>

          {/* Opção Inglês */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onSelect('en')}
            className="flex flex-col items-center group"
          >
            <div className="mb-6 relative">
              <div className="absolute -inset-4 bg-[#ff0000]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <PixelFlagUS />
            </div>
            <span className="pixel-font text-sm text-white group-hover:text-[#00ffff] transition-colors tracking-tighter">
              ENGLISH (US)
            </span>
          </motion.button>
        </div>
      </motion.div>

      {/* Elementos decorativos de fundo */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l border-t border-white/10" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r border-b border-white/10" />
    </motion.div>
  );
};

export default LanguageSelector;
