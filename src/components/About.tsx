
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
  LineChart,
  Sparkles,
  Bot,
  CircuitBoard,
  Layers,
  Infinity,
  Eye,
  Play,
  ChevronRight,
  Waves,
  Atom,
  Binary,
  Database
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [counter, setCounter] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % 4);
      setCounter(prev => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const heroStats = [
    { value: "50+", label: "Research Projects", icon: <Brain className="w-5 h-5" /> },
    { value: "$120M+", label: "Investment Portfolio", icon: <TrendingUp className="w-5 h-5" /> },
    { value: "10K+", label: "Students Trained", icon: <Users className="w-5 h-5" /> },
    { value: "95%", label: "Success Rate", icon: <Target className="w-5 h-5" /> }
  ];

  const ecosystemCards = [
    {
      category: "AI Research Lab",
      title: "Next-Gen Analytics",
      description: "Cutting-edge AI algorithms that predict market movements with unprecedented accuracy",
      features: ["Machine Learning Models", "Real-time Analysis", "Predictive Intelligence"],
      icon: <Bot className="w-8 h-8" />,
      gradient: "from-blue-600 via-cyan-500 to-teal-500",
      bgPattern: "from-blue-500/20 via-cyan-500/10 to-teal-500/20",
      accent: "border-blue-500/30"
    },
    {
      category: "Venture Capital",
      title: "Strategic Investments",
      description: "Preparing blockchain companies for IPOs and strategic market positioning",
      features: ["Pre-IPO Investments", "Strategic Partnerships", "Market Preparation"],
      icon: <Building className="w-8 h-8" />,
      gradient: "from-emerald-600 via-green-500 to-teal-500",
      bgPattern: "from-emerald-500/20 via-green-500/10 to-teal-500/20",
      accent: "border-emerald-500/30"
    },
    {
      category: "Master Education",
      title: "Elite Training Programs",
      description: "Exclusive certification programs creating the next generation of blockchain leaders",
      features: ["Professional Certification", "Industry Mentorship", "Global Network"],
      icon: <Crown className="w-8 h-8" />,
      gradient: "from-purple-600 via-violet-500 to-fuchsia-500",
      bgPattern: "from-purple-500/20 via-violet-500/10 to-fuchsia-500/20",
      accent: "border-purple-500/30"
    },
    {
      category: "Research Intelligence",
      title: "Market Insights",
      description: "Exclusive access to groundbreaking research and market intelligence reports",
      features: ["Market Reports", "Trend Analysis", "Strategic Insights"],
      icon: <Eye className="w-8 h-8" />,
      gradient: "from-orange-600 via-red-500 to-pink-500",
      bgPattern: "from-orange-500/20 via-red-500/10 to-pink-500/20",
      accent: "border-orange-500/30"
    }
  ];

  const innovations = [
    {
      title: "Quantum AI Analysis",
      description: "Revolutionary quantum computing algorithms for blockchain analysis",
      icon: <Atom className="w-6 h-6" />,
      active: activeSection === 0
    },
    {
      title: "DeFi Protocol Optimization", 
      description: "Advanced optimization strategies for decentralized finance protocols",
      icon: <Network className="w-6 h-6" />,
      active: activeSection === 1
    },
    {
      title: "Smart Contract Security",
      description: "AI-powered security auditing for smart contract vulnerabilities",
      icon: <Shield className="w-6 h-6" />,
      active: activeSection === 2
    },
    {
      title: "Market Intelligence Engine",
      description: "Real-time market analysis with institutional-grade insights",
      icon: <Database className="w-6 h-6" />,
      active: activeSection === 3
    }
  ];

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-600/30 to-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-gradient-to-l from-purple-600/25 to-violet-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-tr from-emerald-600/20 to-teal-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-tl from-orange-600/25 to-red-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-800/60 via-gray-800/40 to-slate-800/60 rounded-full text-cyan-300 text-sm font-semibold mb-12 border border-cyan-500/20 backdrop-blur-sm shadow-2xl">
            <Waves className="w-5 h-5 mr-3 animate-bounce" />
            Pioneering the Future of Finance
            <Sparkles className="w-5 h-5 ml-3 animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="block text-white">Transforming</span>
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Digital Economics
            </span>
          </h1>
          
          <p className="text-2xl text-gray-300 max-w-5xl mx-auto mb-16 leading-relaxed font-light">
            Where artificial intelligence meets blockchain innovation. 
            <span className="text-cyan-400 font-medium"> We're reshaping the future</span> of 
            digital finance through revolutionary research, strategic investments, and elite education.
          </p>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {heroStats.map((stat, index) => (
              <div key={index} className="group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-6 rounded-2xl border border-cyan-500/20 backdrop-blur-sm group-hover:border-cyan-400/40 transition-all duration-300">
                    <div className="flex items-center justify-center mb-3 text-cyan-400">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ecosystem Overview */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Four interconnected pillars driving the transformation of digital economics
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ecosystemCards.map((card, index) => (
              <div 
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.bgPattern} rounded-[2rem] blur-xl group-hover:blur-2xl transition-all duration-500 ${hoveredCard === index ? 'opacity-70 scale-105' : 'opacity-40'}`}></div>
                
                <Card className={`relative group-hover:scale-[1.02] transition-all duration-500 border-0 bg-gradient-to-br from-slate-800/95 via-slate-700/90 to-slate-800/95 ${card.accent} rounded-[2rem] overflow-hidden backdrop-blur-sm h-full shadow-2xl`}>
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient}`}></div>
                  
                  <CardContent className="p-10">
                    <div className="flex items-start justify-between mb-8">
                      <div className={`relative flex-shrink-0 transition-all duration-500 ${hoveredCard === index ? 'scale-110 rotate-6' : ''}`}>
                        <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
                        <div className={`relative w-16 h-16 bg-gradient-to-r ${card.gradient} rounded-2xl flex items-center justify-center text-white shadow-xl`}>
                          {card.icon}
                        </div>
                      </div>
                      
                      <Badge className="bg-white/10 text-white/80 border-white/20 backdrop-blur-sm">
                        {card.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-200 mb-8 leading-relaxed text-lg">
                      {card.description}
                    </p>
                    
                    <div className="space-y-3">
                      {card.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${card.gradient}`}></div>
                          <span className="text-gray-300 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      className="mt-8 text-cyan-300 hover:bg-cyan-500/20 p-0 group-hover:translate-x-2 transition-all duration-300 font-semibold"
                    >
                      Learn More
                      <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Innovation Showcase */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Innovation <span className="bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">Spotlight</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Breakthrough technologies reshaping the blockchain landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovations.map((innovation, index) => (
              <div key={index} className={`relative group transition-all duration-700 ${innovation.active ? 'scale-105' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-lg transition-all duration-700 ${innovation.active ? 'opacity-70 scale-110' : 'opacity-20'}`}></div>
                <div className={`relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-8 rounded-2xl border transition-all duration-700 ${innovation.active ? 'border-purple-500/50 bg-gradient-to-br from-purple-900/20 to-pink-900/20' : 'border-slate-700/50'} backdrop-blur-sm`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-700 ${innovation.active ? 'bg-gradient-to-r from-purple-500 to-pink-600 scale-110 rotate-12' : 'bg-slate-700'}`}>
                    <div className="text-white">
                      {innovation.icon}
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-700 ${innovation.active ? 'text-purple-300' : 'text-white'}`}>
                    {innovation.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{innovation.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800/60 via-gray-800/40 to-slate-800/60 rounded-[3rem] backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-blue-600/5 to-purple-600/10 rounded-[3rem]"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/20 via-pink-500/10 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative p-16 text-center">
            <div className="flex justify-center space-x-6 mb-12">
              {[
                { icon: <Brain className="w-8 h-8" />, gradient: "from-cyan-500 to-blue-600" },
                { icon: <Rocket className="w-8 h-8" />, gradient: "from-blue-500 to-purple-600" },
                { icon: <Crown className="w-8 h-8" />, gradient: "from-purple-500 to-pink-600" }
              ].map((item, idx) => (
                <div key={idx} className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center shadow-2xl animate-float`} style={{animationDelay: `${idx * 0.5}s`}}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-5xl font-bold text-white mb-8 leading-tight">
              Ready to Transform
              <span className="block bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Your Future?
              </span>
            </h3>
            
            <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join the revolution that's reshaping digital economics. Access cutting-edge research, 
              investment opportunities, and educational programs from industry pioneers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Button 
                size="lg" 
                className="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-700 hover:via-blue-700 hover:to-purple-700 text-white font-bold px-12 py-8 shadow-2xl border-0 group transition-all duration-300 hover:scale-105 rounded-2xl text-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Play className="w-6 h-6 mr-4 group-hover:translate-x-1 transition-transform" />
                Start Your Journey
                <ArrowUpRight className="w-5 h-5 ml-3 group-hover:rotate-12 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-cyan-400/50 bg-white/5 text-white hover:bg-cyan-500/20 hover:border-cyan-300 font-bold px-12 py-8 backdrop-blur-sm group transition-all duration-300 hover:scale-105 rounded-2xl text-xl shadow-2xl"
              >
                <Eye className="w-6 h-6 mr-4 group-hover:rotate-12 transition-transform" />
                Explore Research
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
