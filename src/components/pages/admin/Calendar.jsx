import React, { useEffect, useState } from 'react';

// Importing the calendar data from the JSON file
import calendarData from '../../../data/admin-data/calendar.json';

// Function to group events by month
const groupByMonth = (events) => {
  return events.reduce((acc, event) => {
    const month = new Date(event.date).toLocaleString('default', { month: 'long' });
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(event);
    return acc;
  }, {});
};

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(calendarData);
  }, []);

  const groupedEvents = groupByMonth(events);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">School Calendar</h2>
      <div>
        {Object.keys(groupedEvents).map((month) => (
          <div
            key={month}
            className="border rounded-lg p-4 bg-gray-50 shadow-md mb-4"
          >
            <h3 className="text-xl font-semibold mb-3">{month}</h3>
            <ul>
              {groupedEvents[month].map((event) => (
                <li key={event.id} className="mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="font-medium text-gray-700">
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                    <span className="text-gray-500">—————————</span>
                    <span className="text-gray-800">{event.event}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
