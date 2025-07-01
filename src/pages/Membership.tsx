
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, Star, Users, Trophy } from 'lucide-react';

const Membership = () => {
  const membershipTypes = [
    {
      name: "Full Membership",
      price: "£120",
      period: "per year",
      popular: true,
      features: [
        "Unlimited access to all greens",
        "Participation in all club competitions",
        "Full voting rights",
        "Access to social events",
        "Use of clubhouse facilities",
        "Guest privileges",
        "Equipment storage"
      ]
    },
    {
      name: "Social Membership",
      price: "£60",
      period: "per year",
      popular: false,
      features: [
        "Access to social events",
        "Use of clubhouse facilities",
        "Limited green access",
        "Guest privileges",
        "Bar facilities"
      ]
    },
    {
      name: "Junior Membership",
      price: "£30",
      period: "per year (Under 18)",
      popular: false,
      features: [
        "Full access to greens",
        "Coaching sessions included",
        "Junior competitions",
        "Equipment loan program",
        "Mentorship program"
      ]
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Welcoming Community",
      description: "Join a friendly group of bowling enthusiasts who will help you improve your game."
    },
    {
      icon: Trophy,
      title: "Competitive Play",
      description: "Participate in leagues, tournaments, and friendly matches throughout the season."
    },
    {
      icon: Star,
      title: "Professional Coaching",
      description: "Access to qualified coaches to help develop your bowling skills."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Club</h1>
            <p className="text-xl text-green-100 mb-8">
              Become part of a tradition that spans over a century
            </p>
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Membership Options</h2>
              <p className="text-lg text-gray-600">Choose the membership that's right for you</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {membershipTypes.map((type, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-lg shadow-lg p-8 ${
                    type.popular ? 'ring-2 ring-green-500 transform scale-105' : ''
                  }`}
                >
                  {type.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.name}</h3>
                    <div className="text-4xl font-bold text-green-600 mb-2">{type.price}</div>
                    <div className="text-gray-600">{type.period}</div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      type.popular
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    Choose This Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Member Benefits</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How to Join</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">Come to the club and meet our members</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Try Bowling</h3>
                <p className="text-gray-600">Have a go on our greens with guidance</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Apply</h3>
                <p className="text-gray-600">Complete your membership application</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Welcome!</h3>
                <p className="text-gray-600">Start enjoying all member benefits</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                Ready to join? Contact us today to arrange a visit.
              </p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                <a
                  href="tel:0141-884-2361"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Call: 0141 884 2361
                </a>
                <a
                  href="mailto:info@hawkheadbowlingclub.co.uk"
                  className="inline-block border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Membership;
