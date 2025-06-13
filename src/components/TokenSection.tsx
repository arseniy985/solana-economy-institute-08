
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  BarChart3,
  Rocket,
  Star,
  PieChart,
  ArrowUpRight,
  Building,
  Wallet,
  Flame,
  Lightbulb,
  Network,
  Banknote,
  Globe,
  Activity
} from 'lucide-react';

const TokenSection = () => {
  const [copied, setCopied] = useState(false);
  
  const tokenAddress = "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R";
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(tokenAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const investmentTiers = [
    { name: "Bronze", min: "1,000 $SIDE", benefits: ["Monthly reports", "Community access"] },
    { name: "Silver", min: "5,000 $SIDE", benefits: ["Quarterly calls", "Early access", "Staking rewards"] },
    { name: "Gold", min: "25,000 $SIDE", benefits: ["Private consultations", "Exclusive events"] },
    { name: "Diamond", min: "100,000 $SIDE", benefits: ["Direct founder access", "Investment opportunities"] }
  ];

  return (
    <section id="token" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-full text-purple-200 text-sm font-semibold mb-6 border border-purple-500/30">
            <Coins className="w-4 h-4 mr-2 text-purple-400" />
            Official $SIDE Token
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-purple-300 bg-clip-text text-transparent">$SIDE</span> Token
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Solana Institute of Digital Economics - the first token with dividends in blockchain research
          </p>
        </div>

        {/* Compact Contract Address */}
        <div className="mb-10 max-w-2xl mx-auto">
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-purple-500/30 p-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center flex-1">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-violet-700 rounded-lg flex items-center justify-center mr-3">
                  <Network className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm mb-1">Contract Address</h3>
                  <code className="text-purple-300 text-xs font-mono break-all bg-gray-700/50 px-2 py-1 rounded">
                    {tokenAddress}
                  </code>
                </div>
              </div>
              <Button
                onClick={copyToClipboard}
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-1">
                <TabsTrigger 
                  value="overview" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-violet-700 data-[state=active]:text-white rounded-lg px-4 py-2 text-sm"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="rewards" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-violet-700 data-[state=active]:text-white rounded-lg px-4 py-2 text-sm"
                >
                  Rewards
                </TabsTrigger>
                <TabsTrigger 
                  value="security" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-violet-700 data-[state=active]:text-white rounded-lg px-4 py-2 text-sm"
                >
                  Security
                </TabsTrigger>
                <TabsTrigger 
                  value="community" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-violet-700 data-[state=active]:text-white rounded-lg px-4 py-2 text-sm"
                >
                  Community
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Token Information */}
                <div className="lg:col-span-2">
                  <Card className="bg-gray-800/60 border-gray-700/50 rounded-xl backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-white flex items-center text-lg">
                        <BarChart3 className="w-5 h-5 mr-2 text-purple-400" />
                        Token Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex justify-between">
                          <span className="text-gray-400 text-sm">Symbol</span>
                          <span className="text-white font-semibold">$SIDE</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400 text-sm">Blockchain</span>
                          <span className="text-purple-400 font-semibold">Solana</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400 text-sm">Total Supply</span>
                          <span className="text-white font-semibold">1,000,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400 text-sm">Dividends from</span>
                          <span className="text-green-400 font-semibold">$10M Cap</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400 text-sm">Burn Rate</span>
                          <span className="text-orange-400 font-semibold">2%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400 text-sm">Distributions</span>
                          <span className="text-blue-400 font-semibold">Monthly</span>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-700/50">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300 text-sm">Investment Tiers Available</span>
                          <Badge variant="outline" className="border-purple-500/50 text-purple-300">
                            4 Levels
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* How to Buy */}
                <div>
                  <Card className="bg-gray-800/60 border-gray-700/50 rounded-xl backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-white flex items-center text-lg">
                        <Lightbulb className="w-5 h-5 mr-2 text-yellow-400" />
                        How to Buy
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 mt-0.5">
                            1
                          </div>
                          <p className="text-gray-300 text-sm">Install Phantom wallet</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 mt-0.5">
                            2
                          </div>
                          <p className="text-gray-300 text-sm">Buy SOL on exchange</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 mt-0.5">
                            3
                          </div>
                          <p className="text-gray-300 text-sm">Use Jupiter DEX</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 mt-0.5">
                            4
                          </div>
                          <p className="text-gray-300 text-sm">Swap SOL for $SIDE</p>
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 rounded-lg mt-4">
                        <Wallet className="w-4 h-4 mr-2" />
                        Buy $SIDE
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gray-800/60 border-green-500/30 rounded-xl backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Dividends from $10M</h3>
                    <p className="text-gray-400 text-sm">Automatic dividend payments from institute profits</p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/60 border-blue-500/30 rounded-xl backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Security</h3>
                    <p className="text-gray-400 text-sm">Audited smart contract on Solana</p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/60 border-purple-500/30 rounded-xl backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Value Growth</h3>
                    <p className="text-gray-400 text-sm">Deflationary model with burn mechanism</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Rewards Tab */}
            <TabsContent value="rewards" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {investmentTiers.map((tier, index) => (
                  <Card key={index} className="bg-gray-800/60 border-gray-700/50 rounded-xl backdrop-blur-sm hover:border-purple-500/30 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-violet-700 rounded-lg flex items-center justify-center text-white mr-3">
                          <Star className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{tier.name} Tier</h3>
                          <p className="text-purple-300 font-medium text-sm">{tier.min}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {tier.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <Check className="w-3 h-3 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gray-800/60 border-green-500/30 rounded-xl backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">CertiK Audit</h3>
                    <p className="text-gray-300 text-sm">Complete security verification</p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/60 border-green-500/30 rounded-xl backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <Lock className="w-6 h-6" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Multisig Treasury</h3>
                    <p className="text-gray-300 text-sm">Protected fund management</p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/60 border-green-500/30 rounded-xl backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      <Banknote className="w-6 h-6" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Locked Liquidity</h3>
                    <p className="text-gray-300 text-sm">Guaranteed stability</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Community Tab */}
            <TabsContent value="community" className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <Card className="bg-gray-800/60 border-purple-500/30 rounded-xl backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-3">
                      <Users className="w-5 h-5" />
                    </div>
                    <p className="text-xl font-bold text-white mb-1">2,847</p>
                    <p className="text-gray-400 text-sm">Holders</p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/60 border-purple-500/30 rounded-xl backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-3">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <p className="text-xl font-bold text-white mb-1">$1.2M</p>
                    <p className="text-gray-400 text-sm">Total Volume</p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/60 border-purple-500/30 rounded-xl backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-3">
                      <Activity className="w-5 h-5" />
                    </div>
                    <p className="text-xl font-bold text-white mb-1">$45K</p>
                    <p className="text-gray-400 text-sm">Daily Volume</p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/60 border-purple-500/30 rounded-xl backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-3">
                      <Flame className="w-5 h-5" />
                    </div>
                    <p className="text-xl font-bold text-white mb-1">12,450</p>
                    <p className="text-gray-400 text-sm">Tokens Burned</p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-center gap-4 pt-6">
                <Button variant="outline" className="border-blue-400/50 text-blue-400 hover:bg-blue-500/20 rounded-lg">
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </Button>
                <Button variant="outline" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-500/20 rounded-lg">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Telegram  
                </Button>
                <Button variant="outline" className="border-gray-400/50 text-gray-300 hover:bg-gray-500/20 rounded-lg">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-900/60 via-violet-900/60 to-purple-900/60 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-3">
              Start earning <span className="bg-gradient-to-r from-purple-300 to-violet-400 bg-clip-text text-transparent">today</span>
            </h2>
            <p className="text-gray-200 mb-6">
              Don't miss the opportunity to earn passive income from blockchain economy development
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white px-6 rounded-lg">
                Buy $SIDE Tokens
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-purple-400/50 text-purple-300 hover:bg-purple-600/30 rounded-lg">
                View on DexScreener
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSection;
