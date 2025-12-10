import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { ASSETS } from '../constants';

const Footer: React.FC = () => {
  return (
    <div className="px-4 pb-6 bg-white">
        {/* Added shadow-2xl, border-gray-200 to make it stand out */}
        <footer id="contacto" className="bg-gray-50 rounded-[3rem] overflow-hidden shadow-2xl border border-gray-200 relative">
        
        {/* Top Dark Band */}
        <div className="bg-dark py-16 px-6 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
            <h2 className="font-serif text-3xl md:text-5xl text-white font-light tracking-wide relative z-10">
                Más cerca de las expectativas de los corredores
            </h2>
             {/* Subtle background pattern */}
             <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #cca772 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>

        <div className="container mx-auto px-6 pt-24 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 items-start">
                
                {/* Brand Column - Left */}
                <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left space-y-8">
                    <div>
                        <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase mb-6 block">Navegación</span>
                        <ul className="space-y-4 text-sm font-medium text-gray-500">
                            <li><a href="#modelos" className="hover:text-dark transition-colors">Nuestros Modelos</a></li>
                            <li><a href="#stock" className="hover:text-dark transition-colors">Furgonetas en Stock</a></li>
                            <li><a href="#alquiler" className="hover:text-dark transition-colors">Alquiler</a></li>
                            <li><a href="#about" className="hover:text-dark transition-colors">La Empresa</a></li>
                        </ul>
                    </div>
                </div>

                {/* Logo Column - Center (Larger) */}
                <div className="md:col-span-6 flex flex-col items-center justify-center -mt-6">
                    {/* Clean Logo without background container */}
                    <div className="mb-6">
                        <img src={ASSETS.logo} alt="Ameline Logo" className="h-32 md:h-40 object-contain" />
                    </div>
                    <p className="text-dark font-serif italic text-lg mb-2">Carrosserie Ameline</p>
                    <p className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase text-center mb-8">
                        Innovation Creation Horse Trucks
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-12 h-12 flex items-center justify-center bg-white text-dark border border-gray-200 rounded-full hover:bg-gold hover:text-white hover:border-gold hover:-translate-y-1 transition-all shadow-sm">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="w-12 h-12 flex items-center justify-center bg-white text-dark border border-gray-200 rounded-full hover:bg-gold hover:text-white hover:border-gold hover:-translate-y-1 transition-all shadow-sm">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="w-12 h-12 flex items-center justify-center bg-white text-dark border border-gray-200 rounded-full hover:bg-gold hover:text-white hover:border-gold hover:-translate-y-1 transition-all shadow-sm">
                            <Youtube size={20} />
                        </a>
                    </div>
                </div>

                {/* Contact Column - Right */}
                <div className="md:col-span-3 flex flex-col items-center md:items-end text-center md:text-right space-y-8">
                    <div>
                        <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase mb-6 block">Contacto</span>
                        <div className="space-y-4 text-sm text-gray-500">
                            <p className="flex flex-col md:items-end group">
                                <span className="font-bold text-dark mb-1">Email</span>
                                <a href="mailto:contact@carrosserie-ameline.com" className="group-hover:text-gold transition-colors break-all">contact@carrosserie-ameline.com</a>
                            </p>
                            <p className="flex flex-col md:items-end group">
                                <span className="font-bold text-dark mb-1">Teléfono</span>
                                <a href="tel:+34657806726" className="group-hover:text-gold transition-colors font-serif text-lg text-dark">+34 657 806 726</a>
                            </p>
                            <div className="pt-2">
                                <p className="text-xs leading-relaxed opacity-70">
                                    Calle la Bisbal Nº14<br />
                                    Polígono Industrial de Vilamalla<br />
                                    17469 VILAMALLA – España
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 gap-4 uppercase tracking-widest font-bold">
                <div className="flex gap-6">
                    <a href="#" className="hover:text-dark transition-colors">Política de Privacidad</a>
                    <a href="#" className="hover:text-dark transition-colors">Política de Cookies</a>
                    <a href="#" className="hover:text-dark transition-colors">Aviso Legal</a>
                </div>
                <p>&copy; {new Date().getFullYear()} Carrosserie Ameline.</p>
            </div>
        </div>
        </footer>
    </div>
  );
};

export default Footer;