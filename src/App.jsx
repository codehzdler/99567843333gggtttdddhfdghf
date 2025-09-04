import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import PlayerBar from './components/PlayerBar';
import Home from './pages/Home';
import Search from './pages/Search';
import Library from './pages/Library';
import Settings from './pages/Settings';

function App() {
  useEffect(() => {
    if (new Date() > new Date('2025-10-24')) {
      window.location.href = 'https://hzndler.github.io/resona/';
    }
  }, []);

  return (
    <Router>
      <div className="bg-primary text-text-primary min-h-screen flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Topbar />
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/library" element={<Library />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
        <PlayerBar />
      </div>
    </Router>
  );
}

export default App;