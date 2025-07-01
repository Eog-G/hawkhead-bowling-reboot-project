
import { ArrowRight, Users, Trophy, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to 
            <span className="block text-green-200">Hawkhead Bowling Club</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-green-100 animate-fade-in">
            Established in 1912 • Over a Century of Excellence in Bowling
          </p>
          
          <p className="text-lg mb-12 text-green-50 max-w-2xl mx-auto animate-fade-in">
            Join our historic bowling club and become part of a tradition that spans generations. 
            Experience the finest facilities and warmest welcome in Paisley.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
            <Link
              to="/membership"
              className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Join Today</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            
            <Link
              to="/about"
              className="border-2 border-green-300 text-green-100 hover:bg-green-300 hover:text-green-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="bg-green-600 bg-opacity-30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-200" />
              </div>
              <h3 className="text-2xl font-bold text-green-200">150+</h3>
              <p className="text-green-100">Active Members</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 bg-opacity-30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-green-200" />
              </div>
              <h3 className="text-2xl font-bold text-green-200">113</h3>
              <p className="text-green-100">Years of History</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 bg-opacity-30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-green-200" />
              </div>
              <h3 className="text-2xl font-bold text-green-200">30+</h3>
              <p className="text-green-100">Events Yearly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
