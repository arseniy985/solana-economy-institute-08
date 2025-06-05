
import React from 'react';
import { Brain, Cpu, Globe, Lightbulb, TrendingUp, Users, Target, Award } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const About = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Advanced Research",
      description: "High-tech reports and comprehensive case studies on blockchain implementation in various economic sectors.",
      progress: 85
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Proof-of-Concept",
      description: "Experimental pilot projects testing innovative blockchain solutions in real-world scenarios.",
      progress: 92
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Digital Business Models",
      description: "Developing new business frameworks optimized for the digital economy and blockchain integration.",
      progress: 78
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Training",
      description: "Advanced educational programs bridging the gap between traditional economics and blockchain technology.",
      progress: 88
    }
  ];

  const pieData = [
    { name: 'Research & Development', value: 35, color: '#8B5CF6' },
    { name: 'Education Programs', value: 25, color: '#A855F7' },
    { name: 'Pilot Projects', value: 20, color: '#C084FC' },
    { name: 'Industry Partnerships', value: 20, color: '#E879F9' }
  ];

  const barData = [
    { name: 'Q1 2024', projects: 12, partnerships: 8 },
    { name: 'Q2 2024', projects: 18, partnerships: 12 },
    { name: 'Q3 2024', projects: 25, partnerships: 16 },
    { name: 'Q4 2024', projects: 32, partnerships: 22 }
  ];

  const stats = [
    { icon: <TrendingUp className="w-8 h-8" />, value: "150+", label: "Research Projects" },
    { icon: <Users className="w-8 h-8" />, value: "50K+", label: "Students Trained" },
    { icon: <Target className="w-8 h-8" />, value: "85%", label: "Success Rate" },
    { icon: <Award className="w-8 h-8" />, value: "25+", label: "Industry Awards" }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Unified background with subtle variation */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-purple-950/90 to-gray-950/95"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-violet-900/10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Pioneering the Future of
            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {' '}Digital Economy
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            SIDE serves as a bridge between traditional economics and blockchain innovation, 
            fostering the development of sustainable digital business ecosystems on Solana.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-purple-600/20 to-violet-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="text-purple-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts and Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left side - Features with progress bars */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-800/70 via-gray-700/60 to-gray-800/70 p-6 rounded-xl border border-gray-600/40 hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02] backdrop-blur-sm hover:border-purple-500/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-700 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300 shadow-md flex-shrink-0">
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-200 text-sm leading-relaxed mb-3">{feature.description}</p>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-violet-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${feature.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-right text-sm text-purple-300 mt-1">{feature.progress}%</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Charts */}
          <div className="space-y-8">
            {/* Pie Chart */}
            <div className="bg-gradient-to-br from-gray-800/70 via-gray-700/60 to-gray-800/70 p-6 rounded-xl border border-gray-600/40 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Resource Allocation</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="bg-gradient-to-br from-gray-800/70 via-gray-700/60 to-gray-800/70 p-6 rounded-xl border border-gray-600/40 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Growth Metrics</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#374151', 
                        border: '1px solid #6B7280',
                        borderRadius: '8px',
                        color: '#F3F4F6'
                      }} 
                    />
                    <Legend />
                    <Bar dataKey="projects" fill="#8B5CF6" name="Projects" />
                    <Bar dataKey="partnerships" fill="#A855F7" name="Partnerships" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Redesigned Mission Section */}
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-violet-600/20 to-fuchsia-600/10 rounded-3xl blur-3xl"></div>
          <div className="absolute top-4 left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 right-4 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl"></div>
          
          <div className="relative bg-gradient-to-br from-gray-800/80 via-gray-700/70 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-purple-500/30 shadow-2xl shadow-purple-500/10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-violet-700 rounded-2xl mb-6 shadow-xl">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-4">
                  Our <span className="bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent">Mission</span>
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-purple-300" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Research</h4>
                  <p className="text-gray-300 text-sm">Rigorous blockchain research for traditional systems</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-purple-300" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Innovation</h4>
                  <p className="text-gray-300 text-sm">Practical experimentation and implementation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-purple-300" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Education</h4>
                  <p className="text-gray-300 text-sm">Comprehensive education for digital transformation</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-lg text-gray-200 leading-relaxed">
                  To accelerate the adoption of blockchain technology in traditional economic systems 
                  through rigorous research, practical experimentation, and comprehensive education. 
                  We envision a future where digital economies thrive on transparent, efficient, 
                  and decentralized foundations built on Solana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
