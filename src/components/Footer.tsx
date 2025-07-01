
import { MapPin, Phone, Mail, Clock, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Hawkhead Bowling Club</p>
                  <p>Hawkhead Road</p>
                  <p>Paisley, PA2 7BJ</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <p>0141 884 2361</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <p>info@hawkheadbowlingclub.co.uk</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-green-400" />
                <div>
                  <p className="font-medium">Season: April - September</p>
                </div>
              </div>
              <div className="ml-8 space-y-1 text-gray-300">
                <p>Monday - Friday: 6:00 PM - 9:00 PM</p>
                <p>Saturday: 2:00 PM - 5:00 PM</p>
                <p>Sunday: 2:00 PM - 5:00 PM</p>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 mb-6">
              <a href="/membership" className="block text-gray-300 hover:text-green-400 transition-colors">
                Become a Member
              </a>
              <a href="/events" className="block text-gray-300 hover:text-green-400 transition-colors">
                Upcoming Events
              </a>
              <a href="/facilities" className="block text-gray-300 hover:text-green-400 transition-colors">
                Club Facilities
              </a>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Hawkhead Bowling Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
