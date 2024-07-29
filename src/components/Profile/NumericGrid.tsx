const NumericGrid = () => {
  // Generate an array of numbers from 1 to 165
  const numbers = Array.from({ length: 96 }, (_, index) => index + 1);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md m-2">
      <h2 className="text-lg font-semibold mb-4">Problems</h2>
      <div className="grid grid-cols-12 gap-2">
        {numbers.map((number) => (
          <button
            key={number}
            className=" text-center py-2 rounded-md text-gray-500 selection p-1"
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NumericGrid;
