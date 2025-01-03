const StuResources = () => {
    const resources = [
      { id: 1, title: 'Math Workbook', link: 'https://example.com/math-workbook' },
      { id: 2, title: 'Physics Notes', link: 'https://example.com/physics-notes' },
      { id: 3, title: 'Chemistry Practice Questions', link: 'https://example.com/chemistry-questions' },
    ];
  
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Resources</h2>
        <ul className="list-disc ml-5">
          {resources.map((resource) => (
            <li key={resource.id}>
              <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                {resource.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default StuResources;
  