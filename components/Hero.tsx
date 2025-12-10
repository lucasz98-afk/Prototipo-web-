import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-dark">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src={ASSETS.heroVideo} type="video/mp4" />
        </video>
        {/* Gradients for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 h-full flex flex-col justify-center items-start pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="overflow-hidden mb-6">
            <motion.h1 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-[1.1]"
            >
              Gama de <br />
              furgonetas para <br />
              <span className="text-gold italic pr-2">caballos</span>
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex items-center gap-4 mt-8"
          >
             <a 
               href="#modelos" 
               className="group bg-transparent border border-white text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-dark transition-all duration-300 flex items-center gap-3"
             >
                Descubrir todos los modelos
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
             </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative side text */}
      <div className="hidden lg:block absolute right-12 bottom-12 z-10">
        <p className="text-white/40 text-xs tracking-[0.3em] uppercase [writing-mode:vertical-rl] rotate-180">
          Carrosserie Ameline • Since 1993
        </p>
      </div>
    </div>
  );
};

export default Hero;