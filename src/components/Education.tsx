
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Calendar, Award, TrendingUp, Shield, Target, Zap, DollarSign, Star, Clock, PlayCircle } from 'lucide-react';

const Education = () => {
  const [activeCategory, setActiveCategory] = useState('free');

  const freeCourses = [
    {
      title: "Blockchain Fundamentals",
      description: "Complete introduction to blockchain technology, cryptocurrencies, and decentralized systems.",
      duration: "6 weeks",
      level: "Beginner",
      students: 2500,
      rating: 4.9,
      price: "FREE",
      features: ["Certificate included", "24/7 Support", "Lifetime access"],
      icon: <BookOpen className="w-6 h-6" />,
      gradient: "from-red-500 to-orange-600",
      popular: true
    },
    {
      title: "Cryptocurrency Safety Guide",
      description: "Essential security practices for protecting your crypto assets and avoiding scams.",
      duration: "2 weeks",
      level: "Beginner", 
      students: 1800,
      rating: 4.8,
      price: "FREE",
      features: ["Security checklist", "Wallet setup guide", "Scam detection"],
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Solana Token Creation Basics",
      description: "Learn the fundamentals of creating tokens on Solana blockchain for beginners.",
      duration: "4 weeks",
      level: "Intermediate",
      students: 950,
      rating: 4.7,
      price: "FREE",
      features: ["Hands-on projects", "Code examples", "Community support"],
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-purple-500 to-violet-600"
    }
  ];

  const paidCourses = [
    {
      title: "Advanced Token Economics & Growth",
      description: "Master advanced strategies for creating viral tokens with sustainable growth mechanisms and community building.",
      duration: "12 weeks",
      level: "Advanced",
      students: 450,
      rating: 5.0,
      price: "$1,299",
      originalPrice: "$1,999",
      features: ["1-on-1 mentoring", "Launch support", "Marketing strategies", "Growth hacking"],
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-600",
      bestseller: true
    },
    {
      title: "Futures Trading Mastery",
      description: "Professional futures trading course with advanced strategies, risk management, and market psychology.",
      duration: "10 weeks", 
      level: "Advanced",
      students: 680,
      rating: 4.9,
      price: "$899",
      originalPrice: "$1,299",
      features: ["Live trading sessions", "Risk calculator tools", "Weekly analysis", "Telegram signals"],
      icon: <Target className="w-6 h-6" />,
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      title: "Crypto Sniping & MEV Strategies",
      description: "Professional course on identifying and capturing profitable opportunities in the crypto market.",
      duration: "8 weeks",
      level: "Expert",
      students: 280,
      rating: 4.8,
      price: "$1,599",
      originalPrice: "$2,299",
      features: ["Private tools access", "Bot strategies", "Alpha calls", "VIP community"],
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-pink-500 to-rose-600",
      exclusive: true
    },
    {
      title: "Enterprise DeFi Development",
      description: "Build enterprise-grade DeFi protocols with advanced smart contract architecture and security.",
      duration: "16 weeks",
      level: "Expert",
      students: 125,
      rating: 5.0,
      price: "$2,499",
      originalPrice: "$3,499",
      features: ["Enterprise projects", "Security audits", "Job placement", "Lifetime updates"],
      icon: <Award className="w-6 h-6" />,
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  const upcomingEvents = [
    {
      title: "Solana Digital Economy Summit 2024",
      date: "June 15-17, 2024",
      location: "San Francisco, CA",
      type: "Conference"
    },
    {
      title: "Blockchain Regulation Workshop",
      date: "May 20, 2024",
      location: "Online",
      type: "Workshop"
    },
    {
      title: "DeFi Innovation Hackathon",
      date: "July 1-3, 2024",
      location: "New York, NY",
      type: "Hackathon"
    }
  ];

  const CourseCard = ({ course, isFree }) => (
    <div className="group relative">
      {/* Glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${course.gradient} rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500`}></div>
      
      <Card className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95 border-gray-700/50 hover:border-gray-600/80 transition-all duration-500 group-hover:scale-[1.02] backdrop-blur-sm h-full overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-800/20 to-transparent"></div>
        
        {/* Badges - positioned better to avoid overlapping */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-10 max-w-[120px]">
          {course.popular && (
            <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0 shadow-lg text-xs">
              <Star className="w-3 h-3 mr-1" />
              Most Popular
            </Badge>
          )}
          {course.bestseller && (
            <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 shadow-lg text-xs">
              <TrendingUp className="w-3 h-3 mr-1" />
              Bestseller
            </Badge>
          )}
          {course.exclusive && (
            <Badge className="bg-gradient-to-r from-pink-500 to-rose-600 text-white border-0 shadow-lg text-xs">
              <Award className="w-3 h-3 mr-1" />
              Exclusive
            </Badge>
          )}
        </div>

        <CardHeader className="relative pb-4">
          <div className="flex items-start justify-between mb-4 pr-28">
            <div className={`w-14 h-14 bg-gradient-to-r ${course.gradient} rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300`}>
              {course.icon}
            </div>
            <Badge variant="outline" className="border-gray-600/50 text-gray-300 bg-gray-800/50">
              {course.level}
            </Badge>
          </div>
          
          <CardTitle className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
            {course.title}
          </CardTitle>
          <CardDescription className="text-gray-300 leading-relaxed">
            {course.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="relative space-y-6">
          {/* Course stats */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-400">
              <Clock className="w-4 h-4 mr-1" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Users className="w-4 h-4 mr-1" />
              <span>{course.students.toLocaleString()}</span>
            </div>
            <div className="flex items-center text-yellow-500">
              <Star className="w-4 h-4 mr-1 fill-current" />
              <span className="font-medium">{course.rating}</span>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-2">
            {course.features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-gray-300">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full mr-3"></div>
                {feature}
              </div>
            ))}
          </div>

          {/* Price and action */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className={`text-2xl font-bold ${isFree ? 'text-emerald-400' : 'text-purple-400'}`}>
                  {course.price}
                </span>
                {course.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                )}
              </div>
              {course.originalPrice && (
                <span className="text-xs text-green-400">
                  Save {Math.round((1 - parseInt(course.price.replace(/[$,]/g, '')) / parseInt(course.originalPrice.replace(/[$,]/g, ''))) * 100)}%
                </span>
              )}
            </div>
            
            <Button 
              className={`${isFree 
                ? 'bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800' 
                : 'bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800'
              } text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
            >
              {isFree ? (
                <>
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Start Free
                </>
              ) : (
                <>
                  <DollarSign className="w-4 h-4 mr-2" />
                  Enroll Now
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Enhanced background with more depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/98 via-slate-900/95 to-purple-950/98"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-violet-900/15 via-transparent to-purple-900/15"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-56 h-56 bg-violet-600/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-1/3 w-32 h-32 bg-fuchsia-600/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/30 to-violet-600/30 rounded-full text-purple-200 text-sm font-medium mb-8 border border-purple-500/50 backdrop-blur-sm">
            <BookOpen className="w-5 h-5 mr-2" />
            World-Class Education Platform
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Master
            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {' '}Blockchain
            </span>
            <br />Economics
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            From beginner fundamentals to advanced professional strategies. 
            Join thousands of students building the future of digital finance.
          </p>
        </div>

        {/* Enhanced course categories */}
        <div className="mb-16">
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800/50 p-2 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveCategory('free')}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeCategory === 'free'
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-center">
                    <Star className="w-5 h-5 mr-2" />
                    Free Courses
                    <Badge className="ml-2 bg-emerald-600/20 text-emerald-400 border-emerald-500/30">
                      {freeCourses.length}
                    </Badge>
                  </div>
                </button>
                <button
                  onClick={() => setActiveCategory('paid')}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeCategory === 'paid'
                      ? 'bg-gradient-to-r from-purple-600 to-violet-700 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Professional Courses
                    <Badge className="ml-2 bg-purple-600/20 text-purple-400 border-purple-500/30">
                      {paidCourses.length}
                    </Badge>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Course grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeCategory === 'free' ? freeCourses : paidCourses).map((course, index) => (
              <CourseCard 
                key={index} 
                course={course} 
                isFree={activeCategory === 'free'} 
              />
            ))}
          </div>
        </div>

        {/* Improved Upcoming Events */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-800/70 via-gray-700/60 to-gray-800/70 p-6 rounded-xl border border-gray-600/40 hover:shadow-2xl transition-all duration-300 group-hover:scale-105 backdrop-blur-sm hover:border-purple-500/50">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/20 border border-purple-400/30">
                    {event.type}
                  </Badge>
                  <Calendar className="w-5 h-5 text-purple-300" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{event.title}</h4>
                <p className="text-gray-200 text-sm mb-2">{event.date}</p>
                <p className="text-gray-200 text-sm mb-4">{event.location}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-purple-400/50 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 hover:text-white w-full transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Certification */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 rounded-3xl blur-lg opacity-20"></div>
          <div className="relative bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 rounded-3xl p-12 text-white shadow-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <Award className="w-10 h-10 opacity-90" />
              </div>
              <h3 className="text-4xl font-bold mb-6">SIDE Certification Program</h3>
              <p className="text-xl opacity-95 mb-8 leading-relaxed">
                Earn industry-recognized credentials in blockchain economics and digital business innovation. 
                Our certification program is designed in partnership with leading academic institutions and industry experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-purple-600 backdrop-blur-sm transition-all duration-300"
                >
                  View Certification Tracks
                </Button>
                <Button 
                  size="lg" 
                  className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30 transition-all duration-300"
                >
                  Download Curriculum
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
