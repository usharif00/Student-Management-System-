import React from 'react';

const NewsAndAlerts = () => {
  const alerts = [
    { id: 1, title: 'Holiday Announcement', message: 'School will remain closed on December 25th for Christmas.' },
    { id: 2, title: 'New Assignment Added', message: 'A new Math assignment is available for Class 10.' },
    { id: 3, title: 'Exam Schedule Update', message: 'The Science exam has been rescheduled to January 5th.' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">News & Alerts</h2>
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="border rounded-lg p-4 bg-gray-50 shadow-md">
            <h3 className="text-lg font-semibold">{alert.title}</h3>
            <p className="text-gray-700">{alert.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsAndAlerts;
