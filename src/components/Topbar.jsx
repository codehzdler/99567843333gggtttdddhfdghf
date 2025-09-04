import { Search } from 'lucide-react';

const Topbar = () => {
  return (
    <div className="bg-secondary p-4">
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted" size={20} />
          <input
            type="text"
            placeholder="Search for songs, artists..."
            className="w-full pl-10 pr-4 py-2 bg-primary rounded-full text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;