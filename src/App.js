import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Signup';  // Import the Signup component
import Login from './components/Login';    // Import the Login component

// Admin imports
import AdminLayout from './components/layout/AdminLayout';
import Home from './components/pages/admin/Home';
import Users from './components/pages/admin/Users';
import ClassList from './components/pages/admin/ClassList';
import Timetable from './components/pages/admin/Timetable';
import Exams from './components/pages/admin/Exams';
import Calendar from './components/pages/admin/Calendar';
import NewsAndAlerts from './components/pages/admin/NewsAndAlerts';
import Results from './components/pages/admin/Results';
import Settings from './components/pages/admin/Settings';

// Teacher imports
import TeacherLayout from './components/layout/TeacherLayout';
import TeacherHome from './components/pages/teacher/Home';
import TeacherClasses from './components/pages/teacher/TeacherClasses';
import TeacherReports from './components/pages/teacher/TeacherReports';
import TeacherAssignments from './components/pages/teacher/TeacherAssignments';
import TeacherQuizzes from './components/pages/teacher/TeacherQuizzes';
import TeacherProjects from './components/pages/teacher/TeacherProjects';
import TeacherNotifications from './components/pages/teacher/TeacherNotifications';
import TeacherAttendance from './components/pages/teacher/TeacherAttendance';
import TeacherResources from './components/pages/teacher/TeacherResources';

// Student imports
import StudentLayout from './components/layout/StudentLayout';
import StudentHome from './components/pages/student/Home';
import EnrolledCourses from './components/pages/student/EnrolledCourses';
import Assignments from './components/pages/student/StuAssignments';
import Quizzes from './components/pages/student/StuQuizzes';
import ExamsPage from './components/pages/student/StuExams';
import Grades from './components/pages/student/StuGrades';
import Alerts from './components/pages/student/StuAlerts';
import CalendarPage from './components/pages/student/StuCalendar';
import Resources from './components/pages/student/StuResources';
import Feedback from './components/pages/student/Feedback';
import ComplaintDesk from './components/pages/student/ComplaintDesk';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/home" />} /> {/* Redirect to Home */}
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="class-list" element={<ClassList />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="exams" element={<Exams />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="news-alerts" element={<NewsAndAlerts />} />
          <Route path="results" element={<Results />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Teacher Routes */}
        <Route path="/teacher" element={<TeacherLayout />}>
          <Route index element={<Navigate to="/teacher/home" />} /> {/* Redirect to Home */}
          <Route path="home" element={<TeacherHome />} />
          <Route path="classes" element={<TeacherClasses />} />
          <Route path="reports" element={<TeacherReports />} />
          <Route path="assignments" element={<TeacherAssignments />} />
          <Route path="quizzes" element={<TeacherQuizzes />} />
          <Route path="projects" element={<TeacherProjects />} />
          <Route path="notifications" element={<TeacherNotifications />} />
          <Route path="attendance" element={<TeacherAttendance />} />
          <Route path="resources" element={<TeacherResources />} />
        </Route>

        {/* Student Routes */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<Navigate to="/student/home" />} /> {/* Redirect to Home */}
          <Route path="home" element={<StudentHome />} />
          <Route path="enrolled-courses" element={<EnrolledCourses />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="quizzes" element={<Quizzes />} />
          <Route path="exams" element={<ExamsPage />} />
          <Route path="grades" element={<Grades />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="resources" element={<Resources />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="complaint-desk" element={<ComplaintDesk />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
