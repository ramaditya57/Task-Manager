import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const Input = ({value, onChange, label, placeholder, type}) => {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }
  return (
    <div className="w-full">
      <label className="block text-sm text-gray-300 mb-1">{label}</label>

      <div className="flex items-center bg-gray-800 border border-gray-700 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
        <input
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e)}
          className="w-full bg-transparent text-gray-100 placeholder-gray-500 outline-none"
        />

        {type === 'password' && (
          showPassword ? (
            <FaRegEye
              size={18}
              className="text-blue-400 hover:text-blue-300 cursor-pointer ml-2"
              onClick={toggleShowPassword}
            />
          ) : (
            <FaRegEyeSlash
              size={18}
              className="text-gray-500 hover:text-gray-400 cursor-pointer ml-2"
              onClick={toggleShowPassword}
            />
          )
        )}
      </div>
    </div>
  )
}

export default Input
