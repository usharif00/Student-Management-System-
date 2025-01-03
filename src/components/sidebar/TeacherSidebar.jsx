import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsPeople, BsClipboardCheck } from 'react-icons/bs';
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { AiOutlineCalendar, AiOutlineBell, AiOutlineFileText, AiOutlineProject } from 'react-icons/ai';

const TeacherSidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // State for sidebar open/close

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Home', path: '/teacher/home', icon: <FaHouse className="text-white" /> },
    { name: 'Classes', path: '/teacher/classes', icon: <BsPeople className="text-orange-500" /> },
    { name: 'Reports', path: '/teacher/reports', icon: <BsClipboardCheck className="text-green-500" /> },
    { name: 'Assignments', path: '/teacher/assignments', icon: <AiOutlineFileText className="text-pink-500" /> },
    { name: 'Quizzes', path: '/teacher/quizzes', icon: <AiOutlineProject className="text-blue-500" /> },
    { name: 'Projects', path: '/teacher/projects', icon: <AiOutlineProject className="text-purple-500" /> },
    { name: 'Notifications', path: '/teacher/notifications', icon: <AiOutlineBell className="text-yellow-500" /> },
    { name: 'Attendance', path: '/teacher/attendance', icon: <BsPeople className="text-teal-500" /> },
    { name: 'Resources', path: '/teacher/resources', icon: <AiOutlineFileText className="text-red-500" /> },
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

export default TeacherSidebar;
