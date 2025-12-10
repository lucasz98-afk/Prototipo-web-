import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown, Check } from 'lucide-react';
import { NAV_ITEMS, ASSETS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState({ code: 'ES', label: 'Español' });

  const languages = [
    { code: 'ES', label: 'Español' },
    { code: 'FR', label: 'Français' },
    { code: 'EN', label: 'English' },
    { code: 'IT', label: 'Italiano' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full ${
          scrolled 
            ? 'top-4 w-[95%] lg:w-[92%] bg-white/80 backdrop-blur-xl shadow-lg border border-white/20 py-3' 
            : 'top-6 w-[95%] lg:w-[92%] bg-white/10 backdrop-blur-md border border-white/10 py-4'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-10 flex justify-between items-center relative">
          {/* Logo */}
          <a href="#" className="flex-shrink-0 relative z-50">
            <img 
              src={ASSETS.logo} 
              alt="Carrosserie Ameline" 
              className={`transition-all duration-500 object-contain ${scrolled ? 'h-8' : 'h-10 brightness-0 invert'}`} 
            />
          </a>

          {/* Desktop Nav - Absolutely Centered */}
          <div className="hidden xl:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className={`text-[11px] font-bold tracking-[0.2em] uppercase hover:text-gold transition-all duration-300 relative group whitespace-nowrap ${scrolled ? 'text-dark' : 'text-white'}`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden xl:flex items-center gap-6 flex-shrink-0 z-50">
              {/* Language Switcher */}
              <div className="relative">
                <button 
                  onClick={() => setLangOpen(!langOpen)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-[11px] font-bold tracking-wider group border border-transparent ${
                    scrolled ? 'text-dark hover:bg-gray-100' : 'text-white hover:bg-white/10'
                  }`}
                >
                    <Globe size={14} className="group-hover:text-gold transition-colors" />
                    <span>{currentLang.code}</span>
                    <ChevronDown size={10} className={`transform transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 top-full mt-2 w-40 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden py-2"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setCurrentLang(lang);
                            setLangOpen(false);
                          }}
                          className="w-full text-left px-4 py-2.5 text-xs text-dark hover:bg-gray-50 hover:text-gold transition-colors flex items-center justify-between"
                        >
                          {lang.label}
                          {currentLang.code === lang.code && <Check size={12} className="text-gold" />}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a 
                href="#contacto" 
                className={`px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 border ${
                    scrolled 
                    ? 'bg-dark text-white border-dark hover:bg-gold hover:border-gold shadow-md hover:shadow-lg' 
                    : 'bg-white text-dark border-white hover:bg-gold hover:text-white hover:border-gold'
                }`}
              >
                Contacto
              </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`xl:hidden p-2 rounded-full transition-colors relative z-50 ${scrolled ? 'text-dark' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-x-4 top-4 rounded-[2rem] bg-white/95 backdrop-blur-2xl z-40 flex flex-col p-8 shadow-2xl border border-white/40 overflow-hidden max-h-[90vh]"
          >
             <div className="flex justify-between items-center mb-8">
                 <img src={ASSETS.logo} alt="Logo" className="h-8" />
                 <button onClick={() => setIsOpen(false)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                     <X size={20} className="text-dark" />
                 </button>
             </div>

            <div className="flex flex-col space-y-1 mb-8 overflow-y-auto">
                {NAV_ITEMS.map((item) => (
                    <a 
                      key={item.label} 
                      href={item.href}
                      className="text-lg font-serif font-medium text-dark hover:text-gold hover:pl-2 transition-all py-3 border-b border-gray-100"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                ))}
            </div>
            <div className="mt-auto space-y-4">
                 <div className="grid grid-cols-2 gap-2">
                    {languages.map(lang => (
                         <button 
                            key={lang.code}
                            onClick={() => setCurrentLang(lang)}
                            className={`flex items-center justify-center gap-2 text-xs font-bold p-3 rounded-xl transition-colors ${currentLang.code === lang.code ? 'bg-gold text-white' : 'bg-gray-50 text-dark'}`}
                         >
                            {lang.label}
                         </button>
                    ))}
                 </div>
                 <a href="#contacto" className="block w-full text-center bg-dark text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-gold transition-colors shadow-lg" onClick={() => setIsOpen(false)}>
                    Solicitar Presupuesto
                 </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;