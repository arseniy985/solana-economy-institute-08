
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Shield, Star, Zap, Crown, Target, Award, BarChart3, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Minimal Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-violet-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-gradient-to-l from-blue-600/15 to-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          {/* Trust Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-900/80 to-green-900/80 rounded-full text-emerald-300 text-sm font-medium mb-8 border border-emerald-500/50 backdrop-blur-sm shadow-xl">
            <Shield className="w-4 h-4 mr-2 text-emerald-400" />
            Trusted by 12,000+ Professionals
            <Star className="w-4 h-4 ml-2 text-yellow-400" />
          </div>
          
          {/* Main Value Proposition */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Turn <span className="bg-gradient-to-r from-emerald-300 via-green-400 to-cyan-400 bg-clip-text text-transparent">$1,000</span>
            <span className="block">Into <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">$100,000+</span></span>
          </h1>
          
          {/* Compelling Subheading */}
          <p className="max-w-3xl mx-auto mb-8 text-xl text-slate-200 leading-relaxed">
            Join the <span className="text-emerald-400 font-semibold">world's most successful</span> blockchain investment institute. 
            <span className="text-cyan-400 font-medium"> 300% average ROI</span> backed by real results.
          </p>
          
          {/* Social Proof Numbers */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-center">
            <div className="bg-slate-800/60 px-6 py-4 rounded-2xl border border-emerald-500/30 backdrop-blur-sm">
              <div className="text-2xl font-bold text-emerald-400">$150M+</div>
              <div className="text-slate-300 text-sm">Fund Raised</div>
            </div>
            <div className="bg-slate-800/60 px-6 py-4 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
              <div className="text-2xl font-bold text-blue-400">12K+</div>
              <div className="text-slate-300 text-sm">Students</div>
            </div>
            <div className="bg-slate-800/60 px-6 py-4 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
              <div className="text-2xl font-bold text-purple-400">300%</div>
              <div className="text-slate-300 text-sm">Avg ROI</div>
            </div>
            <div className="bg-slate-800/60 px-6 py-4 rounded-2xl border border-amber-500/30 backdrop-blur-sm">
              <div className="text-2xl font-bold text-amber-400">15</div>
              <div className="text-slate-300 text-sm">Unicorns</div>
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
                  <h2 className="text-2xl font-bold text-white">$SIDE Token Launch</h2>
                </div>
                <p className="text-amber-200 font-semibold text-lg mb-4">
                  Dividends start at $10M market cap
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-yellow-400 font-bold text-xl">Early Access</div>
                    <div className="text-amber-200 text-sm">Limited spots</div>
                  </div>
                  <div className="text-center">
                    <div className="text-yellow-400 font-bold text-xl">Guaranteed</div>
                    <div className="text-amber-200 text-sm">Profit sharing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Clear Call to Action */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-700 hover:via-green-700 hover:to-emerald-800 text-white px-16 py-6 rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 text-xl font-bold"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Target className="w-6 h-6 mr-4 group-hover:rotate-12 transition-transform" />
              Buy $SIDE Now
              <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-purple-400/50 text-purple-300 px-12 py-6 rounded-2xl backdrop-blur-sm hover:border-purple-300 transition-all duration-300 bg-white/5 hover:bg-white/10 hover:scale-105 text-lg font-medium"
            >
              <BarChart3 className="w-6 h-6 mr-3" />
              View Track Record
            </Button>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/15 to-green-500/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <div className="relative text-center p-6 bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl shadow-xl border border-emerald-500/30 backdrop-blur-sm group-hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
              <p className="text-emerald-400 font-semibold mb-2">300% Average ROI</p>
              <p className="text-gray-300 text-sm">Consistent profits since 2018</p>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-cyan-500/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <div className="relative text-center p-6 bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl shadow-xl border border-blue-500/30 backdrop-blur-sm group-hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Elite Education</h3>
              <p className="text-blue-400 font-semibold mb-2">12K+ Graduates</p>
              <p className="text-gray-300 text-sm">95% job placement rate</p>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 to-violet-500/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <div className="relative text-center p-6 bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl shadow-xl border border-purple-500/30 backdrop-blur-sm group-hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Market Leaders</h3>
              <p className="text-purple-400 font-semibold mb-2">15 Unicorns</p>
              <p className="text-gray-300 text-sm">$1B+ companies created</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
