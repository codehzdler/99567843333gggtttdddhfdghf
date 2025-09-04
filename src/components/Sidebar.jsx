import { Link } from 'react-router-dom';
import { Home, Search, Library, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="bg-secondary w-64 p-6 hidden md:block">
      <h1 className="text-2xl font-bold mb-8">Resona</h1>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/" className="flex items-center space-x-3 hover:text-accent">
              <Home size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/search" className="flex items-center space-x-3 hover:text-accent">
              <Search size={20} />
              <span>Search</span>
            </Link>
          </li>
          <li>
            <Link to="/library" className="flex items-center space-x-3 hover:text-accent">
              <Library size={20} />
              <span>Library</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex items-center space-x-3 hover:text-accent">
              <Settings size={20} />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;