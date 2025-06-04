import React, { useState } from 'react';
import { LuChevronDown } from 'react-icons/lu';

const SelectDropDown = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className='relative w-full'>
      {/* Dropdown Button */}
      <button
        className='w-full text-sm text-slate-100 bg-slate-800 border border-slate-600 px-2.5 py-3 rounded-md mt-2 flex justify-between items-center'
        onClick={() => setIsOpen(!isOpen)}
      >
        {value ? options.find((opt) => opt.value === value)?.label : placeholder}
        <span className='ml-2'>
          <LuChevronDown className={`${isOpen ? 'rotate-180' : ''} transition-transform duration-200`} />
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className='absolute w-full bg-slate-800 border border-slate-700 rounded-md mt-1 shadow-lg shadow-black/30 z-10'>
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className='px-3 py-2 text-sm text-slate-100 hover:bg-slate-700 cursor-pointer'
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectDropDown;
