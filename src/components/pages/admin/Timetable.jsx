import React, { useEffect, useState } from 'react';

// Importing the timetable data from the JSON file
import timetableData from '../../../data/admin-data/timetable.json';

const Timetable = () => {
  const [data, setData] = useState([]);

  // Fetching the timetable data when the component mounts
  useEffect(() => {
    setData(timetableData);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Timetable</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-3 text-left">Day</th>
              <th className="border border-gray-300 p-3 text-left">Subject</th>
              <th className="border border-gray-300 p-3 text-left">Teacher</th>
              <th className="border border-gray-300 p-3 text-left">Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry) => (
              <tr key={entry.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-3">{entry.day}</td>
                <td className="border border-gray-300 p-3">{entry.subject}</td>
                <td className="border border-gray-300 p-3">{entry.teacher}</td>
                <td className="border border-gray-300 p-3">{entry.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timetable;
