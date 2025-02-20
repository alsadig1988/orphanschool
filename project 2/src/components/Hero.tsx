import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
      </div>
      
      <div className="relative h-screen flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Shaping Tomorrow's
              <span className="text-brand-yellow"> Leaders</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              At Brightwood Academy, we believe in empowering minds and inspiring futures. 
              Join us in nurturing the next generation of innovative thinkers and leaders.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary group">
              Support Our Mission
              <ArrowRight className="ml-2 h-5 w-5 inline-block transition-transform group-hover:translate-x-1" />
            </button>
            <button className="btn-primary">
              Explore Programs
            </button>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: '25+', text: 'Years of Excellence' },
              { number: '95%', text: 'College Acceptance Rate' },
              { number: '12:1', text: 'Student-Teacher Ratio' },
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <div className="text-3xl font-bold text-brand-yellow mb-2">{stat.number}</div>
                <div className="text-gray-200">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;