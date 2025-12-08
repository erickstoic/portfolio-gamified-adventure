import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HOTSPOTS } from '../constants';
import { MapPin, GripHorizontal, RefreshCw } from 'lucide-react';
import { Hotspot } from '../types';

const AdventureMap: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [hotspots, setHotspots] = useState<Hotspot[]>(HOTSPOTS);
  const [isDragging, setIsDragging] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  // NOTE: Swapped to a fantasy map that closely resembles the "Islands/Citadel" vibe.
  // Replace this URL with your uploaded file path (e.g., '/assets/my-map.png') to use the exact image provided.
  const mapImageUrl = "https://images.unsplash.com/photo-1577717473851-e3776b6d4941?q=80&w=2600&auto=format&fit=crop";

  const handleDragEnd = (event: any, info: any, id: string) => {
    setIsDragging(false);
    if (!mapRef.current) return;

    const mapRect = mapRef.current.getBoundingClientRect();
    const point = info.point;
    
    // Calculate position relative to the map container
    const relativeX = point.x - mapRect.left;
    const relativeY = point.y - mapRect.top;

    // Convert to percentage
    let percentX = (relativeX / mapRect.width) * 100;
    let percentY = (relativeY / mapRect.height) * 100;

    // Snap to nearest 5% grid
    percentX = Math.round(percentX / 5) * 5;
    percentY = Math.round(percentY / 5) * 5;

    // Clamp values to ensure they stay within the map with some padding
    percentX = Math.max(2, Math.min(98, percentX));
    percentY = Math.max(5, Math.min(95, percentY));

    // Update state to snap the marker visually
    setHotspots(prev => prev.map(h => 
      h.id === id ? { ...h, x: percentX, y: percentY } : h
    ));
  };

  const resetMap = () => {
    setHotspots(HOTSPOTS);
  };

  return (
    <section id="map" className="py-24 relative bg-void">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-display font-bold text-white mb-4">The Adventure Map</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Explore the territories I've conquered. 
            <span className="block mt-2 text-neonGreen text-sm font-mono flex items-center justify-center gap-2">
              <GripHorizontal size={14} /> Drag markers to re-strategize
            </span>
          </p>
        </motion.div>

        <div className="relative w-full max-w-5xl mx-auto perspective-1000">
          <div 
            ref={mapRef}
            className="relative w-full aspect-video bg-[#0f111a] rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-gray-700/50 group"
          >
            
            {/* Map Image */}
            <motion.img 
              src={mapImageUrl} 
              alt="Erick's Career Map" 
              className="w-full h-full object-cover opacity-90 transition-opacity duration-500 pointer-events-none select-none"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            />
            
            {/* Vibe Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-void/20 pointer-events-none" />
            
            {/* Grid System - Fades in when dragging */}
            <div 
              className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${isDragging ? 'opacity-20' : 'opacity-0 group-hover:opacity-10'}`}
              style={{ 
                backgroundImage: `
                  linear-gradient(to right, #00ff41 1px, transparent 1px),
                  linear-gradient(to bottom, #00ff41 1px, transparent 1px)
                `,
                backgroundSize: '5% 5%' 
              }} 
            />

            {/* Hotspots */}
            {hotspots.map((spot) => (
              <motion.div
                key={`${spot.id}-${spot.x}-${spot.y}`} // Force remount on snap to reset drag transform
                className="absolute z-20 cursor-grab active:cursor-grabbing touch-none"
                style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
                drag
                dragMomentum={false}
                dragElastic={0}
                dragConstraints={mapRef}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={(e, info) => handleDragEnd(e, info, spot.id)}
                onMouseEnter={() => !isDragging && setActiveHotspot(spot.id)}
                onMouseLeave={() => setActiveHotspot(null)}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileDrag={{ scale: 1.2, zIndex: 100 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Pulse Effect Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                  <div className={`w-full h-full rounded-full bg-neonGreen/30 ${activeHotspot === spot.id ? 'animate-ping' : ''}`} />
                </div>

                {/* Marker Icon */}
                <motion.div
                  className={`relative p-2 rounded-full -translate-x-1/2 -translate-y-1/2 
                    ${activeHotspot === spot.id ? 'bg-neonGreen text-black z-30' : 'bg-gray-900/90 text-neonGreen z-20'} 
                    border-2 border-neonGreen backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,65,0.4)]`}
                  animate={{ 
                    boxShadow: activeHotspot === spot.id ? "0px 0px 30px rgba(0,255,65,0.8)" : "0px 0px 15px rgba(0,255,65,0.2)" 
                  }}
                >
                  <MapPin size={24} fill={activeHotspot === spot.id ? "currentColor" : "none"} />
                </motion.div>

                {/* Tooltip Card - Hidden while dragging */}
                <AnimatePresence>
                  {activeHotspot === spot.id && !isDragging && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: -25, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 w-72 bg-gray-900/95 backdrop-blur-xl border border-neonGreen/40 rounded-xl p-5 shadow-2xl z-50 text-left pointer-events-none"
                    >
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-900 border-r border-b border-neonGreen/40 rotate-45 transform"></div>
                      
                      <div className="flex items-center justify-between mb-2">
                         <h3 className="text-base font-bold text-white font-display leading-tight">{spot.name}</h3>
                         <div className="w-2 h-2 rounded-full bg-neonGreen animate-pulse"></div>
                      </div>
                      
                      <p className="text-sm text-gray-300 leading-relaxed font-light border-t border-gray-700 pt-2 mt-2">
                        {spot.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Map Controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
             <button 
                onClick={resetMap}
                className="bg-black/50 hover:bg-black/80 text-neonGreen border border-neonGreen/30 p-2 rounded-lg backdrop-blur-sm transition-all"
                title="Reset Map Positions"
             >
                <RefreshCw size={18} />
             </button>
          </div>
          
          <div className="absolute bottom-4 left-4 text-[10px] text-neonGreen/60 font-mono">
            COORDS: {hotspots[0].x.toFixed(0)}, {hotspots[0].y.toFixed(0)} | GRID: ACTIVE
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdventureMap;