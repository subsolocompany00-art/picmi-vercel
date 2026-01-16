
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import LanguageSelector from './components/LanguageSelector';
import { TRANSLATIONS } from './constants';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowLanguageSelector(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleLanguageSelect = (lang: 'pt' | 'en') => {
    setLanguage(lang);
    setShowLanguageSelector(false);
  };

  const t = TRANSLATIONS[language];

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div 
            key="loading"
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#050505] flex flex-col items-center justify-center z-[100]"
          >
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }} 
              transition={{ repeat: Infinity, duration: 1 }}
              className="pixel-font text-magenta-500 text-2xl text-[#ff00ff]"
            >
              LOADING...
            </motion.div>
            <div className="w-48 h-2 bg-gray-800 mt-4 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.8 }}
                className="h-full bg-[#00ffff]"
              />
            </div>
          </motion.div>
        )}

        {showLanguageSelector && !loading && (
          <LanguageSelector onSelect={handleLanguageSelect} />
        )}

        {!loading && !showLanguageSelector && (
          <motion.div 
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar lang={language} />
            <main>
              <Hero lang={language} />
              <About lang={language} />
              <Experience lang={language} />
              <Portfolio lang={language} />
              <Services lang={language} />
              <Contact lang={language} />
            </main>
            
            <footer className="bg-[#050505] py-12 border-t border-[#ff00ff]/20 text-center flex flex-col items-center gap-6">
              <div className="vhs-font text-gray-400 text-xl flex flex-col md:flex-row items-center gap-2 md:gap-4">
                <span>&copy; {new Date().getFullYear()} picMi</span>
                <span className="hidden md:inline">|</span>
                <span>{t.footer.rights}</span>
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-3xl md:text-4xl text-white select-none tracking-wider font-serif italic"
              >
                𝓹𝓲𝓬𝓜𝓲  𝓯𝓻𝓸𝓶  𝓩/$
              </motion.div>

              <div className="pixel-font text-[10px] text-[#00ffff]/30 animate-pulse mt-4">
                INSERT COIN TO CONTINUE
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
