import React from 'react'
import UI_IMG from '../../assets/images/auth-img.png'

const AuthLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-[#0f172a] text-white">
  <div className="w-full md:w-[60vw] h-full px-12 pt-10 pb-12 bg-[#1e293b] shadow-lg border-r border-gray-700">
    <h2 className="text-2xl font-semibold text-gray-100 mb-6">Task Flow</h2>
    {children}
  </div>

  <div className="hidden md:flex w-[40vw] h-full items-center justify-center bg-gradient-to-br from-[#1e3a8a] to-[#0f172a] bg-cover bg-no-repeat bg-center overflow-hidden p-10">
    <img src={UI_IMG} className="w-64 lg:w-[80%] object-contain drop-shadow-xl" />
  </div>
</div>

  )
}

export default AuthLayout
