
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Star, Crown, Target, CheckCircle, TrendingUp, Award, BarChart3 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-indigo-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-gradient-to-l from-purple-600/15 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          {/* Trust Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 rounded-full text-blue-300 text-sm font-medium mb-8 border border-blue-500/50 backdrop-blur-sm shadow-xl">
            <Shield className="w-4 h-4 mr-2 text-blue-400" />
            Leading Solana Investment Platform Since 2018
            <Star className="w-4 h-4 ml-2 text-yellow-400" />
          </div>
          
          {/* Main SIDE Acronym Expansion */}
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="block bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Solana Institute of
              </span>
              <span className="block bg-gradient-to-r from-purple-300 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                Digital Economics
              </span>
            </h1>
            
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent w-24"></div>
              <div className="text-3xl font-bold text-blue-400 tracking-[0.3em]">SIDE</div>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent w-24"></div>
            </div>
          </div>
          
          {/* Value Proposition */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Transform <span className="text-blue-400">$1,000</span> Into <span className="text-yellow-400">$100,000+</span>
          </h2>
          
          <p className="max-w-3xl mx-auto mb-8 text-xl text-slate-200 leading-relaxed">
            The world's most successful Solana-focused investment institute. 
            <span className="text-blue-400 font-semibold"> 300% average ROI</span> backed by real results and proven track record.
          </p>
          
          {/* Key Numbers */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="bg-slate-800/60 px-6 py-4 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
              <div className="text-2xl font-bold text-blue-400">$150M+</div>
              <div className="text-slate-300 text-sm">Fund Raised</div>
            </div>
            <div className="bg-slate-800/60 px-6 py-4 rounded-2xl border border-indigo-500/30 backdrop-blur-sm">
              <div className="text-2xl font-bold text-indigo-400">12K+</div>
              <div className="text-slate-300 text-sm">Students</div>
            </div>
            <div className="bg-slate-800/60 px-6 py-4 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
              <div className="text-2xl font-bold text-purple-400">300%</div>
              <div className="text-slate-300 text-sm">Avg ROI</div>
            </div>
          </div>

          {/* $SIDE Token Highlight */}
          <div className="mb-12 mx-auto max-w-2xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/30 to-amber-500/20 rounded-2xl blur-xl"></div>
              <div className="relative p-6 bg-gradient-to-r from-amber-900/80 via-yellow-900/60 to-amber-900/80 rounded-2xl border border-amber-500/50 backdrop-blur-sm shadow-2xl">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center">
                    <Crown className="w-6 h-6 text-amber-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">$SIDE Token Launch</h3>
                </div>
                <p className="text-amber-200 font-semibold text-lg mb-4">
                  Dividend distributions start at $10M market cap
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-yellow-400 font-bold text-xl">Early Access</div>
                    <div className="text-amber-200 text-sm">Limited positions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-yellow-400 font-bold text-xl">Guaranteed</div>
                    <div className="text-amber-200 text-sm">Profit sharing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-800 text-white px-16 py-6 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 text-xl font-bold"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Target className="w-6 h-6 mr-4 group-hover:rotate-12 transition-transform" />
              Buy $SIDE Token
              <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-blue-400/50 text-blue-300 px-12 py-6 rounded-2xl backdrop-blur-sm hover:border-blue-300 transition-all duration-300 bg-white/5 hover:bg-white/10 hover:scale-105 text-lg font-medium"
            >
              <BarChart3 className="w-6 h-6 mr-3" />
              View Performance
            </Button>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-indigo-500/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <div className="relative text-center p-6 bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl shadow-xl border border-blue-500/30 backdrop-blur-sm group-hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
              <p className="text-blue-400 font-semibold mb-2">300% Average ROI</p>
              <p className="text-gray-300 text-sm">Consistent profits since 2018</p>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/15 to-purple-500/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <div className="relative text-center p-6 bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl shadow-xl border border-indigo-500/30 backdrop-blur-sm group-hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Elite Education</h3>
              <p className="text-indigo-400 font-semibold mb-2">12K+ Graduates</p>
              <p className="text-gray-300 text-sm">95% placement rate</p>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 to-blue-500/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <div className="relative text-center p-6 bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl shadow-xl border border-purple-500/30 backdrop-blur-sm group-hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Market Leaders</h3>
              <p className="text-purple-400 font-semibold mb-2">15 Unicorns</p>
              <p className="text-gray-300 text-sm">$1B+ companies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
