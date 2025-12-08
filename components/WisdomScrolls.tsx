import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WISDOM } from '../constants';
import { Scroll, Quote as QuoteIcon } from 'lucide-react';

const WisdomScrolls: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % WISDOM.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-[#151525] to-void">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <div className="mb-8 flex justify-center">
            <Scroll className="text-gray-600 w-12 h-12" />
        </div>
        
        <h2 className="text-2xl font-display font-bold text-gray-500 mb-12 tracking-widest uppercase">Wisdom Scrolls</h2>

        <div className="relative h-64 md:h-48 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
              transition={{ duration: 0.8 }}
              className="absolute w-full px-6"
            >
              <QuoteIcon className="inline-block text-bitcoinOrange/30 w-8 h-8 mb-4 transform -scale-x-100" />
              <p className="text-2xl md:text-3xl font-light italic text-gray-200 mb-6 font-serif">
                "{WISDOM[currentIndex].text}"
              </p>
              <QuoteIcon className="inline-block text-bitcoinOrange/30 w-8 h-8 mb-4" />
              <p className="text-neonGreen font-mono text-sm tracking-wider">
                — {WISDOM[currentIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {WISDOM.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-bitcoinOrange w-6' : 'bg-gray-700'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WisdomScrolls;