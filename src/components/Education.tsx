
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Calendar, Award } from 'lucide-react';

const Education = () => {
  const courses = [
    {
      title: "Blockchain Fundamentals for Economists",
      description: "Comprehensive introduction to blockchain technology and its economic implications.",
      duration: "8 weeks",
      level: "Beginner",
      students: 150,
      price: "$499"
    },
    {
      title: "Advanced DeFi Protocol Design",
      description: "Deep dive into designing and implementing decentralized finance protocols on Solana.",
      duration: "12 weeks",
      level: "Advanced",
      students: 75,
      price: "$899"
    },
    {
      title: "Digital Business Model Innovation",
      description: "Learn to create sustainable business models leveraging blockchain technology.",
      duration: "6 weeks",
      level: "Intermediate",
      students: 200,
      price: "$699"
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

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Unified background with subtle variation */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/95 via-slate-800/90 to-purple-950/95"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-violet-900/10 via-transparent to-purple-900/10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Educational
            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {' '}Programs
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Bridging the knowledge gap between traditional economics and blockchain innovation 
            through comprehensive educational initiatives.
          </p>
        </div>

        {/* Online Courses */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Online Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-800/70 via-gray-700/60 to-gray-800/70 border border-gray-600/40 hover:shadow-2xl group-hover:scale-105 backdrop-blur-sm hover:border-purple-500/50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-purple-400/30 text-purple-300 bg-purple-500/20">
                      {course.level}
                    </Badge>
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-violet-700 rounded-lg flex items-center justify-center shadow-md">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-white">{course.title}</CardTitle>
                  <CardDescription className="text-gray-200">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">Duration:</span>
                      <span className="font-medium text-white">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">Students:</span>
                      <span className="font-medium flex items-center text-white">
                        <Users className="w-4 h-4 mr-1" />
                        {course.students}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-purple-300">{course.price}</span>
                      <Button size="sm" className="bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800">
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Upcoming Events</h3>
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
                <Button variant="outline" size="sm" className="border-purple-400/30 text-purple-300 hover:bg-purple-500/20 w-full">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Certification */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 rounded-2xl p-8 text-white shadow-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h3 className="text-3xl font-bold mb-4">SIDE Certification Program</h3>
            <p className="text-lg opacity-95 mb-6 leading-relaxed">
              Earn industry-recognized credentials in blockchain economics and digital business innovation. 
              Our certification program is designed in partnership with leading academic institutions and industry experts.
            </p>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              View Certification Tracks
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
