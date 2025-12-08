import React from 'react';
import { motion } from 'framer-motion';
import { INVENTORY, IconRenderer } from '../constants';

const Inventory: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section className="py-20 bg-[#151525]">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-12 justify-center">
          <div className="h-px bg-gray-700 w-12 md:w-24" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center">Inventory & Skills</h2>
          <div className="h-px bg-gray-700 w-12 md:w-24" />
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {INVENTORY.map((cat, idx) => (
            <motion.div 
              key={idx} 
              variants={item}
              className="bg-cardBg border border-gray-700 rounded-xl p-6 hover:border-bitcoinOrange/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                <IconRenderer name={cat.icon} className="w-24 h-24 text-white" />
              </div>
              
              <div className="flex items-center gap-3 mb-4 text-bitcoinOrange">
                <IconRenderer name={cat.icon} className="w-6 h-6" />
                <h3 className="font-bold font-display text-xl text-white">{cat.title}</h3>
              </div>
              
              <div className="space-y-2 relative z-10">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                    <div className="w-1.5 h-1.5 bg-neonGreen rounded-full" />
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Inventory;