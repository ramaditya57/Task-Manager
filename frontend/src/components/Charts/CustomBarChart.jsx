import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const CustomBarChart = ({ data }) => {
  // Function to alternate colors
  const getBarColor = (entry) => {
    switch (entry?.priority) {
      case 'Low': return '#00BC7D';
      case 'Medium': return '#FE9900';
      case 'High': return '#FF1F57';
      default: return '#00BC7D';
    }
  };

  // Dark mode tooltip
  const CustomToolTip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className='bg-gray-800 shadow-lg rounded-lg p-2 border border-gray-700 text-white'>
          <p className='text-xs font-semibold text-purple-300 mb-1'>
            {payload[0].payload.priority}
          </p>
          <p className='text-sm text-gray-300'>
            Count: <span className='text-sm font-medium text-white'>{payload[0].payload.count}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className='bg-[#1F2937] p-4 rounded-xl shadow-md'>
      <ResponsiveContainer width='100%' height={325}>
        <BarChart data={data}>
          <CartesianGrid stroke='rgba(255,255,255,0.1)' />
          <XAxis dataKey='priority' tick={{ fontSize: 12, fill: '#D1D5DB' }} stroke='none' />
          <YAxis tick={{ fontSize: 12, fill: '#D1D5DB' }} stroke='none' />
          <Tooltip content={CustomToolTip} cursor={{ fill: 'transparent' }} />
          <Bar
            dataKey='count'
            nameKey='priority'
            fill='#FF8042'
            radius={[10, 10, 0, 0]}
            activeDot={{ r: 8, fill: 'yellow' }}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={getBarColor(entry)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart
