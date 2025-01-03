import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaHouse } from 'react-icons/fa6';
import {
  AiOutlineBook,
  AiOutlineFileText,
  AiOutlineExclamationCircle,
  AiOutlineCalendar,
  AiOutlineBell,
  AiOutlineSetting,
  AiOutlineAppstoreAdd,
} from 'react-icons/ai';
import { BsClipboardCheck, BsPencilSquare } from 'react-icons/bs';

const StudentSidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // State for sidebar open/close

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Home', path: '/student/home', icon: <FaHouse className="text-white-500" /> },
    { name: 'Enrolled Courses', path: '/student/enrolled-courses', icon: <AiOutlineBook className="text-blue-500" /> },
    { name: 'Assignments', path: '/student/assignments', icon: <BsClipboardCheck className="text-green-500" /> },
    { name: 'Quizzes', path: '/student/quizzes', icon: <BsPencilSquare className="text-yellow-500" /> },
    { name: 'Exams', path: '/student/exams', icon: <AiOutlineFileText className="text-purple-500" /> },
    { name: 'Grades', path: '/student/grades', icon: <AiOutlineExclamationCircle className="text-pink-500" /> },
    { name: 'Alerts', path: '/student/alerts', icon: <AiOutlineBell className="text-red-500" /> },
    { name: 'Calendar', path: '/student/calendar', icon: <AiOutlineCalendar className="text-orange-500" /> },
    { name: 'Resources', path: '/student/resources', icon: <AiOutlineAppstoreAdd className="text-cyan-500" /> },
    { name: 'Feedback', path: '/student/feedback', icon: <AiOutlineFileText className="text-teal-500" /> },
    { name: 'Complaint Desk', path: '/student/complaint-desk', icon: <AiOutlineSetting className="text-indigo-500" /> },
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

export default StudentSidebar;
