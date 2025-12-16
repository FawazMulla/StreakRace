import React from 'react';
import { motion } from 'framer-motion';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img
            src="/images/hero/team-hero.jpg"
            alt="StreakRace Racing Team"
            className="hero-image"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              const placeholder = e.currentTarget.parentElement.querySelector(".hero-image-placeholder");
              if (placeholder) placeholder.style.display = "flex";
            }}

          // onError={(e) => {
          //   e.target.style.display = 'none';
          //   e.target.nextSibling.style.display = 'flex';
          // }}
          />
          <div className="hero-image-placeholder" style={{ display: 'none' }}>
            <span>TEAM HERO IMAGE</span>
          </div>
          <div className="hero-overlay" />
        </div>

        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            STREAKRACE RACING
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Elite Formula-1 Racing Organization • Championship Winners • Speed Innovators
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button className="btn-primary">JOIN OUR TEAM</button>
            <button className="btn-secondary">VIEW ACHIEVEMENTS</button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            RACING EXCELLENCE
          </motion.h2>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              StreakRace Racing Organization stands at the forefront of Formula-1 motorsport,
              combining decades of racing heritage with cutting-edge innovation. Our team of
              world-class drivers, engineers, and strategists work tirelessly to push the
              boundaries of speed and performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {[
              { number: '15+', label: 'Championships Won' },
              { number: '200+', label: 'Race Victories' },
              { number: '50+', label: 'Podium Finishes' },
              { number: '25+', label: 'Years of Excellence' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Drivers Section */}
      <section className="drivers">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            OUR ELITE DRIVERS
          </motion.h2>

          <div className="drivers-grid">
            {[
              { name: 'Alex Thunder', number: '01', role: 'Lead Driver', icon: '🏎️' },
              { name: 'Maria Velocity', number: '02', role: 'Speed Specialist', icon: '🏁' },
              { name: 'Jake Lightning', number: '03', role: 'Track Master', icon: '⚡' }
            ].map((driver, index) => (
              <motion.div
                key={index}
                className="driver-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="driver-icon">
                  {driver.icon}
                </div>
                <div className="driver-info">
                  <h3>{driver.name}</h3>
                  <p className="driver-role">{driver.role}</p>
                  <p className="driver-number">Racing #{driver.number}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            RECENT VICTORIES
          </motion.h2>

          <div className="achievements-grid">
            {[
              { title: 'Monaco Grand Prix 2024', description: 'Dominant 1-2 finish with record-breaking lap times', icon: '🏆' },
              { title: 'Silverstone Championship', description: 'Strategic masterclass in challenging weather conditions', icon: '🥇' },
              { title: 'Constructors Championship', description: 'Third consecutive title with innovative aerodynamics', icon: '🎖️' }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
                <div className="achievement-content">
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="technology">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            INNOVATION LAB
          </motion.h2>

          <div className="tech-content">
            <motion.div
              className="tech-icon-container"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="tech-icon">⚙️</div>
            </motion.div>

            <motion.div
              className="tech-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>Next-Generation Racing</h3>
              <p>
                Our state-of-the-art facility houses the most advanced racing technology,
                from AI-powered telemetry systems to revolutionary hybrid powertrains.
                Every component is engineered for maximum performance and reliability.
              </p>
              <ul className="tech-features">
                <li>Advanced Aerodynamics Research</li>
                <li>Hybrid Power Unit Development</li>
                <li>Real-time Data Analytics</li>
                <li>Sustainable Racing Solutions</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            VISIT OUR HEADQUARTERS
          </motion.h2>

          <motion.div
            className="location-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="location-info">
              <div className="location-address">
                <h3>📍 StreakRace Racing HQ</h3>
                <p>Ghatkopar East, Mumbai</p>
                <p>Maharashtra 400077, India</p>
                <div className="location-details">
                  <p>📞 +91 98765 43210</p>
                  <p>✉️ info@streakrace.com</p>
                  <p>🕒 Mon-Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30154.38647!2d72.9081!3d19.0896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8c6b3c5c5c5%3A0x1234567890abcdef!2sGhatkopar%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="StreakRace Racing HQ Location - Ghatkopar, Mumbai"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact/Join Section */}
      <section className="join">
        <div className="container">
          <motion.div
            className="join-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>JOIN THE LEGACY</h2>
            <p>
              Be part of racing history. Whether you're a driver, engineer, or racing enthusiast,
              StreakRace Racing offers opportunities to excel in the world's most demanding motorsport.
            </p>
            <div className="join-buttons">
              <button className="btn-primary">APPLY NOW</button>
              <button className="btn-secondary">CONTACT US</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;