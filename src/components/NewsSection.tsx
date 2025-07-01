
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Annual Championship Results",
      date: "March 15, 2025",
      excerpt: "Congratulations to all participants in this year's club championship. Outstanding performances across all categories.",
      image: "https://images.unsplash.com/photo-1544737151815-6e4a999de2a9?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "New Season Opening April 1st",
      date: "March 10, 2025",
      excerpt: "Get ready for another exciting bowling season! Registration is now open for new and returning members.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Club Facilities Upgrade Complete",
      date: "March 5, 2025",
      excerpt: "We're excited to announce the completion of our clubhouse renovation, featuring updated changing rooms and social areas.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest News & Updates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay up to date with everything happening at Hawkhead Bowling Club
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-scale"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.excerpt}
                </p>
                <Link
                  to="/news"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/events"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            View All Events
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
