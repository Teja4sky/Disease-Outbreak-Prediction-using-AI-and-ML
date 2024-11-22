import React from 'react';
import { AlertTriangle, Thermometer, Droplets, Wind } from 'lucide-react';

interface RegionCardProps {
  region: string;
  riskLevel: 'High' | 'Medium' | 'Low';
  temperature: number;
  humidity: number;
  cases: number;
  prediction: string;
}

const getRiskColor = (risk: string) => {
  switch (risk) {
    case 'High':
      return 'bg-red-100 text-red-700';
    case 'Medium':
      return 'bg-yellow-100 text-yellow-700';
    case 'Low':
      return 'bg-green-100 text-green-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

export default function RegionCard({ region, riskLevel, temperature, humidity, cases, prediction }: RegionCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-800">{region}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(riskLevel)}`}>
          {riskLevel} Risk
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Thermometer className="text-orange-500" size={20} />
          <span className="text-gray-600">{temperature}°C</span>
        </div>
        <div className="flex items-center gap-2">
          <Droplets className="text-blue-500" size={20} />
          <span className="text-gray-600">{humidity}%</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="text-red-500" size={20} />
          <span className="text-gray-700">Active Cases: {cases}</span>
        </div>
      </div>

      <div className="mt-4 p-3 bg-indigo-50 rounded-lg">
        <p className="text-indigo-700 text-sm">
          <Wind className="inline mr-2" size={16} />
          Prediction: {prediction}
        </p>
      </div>
    </div>
  );
}