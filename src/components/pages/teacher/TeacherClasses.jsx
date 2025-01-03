import React, { useEffect, useState } from 'react';

const TeacherClasses = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the JSON file
  useEffect(() => {
    fetch('src/data/teacher-data/Classes.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch classes data');
        }
        return response.json();
      })
      .then((data) => {
        setClasses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <p className="text-gray-600 mt-4">
        Manage your classes here. Add new classes, view student lists, and manage schedules.
      </p>
      {loading ? (
        <p className="text-gray-500 mt-4">Loading classes...</p>
      ) : classes.length === 0 ? (
        <p className="text-gray-500 mt-4">No classes found.</p>
      ) : (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((cls) => (
            <div key={cls.id} className="p-4 border rounded-lg bg-gray-50 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">{cls.className}</h3>
              <p className="text-gray-600 mt-2">
                <strong>Teacher:</strong> {cls.teacher}
              </p>
              <p className="text-gray-600">
                <strong>Students:</strong> {cls.students}
              </p>
              <p className="text-gray-600">
                <strong>Schedule:</strong> {cls.schedule}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeacherClasses;
