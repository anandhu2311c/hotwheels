import React from 'react';
import { motion } from 'framer-motion';
import { Car, Award, Users, Globe, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "1968", label: "Founded" },
    { number: "20K+", label: "Car Models" },
    { number: "150+", label: "Countries" }
  ];

  const timeline = [
    {
      year: "1968",
      title: "The Beginning",
      description: "Elliot Handler and his team at Mattel create the first Hot Wheels car, the Custom Camaro."
    },
    {
      year: "1969",
      title: "The Sweet 16",
      description: "The original 16 Hot Wheels cars are released, setting new standards in die-cast toy design."
    },
    {
      year: "1970s",
      title: "Innovation Era",
      description: "Introduction of the iconic orange track and special features like color-changing paint."
    },
    {
      year: "1995",
      title: "Treasure Hunts",
      description: "Launch of the Treasure Hunt series, creating a new level of collectibility."
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-100">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 bg-gradient-to-r from-red-600 to-red-700 relative"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-white mb-6"
            >
              The HotWheels Story
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-red-100 max-w-3xl mx-auto"
            >
              Since 1968, we've been creating the world's most iconic die-cast cars, inspiring generations of collectors and enthusiasts.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Founder</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-6">
                Elliot Handler, along with his wife Ruth Handler, revolutionized the toy industry with the creation of Hot Wheels in 1968. As the co-founder of Mattel, Elliot's vision was to create toy cars that were cooler and performed better than anything else on the market.
              </p>
              <p className="text-gray-600">
                His innovative spirit led to the development of the original sixteen Hot Wheels cars, featuring special paint, detailed designs, and revolutionary wheel technology that allowed them to roll faster than any other toy cars of the time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Journey
          </motion.h2>
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center gap-8"
              >
                <div className="w-24 text-2xl font-bold text-red-600">{event.year}</div>
                <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6"
              >
                <div className="text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Heritage</h2>
            <p className="text-gray-600">Building dreams one car at a time</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <Car className="h-8 w-8 text-red-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
                  <p className="text-gray-600">Pioneering die-cast technology and design since day one</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Award className="h-8 w-8 text-red-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Commitment</h3>
                  <p className="text-gray-600">Unmatched attention to detail in every model</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <Users className="h-8 w-8 text-red-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
                  <p className="text-gray-600">Supporting collectors and enthusiasts worldwide</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Globe className="h-8 w-8 text-red-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                  <p className="text-gray-600">Bringing joy to collectors in over 150 countries</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;