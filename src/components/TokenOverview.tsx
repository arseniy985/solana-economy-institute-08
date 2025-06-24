
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
    <div className="space-y-8">
      {/* Hero Section - Integrated */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg mr-4">
            <img 
              src="/lovable-uploads/38c7bb81-42e5-4be7-9177-8f17c128376a.png" 
              alt="SIDE Token" 
              className="w-8 h-8"
            />
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-bold text-white mb-1">$SIDE Token</h2>
            <p className="text-yellow-300 font-medium">Dividends start at $10M market cap</p>
          </div>
          <Badge className="ml-4 bg-green-500/20 border-green-400/50 text-green-300 px-3 py-1 font-semibold text-xs">
            GUARANTEED
          </Badge>
        </div>

        {/* Key Metrics - Horizontal Flow */}
        <div className="flex justify-center items-center space-x-8 mb-8">
          <div className="text-center group cursor-pointer">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform">
              15%
            </div>
            <div className="text-emerald-300 text-sm font-medium">APY Dividends</div>
          </div>
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
          <div className="text-center group cursor-pointer">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform">
              25%
            </div>
            <div className="text-purple-300 text-sm font-medium">Staking Bonus</div>
          </div>
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
          <div className="text-center group cursor-pointer">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform">
              2%
            </div>
            <div className="text-orange-300 text-sm font-medium">Token Burns</div>
          </div>
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
          <div className="text-center group cursor-pointer">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform">
              300%
            </div>
            <div className="text-cyan-300 text-sm font-medium">Avg ROI</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white px-6 py-2 rounded-xl font-bold shadow-lg hover:scale-105 transition-all">
            <Target className="w-4 h-4 mr-2" />
            Buy $SIDE
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-600/20 px-6 py-2 rounded-xl font-medium">
            <BarChart3 className="w-4 h-4 mr-2" />
            DexScreener
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* Core Features */}
      <div>
        <h3 className="text-xl font-bold text-white text-center mb-6">Core Features</h3>
        <div className="grid grid-cols-3 gap-6">
          {/* Auto Dividends */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-green-600/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all backdrop-blur-sm border border-emerald-500/20">
              <DollarSign className="w-8 h-8 text-emerald-400" />
            </div>
            <h4 className="text-lg font-bold text-white mb-1">Auto Dividends</h4>
            <p className="text-emerald-300 font-semibold mb-1 text-sm">From $10M cap</p>
            <p className="text-gray-300 text-xs">Monthly profit distributions</p>
          </div>

          {/* Staking Protocol */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-violet-600/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all backdrop-blur-sm border border-purple-500/20">
              <Zap className="w-8 h-8 text-purple-400" />
            </div>
            <h4 className="text-lg font-bold text-white mb-1">Staking Protocol</h4>
            <p className="text-purple-300 font-semibold mb-1 text-sm">+25% bonus APY</p>
            <p className="text-gray-300 text-xs">Lock tokens for extra rewards</p>
          </div>

          {/* Token Burns */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-600/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all backdrop-blur-sm border border-orange-500/20">
              <Flame className="w-8 h-8 text-orange-400" />
            </div>
            <h4 className="text-lg font-bold text-white mb-1">Token Burns</h4>
            <p className="text-orange-300 font-semibold mb-1 text-sm">2% quarterly</p>
            <p className="text-gray-300 text-xs">Reduce total supply</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-xl font-bold text-cyan-400">1M</div>
            <div className="text-gray-400 text-xs">Total Supply</div>
          </div>
          <div>
            <div className="text-xl font-bold text-purple-400">Solana</div>
            <div className="text-gray-400 text-xs">Blockchain</div>
          </div>
          <div>
            <div className="text-xl font-bold text-green-400">$10M</div>
            <div className="text-gray-400 text-xs">Dividend Start</div>
          </div>
          <div>
            <div className="text-xl font-bold text-yellow-400">98%</div>
            <div className="text-gray-400 text-xs">Security Score</div>
          </div>
        </div>
      </div>

      {/* Value Props */}
      <div className="grid grid-cols-2 gap-6">
        <div className="flex items-start space-x-3">
          <TrendingUp className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-lg font-bold text-white mb-1">Proven Growth</h4>
            <p className="text-blue-300 font-semibold text-sm mb-2">300% Average ROI</p>
            <div className="space-y-1">
              <div className="flex items-center text-xs text-gray-300">
                <CheckCircle2 className="w-3 h-3 text-green-400 mr-2" />
                $150M+ assets managed
              </div>
              <div className="flex items-center text-xs text-gray-300">
                <CheckCircle2 className="w-3 h-3 text-green-400 mr-2" />
                15 unicorn companies funded
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Crown className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-lg font-bold text-white mb-1">Elite Community</h4>
            <p className="text-purple-300 font-semibold text-sm mb-2">Exclusive Access</p>
            <div className="space-y-1">
              <div className="flex items-center text-xs text-gray-300">
                <CheckCircle2 className="w-3 h-3 text-green-400 mr-2" />
                Private investor calls
              </div>
              <div className="flex items-center text-xs text-gray-300">
                <CheckCircle2 className="w-3 h-3 text-green-400 mr-2" />
                Governance voting rights
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How to Buy */}
      <div>
        <div className="flex items-center justify-center mb-4">
          <Lightbulb className="w-6 h-6 text-yellow-400 mr-2" />
          <h3 className="text-xl font-bold text-white">How to Buy $SIDE</h3>
        </div>
        
        <div className="flex justify-center items-center space-x-6">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">1</div>
            <div>
              <div className="text-white font-medium text-sm">Install Phantom</div>
              <div className="text-gray-400 text-xs">Solana wallet</div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-gray-400" />
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">2</div>
            <div>
              <div className="text-white font-medium text-sm">Buy SOL</div>
              <div className="text-gray-400 text-xs">On exchange</div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-gray-400" />
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">3</div>
            <div>
              <div className="text-white font-medium text-sm">Swap to $SIDE</div>
              <div className="text-gray-400 text-xs">Start earning</div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="flex justify-center items-center space-x-4">
        <div className="flex items-center text-green-300 text-xs font-medium">
          <Shield className="w-3 h-3 mr-1" />
          CertiK Verified
        </div>
        <div className="flex items-center text-blue-300 text-xs font-medium">
          <Shield className="w-3 h-3 mr-1" />
          Insured Assets
        </div>
        <div className="flex items-center text-purple-300 text-xs font-medium">
          <Crown className="w-3 h-3 mr-1" />
          Swiss Licensed
        </div>
        <div className="flex items-center text-yellow-300 text-xs font-medium">
          <Sparkles className="w-3 h-3 mr-1" />
          Premium Tier
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center pt-4">
        <h3 className="text-2xl font-bold text-white mb-2">
          Start earning <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">today</span>
        </h3>
        <p className="text-gray-200 mb-4 text-sm">
          Don't miss the opportunity to earn passive income from blockchain economy development
        </p>
        
        <div className="flex justify-center gap-3">
          <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white px-6 py-2 rounded-xl font-bold shadow-lg hover:scale-105 transition-all">
            Buy $SIDE Tokens
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="border-purple-400/50 text-purple-300 hover:bg-purple-600/30 px-6 py-2 rounded-xl font-medium">
            View on DexScreener
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TokenOverview;
