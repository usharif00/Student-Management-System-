import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import StudentSidebar from '../sidebar/StudentSidebar';
import { FaSignOutAlt } from 'react-icons/fa';

const StudentLayout = () => {
  const location = useLocation();

  // routes to page names
  const pageTitles = {
    '/student/home': 'Student Dashboard',
    '/student/enrolled-courses': 'Enrolled Courses',
    '/student/assignments': 'Assignments',
    '/student/quizzes': 'Quizzes',
    '/student/exams': 'Exams',
    '/student/grades': 'Grades',
    '/student/alerts': 'Alerts',
    '/student/calendar': 'Calendar',
    '/student/resources': 'Resources',
    '/student/feedback': 'Feedback',
    '/student/complaint-desk': 'Complaint Desk',
  };

  // Get the current page title
  const pageTitle = pageTitles[location.pathname] || 'Student Dashboard';

  return (
    <div className="flex">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Bar */}
        <div className="flex justify-between items-center p-4 bg-white shadow-md">
          <div>
            <h1 className="text-2xl font-bold">{pageTitle}</h1>
            <span className="text-sm text-gray-600">Student Name Here</span>
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

export default StudentLayout;
