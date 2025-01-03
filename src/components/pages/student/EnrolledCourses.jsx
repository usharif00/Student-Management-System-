const EnrolledCourses = () => {
    const courses = [
      { id: 1, name: 'Mathematics 101', instructor: 'Dr. Smith', duration: '12 weeks' },
      { id: 2, name: 'Physics 201', instructor: 'Prof. Johnson', duration: '10 weeks' },
      { id: 3, name: 'Chemistry 301', instructor: 'Dr. Lee', duration: '14 weeks' },
    ];
  
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Enrolled Courses</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Course Name</th>
              <th className="border border-gray-300 px-4 py-2">Instructor</th>
              <th className="border border-gray-300 px-4 py-2">Duration</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td className="border border-gray-300 px-4 py-2">{course.name}</td>
                <td className="border border-gray-300 px-4 py-2">{course.instructor}</td>
                <td className="border border-gray-300 px-4 py-2">{course.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default EnrolledCourses;
  