
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, ExternalLink, TrendingUp, Award, Target } from 'lucide-react';

const Research = () => {
  const reports = [
    {
      title: "DeFi Integration in Traditional Banking",
      description: "Comprehensive analysis of decentralized finance protocols and their potential integration with conventional banking systems.",
      date: "March 2024",
      category: "Financial Innovation"
    },
    {
      title: "Solana Ecosystem Economic Impact",
      description: "In-depth study measuring the economic impact of Solana's blockchain infrastructure on global digital commerce.",
      date: "February 2024",
      category: "Economic Analysis"
    },
    {
      title: "Regulatory Frameworks for Blockchain",
      description: "Policy recommendations for blockchain regulation that balance innovation with consumer protection.",
      date: "January 2024",
      category: "Policy Research"
    }
  ];

  const caseStudies = [
    {
      title: "Supply Chain Transparency on Solana",
      company: "Agricultural Cooperative Network",
      result: "40% reduction in fraud, 60% faster settlements",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Cross-border Payments Optimization",
      company: "International Remittance Service",
      result: "90% cost reduction, instant settlements",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Digital Identity Management",
      company: "Healthcare Consortium",
      result: "100% data integrity, GDPR compliance",
      icon: <Award className="w-8 h-8" />,
      color: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800/40 via-slate-700/40 to-gray-800/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Cutting-Edge
            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {' '}Research
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Our research drives blockchain adoption through evidence-based insights 
            and practical solutions for real-world economic challenges.
          </p>
        </div>

        {/* Research Reports - Hexagonal Layout */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Latest Research Reports</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report, index) => (
              <div key={index} className="group relative">
                {/* Hexagonal background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-violet-600/10 to-fuchsia-600/20 transform rotate-3 rounded-2xl group-hover:rotate-6 transition-transform duration-300"></div>
                <Card className="relative hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-800/90 border border-gray-600/30 backdrop-blur-sm group-hover:scale-105 group-hover:border-purple-500/50 rounded-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/30 to-transparent rounded-bl-3xl"></div>
                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-700 rounded-xl flex items-center justify-center shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs text-purple-200 bg-purple-600/30 px-3 py-1 rounded-full border border-purple-500/50 font-medium">
                        {report.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl text-white leading-tight">{report.title}</CardTitle>
                    <CardDescription className="text-gray-200 mt-2">
                      {report.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300 font-medium">{report.date}</span>
                      <div className="flex space-x-2">
                        <Button size="sm" className="bg-purple-600/80 hover:bg-purple-600 text-white border-0 shadow-md">
                          <Download className="w-4 h-4 mr-1" />
                          PDF
                        </Button>
                        <Button size="sm" variant="outline" className="border-purple-400/50 text-purple-200 hover:bg-purple-600/30 hover:border-purple-300">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies - Circular/Organic Layout */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Success Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="group relative">
                {/* Organic blob background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-[2rem] transform group-hover:scale-105 transition-transform duration-300 blur-sm"></div>
                <div className={`relative bg-gradient-to-br ${study.color} p-[1px] rounded-[2rem] group-hover:shadow-2xl transition-all duration-300`}>
                  <div className="bg-gradient-to-br from-gray-800/95 via-gray-700/90 to-gray-800/95 p-8 rounded-[2rem] backdrop-blur-sm h-full">
                    {/* Floating icon */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-r ${study.color} rounded-2xl blur-lg opacity-50 transform group-hover:scale-110 transition-transform duration-300`}></div>
                      <div className={`relative w-16 h-16 bg-gradient-to-r ${study.color} rounded-2xl flex items-center justify-center text-white shadow-xl transform group-hover:-translate-y-1 transition-transform duration-300`}>
                        {study.icon}
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-3 leading-tight">{study.title}</h4>
                    <p className="text-purple-300 font-semibold mb-4 text-sm uppercase tracking-wide">{study.company}</p>
                    
                    {/* Results with emphasis */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/10">
                      <p className="text-gray-200 text-sm font-medium">{study.result}</p>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-purple-300 hover:bg-purple-600/20 p-0 hover:text-purple-200 font-semibold group-hover:translate-x-1 transition-transform duration-200">
                      Read Full Case Study →
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
