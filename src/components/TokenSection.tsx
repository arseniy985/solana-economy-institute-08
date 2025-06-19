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

        {/* Contract Address - Centered */}
        <div className="mb-10 max-w-xl mx-auto">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-6">
            <h3 className="text-white font-semibold text-center mb-4 flex items-center justify-center">
              <Network className="w-5 h-5 mr-2 text-purple-400" />
              Contract Address
            </h3>
            <div className="flex items-center gap-3">
              <code className="flex-1 text-purple-300 text-sm font-mono bg-gray-700/50 px-4 py-3 rounded-lg text-center break-all">
                {tokenAddress}
              </code>
              <Button
                onClick={copyToClipboard}
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 px-4 py-3"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="max-w-5xl mx-auto mb-10">
          <Tabs defaultValue="overview" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-1 h-12">
                <TabsTrigger 
                  value="overview" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-violet-700 data-[state=active]:text-white rounded-xl px-4 py-2 text-sm font-medium h-10 flex items-center justify-center"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="rewards" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-violet-700 data-[state=active]:text-white rounded-xl px-4 py-2 text-sm font-medium h-10 flex items-center justify-center"
                >
                  Rewards
                </TabsTrigger>
                <TabsTrigger 
                  value="security" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-violet-700 data-[state=active]:text-white rounded-xl px-4 py-2 text-sm font-medium h-10 flex items-center justify-center"
                >
                  Security
                </TabsTrigger>
                <TabsTrigger 
                  value="community" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-violet-700 data-[state=active]:text-white rounded-xl px-4 py-2 text-sm font-medium h-10 flex items-center justify-center"
                >
                  Community
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Token Information - Top Left */}
                <Card className="bg-gray-800/80 border-gray-600/30 rounded-2xl backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-violet-700 rounded-xl flex items-center justify-center mr-3">
                        <BarChart3 className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-white font-semibold">Token Information</h3>
                    </div>
                    <div className="space-y-3">
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
                    </div>
                  </CardContent>
                </Card>

                {/* Dividends - Top Center */}
                <Card className="bg-gray-800/80 border-green-500/30 rounded-2xl backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Dividends from $10M</h3>
                    <p className="text-gray-400 text-sm">Automatic dividend payments from institute profits</p>
                  </CardContent>
                </Card>

                {/* Security - Top Right */}
                <Card className="bg-gray-800/80 border-blue-500/30 rounded-2xl backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Security</h3>
                    <p className="text-gray-400 text-sm">Audited smart contract on Solana</p>
                  </CardContent>
                </Card>

                {/* How to Buy - Bottom Left */}
                <Card className="bg-gray-800/80 border-yellow-500/30 rounded-2xl backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-yellow-600 rounded-xl flex items-center justify-center mr-3">
                        <Lightbulb className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-white font-semibold">How to Buy</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start text-sm">
                        <div className="w-5 h-5 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2 mt-0.5 flex-shrink-0">
                          1
                        </div>
                        <span className="text-gray-300">Install Phantom wallet</span>
                      </div>
                      <div className="flex items-start text-sm">
                        <div className="w-5 h-5 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2 mt-0.5 flex-shrink-0">
                          2
                        </div>
                        <span className="text-gray-300">Buy SOL on exchange</span>
                      </div>
                      <div className="flex items-start text-sm">
                        <div className="w-5 h-5 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2 mt-0.5 flex-shrink-0">
                          3
                        </div>
                        <span className="text-gray-300">Use Jupiter DEX</span>
                      </div>
                      <div className="flex items-start text-sm">
                        <div className="w-5 h-5 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2 mt-0.5 flex-shrink-0">
                          4
                        </div>
                        <span className="text-gray-300">Swap SOL for $SIDE</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Value Growth - Bottom Center */}
                <Card className="bg-gray-800/80 border-purple-500/30 rounded-2xl backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Value Growth</h3>
                    <p className="text-gray-400 text-sm">Deflationary model with burn mechanism</p>
                  </CardContent>
                </Card>

                {/* Community - Bottom Right */}
                <Card className="bg-gray-800/80 border-orange-500/30 rounded-2xl backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Community</h3>
                    <p className="text-gray-400 text-sm">Active participation in ecosystem development</p>
                  </CardContent>
                </Card>
              </div>

              {/* Investment Tiers Button */}
              <div className="text-center pt-4">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-full text-purple-200 text-sm font-semibold border border-purple-500/30">
                  <Star className="w-4 h-4 mr-2 text-purple-400" />
                  4 Investment Tiers Available - See Rewards Tab
                </div>
              </div>
            </TabsContent>

            
            <TabsContent value="rewards" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {investmentTiers.map((tier, index) => (
                  <Card key={index} className="bg-gray-800/80 border-gray-600/30 rounded-2xl backdrop-blur-sm hover:border-purple-500/30 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-violet-700 rounded-xl flex items-center justify-center text-white mr-3">
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

            <TabsContent value="security" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gray-800/80 border-green-500/30 rounded-2xl backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">CertiK Audit</h3>
                    <p className="text-gray-300 text-sm">Complete security verification</p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/80 border-green-500/30 rounded-2xl backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                      <Lock className="w-6 h-6" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Multisig Treasury</h3>
                    <p className="text-gray-300 text-sm">Protected fund management</p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/80 border-green-500/30 rounded-2xl backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                      <Banknote className="w-6 h-6" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Locked Liquidity</h3>
                    <p className="text-gray-300 text-sm">Guaranteed stability</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="community" className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <Card className="bg-gray-800/80 border-purple-500/30 rounded-2xl backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                      <Users className="w-5 h-5" />
                    </div>
                    <p className="text-xl font-bold text-white mb-1">2,847</p>
                    <p className="text-gray-400 text-sm">Holders</p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/80 border-purple-500/30 rounded-2xl backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <p className="text-xl font-bold text-white mb-1">$1.2M</p>
                    <p className="text-gray-400 text-sm">Total Volume</p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/80 border-purple-500/30 rounded-2xl backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                      <Activity className="w-5 h-5" />
                    </div>
                    <p className="text-xl font-bold text-white mb-1">$45K</p>
                    <p className="text-gray-400 text-sm">Daily Volume</p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/80 border-purple-500/30 rounded-2xl backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                      <Flame className="w-5 h-5" />
                    </div>
                    <p className="text-xl font-bold text-white mb-1">12,450</p>
                    <p className="text-gray-400 text-sm">Tokens Burned</p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-center gap-4">
                <Button variant="outline" className="border-blue-400/50 text-blue-400 hover:bg-blue-500/20 rounded-xl">
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </Button>
                <Button variant="outline" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-500/20 rounded-xl">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Telegram  
                </Button>
                <Button variant="outline" className="border-gray-400/50 text-gray-300 hover:bg-gray-500/20 rounded-xl">
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
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white px-6 rounded-xl">
                Buy $SIDE Tokens
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-purple-400/50 text-purple-300 hover:bg-purple-600/30 rounded-xl">
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
