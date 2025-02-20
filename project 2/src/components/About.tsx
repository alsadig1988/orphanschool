import React from 'react';
import { Users, BookOpen, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Brightwood Academy</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Since 1995, we've been dedicated to providing exceptional education and fostering a love for learning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Expert Faculty</h3>
            <p className="text-gray-600">
              Our dedicated teachers bring years of experience and passion to every classroom.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Modern Curriculum</h3>
            <p className="text-gray-600">
              Innovative programs designed to prepare students for future success.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="h-8 w-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Student Success</h3>
            <p className="text-gray-600">
              Our graduates consistently achieve excellence in academics and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;