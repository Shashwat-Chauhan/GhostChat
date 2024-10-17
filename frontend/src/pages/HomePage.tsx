import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-cover bg-center" 
      style={{ backgroundImage: `url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}>
      {/* Overlay for darker effect */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-white text-4xl sm:text-6xl font-bold mb-8">Welcome to Our Platform</h1>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            Get Started
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
