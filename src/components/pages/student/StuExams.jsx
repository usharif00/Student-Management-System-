const StuExams = () => {
    const exams = [
      { id: 1, subject: 'Mathematics', date: '2025-02-05', duration: '2 hours' },
      { id: 2, subject: 'Physics', date: '2025-02-12', duration: '3 hours' },
    ];
  
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Exams</h2>
        <ul className="list-disc ml-5">
          {exams.map((exam) => (
            <li key={exam.id}>
              {exam.subject} - {exam.date} ({exam.duration})
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default StuExams;
  