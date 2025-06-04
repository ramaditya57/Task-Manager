import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext';
import Navbar from './Navbar';
import SideMenu from './SideMenu';

const DashboardLayout = ({children, activeMenu}) => {
    const { user } = useContext(UserContext);
    
  return (
    <div className="bg-gray-950 min-h-screen text-gray-100">
      <Navbar activeMenu={activeMenu} />

      {user && (
        <div className="flex">
          <div className="max-[1080px]:hidden bg-gray-900 min-h-screen border-r border-gray-800">
            <SideMenu activeMenu={activeMenu} />
          </div>

          <div className="flex-grow p-6 bg-gray-950">{children}</div>
        </div>
      )}
    </div>
  )
}

export default DashboardLayout
