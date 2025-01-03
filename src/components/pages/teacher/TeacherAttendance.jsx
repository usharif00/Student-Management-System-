import React from 'react';
import attendanceData from '../../../data/teacher-data/attendance.json';  // Adjust the path accordingly

const TeacherAttendance = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Track and manage student attendance here</h1>
      
      <div className="mt-6">
        {attendanceData.length === 0 ? (
          <p className="text-gray-500">No attendance records available.</p>
        ) : (
          <table className="w-full text-left border-collapse mt-4">
            <thead>
              <tr>
                <th className="border-b p-2">Student Name</th>
                <th className="border-b p-2">Class</th>
                <th className="border-b p-2">Date</th>
                <th className="border-b p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((record) => (
                <tr key={record.id}>
                  <td className="border-b p-2">{record.student_name}</td>
                  <td className="border-b p-2">{record.class}</td>
                  <td className="border-b p-2">{record.date}</td>
                  <td className="border-b p-2">{record.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TeacherAttendance;
