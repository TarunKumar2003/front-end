const UserProfile = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-2 ">
      <div className="text-center mb-4">
        <p className="text-gray-700">@tarunnimball23</p>
        <div className="w-24 h-24 bg-green-500 flex items-center justify-center mx-auto rounded-full mb-2">
          <span className="text-white text-xl">T</span>
        </div>
        <h1 className="text-lg font-semibold">Tarun</h1>
        <p>NIT, Kurukshetra</p>
      </div>
      <div className="flex justify-between border-t border-b py-2">
        <div className="text-center">
          <span className="font-bold text-lg">0</span>
          <p>Posts</p>
        </div>
        <div className="text-center">
          <span className="font-bold text-lg">0</span>
          <p>Following</p>
        </div>
        <div className="text-center">
          <span className="font-bold text-lg">0</span>
          <p>Followers</p>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Edit Profile
        </button>
        <button className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400">
          More Options
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
