

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
  BarChart3,
  Rocket,
  Globe,
  Star,
  Activity,
  PieChart,
  ArrowUpRight,
  Building,
  Banknote,
  Wallet,
  Clock,
  Flame
} from 'lucide-react';

const TokenSection = () => {
  const [copied, setCopied] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);
  const [animatedValue, setAnimatedValue] = useState(0);
  
  const tokenAddress = "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R";
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue(prev => (prev + 1) % 100);
      setActiveMetric(prev => (prev + 1) % 4);
    }, 3000);
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

  const metrics = [
    { label: "Market Cap", value: "$2.5M", change: "+24.5%", icon: <BarChart3 className="w-6 h-6" />, color: "from-green-500 to-emerald-600" },
    { label: "Holders", value: "1,247", change: "+18.2%", icon: <Users className="w-6 h-6" />, color: "from-blue-500 to-cyan-600" },
    { label: "Volume 24h", value: "$156K", change: "+45.8%", icon: <Activity className="w-6 h-6" />, color: "from-purple-500 to-violet-600" },
    { label: "Burned Tokens", value: "12,547", change: "+2.1%", icon: <Flame className="w-6 h-6" />, color: "from-orange-500 to-red-600" }
  ];

  const developmentMilestones = [
    { phase: "Phase 1", title: "Token Launch & Infrastructure", status: "completed", progress: 100 },
    { phase: "Phase 2", title: "DeFi Integration & Staking", status: "current", progress: 75 },
    { phase: "Phase 3", title: "DAO Governance & Voting", status: "upcoming", progress: 25 },
    { phase: "Phase 4", title: "Cross-chain Expansion", status: "planned", progress: 0 }
  ];

  const investmentTiers = [
    {
      name: "Bronze Holder",
      min: "1,000 $SIDE",
      benefits: ["Monthly reports", "Community access"],
      color: "from-amber-600 to-orange-600",
      icon: <Award className="w-8 h-8" />
    },
    {
      name: "Silver Investor", 
      min: "5,000 $SIDE",
      benefits: ["Quarterly calls", "Early research access", "Staking rewards"],
      color: "from-gray-400 to-gray-600",
      icon: <Star className="w-8 h-8" />
    },
    {
      name: "Gold Partner",
      min: "25,000 $SIDE", 
      benefits: ["Private consultations", "Exclusive events", "Portfolio analysis"],
      color: "from-yellow-400 to-yellow-600",
      icon: <Rocket className="w-8 h-8" />
    },
    {
      name: "Diamond Elite",
      min: "100,000 $SIDE",
      benefits: ["Direct access to founders", "Investment opportunities", "Custom research"],
      color: "from-purple-400 to-violet-600", 
      icon: <Building className="w-8 h-8" />
    }
  ];

  return (
    <section id="token" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-full text-purple-200 text-sm font-medium mb-8 border border-purple-500/30 backdrop-blur-sm">
            <Rocket className="w-5 h-5 mr-2 animate-bounce" />
            Revolutionary Blockchain Economics Token
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              $SIDE
            </span>
            <br />
            <span className="text-4xl md:text-5xl bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
              The Future of Finance
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
            Join the financial revolution with <span className="font-bold text-purple-300">SIDE Token</span> - 
            the first dividend-paying research token backed by real blockchain innovation and institutional partnerships.
          </p>

          {/* Live Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <div key={index} className={`relative group ${activeMetric === index ? 'scale-105' : ''} transition-transform duration-500`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${metric.color} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <Card className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-gray-600/30 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-xl flex items-center justify-center text-white mx-auto mb-3`}>
                      {metric.icon}
                    </div>
                    <p className="text-2xl font-bold text-white mb-1">{metric.value}</p>
                    <p className="text-sm text-gray-400 mb-2">{metric.label}</p>
                    <p className="text-green-400 text-sm font-medium">{metric.change}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Token Address */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-gray-800/80 via-gray-700/60 to-gray-800/80 p-8 rounded-3xl border border-purple-500/30 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center justify-center">
                <Globe className="w-6 h-6 mr-2 text-purple-400" />
                Smart Contract Address
              </h3>
              <div className="flex items-center justify-between bg-black/60 p-6 rounded-xl border border-gray-600/50">
                <code className="text-purple-300 text-base font-mono break-all mr-4 flex-1">{tokenAddress}</code>
                <Button
                  onClick={copyToClipboard}
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 flex-shrink-0 ml-4"
                >
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  <span className="ml-2">{copied ? 'Copied!' : 'Copy'}</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Tiers */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Investment <span className="bg-gradient-to-r from-purple-300 to-violet-400 bg-clip-text text-transparent">Tiers</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock exclusive benefits and rewards based on your $SIDE holdings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentTiers.map((tier, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${tier.color} rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <Card className="relative bg-gradient-to-br from-gray-800/95 to-gray-900/95 border-gray-600/30 h-full hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6`}>
                      {tier.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{tier.name}</h3>
                    <p className="text-purple-300 font-semibold mb-6">{tier.min}</p>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Development Roadmap */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Development <span className="bg-gradient-to-r from-purple-300 to-violet-400 bg-clip-text text-transparent">Roadmap</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Track our progress in building the most advanced blockchain economics platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentMilestones.map((milestone, index) => (
              <div key={index} className="relative">
                <Card className={`bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-2 transition-all duration-300 ${
                  milestone.status === 'completed' 
                    ? 'border-green-500/50 bg-green-600/10'
                    : milestone.status === 'current'
                    ? 'border-purple-500/50 bg-purple-600/10 scale-105'
                    : milestone.status === 'upcoming'
                    ? 'border-blue-500/50 bg-blue-600/10'
                    : 'border-gray-500/50'
                }`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={`${
                        milestone.status === 'completed' ? 'bg-green-600' :
                        milestone.status === 'current' ? 'bg-purple-600' :
                        milestone.status === 'upcoming' ? 'bg-blue-600' : 'bg-gray-600'
                      }`}>
                        {milestone.phase}
                      </Badge>
                      <span className="text-2xl font-bold text-white">{milestone.progress}%</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{milestone.title}</h3>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ${
                          milestone.status === 'completed' ? 'bg-green-500' :
                          milestone.status === 'current' ? 'bg-purple-500' :
                          milestone.status === 'upcoming' ? 'bg-blue-500' : 'bg-gray-500'
                        }`}
                        style={{ width: `${milestone.progress}%` }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Token Economics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-purple-500/30 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-purple-500/20 to-transparent"></div>
            <CardHeader>
              <CardTitle className="text-white flex items-center text-2xl">
                <PieChart className="w-8 h-8 mr-3 text-purple-400" />
                Token Economics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-700/50 rounded-xl">
                  <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">$10M</p>
                  <p className="text-gray-400 text-sm">Dividend Trigger</p>
                </div>
                <div className="text-center p-4 bg-gray-700/50 rounded-xl">
                  <Banknote className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">1M</p>
                  <p className="text-gray-400 text-sm">Total Supply</p>
                </div>
                <div className="text-center p-4 bg-gray-700/50 rounded-xl">
                  <Flame className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">2%</p>
                  <p className="text-gray-400 text-sm">Burn Rate</p>
                </div>
                <div className="text-center p-4 bg-gray-700/50 rounded-xl">
                  <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">Monthly</p>
                  <p className="text-gray-400 text-sm">Distributions</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center text-2xl">
                <Shield className="w-8 h-8 mr-3 text-blue-400" />
                Security & Audits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center p-4 bg-green-600/20 rounded-xl border border-green-500/30">
                  <Check className="w-6 h-6 text-green-400 mr-3" />
                  <div>
                    <p className="text-white font-medium">CertiK Security Audit</p>
                    <p className="text-gray-400 text-sm">Smart contract verified and secure</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-blue-600/20 rounded-xl border border-blue-500/30">
                  <Check className="w-6 h-6 text-blue-400 mr-3" />
                  <div>
                    <p className="text-white font-medium">Multisig Treasury</p>
                    <p className="text-gray-400 text-sm">3-of-5 signature requirement</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-purple-600/20 rounded-xl border border-purple-500/30">
                  <Check className="w-6 h-6 text-purple-400 mr-3" />
                  <div>
                    <p className="text-white font-medium">Locked Liquidity</p>
                    <p className="text-gray-400 text-sm">2-year lock on Solana</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-8">
          <div className="bg-gradient-to-r from-purple-900/80 via-violet-900/80 to-purple-900/80 p-12 rounded-3xl border border-purple-500/30 backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join the <span className="bg-gradient-to-r from-purple-300 to-violet-400 bg-clip-text text-transparent">Revolution?</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Don't miss your chance to be part of the future of blockchain economics. 
              Start earning dividends and unlock exclusive research access today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white px-12 py-6 text-lg">
                <Wallet className="w-6 h-6 mr-2" />
                Buy $SIDE Tokens
                <ArrowUpRight className="ml-2 h-6 w-6" />
              </Button>
              <Button variant="outline" size="lg" className="border-purple-400/50 text-purple-300 px-12 py-6 text-lg hover:bg-purple-600/30">
                <ExternalLink className="w-6 h-6 mr-2" />
                View on DexScreener
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-blue-400/50 bg-gray-800/50 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400 hover:text-white transition-all duration-300"
            >
              <Twitter className="w-5 h-5 mr-2" />
              Twitter
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-cyan-400/50 bg-gray-800/50 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Telegram
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-400/50 bg-gray-800/50 text-gray-300 hover:bg-gray-500/20 hover:border-gray-400 hover:text-white transition-all duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSection;

