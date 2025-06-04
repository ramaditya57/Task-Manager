import React from 'react'

const CustomToolTip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className='bg-gray-800 shadow-lg rounded-lg p-2 border border-gray-700 text-white'>
        <p className='text-xs font-semibold text-purple-300 mb-1'>{payload[0].name}</p>
        <p className='text-sm text-gray-300'>
          Count: <span className='text-sm font-medium text-white'>{payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
}

export default CustomToolTip
