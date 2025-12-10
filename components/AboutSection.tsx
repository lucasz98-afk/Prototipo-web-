import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../constants';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-light overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left order-2 lg:order-1"
            >
                <h2 className="font-serif text-5xl md:text-6xl text-dark mb-10">¿Quiénes somos?</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed font-light text-lg">
                    <p>
                        Fabricante de furgonetas para caballos con más de 25 años de experiencia, somos una empresa francesa con sede en el norte de España, al sur de Perpiñán.
                    </p>
                    <p>
                        Familia de jinetes, expertos en el transporte ecuestre especializada en la creación, diseño, fabricación y reparación de camiones de caballos, furgoneta para caballos, furgon vans, remolques para el transporte de caballos y camping car.
                    </p>
                    <p>
                        Conocida en toda Europa por calidad y fiabilidad de la marca. Exportamos gracias a la calidad, longevidad y fiabilidad de nuestros vehículos.
                    </p>
                    <p className="italic text-dark font-medium border-l-4 border-gold pl-6 py-2 bg-white shadow-sm rounded-r-xl">
                        Nuestra presencia en los eventos y exposiciones ecuestres más importantes confirma su reputación internacional.
                    </p>
                </div>
                
                <div className="mt-10">
                    <a href="#" className="inline-flex items-center gap-2 px-10 py-4 border border-gray-300 rounded-full uppercase text-xs font-bold tracking-widest hover:bg-dark hover:text-white hover:border-dark transition-all duration-300 group">
                        Ver más <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </motion.div>

            {/* Image/Visual */}
             <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative order-1 lg:order-2"
            >
                {/* Changed aspect ratio to 4/3 or wider to fit the horizontal image better */}
                <div className="aspect-[4/3] bg-gray-200 rounded-[3rem] overflow-hidden shadow-2xl relative border-4 border-white">
                    <img 
                        src={ASSETS.aboutImage} 
                        alt="Quiénes Somos - Fábrica" 
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold/10 -z-10 rounded-full blur-3xl"></div>
                <div className="absolute -top-5 -left-5 w-24 h-24 border border-gold/30 rounded-full -z-10"></div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;