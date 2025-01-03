import { Link } from 'react-router-dom';
import { AiOutlineBook, AiOutlineCalendar, AiOutlineBell, AiOutlineFileText, AiOutlineAppstoreAdd } from 'react-icons/ai';
import { BsClipboardCheck, BsPencilSquare } from 'react-icons/bs';
import { FaGraduationCap, FaCommentDots } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      <Link to="/student/enrolled-courses" className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="bg-blue-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
          <AiOutlineBook size={32} />
        </div>
        <div className="text-md text-gray-600">Enrolled Courses</div>
      </Link>
      <Link to="/student/assignments" className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="bg-green-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
          <BsClipboardCheck size={32} />
        </div>
        <div className="text-md text-gray-600">Assignments</div>
      </Link>
      <Link to="/student/quizzes" className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="bg-yellow-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
          <BsPencilSquare size={32} />
        </div>
        <div className="text-md text-gray-600">Quizzes</div>
      </Link>
      <Link to="/student/exams" className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="bg-purple-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
          <AiOutlineFileText size={32} />
        </div>
        <div className="text-md text-gray-600">Exams</div>
      </Link>
      <Link to="/student/grades" className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="bg-pink-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
          <FaGraduationCap size={32} />
        </div>
        <div className="text-md text-gray-600">Grades</div>
      </Link>
      <Link to="/student/alerts" className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="bg-red-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
          <AiOutlineBell size={32} />
        </div>
        <div className="text-md text-gray-600">Alerts</div>
      </Link>
      <Link to="/student/calendar" className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="bg-orange-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
          <AiOutlineCalendar size={32} />
        </div>
        <div className="text-md text-gray-600">Calendar</div>
      </Link>
      <Link to="/student/resources" className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="bg-cyan-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
          <AiOutlineAppstoreAdd size={32} />
        </div>
        <div className="text-md text-gray-600">Resources</div>
      </Link>
      <Link to="/student/feedback" className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="bg-teal-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
          <FaCommentDots size={32} />
        </div>
        <div className="text-md text-gray-600">Feedback</div>
      </Link>
      <Link to="/student/complaint-desk" className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="bg-indigo-500 p-6 rounded-full mb-4 text-white flex items-center justify-center">
          <AiOutlineFileText size={32} />
        </div>
        <div className="text-md text-gray-600">Complaint Desk</div>
      </Link>
    </div>
  );
};

export default Home;
