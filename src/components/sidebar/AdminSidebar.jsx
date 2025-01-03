import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsPeople, BsClipboard } from 'react-icons/bs';
import { FaBars, FaSignOutAlt } from "react-icons/fa"; // Icons for menu and logout
import { FaHouse } from "react-icons/fa6";
import { AiOutlineCalendar, AiOutlineExclamationCircle, AiOutlineFileText, AiOutlineSetting, AiOutlineBell } from 'react-icons/ai';

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // State for sidebar open/close

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Home', path: '/admin/home', icon: <FaHouse className="text-white-500" /> },
    { name: 'Users', path: '/admin/users', icon: <BsPeople className="text-fuchsia-500" /> },
    { name: 'Class List', path: '/admin/class-list', icon: <BsClipboard className="text-green-500" /> },
    { name: 'Timetable', path: '/admin/timetable', icon: <AiOutlineFileText className="text-pink-500" /> },
    { name: 'Exams', path: '/admin/exams', icon: <AiOutlineExclamationCircle className="text-blue-500" /> },
    { name: 'Calendar', path: '/admin/calendar', icon: <AiOutlineCalendar className="text-yellow-300" /> },
    { name: 'News & Alerts', path: '/admin/news-alerts', icon: <AiOutlineBell className="text-violet-500" /> },
    { name: 'Results', path: '/admin/results', icon: <AiOutlineExclamationCircle className="text-cyan-500" /> },
    { name: 'Settings', path: '/admin/settings', icon: <AiOutlineSetting className="text-red-500" /> },
  ];

  return (
    <div className={`bg-black text-white p-4 ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
      {/* Sidebar Title */}
      <div className="flex items-center justify-between mb-8">
        <h1 className={`text-2xl font-bold ${!isOpen && 'hidden'}`}>Menu</h1>
        {/* Toggle icon for sidebar */}
        <FaBars
          className="cursor-pointer text-white text-2xl"
          onClick={toggleSidebar}
        />
      </div>
      <div className="space-y-4">
        {menuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) =>
              `flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg ${
                isActive ? 'bg-gray-700' : ''
              }`
            }
          >
            {item.icon}
            {isOpen && <span>{item.name}</span>}
          </NavLink>
        ))}
      </div>
     
    </div>
  );
};

export default AdminSidebar;
