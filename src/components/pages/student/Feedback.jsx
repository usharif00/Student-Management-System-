const Feedback = () => {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Feedback</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-2 text-gray-700">Your Feedback</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-2"
              rows="4"
              placeholder="Write your feedback here..."
            ></textarea>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  };
  
  export default Feedback;
  