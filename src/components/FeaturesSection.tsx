
import { Users, Award, Home, Calendar } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Welcoming Community",
      description: "Join a friendly community of bowling enthusiasts who share your passion for the sport."
    },
    {
      icon: Award,
      title: "Competitive Play",
      description: "Participate in leagues, tournaments, and competitions throughout the bowling season."
    },
    {
      icon: Home,
      title: "Excellent Facilities",
      description: "Enjoy our well-maintained greens, modern clubhouse, and comfortable social areas."
    },
    {
      icon: Calendar,
      title: "Year-Round Events",
      description: "From social gatherings to championship matches, there's always something happening at the club."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Hawkhead Bowling Club?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the best in lawn bowling with our exceptional facilities and vibrant community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 hover-scale"
            >
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
