
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
  Percent,
  Timer,
  CheckCircle2,
  Lightbulb,
  ArrowUpRight,
  ExternalLink,
  Target,
  Rocket,
  Sparkles
} from 'lucide-react';

const TokenOverview = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-950 via-purple-950/50 to-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-yellow-500/15 to-orange-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 p-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl mr-4">
              <img 
                src="/lovable-uploads/38c7bb81-42e5-4be7-9177-8f17c128376a.png" 
                alt="SIDE Token" 
                className="w-10 h-10"
              />
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-white mb-1">$SIDE Token</h1>
              <p className="text-yellow-300 font-semibold">Dividends start at $10M market cap</p>
            </div>
            <Badge className="ml-6 bg-green-500/20 border-green-400/50 text-green-300 px-4 py-2 font-bold">
              GUARANTEED
            </Badge>
          </div>

          {/* Key Metrics - Flowing Layout */}
          <div className="flex justify-center items-center space-x-12 mb-8 text-center">
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform">
                15%
              </div>
              <div className="text-emerald-300 text-sm font-medium">APY Dividends</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform">
                25%
              </div>
              <div className="text-purple-300 text-sm font-medium">Staking Bonus</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform">
                2%
              </div>
              <div className="text-orange-300 text-sm font-medium">Token Burns</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform">
                300%
              </div>
              <div className="text-cyan-300 text-sm font-medium">Avg ROI</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white px-8 py-3 rounded-xl font-bold shadow-xl hover:scale-105 transition-all">
              <Target className="w-5 h-5 mr-2" />
              Buy $SIDE
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-600/20 px-8 py-3 rounded-xl font-semibold">
              <BarChart3 className="w-5 h-5 mr-2" />
              DexScreener
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Features Flow */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent flex-1"></div>
            <h2 className="text-2xl font-bold text-white mx-8">Core Features</h2>
            <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent flex-1"></div>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Auto Dividends */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-green-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all backdrop-blur-sm">
                <DollarSign className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Auto Dividends</h3>
              <p className="text-emerald-300 font-semibold mb-2">From $10M cap</p>
              <p className="text-gray-300 text-sm">Monthly profit distributions directly to your wallet</p>
            </div>

            {/* Staking Protocol */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-violet-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all backdrop-blur-sm">
                <Zap className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Staking Protocol</h3>
              <p className="text-purple-300 font-semibold mb-2">+25% bonus APY</p>
              <p className="text-gray-300 text-sm">Lock tokens for extra rewards and voting rights</p>
            </div>

            {/* Token Burns */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all backdrop-blur-sm">
                <Flame className="w-10 h-10 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Token Burns</h3>
              <p className="text-orange-300 font-semibold mb-2">2% quarterly</p>
              <p className="text-gray-300 text-sm">Quarterly token burns reduce total supply</p>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 mb-12">
          <div className="flex justify-between items-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">1M</div>
              <div className="text-gray-400 text-sm">Total Supply</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">Solana</div>
              <div className="text-gray-400 text-sm">Blockchain</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">$10M</div>
              <div className="text-gray-400 text-sm">Dividend Start</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">98%</div>
              <div className="text-gray-400 text-sm">Security Score</div>
            </div>
          </div>
        </div>

        {/* Value Props - Side by Side */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          <div className="text-left">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-blue-400 mr-3" />
              <div>
                <h3 className="text-xl font-bold text-white">Proven Growth Model</h3>
                <p className="text-blue-300 font-semibold">300% Average ROI</p>
              </div>
            </div>
            <div className="space-y-2 ml-11">
              <div className="flex items-center text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
                $150M+ assets under management
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
                15 unicorn companies funded
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
                6 years of consistent profits
              </div>
            </div>
          </div>

          <div className="text-left">
            <div className="flex items-center mb-4">
              <Crown className="w-8 h-8 text-purple-400 mr-3" />
              <div>
                <h3 className="text-xl font-bold text-white">Elite Community</h3>
                <p className="text-purple-300 font-semibold">Exclusive Access</p>
              </div>
            </div>
            <div className="space-y-2 ml-11">
              <div className="flex items-center text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
                Private investor calls
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
                Early access to projects
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
                Governance voting rights
              </div>
            </div>
          </div>
        </div>

        {/* How to Buy - Streamlined */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <Lightbulb className="w-8 h-8 text-yellow-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">How to Buy $SIDE</h3>
          </div>
          
          <div className="flex justify-center items-center space-x-8">
            <div className="flex items-center text-center">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
              <div>
                <div className="text-white font-semibold">Install Phantom</div>
                <div className="text-gray-400 text-sm">Solana wallet</div>
              </div>
            </div>
            <ArrowUpRight className="w-6 h-6 text-gray-400" />
            <div className="flex items-center text-center">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
              <div>
                <div className="text-white font-semibold">Buy SOL</div>
                <div className="text-gray-400 text-sm">On exchange</div>
              </div>
            </div>
            <ArrowUpRight className="w-6 h-6 text-gray-400" />
            <div className="flex items-center text-center">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white font-bold mr-3">3</div>
              <div>
                <div className="text-white font-semibold">Jupiter DEX</div>
                <div className="text-gray-400 text-sm">Connect wallet</div>
              </div>
            </div>
            <ArrowUpRight className="w-6 h-6 text-gray-400" />
            <div className="flex items-center text-center">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white font-bold mr-3">4</div>
              <div>
                <div className="text-white font-semibold">Swap to $SIDE</div>
                <div className="text-gray-400 text-sm">Start earning</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges - Inline */}
        <div className="flex justify-center items-center space-x-6 mb-12">
          <div className="flex items-center text-green-300 text-sm font-medium">
            <Shield className="w-4 h-4 mr-2" />
            CertiK Verified
          </div>
          <div className="flex items-center text-blue-300 text-sm font-medium">
            <Shield className="w-4 h-4 mr-2" />
            Insured Assets
          </div>
          <div className="flex items-center text-purple-300 text-sm font-medium">
            <Crown className="w-4 h-4 mr-2" />
            Swiss Licensed
          </div>
          <div className="flex items-center text-yellow-300 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            Premium Tier
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start earning <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">today</span>
          </h2>
          <p className="text-gray-200 mb-6 text-lg">
            Don't miss the opportunity to earn passive income from blockchain economy development
          </p>
          
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 transition-all text-lg">
              Buy $SIDE Tokens
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-purple-400/50 text-purple-300 hover:bg-purple-600/30 px-8 py-4 rounded-xl font-semibold text-lg">
              View on DexScreener
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenOverview;
