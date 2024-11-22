import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertCircle } from 'lucide-react';

const actualData = [
  { month: 'Jan', dengue: 1245, malaria: 892, encephalitis: 456 },
  { month: 'Feb', dengue: 1123, malaria: 945, encephalitis: 412 },
  { month: 'Mar', month: 'Mar', dengue: 1678, malaria: 1123, encephalitis: 534 },
  { month: 'Apr', dengue: 2234, malaria: 1567, encephalitis: 678 },
  { month: 'May', dengue: 2567, malaria: 1890, encephalitis: 789 },
  { month: 'Jun', dengue: 3123, malaria: 2234, encephalitis: 892 }
];

export default function PredictionChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Disease Trend Analysis</h3>
        <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
          <AlertCircle className="text-blue-600" size={16} />
          <span className="text-blue-700 text-sm">Live Data</span>
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={actualData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              stroke="#6b7280"
              tick={{ fill: '#4b5563' }}
            />
            <YAxis 
              stroke="#6b7280"
              tick={{ fill: '#4b5563' }}
              label={{ 
                value: 'Number of Cases', 
                angle: -90, 
                position: 'insideLeft',
                style: { fill: '#4b5563' }
              }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px'
              }}
            />
            <Legend 
              verticalAlign="top" 
              height={36}
            />
            <Line 
              name="Dengue Cases"
              type="monotone" 
              dataKey="dengue" 
              stroke="#e11d48" 
              strokeWidth={2}
              dot={{ fill: '#e11d48' }}
            />
            <Line 
              name="Malaria Cases"
              type="monotone" 
              dataKey="malaria" 
              stroke="#0891b2" 
              strokeWidth={2}
              dot={{ fill: '#0891b2' }}
            />
            <Line 
              name="Encephalitis Cases"
              type="monotone" 
              dataKey="encephalitis" 
              stroke="#7c3aed" 
              strokeWidth={2}
              dot={{ fill: '#7c3aed' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="text-sm text-gray-500 mt-4 text-center">
        Source: National Vector Borne Disease Control Programme (NVBDCP)
      </p>
    </div>
  );
}