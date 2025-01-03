const StuGrades = () => {
    const grades = [
      { course: 'Mathematics', grade: 'A' },
      { course: 'Physics', grade: 'B+' },
      { course: 'Chemistry', grade: 'A-' },
    ];
  
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Grades</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Course</th>
              <th className="border border-gray-300 px-4 py-2">Grade</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{item.course}</td>
                <td className="border border-gray-300 px-4 py-2">{item.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default StuGrades;
  