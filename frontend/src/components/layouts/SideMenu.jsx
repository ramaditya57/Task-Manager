import React, { use, useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import { SIDE_MENU_DATA, SIDE_MENU_USER_DATA } from '../../utils/data';

const SideMenu = ({activeMenu}) => {
    const { user, clearUser } = useContext(UserContext);
    const [sideMenuData, setSideMenuData] = useState([]);

    const navigate = useNavigate();

    const handleClick = (route) => {
        if (route === "logout") {
            handleLogout();
            return;
        }

        navigate(route);
    };

    const handleLogout = () => {
        localStorage.clear();
        clearUser();
        navigate("/login");
    };

    useEffect(() => {
        if (user) {
            setSideMenuData(user?.role === "admin" ? SIDE_MENU_DATA : SIDE_MENU_USER_DATA);
        }
        return () => {};
    }, [user]); 
  return <div className='w-64 h-[calc(100vh-64px)] bg-[#1F2937] border-r border-gray-700 sticky top-[61px] z-20 shadow-lg'>
    <div className='flex flex-col items-center justify-center mb-7 pt-5'>
      <div className='relative'>
        <img
          src={user?.profileImageUrl || ''}
          alt="Profile Image"
          className='w-20 h-20 bg-gray-500 rounded-full shadow-md object-cover'
        />
      </div>

      {user?.role === "admin" && (
        <div className='text-[10px] font-semibold text-white bg-indigo-600 px-3 py-0.5 rounded mt-2 shadow'>
          Admin
        </div>
      )}

      <h5 className='text-white font-semibold leading-6 mt-3'>
        {user?.name || ''}
      </h5>

      <p className='text-[12px] text-gray-400'>{user?.email || ''}</p>
    </div>

    {sideMenuData.map((item, index) => (
      <button
        key={`menu_${index}`}
        className={`w-full flex items-center gap-4 text-[15px] transition-colors duration-150 ${
          activeMenu === item.name
            ? 'text-indigo-400 bg-gray-800 border-l-4 border-indigo-500'
            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
        } py-3 px-6 mb-1 cursor-pointer rounded-r-md`}
        onClick={() => {
          if (item.isLogout) {
            handleLogout();
          } else {
            handleClick(item.path);
          }
        }}
      >
        <item.icon className='text-xl' />
        {item.name}
      </button>
    ))}
  </div>
};

export default SideMenu
