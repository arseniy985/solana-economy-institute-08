
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, BookOpen, Star, Zap, Crown, Target, Award, Rocket, Globe, BarChart3 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-gradient-to-l from-blue-600/25 to-cyan-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-tr from-purple-600/20 to-violet-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 right-1/4 w-32 h-32 border border-purple-400/30 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border border-violet-300/25 rotate-45 animate-pulse"></div>
        <div className="absolute top-1/2 right-32 w-16 h-16 bg-gradient-to-br from-purple-500/30 to-transparent rounded-full animate-bounce-slow"></div>
        
        {/* Stars */}
        <div className="absolute top-16 left-1/4 w-2 h-2 bg-white/60 rounded-full animate-twinkle"></div>
        <div className="absolute top-32 right-1/3 w-1 h-1 bg-purple-300/80 rounded-full animate-twinkle delay-500"></div>
        <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-violet-200/70 rounded-full animate-twinkle delay-1000"></div>
        <div className="absolute bottom-48 right-20 w-1 h-1 bg-white/50 rounded-full animate-twinkle delay-1500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-900/80 to-violet-900/80 rounded-full text-purple-200 text-sm font-medium mb-8 border border-purple-600/50 backdrop-blur-sm shadow-2xl">
            <Crown className="w-4 h-4 mr-2 text-yellow-400" />
            Leading Blockchain Research Institute
            <Zap className="w-4 h-4 ml-2 text-yellow-400 animate-pulse" />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            SOLANA Digital
            <span className="block bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Economy Institute
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="max-w-4xl mx-auto mb-12 leading-relaxed text-slate-200 text-lg sm:text-xl px-4">
            Объединяем аналитиков, экономистов и IT-специалистов для изучения блокчейн-решений. 
            Проводим исследования, эксперименты и образовательные программы для цифровых инноваций.
          </p>
          
          {/* $SIDE Token Highlight */}
          <div className="mb-12 mx-auto max-w-2xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-amber-500/10 rounded-2xl blur-xl"></div>
              <div className="relative p-6 bg-gradient-to-r from-amber-900/60 via-yellow-900/50 to-amber-900/60 rounded-2xl border border-amber-500/40 backdrop-blur-sm shadow-2xl">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-amber-900 animate-pulse" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">💰 $SIDE Token</h2>
                </div>
                <p className="text-amber-300 font-semibold text-lg">
                  Дивиденды начинаются при капитализации $10M
                </p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-amber-800/30 rounded-lg">
                    <div className="text-yellow-400 font-bold">150M+</div>
                    <div className="text-amber-200 text-sm">Фонд USD</div>
                  </div>
                  <div className="p-3 bg-amber-800/30 rounded-lg">
                    <div className="text-yellow-400 font-bold">12K+</div>
                    <div className="text-amber-200 text-sm">Выпускников</div>
                  </div>
                  <div className="p-3 bg-amber-800/30 rounded-lg">
                    <div className="text-yellow-400 font-bold">200+</div>
                    <div className="text-amber-200 text-sm">Исследований</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 hover:from-purple-700 hover:via-violet-700 hover:to-purple-800 text-white px-12 py-6 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 text-lg font-bold">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Rocket className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform" />
              Исследовать проекты
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-purple-400/50 text-purple-300 px-12 py-6 rounded-2xl backdrop-blur-sm hover:border-purple-300 transition-all duration-300 bg-white/10 hover:bg-white/20 hover:scale-105 text-lg font-bold">
              <Target className="w-6 h-6 mr-3" />
              Купить $SIDE
            </Button>
          </div>
        </div>
        
        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative text-center p-8 bg-gradient-to-br from-slate-800/80 via-slate-700/60 to-slate-800/80 rounded-3xl shadow-2xl border border-emerald-500/30 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm group-hover:scale-105 group-hover:border-emerald-400/50">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-3">200+</h3>
              <p className="text-emerald-400 font-semibold text-lg mb-2">Исследований</p>
              <p className="text-gray-300 text-sm">Научных публикаций и белых книг</p>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative text-center p-8 bg-gradient-to-br from-slate-800/80 via-slate-700/60 to-slate-800/80 rounded-3xl shadow-2xl border border-blue-500/30 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm group-hover:scale-105 group-hover:border-blue-400/50">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-3">12K+</h3>
              <p className="text-blue-400 font-semibold text-lg mb-2">Обучено студентов</p>
              <p className="text-gray-300 text-sm">Сертифицированных специалистов</p>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-violet-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative text-center p-8 bg-gradient-to-br from-slate-800/80 via-slate-700/60 to-slate-800/80 rounded-3xl shadow-2xl border border-purple-500/30 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm group-hover:scale-105 group-hover:border-purple-400/50">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-3">85+</h3>
              <p className="text-purple-400 font-semibold text-lg mb-2">Инвестиций в стартапы</p>
              <p className="text-gray-300 text-sm">Венчурных вложений</p>
            </div>
          </div>
        </div>

        {/* Success Metrics Bar */}
        <div className="mt-20 mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Наши <span className="bg-gradient-to-r from-purple-300 to-violet-400 bg-clip-text text-transparent">Достижения</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-slate-800/60 to-slate-700/40 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">300%</div>
                <div className="text-emerald-400 text-sm font-semibold">ROI</div>
                <div className="text-gray-400 text-xs">Средняя прибыль</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-slate-800/60 to-slate-700/40 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-blue-400 text-sm font-semibold">Трудоустройство</div>
                <div className="text-gray-400 text-xs">Выпускников</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-slate-800/60 to-slate-700/40 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                <Crown className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">15</div>
                <div className="text-purple-400 text-sm font-semibold">Единорогов</div>
                <div className="text-gray-400 text-xs">Компаний $1B+</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-slate-800/60 to-slate-700/40 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-amber-400 text-sm font-semibold">Стран</div>
                <div className="text-gray-400 text-xs">География присутствия</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
