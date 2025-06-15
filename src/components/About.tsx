
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
  Play
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const [activeAI, setActiveAI] = useState(0);
  const [counter, setCounter] = useState(0);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAI(prev => (prev + 1) % 3);
      setCounter(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const platformHighlights = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI-Powered Research",
      description: "Революционные алгоритмы машинного обучения для анализа блокчейн экономики",
      value: "1000+",
      metric: "AI Models",
      color: "from-blue-500 via-cyan-500 to-teal-500",
      bgColor: "from-blue-500/10 to-teal-500/20"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Venture Fund",
      description: "Подготовка блокчейн компаний к IPO и стратегическим поглощениям",
      value: "$5M",
      metric: "Target Fund",
      color: "from-emerald-500 via-green-500 to-teal-500",
      bgColor: "from-emerald-500/10 to-teal-500/20"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Master Education",
      description: "Эксклюзивная программа сертификации для будущих лидеров индустрии",
      value: "10K+",
      metric: "Graduates",
      color: "from-purple-500 via-violet-500 to-fuchsia-500",
      bgColor: "from-purple-500/10 to-fuchsia-500/20"
    }
  ];

  const aiFeatures = [
    {
      title: "Predictive Analytics",
      description: "ИИ прогнозирует движения рынка с точностью 94%",
      icon: <Brain className="w-6 h-6" />,
      active: activeAI === 0
    },
    {
      title: "Smart Contracts Analysis",
      description: "Автоматический аудит безопасности смарт-контрактов",
      icon: <Shield className="w-6 h-6" />,
      active: activeAI === 1
    },
    {
      title: "Market Intelligence",
      description: "Реальное время анализа институциональных потоков",
      icon: <Activity className="w-6 h-6" />,
      active: activeAI === 2
    }
  ];

  const services = [
    {
      category: "Venture Investments",
      title: "Pre-IPO Companies",
      description: "Инвестируем в блокчейн компании на поздних стадиях развития, готовя их к публичному размещению",
      metrics: ["$120M+ Portfolio", "95% Success Rate", "25+ Companies"],
      icon: <Building className="w-12 h-12" />,
      color: "from-green-400 to-emerald-600",
      bgGradient: "from-green-500/20 to-emerald-500/30"
    },
    {
      category: "AI Research",
      title: "Breakthrough Analytics",
      description: "Разрабатываем революционные ИИ алгоритмы для анализа криптовалютных рынков и DeFi протоколов",
      metrics: ["500+ Research Papers", "50+ AI Models", "Global Recognition"],
      icon: <Bot className="w-12 h-12" />,
      color: "from-blue-400 to-cyan-600",
      bgGradient: "from-blue-500/20 to-cyan-500/30"
    },
    {
      category: "Premium Education",
      title: "Master Certification",
      description: "Эксклюзивная программа подготовки экспертов цифровой экономики с доступом к закрытым исследованиям",
      metrics: ["$50K+ Average Salary", "100% Job Placement", "Elite Network"],
      icon: <Crown className="w-12 h-12" />,
      color: "from-purple-400 to-violet-600",
      bgGradient: "from-purple-500/20 to-violet-500/30"
    },
    {
      category: "Exclusive Research",
      title: "Alpha Intelligence",
      description: "Доступ к инсайдерской аналитике, торговым стратегиям и эксклюзивным прогнозам рынка",
      metrics: ["$100K+ Value", "2K+ Subscribers", "Premium Access"],
      icon: <Eye className="w-12 h-12" />,
      color: "from-orange-400 to-red-600",
      bgGradient: "from-orange-500/20 to-red-500/30"
    }
  ];

  const achievements = [
    { number: "250+", text: "Breakthrough Projects", icon: <Rocket className="w-6 h-6" /> },
    { number: "75K+", text: "Global Community", icon: <Users className="w-6 h-6" /> },
    { number: "$100M+", text: "Economic Impact", icon: <DollarSign className="w-6 h-6" /> },
    { number: "98%", text: "Client Success", icon: <Target className="w-6 h-6" /> }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Revolutionary Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/30 to-violet-600/30 rounded-full text-purple-200 text-sm font-medium mb-8 border border-purple-500/50 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 mr-2" />
            Revolutionary Research Platform
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Pioneering
            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {' '}Blockchain
            </span>
            <br />
            <span className="text-white">Research</span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
            Access groundbreaking research that shapes the future of digital economics. 
            From public insights to exclusive intelligence for program participants.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-700 hover:via-violet-700 hover:to-fuchsia-700 text-white font-bold px-10 py-6 shadow-2xl border-0 group transition-all duration-300 hover:scale-105 rounded-2xl text-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Play className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
              Start Learning
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-purple-400/60 bg-white/10 text-white hover:bg-purple-500/20 hover:border-purple-300 font-bold px-10 py-6 backdrop-blur-sm group transition-all duration-300 hover:scale-105 rounded-2xl text-lg shadow-xl"
            >
              <Eye className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
              View Research
            </Button>
          </div>
        </div>

        {/* Platform Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {platformHighlights.map((highlight, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${highlight.bgColor} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-60 group-hover:opacity-80`}></div>
              <div className="relative bg-gradient-to-br from-gray-800/95 via-gray-700/90 to-gray-800/95 p-8 rounded-3xl border border-gray-600/40 hover:shadow-2xl transition-all duration-300 group-hover:scale-105 backdrop-blur-sm hover:border-purple-500/50 text-center">
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${highlight.color} rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
                  <div className={`relative w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2`}>
                    <div className="text-white">
                      {highlight.icon}
                    </div>
                  </div>
                </div>
                
                <div className="text-3xl font-bold text-white mb-2">{highlight.value}</div>
                <div className="text-sm text-purple-300 font-semibold mb-4 uppercase tracking-wide">{highlight.metric}</div>
                <h3 className="text-xl font-bold text-white mb-3">{highlight.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* AI Features Showcase */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              AI-Powered <span className="bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">Intelligence</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Наши ИИ алгоритмы анализируют блокчейн экосистему в реальном времени
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {aiFeatures.map((feature, index) => (
              <div key={index} className={`relative group transition-all duration-500 ${feature.active ? 'scale-105' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-lg transition-all duration-500 ${feature.active ? 'opacity-60 scale-110' : 'opacity-20'}`}></div>
                <div className={`relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 p-6 rounded-2xl border transition-all duration-500 ${feature.active ? 'border-blue-500/50 bg-gradient-to-br from-blue-900/20 to-cyan-900/20' : 'border-gray-700/50'}`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${feature.active ? 'bg-gradient-to-r from-blue-500 to-cyan-600 scale-110' : 'bg-gray-700'}`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className={`text-lg font-bold mb-2 transition-colors duration-500 ${feature.active ? 'text-blue-300' : 'text-white'}`}>{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-purple-300 to-violet-400 bg-clip-text text-transparent">Ecosystem</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Полная экосистема для успеха в цифровой экономике будущего
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 ${hoveredService === index ? 'opacity-60 scale-105' : 'opacity-30'}`}></div>
                <Card className="relative group-hover:scale-[1.02] transition-all duration-500 border-0 bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-800/90 border border-gray-600/40 hover:border-purple-500/50 rounded-3xl overflow-hidden backdrop-blur-sm h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className={`relative flex-shrink-0 transition-all duration-500 ${hoveredService === index ? 'scale-110' : ''}`}>
                        <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                        <div className={`relative w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white shadow-xl`}>
                          {service.icon}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30 mb-3 text-xs">
                          {service.category}
                        </Badge>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-200 mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="grid grid-cols-3 gap-4">
                          {service.metrics.map((metric, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-sm font-bold text-emerald-400">{metric.split(' ')[0]}</div>
                              <div className="text-xs text-gray-400">{metric.split(' ').slice(1).join(' ')}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-700 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                {achievement.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{achievement.number}</div>
              <div className="text-gray-300 text-sm">{achievement.text}</div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-slate-800/95 via-gray-800/90 to-slate-900/95 border border-purple-500/30 shadow-2xl backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-violet-600/10 to-cyan-600/20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/20 via-violet-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 via-violet-500/10 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative p-12 md:p-16 text-center">
            <div className="flex justify-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-fuchsia-600 rounded-xl flex items-center justify-center shadow-lg">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Crown className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
              Ready to Join the Future?
              <span className="block text-2xl font-normal text-purple-200 mt-2">Become Part of the Digital Economy Revolution</span>
            </h3>
            <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Получите доступ к эксклюзивным исследованиям, инвестиционным возможностям 
              и образовательным программам от лидеров блокчейн индустрии.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-700 hover:via-violet-700 hover:to-fuchsia-700 text-white font-bold px-10 py-6 shadow-2xl border-0 group transition-all duration-300 hover:scale-105 rounded-2xl text-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Sparkles className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                Join Our Platform
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-purple-400/60 bg-white/10 text-white hover:bg-purple-500/20 hover:border-purple-300 font-bold px-10 py-6 backdrop-blur-sm group transition-all duration-300 hover:scale-105 rounded-2xl text-lg shadow-xl"
              >
                <Calendar className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
