import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Car, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-red-600 shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <Car className="h-8 w-8 text-yellow-400" />
              <span className="ml-2 text-2xl font-bold text-white">HotWheels Hub</span>
            </NavLink>
          </div>
          <div className="flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) =>
                `text-white hover:text-yellow-400 transition-colors ${isActive ? 'text-yellow-400' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about"
              className={({ isActive }) =>
                `text-white hover:text-yellow-400 transition-colors ${isActive ? 'text-yellow-400' : ''}`
              }
            >
              About
            </NavLink>
            <NavLink to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-white hover:text-yellow-400 transition-colors" />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-yellow-400 text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
                >
                  {itemCount}
                </motion.span>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;