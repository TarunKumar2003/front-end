function SubscribeForUpdate() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Subscribe for updates</h2>
      <p className="text-gray-600 mb-4">
        Upcoming competitions, new problems, feature additions, and more.
        Maximum 2 emails a month. Promise.
      </p>
      <input
        type="email"
        placeholder="Email"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Subscribe
      </button>
    </div>
  );
}

export default SubscribeForUpdate;
