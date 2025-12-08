import React from 'react';
import Hero from './components/Hero';
import AdventureMap from './components/AdventureMap';
import Inventory from './components/Inventory';
import QuestLog from './components/QuestLog';
import WisdomScrolls from './components/WisdomScrolls';
import GuildHall from './components/GuildHall';

function App() {
  return (
    <main className="bg-void min-h-screen text-gray-200 selection:bg-neonGreen selection:text-black">
      <Hero />
      <AdventureMap />
      <Inventory />
      <QuestLog />
      <WisdomScrolls />
      <GuildHall />
    </main>
  );
}

export default App;