// src/layouts/TeacherLayout.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TeacherSidebar from '../sidebar/TeacherSidebar';
import { FaSignOutAlt } from 'react-icons/fa';

const TeacherLayout = () => {
  const location = useLocation();

  // Routes to page names
  const pageTitles = {
    '/teacher': 'Teacher Dashboard',
    '/teacher/classes': 'Classes',
    '/teacher/reports': 'Reports',
    '/teacher/assignments': 'Assignments',
    '/teacher/quizzes': 'Quizzes',
    '/teacher/projects': 'Projects',
    '/teacher/notifications': 'Notifications',
    '/teacher/attendance': 'Attendance',
    '/teacher/resources': 'Resources',
  };

  // Get the current page title
  const pageTitle = pageTitles[location.pathname] || 'Teacher Dashboard';

  return (
    <div className="flex">
      {/* Sidebar */}
      <TeacherSidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Bar */}
        <div className="flex justify-between items-center p-4 bg-white shadow-md">
          <div>
            <h1 className="text-2xl font-bold">{pageTitle}</h1>
            <span className="text-sm text-gray-600">Teacher Name Here</span>
          </div>
          <FaSignOutAlt className="text-3xl cursor-pointer mr-8" />
        </div>

        {/* Dynamic Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default TeacherLayout;
