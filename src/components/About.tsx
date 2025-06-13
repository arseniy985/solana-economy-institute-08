

import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Cpu, 
  Globe, 
  Lightbulb, 
  TrendingUp, 
  Users, 
  Target, 
  Award, 
  Rocket,
  Zap,
  Building,
  ArrowUpRight,
  CheckCircle,
  Star,
  Briefcase,
  BarChart3,
  Activity,
  Coins,
  Shield,
  Crown,
  Diamond,
  Flame,
  DollarSign,
  Calendar,
  BookOpen,
  Code2,
  Network,
  Lock,
  LineChart
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts';

const About = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % 4);
      setCounter(prev => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const keyFeatures = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Blockchain Transformation",
      description: "Revolutionary integration of traditional financial systems with next-generation blockchain technology.",
      progress: 95,
      color: "from-purple-500 to-violet-600",
      metrics: ["50+ Enterprises", "95% Success Rate"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Research",
      description: "Advanced machine learning algorithms analyzing market trends and blockchain economics patterns.",
      progress: 88,
      color: "from-blue-500 to-cyan-600",
      metrics: ["1000+ Data Points", "Real-time Analysis"]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Enterprise Solutions",
      description: "Custom blockchain implementation strategies for Fortune 500 companies and institutions.",
      progress: 92,
      color: "from-emerald-500 to-teal-600",
      metrics: ["25+ Partnerships", "Global Reach"]
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Premium Education",
      description: "Exclusive certification programs creating the next generation of blockchain leaders.",
      progress: 78,
      color: "from-orange-500 to-red-600",
      metrics: ["10K+ Graduates", "Industry Recognition"]
    }
  ];

  const achievements = [
    { 
      icon: <Award className="w-12 h-12" />, 
      value: "250+", 
      label: "Breakthrough Projects",
      color: "from-yellow-400 to-orange-500"
    },
    { 
      icon: <Users className="w-12 h-12" />, 
      value: "75K+", 
      label: "Global Community",
      color: "from-blue-400 to-purple-500" 
    },
    { 
      icon: <DollarSign className="w-12 h-12" />, 
      value: "$100M+", 
      label: "Economic Impact",
      color: "from-green-400 to-emerald-500"
    },
    { 
      icon: <Target className="w-12 h-12" />, 
      value: "98%", 
      label: "Client Satisfaction",
      color: "from-purple-400 to-pink-500"
    }
  ];

  const innovationAreas = [
    {
      title: "DeFi Revolution",
      description: "Pioneering decentralized finance protocols",
      icon: <Coins className="w-6 h-6" />,
      investment: "$25M",
      projects: 45,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Smart Contracts 3.0",
      description: "Next-generation automated agreements",
      icon: <Code2 className="w-6 h-6" />,
      investment: "$18M",
      projects: 32,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Cross-Chain Infrastructure", 
      description: "Seamless blockchain interoperability",
      icon: <Network className="w-6 h-6" />,
      investment: "$30M",
      projects: 28,
      color: "from-purple-500 to-violet-600"
    },
    {
      title: "Quantum Security",
      description: "Future-proof cryptographic solutions",
      icon: <Shield className="w-6 h-6" />,
      investment: "$22M",
      projects: 18,
      color: "from-orange-500 to-red-600"
    }
  ];

  const timelineData = [
    { year: "2020", value: 25, projects: 5 },
    { year: "2021", value: 45, projects: 12 },
    { year: "2022", value: 75, projects: 28 },
    { year: "2023", value: 120, projects: 45 },
    { year: "2024", value: 180, projects: 68 }
  ];

  const impactData = [
    { name: 'Traditional Finance', value: 35, color: '#8B5CF6' },
    { name: 'DeFi Protocols', value: 30, color: '#A855F7' },
    { name: 'Enterprise Solutions', value: 20, color: '#C084FC' },
    { name: 'Research & Education', value: 15, color: '#E879F9' }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-full text-purple-200 text-sm font-medium mb-8 border border-purple-500/30 backdrop-blur-sm">
            <Flame className="w-5 h-5 mr-2 animate-bounce" />
            Transforming Global Economics
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Revolutionizing
            </span>
            <br />
            <span className="text-4xl md:text-5xl bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
              Digital Economics
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
            SIDE is the world's leading <span className="font-bold text-purple-300">blockchain economics institute</span>, 
            bridging traditional finance with revolutionary DeFi protocols and creating the future of economic systems.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className={`relative group ${activeSection === index ? 'scale-110' : ''} transition-all duration-500`}>
              <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-600/30 rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className={`w-20 h-20 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl`}>
                  {achievement.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">{achievement.value}</div>
                <div className="text-gray-300 text-lg">{achievement.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white shadow-xl flex-shrink-0`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-200 mb-4 leading-relaxed">{feature.description}</p>
                      
                      <div className="flex space-x-4 mb-4">
                        {feature.metrics.map((metric, idx) => (
                          <span key={idx} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium">
                            {metric}
                          </span>
                        ))}
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div 
                          className={`bg-gradient-to-r ${feature.color} h-3 rounded-full transition-all duration-1000 ease-out shadow-lg`}
                          style={{ width: `${feature.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-right text-sm text-purple-300 mt-2 font-medium">{feature.progress}% Complete</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="space-y-8">
            {/* Growth Chart */}
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <LineChart className="w-8 h-8 mr-3 text-purple-400" />
                Growth Trajectory
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={timelineData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="year" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#374151', 
                        border: '1px solid #6B7280',
                        borderRadius: '12px',
                        color: '#F3F4F6'
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#8B5CF6" 
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                      strokeWidth={3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Impact Distribution */}
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <BarChart3 className="w-8 h-8 mr-3 text-violet-400" />
                Impact Distribution
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={impactData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {impactData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#374151', 
                        border: '1px solid #6B7280',
                        borderRadius: '8px',
                        color: '#F3F4F6'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Areas */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Innovation <span className="bg-gradient-to-r from-purple-300 to-violet-400 bg-clip-text text-transparent">Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading breakthrough developments across multiple blockchain sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovationAreas.map((area, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${area.color} rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="relative bg-gradient-to-br from-gray-800/95 to-gray-900/95 border border-gray-600/30 rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl`}>
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                  <p className="text-gray-300 text-sm mb-6">{area.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Investment</span>
                      <span className="text-green-400 font-bold">{area.investment}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Active Projects</span>
                      <span className="text-purple-400 font-bold">{area.projects}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-violet-600/20 to-fuchsia-600/10 rounded-3xl blur-3xl"></div>
          <div className="absolute top-6 left-6 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-6 right-6 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl"></div>
          
          <div className="relative bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-800/90 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-purple-500/30 shadow-2xl shadow-purple-500/10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-violet-700 rounded-3xl mb-8 shadow-2xl">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Our <span className="bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent">Vision</span>
              </h2>
              
              <p className="text-2xl text-gray-200 leading-relaxed mb-8">
                To create a world where blockchain technology seamlessly integrates with traditional economics, 
                enabling unprecedented transparency, efficiency, and innovation in global financial systems.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-2xl mb-4 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-purple-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Global Impact</h3>
                  <p className="text-gray-300 text-center">Transforming economies worldwide through blockchain innovation</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-2xl mb-4 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-purple-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Education First</h3>
                  <p className="text-gray-300 text-center">Building knowledge and expertise for the digital economy</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-2xl mb-4 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-purple-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Innovation Drive</h3>
                  <p className="text-gray-300 text-center">Pushing boundaries of what's possible in digital finance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

