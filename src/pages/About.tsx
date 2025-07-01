
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Award, Calendar, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Club</h1>
            <p className="text-xl text-green-100 mb-8">
              Over a century of tradition, excellence, and community spirit
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Rich History</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Established in 1912, Hawkhead Bowling Club has been a cornerstone of the Paisley 
                  community for over 113 years. What began as a small group of bowling enthusiasts 
                  has grown into one of Scotland's most respected bowling clubs.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Throughout our history, we've maintained our commitment to excellence, 
                  sportsmanship, and community spirit. Our club has produced numerous 
                  championship players and continues to nurture new talent.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">1912</div>
                    <div className="text-gray-600">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">150+</div>
                    <div className="text-gray-600">Members</div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1544737151815-6e4a999de2a9?w=600&h=400&fit=crop"
                  alt="Historic bowling green"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
                <p className="text-gray-600">
                  We believe in fostering a welcoming environment where members of all 
                  skill levels can enjoy the sport together.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in everything we do, from maintaining our 
                  facilities to supporting our members' development.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tradition</h3>
                <p className="text-gray-600">
                  We honor our rich history while embracing modern approaches to 
                  make bowling accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Find Us</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="bg-gray-100 rounded-lg p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <MapPin className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                      <p className="text-gray-600">
                        Hawkhead Road<br />
                        Paisley, PA2 7BJ<br />
                        Scotland
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Getting Here</h3>
                    <p className="text-gray-600 mb-3">
                      <strong>By Car:</strong> Free parking available on-site
                    </p>
                    <p className="text-gray-600 mb-3">
                      <strong>By Bus:</strong> Regular services from Paisley town center
                    </p>
                    <p className="text-gray-600">
                      <strong>By Train:</strong> Paisley Gilmour Street station (1.5 miles)
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                  <p className="text-gray-500">Interactive map would be placed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
