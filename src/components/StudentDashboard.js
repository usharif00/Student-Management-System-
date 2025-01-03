import React, { useState } from "react";
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { AiOutlineBook, AiOutlineFileText, AiOutlineProject, AiOutlineCalendar } from "react-icons/ai";
import { BsPeople, BsClipboard } from "react-icons/bs";
import { MdQuiz } from "react-icons/md";

const StudentDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <div className={`bg-black text-white ${sidebarOpen ? "w-64" : "w-16"} transition-all duration-300 p-4 h-full`}>

      <div className="flex items-center justify-between mb-8">
        <h1 className={`${sidebarOpen ? "text-2xl font-bold" : "hidden"} ml-2`}>Menu</h1>
        <FaBars
          className="cursor-pointer text-white text-2xl"
          onClick={toggleSidebar}
        />
      </div>
      <div className="space-y-4 overflow-y-auto"> {/* This will make the sidebar scrollable if necessary */}
        {/* Sidebar Items */}
        <div className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
          <BsPeople className="text-orange-500" />
          <span className={`${sidebarOpen ? "block" : "hidden"} sm:inline-block`}>Enrolled Courses</span>
        </div>
        <div className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
          <BsClipboard className="text-green-500" />
          <span className={`${sidebarOpen ? "block" : "hidden"} sm:inline-block`}>Assignments</span>
        </div>
        <div className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
          <MdQuiz className="text-blue-500" />
          <span className={`${sidebarOpen ? "block" : "hidden"} sm:inline-block`}>Quizzes</span>
        </div>
        <div className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
          <AiOutlineFileText className="text-pink-500" />
          <span className={`${sidebarOpen ? "block" : "hidden"} sm:inline-block`}>Exams</span>
        </div>
        <div className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
          <AiOutlineCalendar className="text-red-500" />
          <span className={`${sidebarOpen ? "block" : "hidden"} sm:inline-block`}>Grades</span>
        </div>
        <div className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
          <AiOutlineCalendar className="text-yellow-500" />
          <span className={`${sidebarOpen ? "block" : "hidden"} sm:inline-block`}>Alerts</span>
        </div>
        <div className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
          <AiOutlineCalendar className="text-purple-500" />
          <span className={`${sidebarOpen ? "block" : "hidden"} sm:inline-block`}>Calendar</span>
        </div>
        <div className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
          <AiOutlineFileText className="text-blue-300" />
          <span className={`${sidebarOpen ? "block" : "hidden"} sm:inline-block`}>Resources</span>
        </div>
        <div className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
          <BsClipboard className="text-orange-300" />
          <span className={`${sidebarOpen ? "block" : "hidden"} sm:inline-block`}>Feedback</span>
        </div>
        <div className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
          <BsPeople className="text-green-300" />
          <span className={`${sidebarOpen ? "block" : "hidden"} sm:inline-block`}>Complaint Desk</span>
        </div>
      </div>
    </div>
  

      {/* Main Dashboard */}
      <div className="flex-1 bg-white">
        {/* Top Bar */}
        <div className="flex justify-between items-center p-4 bg-white shadow-md">
          <div>
            <h1 className="text-2xl font-bold">Student Dashboard</h1>
            <span className="text-sm text-gray-600">Student Name Here</span>
          </div>
         <FaSignOutAlt className="text-3xl cursor-pointer mr-8" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 p-6">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="bg-orange-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
              <BsPeople size={32} />
            </div>
            <div className="text-md text-gray-600">Enrolled Courses</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="bg-green-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
              <BsClipboard size={32} />
            </div>
            <div className="text-md text-gray-600">Assignments</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="bg-pink-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
              <AiOutlineFileText size={32} />
            </div>
            <div className="text-md text-gray-600">Quizzes</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="bg-blue-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
              <MdQuiz size={32} />
            </div>
            <div className="text-md text-gray-600">Exams</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="bg-red-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
              <AiOutlineProject size={32} />
            </div>
            <div className="text-md text-gray-600">Grades</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="bg-yellow-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
              <AiOutlineCalendar size={32} />
            </div>
            <div className="text-md text-gray-600">Alerts</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="bg-purple-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
              <AiOutlineFileText size={32} />
            </div>
            <div className="text-md text-gray-600">Resources</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="bg-green-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
              <BsPeople size={32} />
            </div>
            <div className="text-md text-gray-600">Feedback</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
