import React from 'react';
import { Heart, Star, Users } from 'lucide-react';

const DonateSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-400 via-red-400 to-yellow-400 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Support Our Mission</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Your contribution helps us provide quality education and create opportunities for our students.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-lg">
            <Heart className="h-12 w-12 mb-6 text-red-200" />
            <h3 className="text-2xl font-bold mb-4">One-Time Donation</h3>
            <p className="mb-6">Make an immediate impact with a single contribution of any amount.</p>
            <button className="bg-white text-blue-500 px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300">
              Donate Now
            </button>
          </div>

          <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-lg">
            <Star className="h-12 w-12 mb-6 text-yellow-200" />
            <h3 className="text-2xl font-bold mb-4">Monthly Giving</h3>
            <p className="mb-6">Join our sustaining donors program with monthly contributions.</p>
            <button className="bg-white text-blue-500 px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300">
              Become a Member
            </button>
          </div>

          <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-lg">
            <Users className="h-12 w-12 mb-6 text-blue-200" />
            <h3 className="text-2xl font-bold mb-4">Corporate Sponsorship</h3>
            <p className="mb-6">Partner with us to make a lasting impact on education.</p>
            <button className="bg-white text-blue-500 px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg mb-4">Every donation makes a difference</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-500 px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300">
              $25
            </button>
            <button className="bg-white text-blue-500 px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300">
              $50
            </button>
            <button className="bg-white text-blue-500 px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300">
              $100
            </button>
            <button className="bg-white text-blue-500 px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300">
              Custom
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;