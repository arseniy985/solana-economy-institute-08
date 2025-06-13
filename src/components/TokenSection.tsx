
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  BarChart3,
  Rocket,
  Star,
  PieChart,
  ArrowUpRight,
  Building,
  Wallet,
  Flame,
  Lightbulb,
  Network,
  Banknote,
  Globe,
  Activity
} from 'lucide-react';

const TokenSection = () => {
  const [copied, setCopied] = useState(false);
  
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
      name: "Бронзовый",
      min: "1,000 $SIDE",
      benefits: ["Ежемесячные отчеты", "Доступ к сообществу"],
      color: "from-amber-600 to-orange-600",
      icon: <Award className="w-5 h-5" />
    },
    {
      name: "Серебряный", 
      min: "5,000 $SIDE",
      benefits: ["Квартальные звонки", "Ранний доступ", "Стейкинг награды"],
      color: "from-gray-400 to-gray-600",
      icon: <Star className="w-5 h-5" />
    },
    {
      name: "Золотой",
      min: "25,000 $SIDE", 
      benefits: ["Частные консультации", "Эксклюзивные события"],
      color: "from-yellow-400 to-yellow-600",
      icon: <Rocket className="w-5 h-5" />
    },
    {
      name: "Бриллиантовый",
      min: "100,000 $SIDE",
      benefits: ["Прямой доступ к основателям", "Инвестиционные возможности"],
      color: "from-purple-400 to-violet-600", 
      icon: <Building className="w-5 h-5" />
    }
  ];

  const buySteps = [
    "Установите Phantom кошелек",
    "Купите SOL на бирже", 
    "Используйте Jupiter DEX",
    "Обменяйте SOL на $SIDE"
  ];

  const securityFeatures = [
    { title: "Аудит CertiK", description: "Полная проверка безопасности", icon: <Shield className="w-5 h-5" /> },
    { title: "Мультисиг казначейство", description: "Защищенное управление", icon: <Lock className="w-5 h-5" /> },
    { title: "Заблокированная ликвидность", description: "Гарантированная стабильность", icon: <Banknote className="w-5 h-5" /> }
  ];

  const communityStats = [
    { label: "Держатели", value: "2,847", icon: <Users className="w-5 h-5" /> },
    { label: "Общий объем", value: "$1.2M", icon: <BarChart3 className="w-5 h-5" /> },
    { label: "Дневной объем", value: "$45K", icon: <Activity className="w-5 h-5" /> },
    { label: "Сожжено токенов", value: "12,450", icon: <Flame className="w-5 h-5" /> }
  ];

  return (
    <section id="token" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-full text-purple-200 text-sm font-semibold mb-8 border border-purple-500/30 backdrop-blur-sm">
            <Flame className="w-5 h-5 mr-2 text-orange-400" />
            Революционный токен будущего
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Токен <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-purple-300 bg-clip-text text-transparent animate-pulse">$SIDE</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Первый в мире токен с автоматическими дивидендами в сфере блокчейн исследований. 
            Получайте пассивный доход от развития цифровой экономики.
          </p>
        </div>

        {/* Token Address */}
        <div className="mb-12 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-gray-800/90 to-gray-900/90 border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2 flex items-center">
                    <Network className="w-5 h-5 mr-2 text-purple-400" />
                    Адрес контракта на Solana
                  </h3>
                  <code className="text-purple-300 text-sm font-mono break-all bg-gray-800/50 px-3 py-2 rounded-lg">
                    {tokenAddress}
                  </code>
                </div>
                <Button
                  onClick={copyToClipboard}
                  className="bg-purple-600 hover:bg-purple-700 flex-shrink-0"
                >
                  {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                  {copied ? 'Скопировано!' : 'Копировать'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs Section */}
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-gray-800/50 border border-gray-700/50">
              <TabsTrigger value="overview" className="data-[state=active]:bg-purple-600">
                <PieChart className="w-4 h-4 mr-2" />
                Обзор
              </TabsTrigger>
              <TabsTrigger value="rewards" className="data-[state=active]:bg-purple-600">
                <Award className="w-4 h-4 mr-2" />
                Награды
              </TabsTrigger>
              <TabsTrigger value="security" className="data-[state=active]:bg-purple-600">
                <Shield className="w-4 h-4 mr-2" />
                Безопасность
              </TabsTrigger>
              <TabsTrigger value="community" className="data-[state=active]:bg-purple-600">
                <Users className="w-4 h-4 mr-2" />
                Сообщество
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Token Info */}
                <div className="lg:col-span-2 space-y-6">
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

                  {/* Investment Tiers */}
                  <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <Star className="w-6 h-6 mr-2 text-yellow-400" />
                        Инвестиционные уровни
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {investmentTiers.map((tier, index) => (
                          <div key={index} className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/30">
                            <div className={`w-10 h-10 bg-gradient-to-r ${tier.color} rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0`}>
                              {tier.icon}
                            </div>
                            <div>
                              <h4 className="text-white font-semibold text-sm">{tier.name}</h4>
                              <p className="text-purple-300 font-medium text-sm">{tier.min}</p>
                              <p className="text-gray-400 text-xs">{tier.benefits[0]}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* How to Buy */}
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
                          <div className="w-7 h-7 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0">
                            {index + 1}
                          </div>
                          <p className="text-gray-300 text-sm">{step}</p>
                        </div>
                      ))}
                      <div className="pt-4">
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800">
                          <Wallet className="w-4 h-4 mr-2" />
                          Купить $SIDE
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Key Features */}
                  <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-green-500/30">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <DollarSign className="w-6 h-6 text-green-400 mr-3" />
                          <div>
                            <h4 className="text-white font-semibold text-sm">Автоматические дивиденды</h4>
                            <p className="text-gray-400 text-xs">От прибыли института</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <TrendingUp className="w-6 h-6 text-purple-400 mr-3" />
                          <div>
                            <h4 className="text-white font-semibold text-sm">Дефляционная модель</h4>
                            <p className="text-gray-400 text-xs">Постоянное сжигание токенов</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-6 h-6 text-blue-400 mr-3" />
                          <div>
                            <h4 className="text-white font-semibold text-sm">Управление проектом</h4>
                            <p className="text-gray-400 text-xs">Голосование по предложениям</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Rewards Tab */}
            <TabsContent value="rewards" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {investmentTiers.map((tier, index) => (
                  <Card key={index} className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 border-gray-600/30 hover:scale-105 transition-transform duration-300">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 bg-gradient-to-r ${tier.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                        {React.cloneElement(tier.icon, { className: "w-6 h-6" })}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{tier.name} уровень</h3>
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
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {securityFeatures.map((feature, index) => (
                  <Card key={index} className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 border-green-500/30">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-green-500/30">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-4">100% Безопасность</h3>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                      Наш смарт-контракт прошел полный аудит безопасности от CertiK. 
                      Все средства защищены мультисиг-кошельком, а ликвидность заблокирована навсегда.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Community Tab */}
            <TabsContent value="community" className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {communityStats.map((stat, index) => (
                  <Card key={index} className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 border-purple-500/30">
                    <CardContent className="p-6 text-center">
                      <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-3">
                        {stat.icon}
                      </div>
                      <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                      <p className="text-gray-400 text-sm">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-purple-500/30">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Присоединяйтесь к сообществу</h3>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                      Станьте частью инновационного сообщества инвесторов и исследователей блокчейн-технологий. 
                      Получайте эксклюзивные обновления и участвуйте в развитии экосистемы.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button variant="outline" className="border-blue-400/50 text-blue-400 hover:bg-blue-500/20">
                      <Twitter className="w-4 h-4 mr-2" />
                      Twitter
                    </Button>
                    <Button variant="outline" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-500/20">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Telegram  
                    </Button>
                    <Button variant="outline" className="border-gray-400/50 text-gray-300 hover:bg-gray-500/20">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-900/80 via-violet-900/80 to-purple-900/80 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Начните зарабатывать уже <span className="bg-gradient-to-r from-purple-300 to-violet-400 bg-clip-text text-transparent">сегодня</span>
            </h2>
            <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
              Не упустите возможность получать пассивный доход от развития блокчейн-экономики
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white px-8">
                Купить $SIDE токены
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-purple-400/50 text-purple-300 hover:bg-purple-600/30">
                Смотреть на DexScreener
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSection;
