import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Hammer } from 'lucide-react';

const icons = [ShieldCheck, Users, Hammer];

const ExperienceSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="font-serif text-4xl text-dark mb-4">La experiencia Carrosserie Ameline</h2>
            <div className="w-16 h-[2px] bg-gold mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {EXPERIENCES.map((exp, index) => {
                const Icon = icons[index];
                return (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className={`pt-8 md:pt-0 ${index !== 0 ? 'md:pl-12' : ''} ${index !== EXPERIENCES.length - 1 ? 'md:pr-12' : ''}`}
                    >
                        <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 text-gold md:justify-start md:bg-transparent md:w-auto md:h-auto md:p-0">
                            <Icon size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-sans font-bold text-sm tracking-widest uppercase text-dark mb-4">{exp.title}</h3>
                        <p className="text-gray-500 text-sm leading-7">
                            {exp.description}
                        </p>
                    </motion.div>
                );
            })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;