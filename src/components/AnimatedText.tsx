import React, { useState, useEffect } from 'react';

const predictions = [
  "Analyzing disease patterns...",
  "Processing environmental data...",
  "Calculating risk factors...",
  "Generating regional insights...",
  "Predicting outbreak possibilities..."
];

export default function AnimatedText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % predictions.length);
        setIsVisible(true);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p 
      className={`text-xl text-white/90 font-light transition-all duration-1000 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'
      }`}
    >
      {predictions[currentIndex]}
    </p>
  );
}