// src/pages/admin/Home.jsx
import { Link } from 'react-router-dom';
import { BsPeople, BsClipboard } from 'react-icons/bs';
import { AiOutlineFileText, AiOutlineExclamationCircle, AiOutlineProject } from 'react-icons/ai';
import { MdQuiz } from 'react-icons/md';
import { FaBell, FaFolderOpen } from 'react-icons/fa';

const AdminHome = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      <Link to="/admin/users" className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="bg-orange-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
          <BsPeople size={32} />
        </div>
        <div className="text-md text-gray-600">Users</div>
      </Link>
      <Link to="/admin/class-list" className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="bg-green-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
          <BsClipboard size={32} />
        </div>
        <div className="text-md text-gray-600">Class List</div>
      </Link>
      <Link to="/admin/timetable" className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="bg-pink-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
          <AiOutlineFileText size={32} />
        </div>
        <div className="text-md text-gray-600">Timetable</div>
      </Link>
      <Link to="/admin/exams" className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="bg-blue-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
          <AiOutlineExclamationCircle size={32} />
        </div>
        <div className="text-md text-gray-600">Exams</div>
      </Link>
      <Link to="/admin/calendar" className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="bg-yellow-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
          <AiOutlineExclamationCircle size={32} />
        </div>
        <div className="text-md text-gray-600">Calendar</div>
      </Link>
      <Link to="/admin/news-alerts" className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="bg-violet-600 p-6 rounded-full mb-4 text-white flex items-center justify-center">
          <FaBell size={32} />
        </div>
        <div className="text-md text-gray-600">News & Alerts</div>
      </Link>
      <Link to="/admin/results" className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="bg-cyan-600 p-6 rounded-full mb-4 text-white flex items-center justify-center">
          <MdQuiz size={32} />
        </div>
        <div className="text-md text-gray-600">Results</div>
      </Link>
      <Link to="/admin/settings" className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="bg-red-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
          <AiOutlineProject size={32} />
        </div>
        <div className="text-md text-gray-600">Settings</div>
      </Link>
    </div>
  );
};

export default AdminHome;
