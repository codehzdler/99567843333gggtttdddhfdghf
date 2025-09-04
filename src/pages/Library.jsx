import useLibraryStore from '../state/libraryStore';

const Library = () => {
  const { savedTracks } = useLibraryStore();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {savedTracks.map(track => (
          <div key={track.id} className="bg-surface p-4 rounded-lg flex items-center space-x-4">
            <img src={track.thumbnail} alt="" className="w-16 h-16 rounded" />
            <div>
              <p className="font-medium">{track.title}</p>
              <p className="text-text-muted">{track.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;