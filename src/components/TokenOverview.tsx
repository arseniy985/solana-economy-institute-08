
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  DollarSign, 
  TrendingUp, 
  Coins, 
  Users, 
  BarChart3,
  Zap,
  Flame,
  Gift,
  Shield,
  Award,
  Sparkles,
  CheckCircle2,
  Crown,
  Percent,
  Timer,
  Verified,
  Lightbulb,
  ArrowUpRight,
  ExternalLink,
  Target,
  Rocket
} from 'lucide-react';

const TokenOverview = () => {
  return (
    <div className="space-y-6">
      {/* Hero Banner - More Compact */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900 via-violet-900 to-purple-800 p-6">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-orange-500/5 to-red-500/10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-xl">
                <img 
                  src="/lovable-uploads/38c7bb81-42e5-4be7-9177-8f17c128376a.png" 
                  alt="SIDE Token" 
                  className="w-8 h-8"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">$SIDE Token</h2>
                <p className="text-yellow-200 font-medium text-sm">Dividends start at $10M cap</p>
              </div>
            </div>
            <Badge className="bg-green-500/20 border-green-400/50 text-green-300 px-3 py-1 text-xs font-bold">
              GUARANTEED
            </Badge>
          </div>
          
          <div className="grid grid-cols-4 gap-3 mb-4">
            <div className="text-center">
              <div className="text-lg font-bold text-yellow-400">15%</div>
              <div className="text-yellow-200 text-xs">APY Dividends</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-orange-400">25%</div>
              <div className="text-orange-200 text-xs">Staking Bonus</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-red-400">2%</div>
              <div className="text-red-200 text-xs">Token Burns</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-400">300%</div>
              <div className="text-purple-200 text-xs">Avg ROI</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white px-6 py-2 rounded-xl font-bold shadow-xl">
              <Target className="w-4 h-4 mr-2" />
              Buy $SIDE
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-yellow-400/50 text-yellow-300 hover:bg-yellow-600/20 px-6 py-2 rounded-xl">
              <BarChart3 className="w-4 h-4 mr-2" />
              DexScreener
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Key Features Grid - More Compact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Automatic Dividends */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-600/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative bg-gradient-to-br from-emerald-900/60 to-green-900/40 rounded-xl p-4 backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <DollarSign className="w-8 h-8 text-emerald-400" />
              <Sparkles className="w-5 h-5 text-emerald-300" />
            </div>
            <h3 className="text-white font-bold text-lg mb-1">Auto Dividends</h3>
            <p className="text-emerald-300 font-bold mb-2">From $10M cap</p>
            <p className="text-gray-300 text-sm mb-3">Monthly profit distributions directly to your wallet</p>
            <div className="flex items-center text-emerald-400 font-medium text-sm">
              <Percent className="w-3 h-3 mr-1" />
              Up to 15% APY
            </div>
          </div>
        </div>

        {/* Staking Protocol */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-600/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative bg-gradient-to-br from-purple-900/60 to-violet-900/40 rounded-xl p-4 backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <Zap className="w-8 h-8 text-purple-400" />
              <Crown className="w-5 h-5 text-purple-300" />
            </div>
            <h3 className="text-white font-bold text-lg mb-1">Staking Protocol</h3>
            <p className="text-purple-300 font-bold mb-2">Earn by Holding</p>
            <p className="text-gray-300 text-sm mb-3">Lock tokens for extra rewards and voting rights</p>
            <div className="flex items-center text-purple-400 font-medium text-sm">
              <Timer className="w-3 h-3 mr-1" />
              +25% bonus APY
            </div>
          </div>
        </div>

        {/* Deflationary Model */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative bg-gradient-to-br from-orange-900/60 to-red-900/40 rounded-xl p-4 backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <Flame className="w-8 h-8 text-orange-400" />
              <Rocket className="w-5 h-5 text-orange-300" />
            </div>
            <h3 className="text-white font-bold text-lg mb-1">Token Burns</h3>
            <p className="text-orange-300 font-bold mb-2">Supply Reduction</p>
            <p className="text-gray-300 text-sm mb-3">Quarterly token burns reduce total supply</p>
            <div className="flex items-center text-orange-400 font-medium text-sm">
              <TrendingUp className="w-3 h-3 mr-1" />
              2% quarterly
            </div>
          </div>
        </div>
      </div>

      {/* Token Stats - Compact */}
      <div className="bg-gradient-to-r from-slate-900/80 to-gray-900/80 rounded-xl p-4 backdrop-blur-sm">
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:scale-110 transition-transform">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div className="text-lg font-bold text-cyan-400 mb-1">1M</div>
            <div className="text-gray-400 text-xs">Total Supply</div>
          </div>

          <div className="text-center group">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:scale-110 transition-transform">
              <Coins className="w-5 h-5 text-white" />
            </div>
            <div className="text-lg font-bold text-purple-400 mb-1">Solana</div>
            <div className="text-gray-400 text-xs">Blockchain</div>
          </div>

          <div className="text-center group">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:scale-110 transition-transform">
              <Gift className="w-5 h-5 text-white" />
            </div>
            <div className="text-lg font-bold text-green-400 mb-1">$10M</div>
            <div className="text-gray-400 text-xs">Dividend Start</div>
          </div>

          <div className="text-center group">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:scale-110 transition-transform">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="text-lg font-bold text-yellow-400 mb-1">98%</div>
            <div className="text-gray-400 text-xs">Security Score</div>
          </div>
        </div>
      </div>

      {/* Value Propositions - Compact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Proven Growth */}
        <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/30 rounded-xl p-4 backdrop-blur-sm">
          <div className="flex items-center mb-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold">Proven Growth Model</h3>
              <p className="text-blue-300 font-medium text-sm">300% Average ROI</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center text-sm">
              <CheckCircle2 className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
              <span className="text-gray-300">$150M+ assets under management</span>
            </div>
            <div className="flex items-center text-sm">
              <CheckCircle2 className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
              <span className="text-gray-300">15 unicorn companies funded</span>
            </div>
            <div className="flex items-center text-sm">
              <CheckCircle2 className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
              <span className="text-gray-300">6 years of consistent profits</span>
            </div>
          </div>
        </div>

        {/* Elite Community */}
        <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/30 rounded-xl p-4 backdrop-blur-sm">
          <div className="flex items-center mb-3">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold">Elite Community</h3>
              <p className="text-indigo-300 font-medium text-sm">Exclusive Access</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center text-sm">
              <CheckCircle2 className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
              <span className="text-gray-300">Private investor calls</span>
            </div>
            <div className="flex items-center text-sm">
              <CheckCircle2 className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
              <span className="text-gray-300">Early access to projects</span>
            </div>
            <div className="flex items-center text-sm">
              <CheckCircle2 className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
              <span className="text-gray-300">Governance voting rights</span>
            </div>
          </div>
        </div>
      </div>

      {/* How to Buy - Compact */}
      <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/30 rounded-xl p-4 backdrop-blur-sm">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">How to Buy $SIDE</h3>
            <p className="text-yellow-300 font-medium text-sm">Simple 4-step process</p>
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-3">
          <div className="text-center p-3 bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white text-sm font-bold mx-auto mb-2 shadow-lg">
              1
            </div>
            <div className="text-white font-semibold text-sm mb-1">Install Phantom</div>
            <div className="text-gray-400 text-xs">Solana wallet</div>
          </div>
          
          <div className="text-center p-3 bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white text-sm font-bold mx-auto mb-2 shadow-lg">
              2
            </div>
            <div className="text-white font-semibold text-sm mb-1">Buy SOL</div>
            <div className="text-gray-400 text-xs">On exchange</div>
          </div>
          
          <div className="text-center p-3 bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white text-sm font-bold mx-auto mb-2 shadow-lg">
              3
            </div>
            <div className="text-white font-semibold text-sm mb-1">Jupiter DEX</div>
            <div className="text-gray-400 text-xs">Connect wallet</div>
          </div>
          
          <div className="text-center p-3 bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white text-sm font-bold mx-auto mb-2 shadow-lg">
              4
            </div>
            <div className="text-white font-semibold text-sm mb-1">Swap to $SIDE</div>
            <div className="text-gray-400 text-xs">Start earning</div>
          </div>
        </div>
      </div>

      {/* Trust Badges - Compact */}
      <div className="flex flex-wrap justify-center gap-3">
        <div className="flex items-center px-3 py-1 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-full border border-green-500/30">
          <Verified className="w-3 h-3 mr-1 text-green-400" />
          <span className="text-green-300 text-xs font-medium">CertiK Verified</span>
        </div>
        <div className="flex items-center px-3 py-1 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full border border-blue-500/30">
          <Shield className="w-3 h-3 mr-1 text-blue-400" />
          <span className="text-blue-300 text-xs font-medium">Insured Assets</span>
        </div>
        <div className="flex items-center px-3 py-1 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-full border border-purple-500/30">
          <Award className="w-3 h-3 mr-1 text-purple-400" />
          <span className="text-purple-300 text-xs font-medium">Swiss Licensed</span>
        </div>
        <div className="flex items-center px-3 py-1 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-full border border-yellow-500/30">
          <Sparkles className="w-3 h-3 mr-1 text-yellow-400" />
          <span className="text-yellow-300 text-xs font-medium">Premium Tier</span>
        </div>
      </div>

      {/* Final CTA - Compact */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-purple-900/60 via-violet-900/60 to-purple-900/60 p-6 rounded-xl border border-purple-500/30 backdrop-blur-sm max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-3">
            Start earning <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">today</span>
          </h2>
          <p className="text-gray-200 mb-4">
            Don't miss the opportunity to earn passive income from blockchain economy development
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white px-6 py-3 rounded-xl font-bold shadow-xl hover:scale-105 transition-all">
              Buy $SIDE Tokens
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-purple-400/50 text-purple-300 hover:bg-purple-600/30 px-6 py-3 rounded-xl font-semibold">
              View on DexScreener
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenOverview;
