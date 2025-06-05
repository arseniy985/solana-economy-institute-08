
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, DollarSign, Rocket, Building } from 'lucide-react';

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
      icon: <DollarSign className="w-6 h-6" />,
      title: "DeFi Innovation",
      description: "Decentralized finance protocols that improve financial accessibility and efficiency"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Enterprise Solutions",
      description: "Blockchain infrastructure for large-scale business applications"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Digital Assets",
      description: "Platforms for tokenization and digital asset management"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Web3 Infrastructure",
      description: "Tools and services that power the next generation of internet applications"
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

        {/* Fund Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/60 via-gray-700/50 to-gray-800/60 rounded-xl shadow-xl border border-gray-600/30 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm hover:scale-105">
            <h3 className="text-3xl font-bold text-purple-300 mb-2">$50M</h3>
            <p className="text-gray-200">Fund Size</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/60 via-gray-700/50 to-gray-800/60 rounded-xl shadow-xl border border-gray-600/30 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm hover:scale-105">
            <h3 className="text-3xl font-bold text-purple-300 mb-2">25+</h3>
            <p className="text-gray-200">Portfolio Companies</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/60 via-gray-700/50 to-gray-800/60 rounded-xl shadow-xl border border-gray-600/30 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm hover:scale-105">
            <h3 className="text-3xl font-bold text-purple-300 mb-2">15x</h3>
            <p className="text-gray-200">Average ROI</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/60 via-gray-700/50 to-gray-800/60 rounded-xl shadow-xl border border-gray-600/30 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm hover:scale-105">
            <h3 className="text-3xl font-bold text-purple-300 mb-2">3</h3>
            <p className="text-gray-200">Successful Exits</p>
          </div>
        </div>

        {/* Recent Investments */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Recent Investments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investments.map((investment, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-800/70 via-gray-700/60 to-gray-800/70 border border-gray-600/40 hover:shadow-2xl group-hover:scale-105 backdrop-blur-sm hover:border-purple-500/50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-green-500/20 text-green-300 hover:bg-green-500/20 border border-green-400/30">
                      {investment.stage}
                    </Badge>
                    <span className="text-lg font-bold text-purple-300">{investment.amount}</span>
                  </div>
                  <CardTitle className="text-lg text-white">{investment.company}</CardTitle>
                  <CardDescription className="text-purple-300 font-medium">
                    {investment.sector}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 text-sm mb-4">{investment.description}</p>
                  <Button variant="ghost" size="sm" className="text-purple-300 hover:bg-purple-500/20 p-0">
                    View Portfolio →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Investment Focus */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Investment Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-800/70 via-gray-700/60 to-gray-800/70 p-6 rounded-xl border border-gray-600/40 hover:shadow-2xl transition-all duration-300 group-hover:scale-105 backdrop-blur-sm hover:border-purple-500/50 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-700 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300 shadow-md">
                  <div className="text-white">
                    {area.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{area.title}</h4>
                <p className="text-gray-200 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Apply for Funding */}
        <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Apply for Funding</h3>
          <p className="text-lg opacity-95 mb-6 max-w-2xl mx-auto leading-relaxed">
            Are you building the next breakthrough blockchain solution? We're looking for 
            innovative startups that align with our mission to advance the digital economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Submit Pitch Deck
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Schedule Meeting
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VentureFund;
