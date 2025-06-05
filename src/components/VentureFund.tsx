
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, DollarSign, Rocket, Building, Send, Calendar, Zap, Shield, Globe, Sparkles } from 'lucide-react';

const VentureFund = () => {
  const investments = [
    {
      company: "SolanaChain Logistics",
      sector: "Supply Chain",
      stage: "Series A",
      amount: "$2.5M",
      description: "Revolutionizing global supply chain transparency using Solana blockchain"
    },
    {
      company: "DeFi Capital",
      sector: "Financial Services",
      stage: "Seed",
      amount: "$1.2M",
      description: "Next-generation decentralized lending platform for institutional investors"
    },
    {
      company: "EcoToken",
      sector: "Sustainability",
      stage: "Series A",
      amount: "$3.1M",
      description: "Carbon credit marketplace powered by smart contracts and IoT sensors"
    }
  ];

  const focusAreas = [
    {
      icon: <DollarSign className="w-7 h-7" />,
      title: "DeFi Innovation",
      description: "Decentralized finance protocols that improve financial accessibility and efficiency",
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      bgGradient: "from-yellow-500/20 to-orange-600/20"
    },
    {
      icon: <Building className="w-7 h-7" />,
      title: "Enterprise Solutions",
      description: "Blockchain infrastructure for large-scale business applications",
      gradient: "from-blue-400 via-indigo-500 to-purple-600",
      bgGradient: "from-blue-500/20 to-indigo-600/20"
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Digital Assets",
      description: "Platforms for tokenization and digital asset management",
      gradient: "from-green-400 via-teal-500 to-cyan-600",
      bgGradient: "from-green-500/20 to-teal-600/20"
    },
    {
      icon: <Rocket className="w-7 h-7" />,
      title: "Web3 Infrastructure",
      description: "Tools and services that power the next generation of internet applications",
      gradient: "from-pink-400 via-purple-500 to-violet-600",
      bgGradient: "from-pink-500/20 to-purple-600/20"
    }
  ];

  return (
    <section id="venture" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 via-slate-800/50 to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            SIDE
            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {' '}Venture Fund
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Investing in the next generation of blockchain startups that are reshaping 
            the digital economy with innovative solutions built on Solana.
          </p>
        </div>

        {/* Fund Stats - Diamond Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: "$50M", label: "Fund Size", icon: <DollarSign className="w-6 h-6" />, color: "from-emerald-500 to-teal-600" },
            { value: "25+", label: "Portfolio Companies", icon: <Building className="w-6 h-6" />, color: "from-blue-500 to-indigo-600" },
            { value: "15x", label: "Average ROI", icon: <TrendingUp className="w-6 h-6" />, color: "from-orange-500 to-red-600" },
            { value: "3", label: "Successful Exits", icon: <Rocket className="w-6 h-6" />, color: "from-purple-500 to-pink-600" }
          ].map((stat, index) => (
            <div key={index} className="group relative">
              {/* Diamond shape background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/30 to-gray-800/30 transform rotate-45 rounded-lg group-hover:rotate-[50deg] transition-transform duration-500"></div>
              <div className={`relative text-center p-8 bg-gradient-to-br from-gray-800/80 via-gray-700/70 to-gray-800/80 rounded-2xl shadow-xl border border-gray-600/30 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm group-hover:scale-105`}>
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">{stat.value}</h3>
                <p className="text-gray-200 text-sm font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Investments - Wave Layout */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Recent Investments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investments.map((investment, index) => (
              <div key={index} className="group relative">
                {/* Wave background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-violet-600/20 to-fuchsia-600/10 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <Card className="relative group hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-800/80 via-gray-700/70 to-gray-800/80 border border-gray-600/40 hover:shadow-2xl group-hover:scale-105 backdrop-blur-sm hover:border-purple-500/50 rounded-3xl overflow-hidden">
                  {/* Flowing top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500"></div>
                  
                  <CardHeader className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-green-500/20 text-green-300 hover:bg-green-500/20 border border-green-400/30 rounded-full px-4 py-1">
                        {investment.stage}
                      </Badge>
                      <div className="relative">
                        <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-sm"></div>
                        <span className="relative text-xl font-bold text-purple-300 bg-purple-900/30 px-3 py-1 rounded-lg border border-purple-500/30">
                          {investment.amount}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-white mb-2">{investment.company}</CardTitle>
                    <CardDescription className="text-purple-300 font-semibold text-sm uppercase tracking-wide">
                      {investment.sector}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200 text-sm mb-6 leading-relaxed">{investment.description}</p>
                    <Button variant="ghost" size="sm" className="text-purple-300 hover:bg-purple-500/20 p-0 font-semibold group-hover:translate-x-2 transition-transform duration-200">
                      View Portfolio →
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Focus - Organic Cards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Investment Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="group relative">
                {/* Organic blob shape */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.bgGradient} rounded-[2rem] blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50 group-hover:opacity-70`}></div>
                <div className="relative bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-800/90 p-8 rounded-[2rem] border border-gray-600/40 hover:shadow-2xl transition-all duration-300 group-hover:scale-105 backdrop-blur-sm hover:border-purple-500/50 text-center">
                  {/* Floating gradient icon */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${area.gradient} rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
                    <div className={`relative w-16 h-16 bg-gradient-to-r ${area.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2`}>
                      <div className="text-white">
                        {area.icon}
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-3">{area.title}</h4>
                  <p className="text-gray-200 text-sm leading-relaxed">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Apply for Funding - Premium Design */}
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-slate-800/95 via-gray-800/90 to-slate-900/95 border border-purple-500/30 shadow-2xl backdrop-blur-sm">
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-violet-600/10 to-fuchsia-600/20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/20 via-violet-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-fuchsia-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative p-12 md:p-16 text-center">
            {/* Premium header with icons */}
            <div className="flex justify-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-fuchsia-600 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                Ready to Shape the Future?
                <span className="block text-2xl font-normal text-purple-200 mt-2">Join Our Portfolio of Innovation</span>
              </h3>
              <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Are you building the next breakthrough blockchain solution? We're looking for 
                innovative startups that align with our mission to advance the digital economy.
              </p>
            </div>
            
            {/* Premium CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-700 hover:via-violet-700 hover:to-fuchsia-700 text-white font-bold px-10 py-6 shadow-2xl border-0 group transition-all duration-300 hover:scale-105 rounded-2xl text-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                Submit Pitch Deck
                <Sparkles className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-purple-400/60 bg-white/10 text-white hover:bg-purple-500/20 hover:border-purple-300 font-bold px-10 py-6 backdrop-blur-sm group transition-all duration-300 hover:scale-105 rounded-2xl text-lg shadow-xl"
              >
                <Calendar className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                Schedule Meeting
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex justify-center space-x-8 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Expert Mentorship</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Global Network</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VentureFund;
