import React from 'react';
import { motion } from 'framer-motion';
import { Star, Flame, Trophy, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();

  const featuredCars = [
    {
      id: 1,
      name: "Twin Mill",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=800&q=80",
      category: "Classics"
    },
    {
      id: 2,
      name: "Bone Shaker",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=800&q=80",
      category: "Limited Edition"
    },
    {
      id: 3,
      name: "Rodger Dodger",
      price: 21.99,
      image: "https://images.unsplash.com/photo-1581235707960-23b7e8612c88?auto=format&fit=crop&w=800&q=80",
      category: "New Release"
    },
    {
      id: 4,
      name: "Custom Mustang",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=800&q=80",
      category: "Premium"
    },
    {
      id: 5,
      name: "Deora II",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=800&q=80",
      category: "Classics"
    },
    {
      id: 6,
      name: "Power Rocket",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1581235707960-23b7e8612c88?auto=format&fit=crop&w=800&q=80",
      category: "New Release"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-20 lg:pt-32 pb-20 bg-gradient-to-r from-red-600 to-red-700 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Collect the Extraordinary
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-red-100 mb-8"
            >
              Discover our exclusive collection of HotWheels cars
            </motion.p>
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-red-600 px-8 py-3 rounded-full font-semibold inline-flex items-center"
            >
              Shop Now <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            Featured Collections
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-red-600 font-semibold mb-2">{car.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">${car.price}</span>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => addToCart(car)}
                      className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-colors"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Collector's Edition</h3>
              <p className="text-gray-600">Rare and limited edition models</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <Flame className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">New Arrivals</h3>
              <p className="text-gray-600">Latest releases and hot picks</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <Trophy className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Series</h3>
              <p className="text-gray-600">High-end collectible models</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Join the Collectors Club</h2>
            <p className="text-red-100 mb-8">Get exclusive updates and early access to new releases</p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-yellow-400 text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;