import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ModelShowcase from './components/ModelShowcase';
import ExperienceSection from './components/ExperienceSection';
import StockSection from './components/StockSection';
import AboutSection from './components/AboutSection';
import DistributorSection from './components/DistributorSection';
import BecomeDistributor from './components/BecomeDistributor';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-dark bg-white">
      <Navbar />
      <main>
        <Hero />
        <ModelShowcase />
        <ExperienceSection />
        <StockSection />
        <AboutSection />
        <DistributorSection />
        <BecomeDistributor />
      </main>
      <Footer />
    </div>
  );
}

export default App;