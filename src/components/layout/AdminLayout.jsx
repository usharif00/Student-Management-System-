import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AdminSidebar from '../sidebar/AdminSidebar';
import { FaSignOutAlt } from 'react-icons/fa';

const AdminLayout = () => {
  const location = useLocation();

  // routes to page names
  const pageTitles = {
    '/admin/home': 'Admin Dashboard',
    '/admin/attendance': 'Attendance',
    '/admin/class-list': 'Class List',
    '/admin/timetable': 'Timetable',
    '/admin/exams': 'Exams',
    '/admin/calendar': 'Calendar',
    '/admin/news-alerts': 'News & Alerts',
    '/admin/results': 'Results',
    '/admin/settings': 'Settings',
  };

  // Get the current page title
  const pageTitle = pageTitles[location.pathname] || 'Admin Dashboard';

  return (
    <div className="flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Bar */}
        <div className="flex justify-between items-center p-4 bg-white shadow-md">
          <div>
            <h1 className="text-2xl font-bold">{pageTitle}</h1>
            <span className="text-sm text-gray-600">Sample Data used here for testing</span>
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

export default AdminLayout;
