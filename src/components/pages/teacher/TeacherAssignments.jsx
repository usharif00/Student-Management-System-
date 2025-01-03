import React, { useState } from 'react';

const TeacherAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [newAssignment, setNewAssignment] = useState({ title: '', description: '', dueDate: '' });
  const [grading, setGrading] = useState({ assignmentId: null, studentId: '', grade: '' });

  // Handle form submission for creating an assignment
  const handleCreateAssignment = (e) => {
    e.preventDefault();
    if (newAssignment.title && newAssignment.description && newAssignment.dueDate) {
      setAssignments([
        ...assignments,
        {
          id: assignments.length + 1,
          title: newAssignment.title,
          description: newAssignment.description,
          dueDate: newAssignment.dueDate,
          submissions: [],
        },
      ]);
      setNewAssignment({ title: '', description: '', dueDate: '' });
    }
  };

  // Handle grading submission
  const handleGradeSubmit = (e) => {
    e.preventDefault();
    const updatedAssignments = assignments.map((assignment) =>
      assignment.id === grading.assignmentId
        ? {
            ...assignment,
            submissions: [
              ...assignment.submissions,
              { studentId: grading.studentId, grade: grading.grade },
            ],
          }
        : assignment
    );
    setAssignments(updatedAssignments);
    setGrading({ assignmentId: null, studentId: '', grade: '' });
  };

  return (
    <div className="p-4">

      {/* Create Assignment Form */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Create Assignment</h3>
        <form
          onSubmit={handleCreateAssignment}
          className="mt-4 border p-4 rounded-lg bg-gray-50 shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              value={newAssignment.title}
              onChange={(e) =>
                setNewAssignment({ ...newAssignment, title: e.target.value })
              }
              className="w-full p-2 border rounded"
              placeholder="Assignment Title"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              value={newAssignment.description}
              onChange={(e) =>
                setNewAssignment({ ...newAssignment, description: e.target.value })
              }
              className="w-full p-2 border rounded"
              placeholder="Assignment Description"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Due Date</label>
            <input
              type="date"
              value={newAssignment.dueDate}
              onChange={(e) =>
                setNewAssignment({ ...newAssignment, dueDate: e.target.value })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Create Assignment
          </button>
        </form>
      </div>

      {/* Manage Assignments */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Manage Assignments</h3>
        {assignments.length === 0 ? (
          <p className="text-gray-500 mt-4">No assignments created yet.</p>
        ) : (
          <div className="mt-4">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b p-2">Title</th>
                  <th className="border-b p-2">Description</th>
                  <th className="border-b p-2">Due Date</th>
                  <th className="border-b p-2">Submissions</th>
                </tr>
              </thead>
              <tbody>
                {assignments.map((assignment) => (
                  <tr key={assignment.id}>
                    <td className="border-b p-2">{assignment.title}</td>
                    <td className="border-b p-2">{assignment.description}</td>
                    <td className="border-b p-2">{assignment.dueDate}</td>
                    <td className="border-b p-2">
                      {assignment.submissions.length} submission(s)
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Grade Assignments */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Grade Assignments</h3>
        <form
          onSubmit={handleGradeSubmit}
          className="mt-4 border p-4 rounded-lg bg-gray-50 shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700">Assignment ID</label>
            <input
              type="number"
              value={grading.assignmentId || ''}
              onChange={(e) =>
                setGrading({ ...grading, assignmentId: parseInt(e.target.value) })
              }
              className="w-full p-2 border rounded"
              placeholder="Assignment ID"
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
              placeholder="Student ID"
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
              placeholder="Grade (e.g., A, B, C)"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Submit Grade
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeacherAssignments;
