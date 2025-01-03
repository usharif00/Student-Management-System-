const ComplaintDesk = () => {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Report an Issue</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-2 text-gray-700">Issue Title</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter the issue title"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Details</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-2"
              rows="4"
              placeholder="Describe the issue in detail..."
            ></textarea>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  };
  
  export default ComplaintDesk;
  