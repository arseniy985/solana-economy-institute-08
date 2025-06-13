
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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [animatedCounter, setAnimatedCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % 4);
      setCounter(prev => prev + 1);
      setAnimatedCounter(prev => prev + 1);
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
      color: "from-green-500 to-emerald-600",
      trend: "+45%"
    },
    {
      title: "Smart Contracts 3.0",
      description: "Next-generation automated agreements",
      icon: <Code2 className="w-6 h-6" />,
      investment: "$18M",
      projects: 32,
      color: "from-blue-500 to-cyan-600",
      trend: "+38%"
    },
    {
      title: "Cross-Chain Infrastructure", 
      description: "Seamless blockchain interoperability",
      icon: <Network className="w-6 h-6" />,
      investment: "$30M",
      projects: 28,
      color: "from-purple-500 to-violet-600",
      trend: "+52%"
    },
    {
      title: "Quantum Security",
      description: "Future-proof cryptographic solutions",
      icon: <Shield className="w-6 h-6" />,
      investment: "$22M",
      projects: 18,
      color: "from-orange-500 to-red-600",
      trend: "+29%"
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
        {/* Compact Hero Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-full text-purple-200 text-sm font-medium mb-6 border border-purple-500/30 backdrop-blur-sm">
            <Brain className="w-4 h-4 mr-2" />
            Pioneering Blockchain Research
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Transforming
            </span>{" "}
            <span className="text-white">Digital Economics</span>
          </h1>
          
          <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            SIDE is the world's leading <span className="font-bold text-purple-300">blockchain economics institute</span>, 
            bridging traditional finance with revolutionary DeFi protocols.
          </p>
        </div>

        {/* Interactive Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className={`relative group cursor-pointer ${activeSection === index ? 'scale-105' : ''} transition-all duration-500`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center text-white mx-auto mb-4 shadow-xl ${hoveredCard === index ? 'animate-bounce' : ''}`}>
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{achievement.value}</div>
                <div className="text-gray-300 text-sm">{achievement.label}</div>
                {hoveredCard === index && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Key Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center text-white shadow-xl flex-shrink-0`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-200 mb-3 text-sm leading-relaxed">{feature.description}</p>
                      
                      <div className="flex space-x-3 mb-3">
                        {feature.metrics.map((metric, idx) => (
                          <span key={idx} className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded-md text-xs font-medium">
                            {metric}
                          </span>
                        ))}
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${feature.color} h-2 rounded-full transition-all duration-1000 ease-out shadow-lg`}
                          style={{ width: `${feature.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-right text-xs text-purple-300 mt-1 font-medium">{feature.progress}%</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="space-y-6">
            {/* Growth Chart */}
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <LineChart className="w-6 h-6 mr-2 text-purple-400" />
                Growth Trajectory
              </h3>
              <div className="h-48">
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
                        borderRadius: '8px',
                        color: '#F3F4F6'
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#8B5CF6" 
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Impact Distribution */}
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <BarChart3 className="w-6 h-6 mr-2 text-violet-400" />
                Impact Distribution
              </h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={impactData}
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
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

        {/* Innovation Areas with Trends */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Innovation <span className="bg-gradient-to-r from-purple-300 to-violet-400 bg-clip-text text-transparent">Ecosystem</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Leading breakthrough developments across multiple blockchain sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovationAreas.map((area, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${area.color} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="relative bg-gradient-to-br from-gray-800/95 to-gray-900/95 border border-gray-600/30 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 h-full">
                  <div className="absolute top-3 right-3">
                    <span className="text-green-400 text-xs font-bold">{area.trend}</span>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${area.color} rounded-xl flex items-center justify-center text-white mx-auto mb-4 shadow-xl`}>
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{area.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{area.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-xs">Investment</span>
                      <span className="text-green-400 font-bold text-sm">{area.investment}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-xs">Projects</span>
                      <span className="text-purple-400 font-bold text-sm">{area.projects}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compact Mission Statement */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-violet-600/20 to-fuchsia-600/10 rounded-2xl blur-2xl"></div>
          
          <div className="relative bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-800/90 backdrop-blur-xl rounded-2xl p-10 border border-purple-500/30 shadow-xl">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-violet-700 rounded-2xl mb-6 shadow-xl">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent">Vision</span>
              </h2>
              
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                To create a world where blockchain technology seamlessly integrates with traditional economics, 
                enabling unprecedented transparency, efficiency, and innovation in global financial systems.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-xl mb-3 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-purple-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Global Impact</h3>
                  <p className="text-gray-300 text-center text-sm">Transforming economies worldwide</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-xl mb-3 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-purple-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Education First</h3>
                  <p className="text-gray-300 text-center text-sm">Building digital economy expertise</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-xl mb-3 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-purple-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Innovation Drive</h3>
                  <p className="text-gray-300 text-center text-sm">Pushing digital finance boundaries</p>
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
