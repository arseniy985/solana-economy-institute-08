
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  DollarSign, 
  TrendingUp, 
  Coins, 
  Users, 
  BarChart3,
  Zap,
  Flame,
  Gift,
  Shield,
  Award,
  Sparkles,
  CheckCircle2,
  Crown,
  Percent,
  Timer,
  Verified,
  Lightbulb,
  ArrowUpRight,
  ExternalLink,
  Target,
  Rocket
} from 'lucide-react';

const TokenOverview = () => {
  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900 via-violet-900 to-purple-800 p-8">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-orange-500/5 to-red-500/10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                <img 
                  src="/lovable-uploads/38c7bb81-42e5-4be7-9177-8f17c128376a.png" 
                  alt="SIDE Token" 
                  className="w-10 h-10"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-1">$SIDE Token</h2>
                <p className="text-yellow-200 font-medium">Дивиденды начинаются с $10M</p>
              </div>
            </div>
            <Badge className="bg-green-500/20 border-green-400/50 text-green-300 px-4 py-2 text-sm font-bold">
              ГАРАНТИРОВАННО
            </Badge>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">15%</div>
              <div className="text-yellow-200 text-sm">APY Дивиденды</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">25%</div>
              <div className="text-orange-200 text-sm">Бонус Стейкинг</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">2%</div>
              <div className="text-red-200 text-sm">Сжигание</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">300%</div>
              <div className="text-purple-200 text-sm">Средний ROI</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white px-8 py-3 rounded-xl font-bold shadow-xl">
              <Target className="w-5 h-5 mr-2" />
              Купить $SIDE
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-yellow-400/50 text-yellow-300 hover:bg-yellow-600/20 px-8 py-3 rounded-xl">
              <BarChart3 className="w-5 h-5 mr-2" />
              DexScreener
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Key Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Automatic Dividends */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative bg-gradient-to-br from-emerald-900/60 to-green-900/40 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="w-10 h-10 text-emerald-400" />
              <Sparkles className="w-6 h-6 text-emerald-300" />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Автоматические Дивиденды</h3>
            <p className="text-emerald-300 font-bold text-lg mb-3">От $10M капитализации</p>
            <p className="text-gray-300 text-sm mb-4">Ежемесячные выплаты прибыли института прямо на ваш кошелек</p>
            <div className="flex items-center text-emerald-400 font-medium">
              <Percent className="w-4 h-4 mr-2" />
              До 15% годовых
            </div>
          </div>
        </div>

        {/* Staking Protocol */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative bg-gradient-to-br from-purple-900/60 to-violet-900/40 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <Zap className="w-10 h-10 text-purple-400" />
              <Crown className="w-6 h-6 text-purple-300" />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Протокол Стейкинга</h3>
            <p className="text-purple-300 font-bold text-lg mb-3">Зарабатывайте Держа</p>
            <p className="text-gray-300 text-sm mb-4">Заблокируйте токены для дополнительных наград и права голоса</p>
            <div className="flex items-center text-purple-400 font-medium">
              <Timer className="w-4 h-4 mr-2" />
              +25% бонус APY
            </div>
          </div>
        </div>

        {/* Deflationary Model */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative bg-gradient-to-br from-orange-900/60 to-red-900/40 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <Flame className="w-10 h-10 text-orange-400" />
              <Rocket className="w-6 h-6 text-orange-300" />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Сжигание Токенов</h3>
            <p className="text-orange-300 font-bold text-lg mb-3">Уменьшение Предложения</p>
            <p className="text-gray-300 text-sm mb-4">Квартальное сжигание токенов снижает общее предложение</p>
            <div className="flex items-center text-orange-400 font-medium">
              <TrendingUp className="w-4 h-4 mr-2" />
              2% ежеквартально
            </div>
          </div>
        </div>
      </div>

      {/* Token Stats */}
      <div className="bg-gradient-to-r from-slate-900/80 to-gray-900/80 rounded-2xl p-6 backdrop-blur-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center group">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-cyan-400 mb-1">1M</div>
            <div className="text-gray-400 text-sm">Общее Предложение</div>
          </div>

          <div className="text-center group">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform">
              <Coins className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-purple-400 mb-1">Solana</div>
            <div className="text-gray-400 text-sm">Блокчейн</div>
          </div>

          <div className="text-center group">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-green-400 mb-1">$10M</div>
            <div className="text-gray-400 text-sm">Старт Дивидендов</div>
          </div>

          <div className="text-center group">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-yellow-400 mb-1">98%</div>
            <div className="text-gray-400 text-sm">Оценка Безопасности</div>
          </div>
        </div>
      </div>

      {/* Value Propositions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Proven Growth */}
        <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/30 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Проверенная Модель Роста</h3>
              <p className="text-blue-300 font-medium">300% Средний ROI</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
              <span className="text-gray-300">$150M+ управляемых активов</span>
            </div>
            <div className="flex items-center text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
              <span className="text-gray-300">15 компаний-единорогов</span>
            </div>
            <div className="flex items-center text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
              <span className="text-gray-300">6 лет стабильной прибыли</span>
            </div>
          </div>
        </div>

        {/* Elite Community */}
        <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/30 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
              <Crown className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Элитное Сообщество</h3>
              <p className="text-indigo-300 font-medium">Эксклюзивный Доступ</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
              <span className="text-gray-300">Приватные звонки инвесторов</span>
            </div>
            <div className="flex items-center text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
              <span className="text-gray-300">Ранний доступ к проектам</span>
            </div>
            <div className="flex items-center text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
              <span className="text-gray-300">Право голоса в управлении</span>
            </div>
          </div>
        </div>
      </div>

      {/* How to Buy */}
      <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/30 rounded-2xl p-6 backdrop-blur-sm">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
            <Lightbulb className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-xl">Как Купить $SIDE</h3>
            <p className="text-yellow-300 font-medium">Простой процесс из 4 шагов</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-black/20 rounded-xl hover:bg-black/30 transition-colors">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-3 shadow-lg">
              1
            </div>
            <div className="text-white font-semibold mb-1">Установить Phantom</div>
            <div className="text-gray-400 text-sm">Скачать Solana кошелек</div>
          </div>
          
          <div className="text-center p-4 bg-black/20 rounded-xl hover:bg-black/30 transition-colors">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-3 shadow-lg">
              2
            </div>
            <div className="text-white font-semibold mb-1">Купить SOL</div>
            <div className="text-gray-400 text-sm">На бирже</div>
          </div>
          
          <div className="text-center p-4 bg-black/20 rounded-xl hover:bg-black/30 transition-colors">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-3 shadow-lg">
              3
            </div>
            <div className="text-white font-semibold mb-1">Jupiter DEX</div>
            <div className="text-gray-400 text-sm">Подключить кошелек</div>
          </div>
          
          <div className="text-center p-4 bg-black/20 rounded-xl hover:bg-black/30 transition-colors">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-3 shadow-lg">
              4
            </div>
            <div className="text-white font-semibold mb-1">Обменять на $SIDE</div>
            <div className="text-gray-400 text-sm">Начать зарабатывать</div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex items-center px-4 py-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-full border border-green-500/30">
          <Verified className="w-4 h-4 mr-2 text-green-400" />
          <span className="text-green-300 text-sm font-medium">CertiK Проверено</span>
        </div>
        <div className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full border border-blue-500/30">
          <Shield className="w-4 h-4 mr-2 text-blue-400" />
          <span className="text-blue-300 text-sm font-medium">Застрахованные Активы</span>
        </div>
        <div className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-full border border-purple-500/30">
          <Award className="w-4 h-4 mr-2 text-purple-400" />
          <span className="text-purple-300 text-sm font-medium">Швейцарская Лицензия</span>
        </div>
        <div className="flex items-center px-4 py-2 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-full border border-yellow-500/30">
          <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
          <span className="text-yellow-300 text-sm font-medium">Премиум Уровень</span>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-purple-900/60 via-violet-900/60 to-purple-900/60 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Начните зарабатывать <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">сегодня</span>
          </h2>
          <p className="text-gray-200 mb-6 text-lg">
            Не упустите возможность получать пассивный доход от развития блокчейн экономики
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-all">
              Купить $SIDE Токены
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-purple-400/50 text-purple-300 hover:bg-purple-600/30 px-8 py-4 rounded-xl font-semibold text-lg">
              Смотреть на DexScreener
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenOverview;
