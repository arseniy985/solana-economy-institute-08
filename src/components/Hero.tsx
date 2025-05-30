
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-900/50 rounded-full text-purple-300 text-sm font-medium mb-6 border border-purple-700">
            <TrendingUp className="w-4 h-4 mr-2" />
            Leading Blockchain Research Institute
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            SOLANA Digital
            <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
              {' '}Economy
            </span>
            <br />
            Institute
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            SIDE unites analysts, economists, and IT specialists to study and introduce 
            blockchain solutions into the economy. We conduct cutting-edge research, 
            experiments, and educational programs focused on digital business innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white px-8 py-3 rounded-lg">
              Explore Research
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-purple-500 text-purple-400 hover:bg-purple-900/50 px-8 py-3 rounded-lg">
              View Programs
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-gray-800/50 rounded-xl shadow-sm border border-gray-700 hover:shadow-md transition-shadow backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mx-auto mb-4 border border-purple-700">
              <BookOpen className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
            <p className="text-gray-300">Research Reports</p>
          </div>
          
          <div className="text-center p-6 bg-gray-800/50 rounded-xl shadow-sm border border-gray-700 hover:shadow-md transition-shadow backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mx-auto mb-4 border border-purple-700">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">1000+</h3>
            <p className="text-gray-300">Students Trained</p>
          </div>
          
          <div className="text-center p-6 bg-gray-800/50 rounded-xl shadow-sm border border-gray-700 hover:shadow-md transition-shadow backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mx-auto mb-4 border border-purple-700">
              <TrendingUp className="w-6 h-6 text-purple-400" />
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
