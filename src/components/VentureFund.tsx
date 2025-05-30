
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
    <section id="venture" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            SIDE
            <span className="bg-gradient-to-r from-purple-600 to-violet-700 bg-clip-text text-transparent">
              {' '}Venture Fund
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Investing in the next generation of blockchain startups that are reshaping 
            the digital economy with innovative solutions built on Solana.
          </p>
        </div>

        {/* Fund Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-3xl font-bold text-purple-600 mb-2">$50M</h3>
            <p className="text-gray-600">Fund Size</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-3xl font-bold text-purple-600 mb-2">25+</h3>
            <p className="text-gray-600">Portfolio Companies</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-3xl font-bold text-purple-600 mb-2">15x</h3>
            <p className="text-gray-600">Average ROI</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-3xl font-bold text-purple-600 mb-2">3</h3>
            <p className="text-gray-600">Successful Exits</p>
          </div>
        </div>

        {/* Recent Investments */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent Investments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investments.map((investment, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                      {investment.stage}
                    </Badge>
                    <span className="text-lg font-bold text-purple-600">{investment.amount}</span>
                  </div>
                  <CardTitle className="text-lg">{investment.company}</CardTitle>
                  <CardDescription className="text-purple-600 font-medium">
                    {investment.sector}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{investment.description}</p>
                  <Button variant="ghost" size="sm" className="text-purple-600 hover:bg-purple-50 p-0">
                    View Portfolio →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Investment Focus */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Investment Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-purple-600">
                    {area.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{area.title}</h4>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Apply for Funding */}
        <div className="bg-gradient-to-r from-purple-600 to-violet-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Apply for Funding</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
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
