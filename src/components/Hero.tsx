
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-900/80 to-violet-900/80 rounded-full text-purple-200 text-sm font-medium mb-6 border border-purple-600/50 backdrop-blur-sm">
            <TrendingUp className="w-4 h-4 mr-2" />
            Leading Blockchain Research Institute
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            SOLANA Digital
            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {' '}Economy
            </span>
            <br className="text-slate-50" />
            Institute
          </h1>
          
          <p className="max-w-3xl mx-auto mb-8 leading-relaxed text-slate-50 text-lg">
            SIDE unites analysts, economists, and IT specialists to study and introduce 
            blockchain solutions into the economy. We conduct cutting-edge research, 
            experiments, and educational programs focused on digital business innovation.
          </p>
          
          {/* $SIDE Token Section */}
          <div className="mb-8 p-6 bg-gradient-to-r from-purple-900/40 via-violet-900/40 to-purple-900/40 rounded-xl border border-purple-600/30 backdrop-blur-sm max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-3">$SIDE Token</h2>
            <p className="text-purple-200 mb-4">
              Invest in the future of digital economy research and education
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 via-emerald-600 to-green-600 rounded-lg text-white font-semibold shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105">
              <span className="text-sm">💰 Dividends at 10M market cap</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 via-violet-600 to-purple-700 hover:from-purple-600 hover:via-violet-700 hover:to-purple-800 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
              Explore Research
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-purple-400/50 text-purple-300 px-8 py-3 rounded-lg backdrop-blur-sm hover:border-purple-300 transition-all duration-300 bg-slate-500">
              View Programs
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/60 via-gray-700/50 to-gray-800/60 rounded-xl shadow-xl border border-gray-600/30 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-700 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
            <p className="text-gray-300">Research Reports</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/60 via-gray-700/50 to-gray-800/60 rounded-xl shadow-xl border border-gray-600/30 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-700 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">1000+</h3>
            <p className="text-gray-300">Students Trained</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/60 via-gray-700/50 to-gray-800/60 rounded-xl shadow-xl border border-gray-600/30 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-700 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">25+</h3>
            <p className="text-gray-300">Startup Investments</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
