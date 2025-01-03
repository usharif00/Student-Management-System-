const StuAssignments = () => {
    const assignments = {
      pending: ['Assignment 1: Algebra', 'Assignment 2: Newton’s Laws'],
      submitted: ['Assignment 3: Organic Chemistry', 'Assignment 4: Thermodynamics'],
    };
  
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Assignments</h2>
        <div>
          <h3 className="font-semibold text-lg">Pending Assignments</h3>
          <ul className="list-disc ml-5 mb-4">
            {assignments.pending.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3 className="font-semibold text-lg">Submitted Assignments</h3>
          <ul className="list-disc ml-5">
            {assignments.submitted.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default StuAssignments;
  