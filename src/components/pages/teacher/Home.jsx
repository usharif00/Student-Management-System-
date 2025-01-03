// src/pages/teacher/Home.jsx
import { Link } from 'react-router-dom';
import { BsPeople, BsClipboardCheck } from 'react-icons/bs';
import { AiOutlineFileText, AiOutlineProject } from 'react-icons/ai';
import { MdQuiz } from 'react-icons/md';
import { FaBell, FaFolderOpen } from 'react-icons/fa';

const TeacherHome = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      <Link to="/teacher/classes" className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="bg-orange-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
          <BsPeople size={32} />
        </div>
        <div className="text-md text-gray-600">Classes</div>
      </Link>
      <Link to="/teacher/reports" className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="bg-green-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
          <BsClipboardCheck size={32} />
        </div>
        <div className="text-md text-gray-600">Reports</div>
      </Link>
      <Link to="/teacher/assignments" className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="bg-pink-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
          <AiOutlineFileText size={32} />
        </div>
        <div className="text-md text-gray-600">Assignments</div>
      </Link>
      <Link to="/teacher/quizzes" className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="bg-blue-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
          <MdQuiz size={32} />
        </div>
        <div className="text-md text-gray-600">Quizzes</div>
      </Link>
      <Link to="/teacher/projects" className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="bg-red-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
          <AiOutlineProject size={32} />
        </div>
        <div className="text-md text-gray-600">Projects</div>
      </Link>
      <Link to="/teacher/notifications" className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="bg-yellow-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
          <FaBell size={32} />
        </div>
        <div className="text-md text-gray-600">Notifications</div>
      </Link>
      <Link to="/teacher/attendance" className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="bg-purple-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
          <BsClipboardCheck size={32} />
        </div>
        <div className="text-md text-gray-600">Attendance</div>
      </Link>
      <Link to="/teacher/resources" className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="bg-teal-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
          <FaFolderOpen size={32} />
        </div>
        <div className="text-md text-gray-600">Resources</div>
      </Link>
    </div>
  );
};

export default TeacherHome;
