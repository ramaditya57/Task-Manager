import React, { useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import SideMenu from './SideMenu';

const Navbar = ({activeMenu}) => {
    const [openSideMenu, setOpenSideMenu] = useState(false);
  return (
  <div className='flex gap-5 bg-[#111827] border-b border-gray-700 backdrop-blur-[2px] py-4 px-7 sticky top-0 z-30 shadow-md'>
    <button className='block lg:hidden text-gray-200' onClick={() => {
      setOpenSideMenu(!openSideMenu)
    }}>
      {openSideMenu ? (
        <HiOutlineX className='text-2xl' />
      ) : (
        <HiOutlineMenu className='text-2xl' />
      )}
    </button>

    <h2 className='text-lg font-semibold text-white'>Task Flow</h2>

    {openSideMenu && (
      <div className='fixed top-[61px] -ml-4 bg-[#1F2937] shadow-lg'>
        <SideMenu activeMenu={activeMenu} />
      </div>
    )}
  </div>
);

}

export default Navbar
