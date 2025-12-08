import React from 'react';
import { Linkedin, Globe, Heart, Rocket } from 'lucide-react';

const GuildHall: React.FC = () => {
  return (
    <footer className="bg-black py-16 border-t border-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-display font-bold text-white mb-8">Join the Guild</h2>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a 
            href="https://www.linkedin.com/in/erickstoic/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-16 h-16 bg-void border border-gray-700 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-blue-500 group-hover:border-blue-500 transition-all duration-300 shadow-lg group-hover:shadow-blue-900/20">
              <Linkedin size={32} />
            </div>
            <span className="text-xs text-gray-500 group-hover:text-white transition-colors">LinkedIn</span>
          </a>

          <a 
            href="https://thesustainableproductivity.com/blog/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-16 h-16 bg-void border border-gray-700 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-neonGreen group-hover:border-neonGreen transition-all duration-300 shadow-lg group-hover:shadow-neonGreen/20">
              <Globe size={32} />
            </div>
            <span className="text-xs text-gray-500 group-hover:text-white transition-colors">Blog</span>
          </a>

          <a 
            href="https://yourlifematters.me/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-16 h-16 bg-void border border-gray-700 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-pink-500 group-hover:border-pink-500 transition-all duration-300 shadow-lg group-hover:shadow-pink-900/20">
              <Heart size={32} />
            </div>
            <span className="text-xs text-gray-500 group-hover:text-white transition-colors">NGO</span>
          </a>
        </div>

        <div className="max-w-xl mx-auto border-t border-gray-900 pt-8">
            <p className="text-gray-500 flex items-center justify-center gap-2 mb-2">
                Built with <span className="text-purple-500 animate-pulse">💜</span> and Vibe Coding by Erick Stoic.
            </p>
            <p className="text-bitcoinOrange font-bold flex items-center justify-center gap-2">
                <Rocket size={16} /> Ready to join the ZBD party!
            </p>
        </div>
      </div>
    </footer>
  );
};

export default GuildHall;