
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Copy, 
  Check, 
  Shield, 
  TrendingUp, 
  Coins, 
  Users, 
  ExternalLink,
  Twitter,
  Github,
  MessageCircle,
  DollarSign,
  Lock,
  Zap,
  Target,
  Award,
  ChevronRight,
  BarChart3
} from 'lucide-react';

const TokenSection = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [animatedValue, setAnimatedValue] = useState(0);
  
  const tokenAddress = "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R";
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(tokenAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const features = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Dividends from $10M",
      description: "Automatic payouts to token holders",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security",
      description: "Audited smart contract on Solana",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Value Growth",
      description: "Deflationary model with burn mechanism",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community",
      description: "Active participation in ecosystem development",
      color: "from-orange-500 to-red-600"
    }
  ];

  const roadmapItems = [
    { milestone: "$1M", reward: "5% of profit", status: "completed" },
    { milestone: "$5M", reward: "10% of profit", status: "current" },
    { milestone: "$10M", reward: "Dividend start", status: "upcoming" },
    { milestone: "$50M", reward: "20% of profit", status: "future" }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Coins className="w-4 h-4" /> },
    { id: 'rewards', label: 'Rewards', icon: <Award className="w-4 h-4" /> },
    { id: 'security', label: 'Security', icon: <Shield className="w-4 h-4" /> },
    { id: 'roadmap', label: 'Roadmap', icon: <Target className="w-4 h-4" /> }
  ];

  return (
    <section id="token" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-600/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-violet-600/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-fuchsia-600/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/30 to-violet-600/30 rounded-full text-purple-200 text-sm font-medium mb-6 border border-purple-500/50 backdrop-blur-sm">
            <Coins className="w-5 h-5 mr-2" />
            Official SIDE Token
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              $SIDE
            </span>
            {' '}Token
          </h2>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            <span className="font-bold text-purple-300">Solana Institute of Digital Economics</span> - 
            The first dividend-paying token in blockchain research
          </p>

          {/* Token Address Card */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-gray-800/80 via-gray-700/60 to-gray-800/80 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-4">Contract Address</h3>
              <div className="flex items-center justify-between bg-black/50 p-4 rounded-lg border border-gray-600/50">
                <code className="text-purple-300 text-sm font-mono break-all mr-4">{tokenAddress}</code>
                <Button
                  onClick={copyToClipboard}
                  size="sm"
                  className="bg-purple-600 hover:bg-purple-700 flex-shrink-0"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                {tab.icon}
                <span className="ml-2 font-medium">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Token Info */}
                <div className="space-y-6">
                  <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-purple-500/30 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/20 to-transparent"></div>
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <Coins className="w-6 h-6 mr-2 text-purple-400" />
                        Token Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-gray-400 text-sm">Symbol</p>
                          <p className="text-white font-bold">$SIDE</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Blockchain</p>
                          <p className="text-white font-bold">Solana</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Total Supply</p>
                          <p className="text-white font-bold">1,000,000</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Dividends from</p>
                          <p className="text-green-400 font-bold">$10M Cap</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* How to Buy */}
                  <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <Zap className="w-6 h-6 mr-2 text-yellow-400" />
                        How to Buy
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ol className="space-y-3 text-gray-200">
                        <li className="flex items-start">
                          <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                          Install Phantom or Solflare wallet
                        </li>
                        <li className="flex items-start">
                          <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                          Buy SOL on exchange
                        </li>
                        <li className="flex items-start">
                          <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                          Use Jupiter or Raydium DEX
                        </li>
                        <li className="flex items-start">
                          <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                          Swap SOL for $SIDE
                        </li>
                      </ol>
                    </CardContent>
                  </Card>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="group relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                      <Card className="relative bg-gradient-to-br from-gray-800/95 to-gray-900/95 border-gray-600/30 h-full hover:scale-105 transition-transform duration-300">
                        <CardContent className="p-6">
                          <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                            {feature.icon}
                          </div>
                          <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                          <p className="text-gray-400 text-sm">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'rewards' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Award className="w-6 h-6 mr-2 text-yellow-400" />
                      Reward System
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 p-4 rounded-lg border border-green-500/30">
                      <h4 className="text-green-400 font-bold mb-2">💰 Dividends</h4>
                      <p className="text-gray-200 text-sm">Monthly payouts in SOL starting at $10M market cap</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-600/20 to-violet-600/20 p-4 rounded-lg border border-purple-500/30">
                      <h4 className="text-purple-400 font-bold mb-2">🔥 Burn Mechanism</h4>
                      <p className="text-gray-200 text-sm">2% of each transaction is burned, reducing total supply</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-4 rounded-lg border border-blue-500/30">
                      <h4 className="text-blue-400 font-bold mb-2">🎯 Staking</h4>
                      <p className="text-gray-200 text-sm">Additional rewards for long-term token holding</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <BarChart3 className="w-6 h-6 mr-2 text-green-400" />
                      Yield Forecast
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg">
                        <span className="text-gray-300">Market Cap $10M</span>
                        <span className="text-green-400 font-bold">5% APY</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg">
                        <span className="text-gray-300">Market Cap $25M</span>
                        <span className="text-green-400 font-bold">8% APY</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg">
                        <span className="text-gray-300">Market Cap $50M</span>
                        <span className="text-green-400 font-bold">12% APY</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-600/30 to-violet-600/30 rounded-lg border border-purple-500/50">
                        <span className="text-white font-medium">Market Cap $100M</span>
                        <span className="text-yellow-400 font-bold">20% APY</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Shield className="w-6 h-6 mr-2 text-blue-400" />
                      Smart Contract Security
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center p-3 bg-green-600/20 rounded-lg border border-green-500/30">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      <span className="text-gray-200">CertiK Audit</span>
                    </div>
                    <div className="flex items-center p-3 bg-green-600/20 rounded-lg border border-green-500/30">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      <span className="text-gray-200">Solscan Verified</span>
                    </div>
                    <div className="flex items-center p-3 bg-green-600/20 rounded-lg border border-green-500/30">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      <span className="text-gray-200">Open Source</span>
                    </div>
                    <div className="flex items-center p-3 bg-green-600/20 rounded-lg border border-green-500/30">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      <span className="text-gray-200">Locked Liquidity</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Lock className="w-6 h-6 mr-2 text-yellow-400" />
                      Additional Protection
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-yellow-600/20 rounded-lg border border-yellow-500/30">
                      <h4 className="text-yellow-400 font-bold mb-2">🔒 Multisig Wallet</h4>
                      <p className="text-gray-200 text-sm">Funds managed by 3-of-5 multisig wallet</p>
                    </div>
                    <div className="p-4 bg-blue-600/20 rounded-lg border border-blue-500/30">
                      <h4 className="text-blue-400 font-bold mb-2">⏱️ Timelock</h4>
                      <p className="text-gray-200 text-sm">24-hour delay on all critical changes</p>
                    </div>
                    <div className="p-4 bg-purple-600/20 rounded-lg border border-purple-500/30">
                      <h4 className="text-purple-400 font-bold mb-2">🔍 Transparency</h4>
                      <p className="text-gray-200 text-sm">All transactions publicly available on blockchain</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'roadmap' && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white text-center mb-8">Token Roadmap</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {roadmapItems.map((item, index) => (
                    <div key={index} className="relative">
                      <div className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                        item.status === 'completed' 
                          ? 'bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-green-500/50'
                          : item.status === 'current'
                          ? 'bg-gradient-to-br from-purple-600/20 to-violet-600/20 border-purple-500/50 scale-105'
                          : item.status === 'upcoming'
                          ? 'bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-blue-500/50'
                          : 'bg-gradient-to-br from-gray-600/20 to-gray-700/20 border-gray-500/50'
                      }`}>
                        <div className="text-center">
                          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                            item.status === 'completed' ? 'bg-green-600' :
                            item.status === 'current' ? 'bg-purple-600' :
                            item.status === 'upcoming' ? 'bg-blue-600' : 'bg-gray-600'
                          }`}>
                            {item.status === 'completed' ? (
                              <Check className="w-6 h-6 text-white" />
                            ) : (
                              <span className="text-white font-bold">{index + 1}</span>
                            )}
                          </div>
                          <h4 className="text-xl font-bold text-white mb-2">{item.milestone}</h4>
                          <p className="text-gray-300 text-sm">{item.reward}</p>
                          {item.status === 'current' && (
                            <Badge className="mt-3 bg-purple-600">Current Stage</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Social Links and CTA */}
        <div className="text-center space-y-8">
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="sm" className="border-gray-600 bg-gray-800/50 text-blue-400 hover:bg-blue-600/20 hover:border-blue-500">
              <Twitter className="w-4 h-4 mr-2" />
              Twitter
            </Button>
            <Button variant="outline" size="sm" className="border-gray-600 bg-gray-800/50 text-blue-400 hover:bg-blue-600/20 hover:border-blue-500">
              <MessageCircle className="w-4 h-4 mr-2" />
              Telegram
            </Button>
            <Button variant="outline" size="sm" className="border-gray-600 bg-gray-800/50 text-gray-300 hover:bg-gray-600/20 hover:border-gray-500">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white px-8 py-4">
              Buy $SIDE Tokens
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-purple-400/50 text-purple-300 px-8 py-4 hover:bg-purple-600/30">
              <ExternalLink className="w-5 h-5 mr-2" />
              View on DexScreener
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSection;
