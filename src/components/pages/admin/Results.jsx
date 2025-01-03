import React, { useEffect, useState } from 'react';

// Importing the results data from the JSON file
import resultsData from '../../../data/admin-data/results.json';

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(resultsData);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Exam Results</h2>
      <div className="border rounded-lg p-4 bg-gray-50 shadow-md">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">Name</th>
              <th className="border-b p-2">Class</th>
              <th className="border-b p-2">Subject</th>
              <th className="border-b p-2">Score</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result.id}>
                <td className="border-b p-2">{result.name}</td>
                <td className="border-b p-2">{result.class}</td>
                <td className="border-b p-2">{result.subject}</td>
                <td className="border-b p-2">{result.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Results;
