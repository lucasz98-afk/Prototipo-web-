import React from 'react';
import { ArrowRight } from 'lucide-react';

const BecomeDistributor: React.FC = () => {
  return (
    <section className="py-24 bg-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl text-dark mb-6">Convertirse en un distribuidor</h2>
        <div className="w-16 h-0.5 bg-gold mx-auto mb-8"></div>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto font-light">
            ¿Usted está interesado en vender las furgonetas de la marca Ameline?
        </p>
        <a 
            href="#contacto" 
            className="inline-flex items-center gap-3 px-10 py-4 border border-gray-300 text-dark font-bold text-xs uppercase tracking-widest hover:border-gold hover:text-gold hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 rounded-full"
        >
            Póngase en contacto con nosotros <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
};

export default BecomeDistributor;