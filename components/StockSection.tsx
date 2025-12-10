import React from 'react';
import { STOCK_VEHICLES } from '../constants';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Radio, Map, Gauge, Armchair, Disc, Settings } from 'lucide-react';

// Helper to determine icon based on feature text
const getFeatureIcon = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes('radio') || lower.includes('bluetooth') || lower.includes('music')) return Radio;
    if (lower.includes('navegación') || lower.includes('gps') || lower.includes('carplay')) return Map;
    if (lower.includes('limitador') || lower.includes('velocidad')) return Gauge;
    if (lower.includes('asiento') || lower.includes('cuero') || lower.includes('tela')) return Armchair;
    if (lower.includes('llantas') || lower.includes('ruedas')) return Disc;
    if (lower.includes('automático') || lower.includes('manual') || lower.includes('motor')) return Settings;
    return CheckCircle2;
};

const StockSection: React.FC = () => {
  return (
    <section id="stock" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
                <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-5xl text-dark mb-4"
                >
                    Furgonetas en Stock
                </motion.h2>
                <div className="w-20 h-1 bg-gold"></div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {STOCK_VEHICLES.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col hover:-translate-y-2"
            >
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-60"></div>
                <img 
                  src={vehicle.image} 
                  alt={vehicle.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                />
                <div className="absolute top-5 left-5 z-20">
                    <span className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white rounded-full shadow-lg ${vehicle.condition === 'Nuevo' ? 'bg-emerald-500' : 'bg-gold'}`}>
                        {vehicle.condition}
                    </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 relative">
                {/* Floating price badge */}
                <div className="absolute -top-6 right-8 bg-white px-6 py-3 rounded-2xl shadow-lg border border-gray-50 z-20">
                     <span className="font-serif text-xl font-bold text-gold">{vehicle.price}</span>
                </div>

                <div className="mt-4 mb-6">
                    <h3 className="font-serif text-2xl text-dark font-medium leading-snug group-hover:text-gold transition-colors">
                        {vehicle.title}
                    </h3>
                </div>
                
                <div className="space-y-4 mb-8">
                    {/* Main Specs Mini-Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">Motor</span>
                            <span className="text-xs font-semibold text-dark truncate" title={vehicle.specs.engine}>{vehicle.specs.engine}</span>
                        </div>
                         <div className="flex flex-col">
                            <span className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">Caja</span>
                            <span className="text-xs font-semibold text-dark">{vehicle.specs.transmission}</span>
                        </div>
                    </div>

                    {/* Features List with Icons */}
                    <div className="space-y-3">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 pl-1">Equipamiento destacado</p>
                        {vehicle.features.map((feature, i) => {
                             const Icon = getFeatureIcon(feature);
                             return (
                                <div key={i} className="flex items-center text-sm text-gray-600 gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                                        <Icon size={14} className="text-gold" />
                                    </div>
                                    <span className="font-medium">{feature}</span>
                                </div>
                             );
                        })}
                    </div>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100">
                    <button className="w-full py-4 rounded-xl bg-dark text-white font-bold text-xs uppercase tracking-widest hover:bg-gold transition-colors duration-300 flex items-center justify-center gap-2 group/btn">
                        Ver ficha técnica <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StockSection;