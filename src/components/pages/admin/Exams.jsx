import React from 'react';

const Exams = () => {
  // Example data for the exams schedule
  const examsData = [
    { id: 1, subject: 'Mathematics', date: '2024-12-15', time: '9:00 AM - 11:00 AM', venue: 'Room 101' },
    { id: 2, subject: 'Science', date: '2024-12-16', time: '12:00 PM - 2:00 PM', venue: 'Room 202' },
    { id: 3, subject: 'History', date: '2024-12-17', time: '3:00 PM - 5:00 PM', venue: 'Room 303' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Exams Schedule</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-3 text-left">Subject</th>
              <th className="border border-gray-300 p-3 text-left">Date</th>
              <th className="border border-gray-300 p-3 text-left">Time</th>
              <th className="border border-gray-300 p-3 text-left">Venue</th>
            </tr>
          </thead>
          <tbody>
            {examsData.map((exam) => (
              <tr key={exam.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-3">{exam.subject}</td>
                <td className="border border-gray-300 p-3">{exam.date}</td>
                <td className="border border-gray-300 p-3">{exam.time}</td>
                <td className="border border-gray-300 p-3">{exam.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Exams;
