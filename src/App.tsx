import React, { useState } from 'react';
import { MapPin, AlertCircle, Brain, Search } from 'lucide-react';
import RegionCard from './components/RegionCard';
import PredictionChart from './components/PredictionChart';
import StateFilter from './components/StateFilter';
import AnimatedText from './components/AnimatedText';
import HeroSection from './components/HeroSection';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const regions = [
    { region: 'Andhra Pradesh', riskLevel: 'High' as const, temperature: 32, humidity: 75, cases: 1245, prediction: 'High dengue risk in coastal regions' },
    { region: 'Arunachal Pradesh', riskLevel: 'Low' as const, temperature: 22, humidity: 85, cases: 145, prediction: 'Moderate malaria risk in forest areas' },
    { region: 'Assam', riskLevel: 'High' as const, temperature: 28, humidity: 80, cases: 892, prediction: 'High Japanese Encephalitis risk' },
    { region: 'Bihar', riskLevel: 'Medium' as const, temperature: 35, humidity: 70, cases: 678, prediction: 'Rising Kala-azar cases in northern districts' },
    { region: 'Chhattisgarh', riskLevel: 'Medium' as const, temperature: 30, humidity: 65, cases: 456, prediction: 'Increasing malaria in tribal regions' },
    { region: 'Delhi', riskLevel: 'High' as const, temperature: 38, humidity: 55, cases: 2234, prediction: 'Dengue outbreak risk in urban areas' },
    { region: 'Goa', riskLevel: 'Medium' as const, temperature: 29, humidity: 78, cases: 234, prediction: 'Leptospirosis risk during monsoon' },
    { region: 'Gujarat', riskLevel: 'High' as const, temperature: 34, humidity: 60, cases: 1567, prediction: 'Chikungunya spread in urban zones' },
    { region: 'Haryana', riskLevel: 'Medium' as const, temperature: 36, humidity: 58, cases: 567, prediction: 'Seasonal influenza outbreak potential' },
    { region: 'Himachal Pradesh', riskLevel: 'Low' as const, temperature: 20, humidity: 75, cases: 123, prediction: 'Limited vector-borne disease risk' },
    { region: 'Karnataka', riskLevel: 'High' as const, temperature: 33, humidity: 72, cases: 1890, prediction: 'Dengue hotspots in Bangalore' },
    { region: 'Kerala', riskLevel: 'High' as const, temperature: 30, humidity: 85, cases: 2456, prediction: 'High risk of waterborne diseases' },
    { region: 'Madhya Pradesh', riskLevel: 'Medium' as const, temperature: 35, humidity: 62, cases: 789, prediction: 'Malaria risk in rural areas' },
    { region: 'Maharashtra', riskLevel: 'High' as const, temperature: 34, humidity: 70, cases: 3567, prediction: 'Dengue outbreak in Mumbai metro' },
    { region: 'Manipur', riskLevel: 'Low' as const, temperature: 25, humidity: 82, cases: 234, prediction: 'Japanese Encephalitis in valleys' },
    { region: 'Odisha', riskLevel: 'High' as const, temperature: 32, humidity: 75, cases: 1234, prediction: 'Malaria endemic in tribal regions' },
    { region: 'Punjab', riskLevel: 'Medium' as const, temperature: 37, humidity: 56, cases: 567, prediction: 'H1N1 cases in urban centers' },
    { region: 'Rajasthan', riskLevel: 'Medium' as const, temperature: 39, humidity: 45, cases: 890, prediction: 'Heat-related illness risk' },
    { region: 'Tamil Nadu', riskLevel: 'High' as const, temperature: 33, humidity: 73, cases: 2789, prediction: 'Dengue clusters in Chennai' },
    { region: 'Telangana', riskLevel: 'High' as const, temperature: 35, humidity: 65, cases: 1567, prediction: 'Viral fever outbreak potential' },
    { region: 'Uttar Pradesh', riskLevel: 'High' as const, temperature: 36, humidity: 60, cases: 4567, prediction: 'Japanese Encephalitis in east' },
    { region: 'West Bengal', riskLevel: 'High' as const, temperature: 34, humidity: 75, cases: 2345, prediction: 'Dengue risk in Kolkata region' }
  ];

  const filteredRegions = regions.filter(region =>
    region.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50">
      <HeroSection />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 opacity-0 animate-fade-in-up stagger-1">
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-50 p-4 rounded-lg transform transition-all hover:scale-105">
              <p className="text-red-700 font-medium">High Risk States</p>
              <p className="text-2xl font-bold text-red-800">{regions.filter(r => r.riskLevel === 'High').length}</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg transform transition-all hover:scale-105">
              <p className="text-yellow-700 font-medium">Medium Risk States</p>
              <p className="text-2xl font-bold text-yellow-800">{regions.filter(r => r.riskLevel === 'Medium').length}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg transform transition-all hover:scale-105">
              <p className="text-green-700 font-medium">Low Risk States</p>
              <p className="text-2xl font-bold text-green-800">{regions.filter(r => r.riskLevel === 'Low').length}</p>
            </div>
          </div>
        </div>

        <div className="mb-8 bg-white rounded-xl shadow-lg p-6 opacity-0 animate-fade-in-up stagger-2">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="text-indigo-600" />
            <h2 className="text-xl font-semibold text-gray-800">Regional Overview</h2>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
            alt="India Map"
            className="w-full h-64 object-cover rounded-lg transform transition-all hover:scale-[1.02]"
          />
        </div>

        <div className="mb-6 opacity-0 animate-fade-in-up stagger-3">
          <StateFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        {filteredRegions.length === 0 ? (
          <div className="text-center py-8 opacity-0 animate-fade-in-up stagger-3">
            <p className="text-gray-500 text-lg">No states found matching "{searchTerm}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8 opacity-0 animate-fade-in-up stagger-3">
            {filteredRegions.map((region) => (
              <RegionCard key={region.region} {...region} />
            ))}
          </div>
        )}

        <div className="mb-8 opacity-0 animate-fade-in-up stagger-4">
          <PredictionChart />
        </div>

        <footer className="text-center text-gray-600 mt-8 opacity-0 animate-fade-in-up stagger-4">
          <p>Data sourced from National Vector Borne Disease Control Programme</p>
          <p className="text-sm mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;