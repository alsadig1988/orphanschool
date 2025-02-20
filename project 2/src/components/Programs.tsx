import React from 'react';

const Programs = () => {
  const programs = [
    {
      title: "Elementary Education",
      description: "Foundation years focusing on core subjects and character development.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "Middle School",
      description: "Expanding horizons through diverse subjects and activities.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "High School",
      description: "Preparing students for college and future careers.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
  ];

  return (
    <section id="programs" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive education programs tailored to every stage of learning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
                <button className="mt-4 text-blue-500 hover:text-blue-600 font-medium">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;