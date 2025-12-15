import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Start loading animation on every refresh
    const duration = 3000; // 3 seconds total
    const interval = 50; // Update every 50ms
    const increment = (100 / duration) * interval;

    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          
          // Complete loading after animation finishes
          setTimeout(() => {
            onComplete();
          }, 500);
          
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Calculate car position based on progress (0-100% maps to 0-90% of track width)
  const carPosition = (progress / 100) * 90;

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            filter: 'blur(20px)',
            scale: 1.1
          }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {/* Racing grid texture background */}
          <div className="racing-grid-background" />
          
          {/* Track line */}
          <div className="track-container">
            <div className="track-line" />
            
            {/* Formula-1 car SVG */}
            <motion.div
              className="f1-car"
              style={{
                left: `${carPosition}%`
              }}
              transition={{
                type: 'tween',
                ease: 'linear',
                duration: 0.05
              }}
            >
              <svg
                width="60"
                height="24"
                viewBox="0 0 60 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* F1 Car SVG - Simplified racing car silhouette */}
                <path
                  d="M2 12L8 8H15L20 6H35L40 8H52L58 12L52 16H40L35 18H20L15 16H8L2 12Z"
                  fill="#E30118"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />
                {/* Front wing */}
                <rect x="52" y="10" width="6" height="4" fill="#FDD900" />
                {/* Rear wing */}
                <rect x="2" y="9" width="4" height="6" fill="#FDD900" />
                {/* Wheels */}
                <circle cx="12" cy="12" r="3" fill="#C0BFBF" />
                <circle cx="48" cy="12" r="3" fill="#C0BFBF" />
              </svg>
            </motion.div>
          </div>
          
          {/* Progress counter with enhanced animations */}
          <div className="progress-container">
            <motion.div
              className="progress-counter"
              key={Math.floor(progress)}
              initial={{ scale: 0.9, opacity: 0.8 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                textShadow: progress > 90 ? '0 0 20px #E30118' : '0 0 10px #FDD900'
              }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
            >
              {Math.floor(progress)}%
            </motion.div>
            <motion.div 
              className="loading-text"
              animate={{
                opacity: [0.7, 1, 0.7],
                letterSpacing: progress > 80 ? '0.2em' : '0.1em'
              }}
              transition={{
                opacity: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                letterSpacing: { duration: 0.3 }
              }}
            >
              {progress < 30 ? 'INITIALIZING RACE SYSTEMS' :
               progress < 60 ? 'CALIBRATING ENGINES' :
               progress < 90 ? 'PREPARING FOR LAUNCH' :
               'LIGHTS OUT!'}
            </motion.div>
            
            {/* Completion flash effect */}
            {progress >= 100 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  scale: [0.5, 2, 3],
                  filter: ['blur(0px)', 'blur(5px)', 'blur(10px)']
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '100px',
                  height: '100px',
                  background: 'radial-gradient(circle, #E30118 0%, transparent 70%)',
                  borderRadius: '50%',
                  pointerEvents: 'none'
                }}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;