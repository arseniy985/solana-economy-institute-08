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
  Activity,
  ShieldCheck,
  ShieldAlert,
  Eye,
  FileText,
  Key,
  UserCheck,
  Database,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Fingerprint,
  CreditCard,
  Verified,
  Gift,
  Percent,
  Crown,
  Sparkles,
  Timer,
  Calendar,
  TrendingDown,
  ArrowRight
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

  const securityFeatures = [
    {
      icon: ShieldCheck,
      title: "CertiK Audit",
      subtitle: "Complete security verification",
      description: "Full smart contract audit by industry-leading CertiK with 98% security score",
      status: "Verified",
      color: "from-green-600 to-emerald-700",
      borderColor: "border-green-500/50",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Lock,
      title: "Multisig Treasury",
      subtitle: "Protected fund management", 
      description: "5-of-7 multisig wallet securing $150M+ in assets with time-locked withdrawals",
      status: "Active",
      color: "from-blue-600 to-cyan-700",
      borderColor: "border-blue-500/50",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Banknote,
      title: "Locked Liquidity",
      subtitle: "Guaranteed stability",
      description: "100% liquidity locked for 5 years with Unicrypt, ensuring long-term stability",
      status: "Locked",
      color: "from-purple-600 to-violet-700",
      borderColor: "border-purple-500/50",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      subtitle: "24/7 security surveillance",
      description: "Advanced monitoring systems tracking all transactions and potential threats",
      status: "Online",
      color: "from-orange-600 to-red-700",
      borderColor: "border-orange-500/50",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: FileText,
      title: "Legal Compliance",
      subtitle: "Regulatory framework",
      description: "Full legal compliance with Swiss financial regulations and SEC guidelines",
      status: "Compliant",
      color: "from-indigo-600 to-blue-700",
      borderColor: "border-indigo-500/50",
      bgColor: "bg-indigo-500/10"
    },
    {
      icon: Database,
      title: "Cold Storage",
      subtitle: "Offline asset protection",
      description: "95% of funds stored in military-grade cold storage with geographic distribution",
      status: "Secured",
      color: "from-gray-600 to-slate-700",
      borderColor: "border-gray-500/50",
      bgColor: "bg-gray-500/10"
    },
    {
      icon: Fingerprint,
      title: "Biometric Access",
      subtitle: "Advanced authentication",
      description: "Multi-factor biometric authentication for all critical operations",
      status: "Enabled",
      color: "from-teal-600 to-cyan-700",
      borderColor: "border-teal-500/50",
      bgColor: "bg-teal-500/10"
    },
    {
      icon: UserCheck,
      title: "KYC/AML Verified",
      subtitle: "Identity verification",
      description: "Full KYC/AML compliance with institutional-grade verification procedures",
      status: "Verified",
      color: "from-green-600 to-teal-700",
      borderColor: "border-green-500/50",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Clock,
      title: "Time Locks",
      subtitle: "Delayed execution",
      description: "48-hour time locks on all major operations preventing unauthorized access",
      status: "Active",
      color: "from-yellow-600 to-orange-700",
      borderColor: "border-yellow-500/50",
      bgColor: "bg-yellow-500/10"
    }
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
            <TabsContent value="overview" className="space-y-8">
              
              {/* Main Value Proposition Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Dividend Rewards */}
                <Card className="bg-gradient-to-br from-emerald-900/40 to-green-900/40 border-2 border-emerald-500/50 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
                        <DollarSign className="w-8 h-8" />
                      </div>
                      <Badge className="bg-emerald-500/20 border-emerald-500/50 text-emerald-300 text-xs font-bold px-3 py-1">
                        GUARANTEED
                      </Badge>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">Automatic Dividends</h3>
                    <p className="text-emerald-300 font-bold text-lg mb-3">From $10M Market Cap</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">Monthly dividend distributions from institute profits directly to your wallet</p>
                    <div className="flex items-center text-emerald-400 text-sm font-medium">
                      <Percent className="w-4 h-4 mr-2" />
                      Up to 15% APY Expected
                    </div>
                  </CardContent>
                </Card>

                {/* Staking Rewards */}
                <Card className="bg-gradient-to-br from-purple-900/40 to-violet-900/40 border-2 border-purple-500/50 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
                        <Zap className="w-8 h-8" />
                      </div>
                      <Badge className="bg-purple-500/20 border-purple-500/50 text-purple-300 text-xs font-bold px-3 py-1">
                        ACTIVE
                      </Badge>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">Staking Protocol</h3>
                    <p className="text-purple-300 font-bold text-lg mb-3">Earn While Holding</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">Lock tokens for additional rewards and governance voting power</p>
                    <div className="flex items-center text-purple-400 text-sm font-medium">
                      <Timer className="w-4 h-4 mr-2" />
                      25% Bonus APY for Stakers
                    </div>
                  </CardContent>
                </Card>

                {/* Deflationary Model */}
                <Card className="bg-gradient-to-br from-orange-900/40 to-red-900/40 border-2 border-orange-500/50 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
                        <Flame className="w-8 h-8" />
                      </div>
                      <Badge className="bg-orange-500/20 border-orange-500/50 text-orange-300 text-xs font-bold px-3 py-1">
                        BURNING
                      </Badge>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">Token Burns</h3>
                    <p className="text-orange-300 font-bold text-lg mb-3">Decreasing Supply</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">Quarterly token burns reduce total supply, increasing scarcity and value</p>
                    <div className="flex items-center text-orange-400 text-sm font-medium">
                      <TrendingDown className="w-4 h-4 mr-2" />
                      2% Supply Burned Quarterly
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Token Information Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-cyan-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-cyan-400 mb-1">1M</div>
                  <div className="text-gray-400 text-sm">Total Supply</div>
                </div>

                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-purple-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Network className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-purple-400 mb-1">Solana</div>
                  <div className="text-gray-400 text-sm">Blockchain</div>
                </div>

                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-green-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Gift className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-green-400 mb-1">$10M</div>
                  <div className="text-gray-400 text-sm">Dividend Start</div>
                </div>

                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-yellow-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-yellow-400 mb-1">98%</div>
                  <div className="text-gray-400 text-sm">Security Score</div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Investment Growth */}
                <Card className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-2xl backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <TrendingUp className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">Proven Growth Model</h3>
                        <p className="text-blue-300 font-medium">300% Average ROI Track Record</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">$150M+ in managed assets</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">15 unicorn companies funded</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">6-year consistent profitability</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Elite Community */}
                <Card className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 rounded-2xl backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <Crown className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">Elite Community</h3>
                        <p className="text-indigo-300 font-medium">Exclusive Access & Benefits</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">Private investor calls</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">Early access to new ventures</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">Governance voting rights</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* How to Buy Section */}
              <Card className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 border border-yellow-500/30 rounded-2xl backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl">How to Buy $SIDE</h3>
                      <p className="text-yellow-300 font-medium">Simple 4-step process</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-black/20 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-3 shadow-lg">
                        1
                      </div>
                      <div className="text-white font-semibold mb-1">Install Phantom</div>
                      <div className="text-gray-400 text-sm">Download Solana wallet</div>
                    </div>
                    <div className="text-center p-4 bg-black/20 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-3 shadow-lg">
                        2
                      </div>
                      <div className="text-white font-semibold mb-1">Buy SOL</div>
                      <div className="text-gray-400 text-sm">Purchase on exchange</div>
                    </div>
                    <div className="text-center p-4 bg-black/20 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-3 shadow-lg">
                        3
                      </div>
                      <div className="text-white font-semibold mb-1">Use Jupiter DEX</div>
                      <div className="text-gray-400 text-sm">Connect wallet</div>
                    </div>
                    <div className="text-center p-4 bg-black/20 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-3 shadow-lg">
                        4
                      </div>
                      <div className="text-white font-semibold mb-1">Swap for $SIDE</div>
                      <div className="text-gray-400 text-sm">Start earning</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-full border border-green-500/30">
                  <Verified className="w-5 h-5 mr-2 text-green-400" />
                  <span className="text-green-300 text-sm font-medium">CertiK Verified</span>
                </div>
                <div className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full border border-blue-500/30">
                  <Shield className="w-5 h-5 mr-2 text-blue-400" />
                  <span className="text-blue-300 text-sm font-medium">Insured Assets</span>
                </div>
                <div className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-full border border-purple-500/30">
                  <Award className="w-5 h-5 mr-2 text-purple-400" />
                  <span className="text-purple-300 text-sm font-medium">Swiss Regulated</span>
                </div>
                <div className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-full border border-yellow-500/30">
                  <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
                  <span className="text-yellow-300 text-sm font-medium">Premium Tier</span>
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

            <TabsContent value="security" className="space-y-8">
              {/* Security Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-full text-green-200 text-sm font-semibold mb-6 border border-green-500/40">
                  <ShieldCheck className="w-5 h-5 mr-2 text-green-400" />
                  Bank-Grade Security Infrastructure
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Maximum <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Security</span> Standards
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Your investment is protected by institutional-grade security measures, 
                  advanced encryption, and multiple layers of verification.
                </p>
              </div>

              {/* Security Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {securityFeatures.map((feature, index) => (
                  <Card key={index} className={`${feature.bgColor} ${feature.borderColor} border-2 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 group relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                          <feature.icon className="w-6 h-6" />
                        </div>
                        <Badge className={`${feature.bgColor} ${feature.borderColor} border text-xs font-semibold px-2 py-1`}>
                          {feature.status}
                        </Badge>
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                      <p className="text-gray-400 font-medium text-sm mb-3">{feature.subtitle}</p>
                      <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Security Stats */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-green-900/40 to-emerald-900/40 rounded-2xl border border-green-500/30">
                  <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
                  <div className="text-gray-300 text-sm">Security Score</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-900/40 to-cyan-900/40 rounded-2xl border border-blue-500/30">
                  <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm">Monitoring</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-900/40 to-violet-900/40 rounded-2xl border border-purple-500/30">
                  <div className="text-3xl font-bold text-purple-400 mb-2">$150M+</div>
                  <div className="text-gray-300 text-sm">Assets Secured</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-900/40 to-red-900/40 rounded-2xl border border-orange-500/30">
                  <div className="text-3xl font-bold text-orange-400 mb-2">0</div>
                  <div className="text-gray-300 text-sm">Incidents</div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <div className="flex items-center px-4 py-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-full border border-green-500/30">
                  <Verified className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-green-300 text-sm font-medium">CertiK Verified</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full border border-blue-500/30">
                  <Shield className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-blue-300 text-sm font-medium">Insurance Protected</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-full border border-purple-500/30">
                  <Award className="w-4 h-4 mr-2 text-purple-400" />
                  <span className="text-purple-300 text-sm font-medium">Swiss Compliant</span>
                </div>
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
