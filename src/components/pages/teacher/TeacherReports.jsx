import React, { useState, useEffect } from 'react';
import reportsData from '../../../data/teacher-data/reports.json'; // Directly import the JSON file

const TeacherReports = () => {
  const [reports, setReports] = useState(reportsData); // Set the initial state to the imported JSON data
  const [loading, setLoading] = useState(false); // No need to load since the data is directly imported
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!reports) {
      setError('Failed to load reports');
    }
  }, [reports]);

  if (loading) {
    return <div className="p-4">Loading reports...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <div className="mt-6">
        {reports.length === 0 ? (
          <p className="text-gray-500">No reports available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reports.map((report) => (
              <div key={report.id} className="border rounded-lg p-4 bg-gray-50 shadow-md">
                <h3 className="text-lg font-semibold">{report.title}</h3>
                <p className="text-gray-700 mt-2">{report.description}</p>
                <p className="text-gray-500 mt-1">
                  <strong>Date:</strong> {report.date}
                </p>
                <ul className="mt-3 text-sm text-gray-600">
                  {Object.entries(report.summary).map(([key, value]) => (
                    <li key={key}>
                      <strong>{key.replace('_', ' ')}:</strong> {value}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherReports;
