
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
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Educational
            <span className="bg-gradient-to-r from-purple-600 to-violet-700 bg-clip-text text-transparent">
              {' '}Programs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging the knowledge gap between traditional economics and blockchain innovation 
            through comprehensive educational initiatives.
          </p>
        </div>

        {/* Online Courses */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Online Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-white to-purple-50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-purple-200 text-purple-600">
                      {course.level}
                    </Badge>
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-purple-600" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Students:</span>
                      <span className="font-medium flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {course.students}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-purple-600">{course.price}</span>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
                    {event.type}
                  </Badge>
                  <Calendar className="w-5 h-5 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h4>
                <p className="text-gray-600 text-sm mb-2">{event.date}</p>
                <p className="text-gray-600 text-sm mb-4">{event.location}</p>
                <Button variant="outline" size="sm" className="border-purple-200 text-purple-600 hover:bg-purple-50 w-full">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Certification */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-violet-700 rounded-2xl p-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h3 className="text-3xl font-bold mb-4">SIDE Certification Program</h3>
            <p className="text-lg opacity-90 mb-6">
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
