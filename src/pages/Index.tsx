
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Research from '@/components/Research';
import Education from '@/components/Education';
import VentureFund from '@/components/VentureFund';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Research />
      <Education />
      <VentureFund />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
