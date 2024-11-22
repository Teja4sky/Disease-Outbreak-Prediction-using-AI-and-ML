import React from 'react';
import { Brain } from 'lucide-react';
import AnimatedText from './AnimatedText';

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 transform transition-all animate-scale-in">
            <Brain className="w-20 h-20 mx-auto mb-6" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fade-in-up">
            Disease Prediction
          </h1>
          <p className="text-xl md:text-2xl opacity-0 animate-fade-in-up stagger-1">
            AI-Powered Health Monitoring Across India
          </p>
          <div className="mt-8 opacity-0 animate-fade-in-up stagger-2">
            <AnimatedText />
          </div>
          <div className="mt-12 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full opacity-0 animate-fade-in-up stagger-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Live Monitoring Active</span>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-orange-50/30"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-purple-500/20 to-transparent rotate-12 transform scale-150"></div>
      </div>
    </div>
  );
}