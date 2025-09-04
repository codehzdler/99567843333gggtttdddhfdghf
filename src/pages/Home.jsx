const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Home</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-surface p-4 rounded-2xl">
          <img src="https://via.placeholder.com/200" alt="" className="w-full h-32 object-cover rounded-lg mb-4" />
          <h3 className="font-medium">Playlist 1</h3>
          <p className="text-text-muted text-sm">Description</p>
        </div>
      </div>
    </div>
  );
};

export default Home;