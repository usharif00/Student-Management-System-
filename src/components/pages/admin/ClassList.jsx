import React, { useEffect, useState } from 'react';
import classListData from '../../../data/admin-data/class-list.json';


const ClassList = () => {
  // State to hold the class data
  const [classData, setClassData] = useState([]);

  // Fetch class data from the imported JSON file
  useEffect(() => {
    setClassData(classListData.classes); // Set the class data from JSON
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Class List</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-3 text-left">Class Name</th>
              <th className="border border-gray-300 p-3 text-left">Teacher</th>
              <th className="border border-gray-300 p-3 text-left">Students</th>
            </tr>
          </thead>
          <tbody>
            {classData.map((classItem) => (
              <tr key={classItem.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-3">{classItem.className}</td>
                <td className="border border-gray-300 p-3">{classItem.teacher}</td>
                <td className="border border-gray-300 p-3">{classItem.students}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassList;
