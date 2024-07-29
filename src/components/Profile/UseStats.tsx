const UserStats = () => {
  return (
    <div className="bg-white mt-2 rounded-md">
      <div className=" p-4 mt-4 shadow-md h-[200px]">
        <h3>Ranks</h3>
        <div className="flex mt-7">
          <h2 className="text-2xl">#Rating</h2>
          <h3 className="text-xl ml-7">Overall</h3>
        </div>
      </div>

      <div className="shadow-md mt-4 h-[220px]">
        <div className="p-4">
          <h2 className="text-center text-xl">Progess</h2>
          <p className="text-center text-gray-600">
            "It's the job that's never started as takes longest to finish."
          </p>
          <div className="bg-gray-200 h-4 rounded-md overflow-hidden mt-10">
            <div className="bg-red-500 h-full w-1/3"></div>
            <div className="bg-green-500 h-full w-2/3"></div>
          </div>
          <div className="flex justify-between mt-2">
            <span className=" text-red-500 text-xl">306 unsolved</span>
            <span className="text-xl text-green-500">0 solved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStats;
