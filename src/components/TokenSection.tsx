
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  ChevronRight,
  BarChart3,
  Rocket,
  Globe,
  Star,
  Activity,
  PieChart,
  ArrowUpRight,
  Building,
  Banknote,
  Wallet,
  Clock,
  Flame,
  Lightbulb,
  Network
} from 'lucide-react';

const TokenSection = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  
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
    {
      name: "Бронзовый держатель",
      min: "1,000 $SIDE",
      benefits: ["Ежемесячные отчеты", "Доступ к сообществу"],
      color: "from-amber-600 to-orange-600",
      icon: <Award className="w-6 h-6" />
    },
    {
      name: "Серебряный инвестор", 
      min: "5,000 $SIDE",
      benefits: ["Квартальные звонки", "Ранний доступ к исследованиям", "Награды за стейкинг"],
      color: "from-gray-400 to-gray-600",
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "Золотой партнер",
      min: "25,000 $SIDE", 
      benefits: ["Частные консультации", "Эксклюзивные события", "Анализ портфеля"],
      color: "from-yellow-400 to-yellow-600",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      name: "Бриллиантовая элита",
      min: "100,000 $SIDE",
      benefits: ["Прямой доступ к основателям", "Инвестиционные возможности", "Индивидуальные исследования"],
      color: "from-purple-400 to-violet-600", 
      icon: <Building className="w-6 h-6" />
    }
  ];

  const buySteps = [
    "Установите Phantom или Solflare кошелек",
    "Купите SOL на бирже", 
    "Используйте Jupiter или Raydium DEX",
    "Обменяйте SOL на $SIDE"
  ];

  const infoCards = [
    {
      title: "Дивиденды от $10М",
      description: "Автоматические выплаты держателям токенов",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Безопасность",
      description: "Аудированный смарт-контракт на Solana",
      icon: <Shield className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Рост стоимости",
      description: "Дефляционная модель с burn механизмом",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-violet-600"
    },
    {
      title: "Сообщество",
      description: "Активное участие в развитии экосистемы",
      icon: <Users className="w-8 h-8" />,
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="token" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-full text-purple-200 text-sm font-medium mb-6 border border-purple-500/30 backdrop-blur-sm">
            <Coins className="w-4 h-4 mr-2" />
            Оригинальный токен SIDE
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-300 to-violet-400 bg-clip-text text-transparent">$SIDE</span> Token
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Solana Institute of Digital Economics - первый токен с дивидендами в области блокчейн исследований
          </p>
        </div>

        {/* Token Address */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-gray-800/90 to-gray-900/90 border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2 flex items-center">
                    <Network className="w-5 h-5 mr-2 text-purple-400" />
                    Адрес контракта
                  </h3>
                  <code className="text-purple-300 text-sm font-mono break-all">{tokenAddress}</code>
                </div>
                <Button
                  onClick={copyToClipboard}
                  className="bg-purple-600 hover:bg-purple-700 ml-4"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-gray-800/50 p-1 rounded-xl backdrop-blur-sm border border-gray-700/50">
            {[
              { id: 'overview', label: 'Обзор', icon: <PieChart className="w-4 h-4" /> },
              { id: 'rewards', label: 'Награды', icon: <Award className="w-4 h-4" /> },
              { id: 'security', label: 'Безопасность', icon: <Shield className="w-4 h-4" /> },
              { id: 'community', label: 'Сообщество', icon: <Users className="w-4 h-4" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Token Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {infoCards.map((card, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-gray-600/30 hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${card.color} rounded-xl flex items-center justify-center text-white mr-4`}>
                        {card.icon}
                      </div>
                      <h3 className="text-white font-semibold">{card.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm">{card.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Token Economics */}
            <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <BarChart3 className="w-6 h-6 mr-2 text-purple-400" />
                  Информация о токене
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Символ</span>
                      <span className="text-white font-bold">$SIDE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Блокчейн</span>
                      <span className="text-purple-400 font-semibold">Solana</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Общее предложение</span>
                      <span className="text-white font-bold">1,000,000</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Дивиденды с</span>
                      <span className="text-green-400 font-bold">$10M Cap</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Сжигание</span>
                      <span className="text-orange-400 font-bold">2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Распределения</span>
                      <span className="text-blue-400 font-bold">Ежемесячно</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - How to Buy */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Lightbulb className="w-6 h-6 mr-2 text-yellow-400" />
                  Как купить
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {buySteps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-300 text-sm">{step}</p>
                  </div>
                ))}
                <div className="pt-4">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800">
                    <Wallet className="w-4 h-4 mr-2" />
                    Купить $SIDE токены
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Security Audit */}
            <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-green-500/30">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-green-400 mr-3" />
                  <div>
                    <h3 className="text-white font-semibold">Аудит безопасности</h3>
                    <p className="text-gray-400 text-sm">CertiK проверил контракт</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Мультисиг казначейство</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Заблокированная ликвидность</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Investment Tiers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Инвестиционные <span className="bg-gradient-to-r from-purple-300 to-violet-400 bg-clip-text text-transparent">уровни</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentTiers.map((tier, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 border-gray-600/30 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${tier.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                    {tier.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-purple-300 font-semibold mb-4">{tier.min}</p>
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
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-900/80 via-violet-900/80 to-purple-900/80 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4">
              Готовы присоединиться к <span className="bg-gradient-to-r from-purple-300 to-violet-400 bg-clip-text text-transparent">революции?</span>
            </h2>
            <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
              Не упустите шанс стать частью будущего блокчейн экономики. 
              Начните получать дивиденды уже сегодня.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white px-8 py-4">
                Купить $SIDE токены
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-purple-400/50 text-purple-300 px-8 py-4 hover:bg-purple-600/30">
                Смотреть на DexScreener
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mt-6">
              <Button variant="outline" size="sm" className="text-xs border-blue-400/50 text-blue-400 hover:bg-blue-500/20">
                <Twitter className="w-4 h-4 mr-1" />
                Twitter
              </Button>
              <Button variant="outline" size="sm" className="text-xs border-cyan-400/50 text-cyan-400 hover:bg-cyan-500/20">
                <MessageCircle className="w-4 h-4 mr-1" />
                Telegram  
              </Button>
              <Button variant="outline" size="sm" className="text-xs border-gray-400/50 text-gray-300 hover:bg-gray-500/20">
                <Github className="w-4 h-4 mr-1" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSection;
