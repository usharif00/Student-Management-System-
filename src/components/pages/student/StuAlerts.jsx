const StuAlerts = () => {
    const alerts = [
      { id: 1, message: 'Assignment 2 deadline is tomorrow.', type: 'Reminder' },
      { id: 2, message: 'Quiz 1 results are published.', type: 'Information' },
    ];
  
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Alerts</h2>
        <ul className="list-disc ml-5">
          {alerts.map((alert) => (
            <li key={alert.id} className="mb-2">
              <strong>{alert.type}:</strong> {alert.message}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default StuAlerts;
  