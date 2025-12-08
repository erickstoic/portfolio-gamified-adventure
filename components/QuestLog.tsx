import React from 'react';
import { motion } from 'framer-motion';
import { QUESTS } from '../constants';
import { CheckCircle2, CircleDashed } from 'lucide-react';

const QuestLog: React.FC = () => {
  return (
    <section className="py-24 bg-void relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-display font-bold text-center mb-16">Quest Log</h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 -translate-x-1/2" />

          {QUESTS.map((quest, index) => {
            const isEven = index % 2 === 0;
            const isActive = quest.status === 'active';

            return (
              <motion.div
                key={quest.id}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center mb-12 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className="flex-1 w-full md:w-1/2 p-4">
                  <div className={`p-6 rounded-lg border ${isActive ? 'bg-void border-neonGreen shadow-[0_0_15px_rgba(0,255,65,0.15)]' : 'bg-gray-900/50 border-gray-700'} hover:bg-gray-800/50 transition-colors`}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className={`font-bold font-display text-xl ${isActive ? 'text-neonGreen' : 'text-white'}`}>
                        {quest.company}
                      </h3>
                      {isActive && (
                        <span className="px-2 py-0.5 text-xs bg-neonGreen/20 text-neonGreen rounded border border-neonGreen/30">
                          Current Quest
                        </span>
                      )}
                    </div>
                    <div className="text-bitcoinOrange font-medium mb-3">{quest.role}</div>
                    <p className="text-gray-400 text-sm leading-relaxed">{quest.description}</p>
                  </div>
                </div>

                {/* Center Node */}
                <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-void border-2 z-10 my-4 md:my-0
                  ${isActive ? 'border-neonGreen' : 'border-gray-600'}`}>
                  {isActive ? (
                    <CircleDashed size={16} className="text-neonGreen animate-spin-slow" />
                  ) : (
                    <CheckCircle2 size={16} className="text-gray-500" />
                  )}
                </div>

                {/* Spacer Side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuestLog;