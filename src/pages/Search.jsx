import { useState } from 'react';
import { searchYouTube } from '../services/youtube';
import usePlayerStore from '../state/playerStore';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const { setTrack, setQueue } = usePlayerStore();

  const handleSearch = async () => {
    const res = await searchYouTube(query);
    setResults(res);
  };

  const playTrack = (track) => {
    setTrack(track);
    setQueue([track]);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        className="w-full p-3 bg-secondary rounded-lg mb-6"
        placeholder="Search..."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.map(track => (
          <div key={track.id} className="bg-surface p-4 rounded-lg flex items-center space-x-4 cursor-pointer" onClick={() => playTrack(track)}>
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

export default Search;