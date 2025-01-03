const StuQuizzes = () => {
    const quizzes = [
      { id: 1, name: 'Quiz 1: Algebra Basics', date: '2025-01-10' },
      { id: 2, name: 'Quiz 2: Atomic Structure', date: '2025-01-17' },
    ];
  
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Quizzes</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Quiz Name</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {quizzes.map((quiz) => (
              <tr key={quiz.id}>
                <td className="border border-gray-300 px-4 py-2">{quiz.name}</td>
                <td className="border border-gray-300 px-4 py-2">{quiz.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default StuQuizzes;
  