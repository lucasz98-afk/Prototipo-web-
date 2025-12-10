import React from 'react';
import { DISTRIBUTORS } from '../constants';
import { MapPin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const DistributorSection: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-gray-50 rounded-[3rem] p-8 md:p-12 shadow-xl overflow-hidden border border-gray-100">
            
            {/* Sidebar List */}
            <div className="lg:col-span-4 flex flex-col justify-center">
                <h2 className="font-serif text-3xl md:text-4xl text-dark mb-10">Encontrar un distribuidor</h2>
                
                <div className="space-y-8">
                    {DISTRIBUTORS.map((dist, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group pl-4 border-l-2 border-gray-200 hover:border-gold transition-colors duration-300"
                        >
                            <div className="flex items-center gap-2 mb-1">
                                <span className="bg-gold text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wide">
                                    {dist.country}
                                </span>
                            </div>
                            <h3 className="font-bold text-dark text-lg group-hover:text-gold transition-colors">{dist.name}</h3>
                            <a href={dist.url} className="text-sm text-gray-500 hover:underline block mt-1 truncate" target="_blank" rel="noopener noreferrer">
                                {dist.url}
                            </a>
                            <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                                {dist.address}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Map Area */}
            <div className="lg:col-span-8 relative h-[400px] lg:h-auto min-h-[400px] rounded-2xl overflow-hidden shadow-inner bg-blue-50/50">
                 <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
                    alt="Map of Europe" 
                    className="w-full h-full object-cover opacity-80 mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-700"
                 />
                 
                 {/* Decorative Pins Overlay */}
                 <div className="absolute top-1/2 left-1/3 group cursor-pointer">
                    <MapPin className="text-red-500 drop-shadow-lg transform -translate-y-full hover:scale-125 transition-transform" size={32} fill="currentColor" />
                 </div>
                 <div className="absolute top-1/3 left-1/2 group cursor-pointer">
                    <MapPin className="text-red-500 drop-shadow-lg transform -translate-y-full hover:scale-125 transition-transform" size={32} fill="currentColor" />
                 </div>
                 <div className="absolute top-[20%] right-[30%] group cursor-pointer">
                    <MapPin className="text-red-500 drop-shadow-lg transform -translate-y-full hover:scale-125 transition-transform" size={32} fill="currentColor" />
                 </div>
                 
                 <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm text-xs font-medium">
                    Mapa Interactivo
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default DistributorSection;