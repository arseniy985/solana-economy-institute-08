
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  DollarSign, 
  TrendingUp, 
  Coins, 
  BarChart3,
  Zap,
  Flame,
  Shield,
  Crown,
  CheckCircle2,
  Lightbulb,
  ArrowUpRight,
  ExternalLink,
  Target,
  Sparkles,
  Star
} from 'lucide-react';

const TokenOverview = () => {
  return (
    <div className="space-y-12 px-4">
      {/* Hero Section */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl mr-4">
            <img 
              src="/lovable-uploads/38c7bb81-42e5-4be7-9177-8f17c128376a.png" 
              alt="SIDE Token" 
              className="w-10 h-10"
            />
          </div>
          <div className="text-left">
            <h2 className="text-4xl font-bold text-white mb-2">$SIDE Token</h2>
            <p className="text-yellow-300 font-semibold text-lg">Dividends start at $10M market cap</p>
          </div>
          <Badge className="ml-6 bg-green-500/20 border-green-400/50 text-green-300 px-4 py-2 font-bold text-sm">
            GUARANTEED
          </Badge>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-2">
              15%
            </div>
            <div className="text-emerald-300 font-semibold">APY Dividends</div>
          </div>
          <div className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-2">
              25%
            </div>
            <div className="text-purple-300 font-semibold">Staking Bonus</div>
          </div>
          <div className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
              2%
            </div>
            <div className="text-orange-300 font-semibold">Token Burns</div>
          </div>
          <div className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              300%
            </div>
            <div className="text-cyan-300 font-semibold">Avg ROI</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-6 mb-16">
          <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition-all text-lg">
            <Target className="w-5 h-5 mr-3" />
            Buy $SIDE
            <ArrowUpRight className="w-5 h-5 ml-3" />
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-600/20 px-8 py-4 rounded-2xl font-semibold text-lg">
            <BarChart3 className="w-5 h-5 mr-3" />
            DexScreener
            <ExternalLink className="w-5 h-5 ml-3" />
          </Button>
        </div>
      </div>

      {/* Core Features */}
      <div>
        <h3 className="text-2xl font-bold text-white text-center mb-10">Core Features</h3>
        <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Auto Dividends */}
          <div className="text-center group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-emerald-900/30 via-green-900/20 to-transparent rounded-3xl p-8 border border-emerald-500/30 backdrop-blur-sm hover:border-emerald-400/50 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Auto Dividends</h4>
              <p className="text-emerald-300 font-semibold mb-2">From $10M cap</p>
              <p className="text-gray-300">Monthly profit distributions</p>
            </div>
          </div>

          {/* Staking Protocol */}
          <div className="text-center group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-violet-500/5 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-purple-900/30 via-violet-900/20 to-transparent rounded-3xl p-8 border border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Staking Protocol</h4>
              <p className="text-purple-300 font-semibold mb-2">+25% bonus APY</p>
              <p className="text-gray-300">Lock tokens for extra rewards</p>
            </div>
          </div>

          {/* Token Burns */}
          <div className="text-center group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-orange-900/30 via-red-900/20 to-transparent rounded-3xl p-8 border border-orange-500/30 backdrop-blur-sm hover:border-orange-400/50 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Flame className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Token Burns</h4>
              <p className="text-orange-300 font-semibold mb-2">2% quarterly</p>
              <p className="text-gray-300">Reduce total supply</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div className="text-center p-6 bg-gradient-to-br from-cyan-900/30 to-blue-900/20 rounded-2xl border border-cyan-500/30">
          <div className="text-3xl font-bold text-cyan-400 mb-2">1M</div>
          <div className="text-gray-400">Total Supply</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-violet-900/20 rounded-2xl border border-purple-500/30">
          <div className="text-3xl font-bold text-purple-400 mb-2">Solana</div>
          <div className="text-gray-400">Blockchain</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-green-900/30 to-emerald-900/20 rounded-2xl border border-green-500/30">
          <div className="text-3xl font-bold text-green-400 mb-2">$10M</div>
          <div className="text-gray-400">Dividend Start</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-yellow-900/30 to-orange-900/20 rounded-2xl border border-yellow-500/30">
          <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
          <div className="text-gray-400">Security Score</div>
        </div>
      </div>

      {/* Value Propositions */}
      <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="p-8 bg-gradient-to-br from-blue-900/20 via-cyan-900/10 to-transparent rounded-3xl border border-blue-500/30">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Proven Growth</h4>
              <p className="text-blue-300 font-semibold">300% Average ROI</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-green-400 mr-3" />
              $150M+ assets managed
            </div>
            <div className="flex items-center text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-green-400 mr-3" />
              15 unicorn companies funded
            </div>
          </div>
        </div>

        <div className="p-8 bg-gradient-to-br from-purple-900/20 via-violet-900/10 to-transparent rounded-3xl border border-purple-500/30">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mr-4">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Elite Community</h4>
              <p className="text-purple-300 font-semibold">Exclusive Access</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-green-400 mr-3" />
              Private investor calls
            </div>
            <div className="flex items-center text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-green-400 mr-3" />
              Governance voting rights
            </div>
          </div>
        </div>
      </div>

      {/* How to Buy */}
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Lightbulb className="w-6 h-6 text-yellow-400 mr-3" />
          <h3 className="text-2xl font-bold text-white">How to Buy $SIDE</h3>
        </div>
        
        <div className="flex justify-center items-center space-x-8">
          <div className="flex items-center bg-gradient-to-r from-purple-900/30 to-violet-900/20 p-4 rounded-2xl border border-purple-500/30">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
            <div>
              <div className="text-white font-semibold">Install Phantom</div>
              <div className="text-gray-400 text-sm">Solana wallet</div>
            </div>
          </div>
          <ArrowUpRight className="w-6 h-6 text-gray-400" />
          <div className="flex items-center bg-gradient-to-r from-purple-900/30 to-violet-900/20 p-4 rounded-2xl border border-purple-500/30">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
            <div>
              <div className="text-white font-semibold">Buy SOL</div>
              <div className="text-gray-400 text-sm">On exchange</div>
            </div>
          </div>
          <ArrowUpRight className="w-6 h-6 text-gray-400" />
          <div className="flex items-center bg-gradient-to-r from-purple-900/30 to-violet-900/20 p-4 rounded-2xl border border-purple-500/30">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
            <div>
              <div className="text-white font-semibold">Swap to $SIDE</div>
              <div className="text-gray-400 text-sm">Start earning</div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="flex justify-center items-center space-x-6">
        <div className="flex items-center text-green-300 font-medium px-4 py-2 bg-green-900/20 rounded-full border border-green-500/30">
          <Shield className="w-4 h-4 mr-2" />
          CertiK Verified
        </div>
        <div className="flex items-center text-blue-300 font-medium px-4 py-2 bg-blue-900/20 rounded-full border border-blue-500/30">
          <Shield className="w-4 h-4 mr-2" />
          Insured Assets
        </div>
        <div className="flex items-center text-purple-300 font-medium px-4 py-2 bg-purple-900/20 rounded-full border border-purple-500/30">
          <Crown className="w-4 h-4 mr-2" />
          Swiss Licensed
        </div>
        <div className="flex items-center text-yellow-300 font-medium px-4 py-2 bg-yellow-900/20 rounded-full border border-yellow-500/30">
          <Sparkles className="w-4 h-4 mr-2" />
          Premium Tier
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center pt-8">
        <h3 className="text-3xl font-bold text-white mb-4">
          Start earning <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">today</span>
        </h3>
        <p className="text-gray-200 mb-8 text-lg max-w-2xl mx-auto">
          Don't miss the opportunity to earn passive income from blockchain economy development
        </p>
        
        <div className="flex justify-center gap-6">
          <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition-all text-lg">
            Buy $SIDE Tokens
            <ArrowUpRight className="ml-3 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-purple-400/50 text-purple-300 hover:bg-purple-600/30 px-8 py-4 rounded-2xl font-semibold text-lg">
            View on DexScreener
            <ExternalLink className="w-5 h-5 ml-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TokenOverview;
