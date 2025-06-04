
import React from 'react';
import { Brain, Cpu, Globe, Lightbulb } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Advanced Research",
      description: "High-tech reports and comprehensive case studies on blockchain implementation in various economic sectors."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Proof-of-Concept",
      description: "Experimental pilot projects testing innovative blockchain solutions in real-world scenarios."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Digital Business Models",
      description: "Developing new business frameworks optimized for the digital economy and blockchain integration."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Training",
      description: "Advanced educational programs bridging the gap between traditional economics and blockchain technology."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 via-slate-800/50 to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Pioneering the Future of
            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {' '}Digital Economy
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            SIDE serves as a bridge between traditional economics and blockchain innovation, 
            fostering the development of sustainable digital business ecosystems on Solana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-800/70 via-gray-700/60 to-gray-800/70 p-6 rounded-xl border border-gray-600/40 hover:shadow-2xl transition-all duration-300 group-hover:scale-105 backdrop-blur-sm hover:border-purple-500/50">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-700 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300 shadow-md">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg opacity-95 leading-relaxed">
              To accelerate the adoption of blockchain technology in traditional economic systems 
              through rigorous research, practical experimentation, and comprehensive education. 
              We envision a future where digital economies thrive on transparent, efficient, 
              and decentralized foundations built on Solana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
