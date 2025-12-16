import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="navbar-container">
        <motion.div
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="navbar-favicon">
            🏎️
          </div>
          <span className="navbar-text">StreakRace</span>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;