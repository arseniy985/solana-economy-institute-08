
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, ExternalLink } from 'lucide-react';

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
      result: "40% reduction in fraud, 60% faster settlements"
    },
    {
      title: "Cross-border Payments Optimization",
      company: "International Remittance Service",
      result: "90% cost reduction, instant settlements"
    },
    {
      title: "Digital Identity Management",
      company: "Healthcare Consortium",
      result: "100% data integrity, GDPR compliance"
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

        {/* Research Reports */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Latest Research Reports</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-800/80 via-gray-700/70 to-gray-800/80 border border-gray-600/30 backdrop-blur-sm hover:scale-105 hover:border-purple-500/50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-violet-700 rounded-lg flex items-center justify-center shadow-lg">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs text-purple-200 bg-purple-600/30 px-2 py-1 rounded-full border border-purple-500/50">
                      {report.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-white">{report.title}</CardTitle>
                  <CardDescription className="text-gray-200">
                    {report.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">{report.date}</span>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-purple-400/50 text-purple-200 hover:bg-purple-600/30 hover:border-purple-300">
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
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Success Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/80 via-gray-700/70 to-gray-800/80 p-6 rounded-xl border border-gray-600/30 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm hover:scale-105 hover:border-purple-500/50">
                <h4 className="text-lg font-semibold text-white mb-2">{study.title}</h4>
                <p className="text-purple-300 font-medium mb-3">{study.company}</p>
                <p className="text-gray-200 text-sm mb-4">{study.result}</p>
                <Button variant="ghost" size="sm" className="text-purple-300 hover:bg-purple-600/20 p-0 hover:text-purple-200">
                  Read Full Case Study →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
