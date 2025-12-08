import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Particles (Simulated with simple divs for performance) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neonGreen/30 bg-neonGreen/10 text-neonGreen text-sm font-semibold mb-6">
            <Zap size={16} />
            <span>Ready for ZBD</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
            Leveling Up <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonGreen to-emerald-400">Real Economies</span>
            <br />
            in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Virtual Worlds</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-400 font-light mb-8 max-w-2xl mx-auto">
            Erick Stoic | Product Manager & Agile Strategist
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed border-l-2 border-bitcoinOrange pl-6 text-left md:text-center md:border-l-0 md:border-t-2 md:pt-6 border-opacity-50">
            From slashing lead times by 99% at Fintech Unicorns to mentoring Wealth Management leaders.
            I build the systems that power sustainable growth.
          </p>

          <motion.a
            href="#map"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-bitcoinOrange text-white font-bold py-4 px-8 rounded-lg shadow-[0_0_20px_rgba(247,147,26,0.3)] hover:shadow-[0_0_30px_rgba(247,147,26,0.6)] transition-all"
          >
            Start the Adventure
            <ChevronDown size={20} className="animate-bounce" />
          </motion.a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-void to-transparent" />
    </section>
  );
};

export default Hero;