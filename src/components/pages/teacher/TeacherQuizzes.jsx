import React, { useState } from 'react';

const TeacherQuizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [newQuiz, setNewQuiz] = useState({ title: '', questions: '', dueDate: '' });
  const [editingQuiz, setEditingQuiz] = useState(null);
  const [grading, setGrading] = useState({ quizId: null, studentId: '', grade: '' });
  const [message, setMessage] = useState(''); // Feedback message

  // Handle form submission for creating a quiz
  const handleCreateQuiz = (e) => {
    e.preventDefault();
    if (newQuiz.title && newQuiz.questions && newQuiz.dueDate) {
      setQuizzes([
        ...quizzes,
        {
          id: quizzes.length + 1,
          title: newQuiz.title,
          questions: newQuiz.questions.split(';').map((q, idx) => ({ id: idx + 1, question: q })),
          dueDate: newQuiz.dueDate,
          submissions: [],
        },
      ]);
      setNewQuiz({ title: '', questions: '', dueDate: '' });
      setMessage('Quiz created successfully!');
    }
  };

  // Handle editing an existing quiz
  const handleEditQuiz = (e) => {
    e.preventDefault();
    const updatedQuizzes = quizzes.map((quiz) =>
      quiz.id === editingQuiz.id
        ? {
            ...quiz,
            title: editingQuiz.title,
            questions: editingQuiz.questions.split(';').map((q, idx) => ({ id: idx + 1, question: q })),
          }
        : quiz
    );
    setQuizzes(updatedQuizzes);
    setEditingQuiz(null);
    setMessage('Quiz updated successfully!');
  };

  // Handle grading submissions
  const handleGradeSubmit = (e) => {
    e.preventDefault();
    if (!grading.quizId || !grading.studentId || !grading.grade) {
      setMessage('All fields are required for grading.');
      return;
    }

    const updatedQuizzes = quizzes.map((quiz) =>
      quiz.id === grading.quizId
        ? {
            ...quiz,
            submissions: [
              ...quiz.submissions,
              { studentId: grading.studentId, grade: grading.grade },
            ],
          }
        : quiz
    );
    setQuizzes(updatedQuizzes);
    setGrading({ quizId: null, studentId: '', grade: '' });
    setMessage('Grade submitted successfully!');
  };

  return (
    <div className="p-6">

      {/* Create Quiz */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Create Quiz</h2>
        <form
          onSubmit={handleCreateQuiz}
          className="mt-4 border p-4 rounded-lg bg-gray-50 shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              value={newQuiz.title}
              onChange={(e) => setNewQuiz({ ...newQuiz, title: e.target.value })}
              className="w-full p-2 border rounded"
              placeholder="Quiz Title"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Questions</label>
            <textarea
              value={newQuiz.questions}
              onChange={(e) => setNewQuiz({ ...newQuiz, questions: e.target.value })}
              className="w-full p-2 border rounded"
              placeholder="Enter questions separated by semicolons (;)"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Due Date</label>
            <input
              type="date"
              value={newQuiz.dueDate}
              onChange={(e) => setNewQuiz({ ...newQuiz, dueDate: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Create Quiz
          </button>
        </form>
      </div>

      {/* Manage Quizzes */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Manage Quizzes</h2>
        {quizzes.length === 0 ? (
          <p className="text-gray-500 mt-4">No quizzes created yet.</p>
        ) : (
          <div className="mt-4">
            {quizzes.map((quiz) => (
              <div key={quiz.id} className="border rounded-lg p-4 bg-gray-50 shadow-md mb-4">
                <h3 className="text-lg font-semibold">{quiz.title}</h3>
                <p className="text-gray-700 mt-2">
                  <strong>Due Date:</strong> {quiz.dueDate}
                </p>
                <ul className="mt-3 text-sm text-gray-600">
                  {quiz.questions.map((q) => (
                    <li key={q.id}>
                      {q.id}. {q.question}
                    </li>
                  ))}
                </ul>
                <div className="mt-3">
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mr-2"
                    onClick={() =>
                      setEditingQuiz({
                        id: quiz.id,
                        title: quiz.title,
                        questions: quiz.questions.map((q) => q.question).join(';'),
                      })
                    }
                  >
                    Edit
                  </button>
                  <p className="text-gray-500 mt-2">
                    {quiz.submissions.length} submission(s)
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit Quiz */}
      {editingQuiz && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Edit Quiz</h2>
          <form
            onSubmit={handleEditQuiz}
            className="mt-4 border p-4 rounded-lg bg-gray-50 shadow-md"
          >
            <div className="mb-4">
              <label className="block text-gray-700">Title</label>
              <input
                type="text"
                value={editingQuiz.title}
                onChange={(e) =>
                  setEditingQuiz({ ...editingQuiz, title: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Questions</label>
              <textarea
                value={editingQuiz.questions}
                onChange={(e) =>
                  setEditingQuiz({ ...editingQuiz, questions: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setEditingQuiz(null)}
              className="ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      {/* Grade Submissions */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Grade Submissions</h2>
        <form
          onSubmit={handleGradeSubmit}
          className="mt-4 border p-4 rounded-lg bg-gray-50 shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700">Quiz ID</label>
            <input
              type="number"
              value={grading.quizId || ''}
              onChange={(e) =>
                setGrading({ ...grading, quizId: parseInt(e.target.value) || '' })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Student ID</label>
            <input
              type="text"
              value={grading.studentId}
              onChange={(e) =>
                setGrading({ ...grading, studentId: e.target.value })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Grade</label>
            <input
              type="text"
              value={grading.grade}
              onChange={(e) =>
                setGrading({ ...grading, grade: e.target.value })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit Grade
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeacherQuizzes;
