import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const StuCalendar = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Calendar</h2>
      <Calendar />
    </div>
  );
};

export default StuCalendar;
