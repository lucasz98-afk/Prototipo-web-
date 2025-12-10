import React from 'react';
import { MODELS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ModelShowcase: React.FC = () => {
  return (
    <section id="modelos" className="py-24 md:py-32 bg-light">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl text-dark mb-6"
          >
            Gama de furgonetas <br />
            <span className="italic text-gray-400">para caballos</span>
          </motion.h2>
          <div className="w-full h-[1px] bg-gray-200 mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MODELS.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group flex flex-col"
            >
              <div className="relative h-[400px] overflow-hidden rounded-3xl mb-8 shadow-2xl">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 z-10" />
                <img 
                  src={model.image} 
                  alt={model.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                />
                {/* Titles removed from here as requested */}
              </div>
              
              <div className="pr-4">
                <h3 className="font-serif text-3xl text-dark mb-3">{model.name}</h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-6 min-h-[48px]">
                  {model.description}
                </p>
                <a 
                  href={`#${model.id}`} 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-xs font-bold uppercase tracking-widest text-dark hover:bg-gold hover:text-white hover:border-gold transition-all group-hover:gap-3 duration-300"
                >
                  Descubrir Modelo <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelShowcase;