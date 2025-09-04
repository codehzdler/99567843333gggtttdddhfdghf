import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import usePlayerStore from '../state/playerStore';

const PlayerBar = () => {
  const { currentTrack, isPlaying, play, pause, next, previous, volume, setVolume } = usePlayerStore();
  const [player, setPlayer] = useState(null);

  const onReady = (event) => {
    setPlayer(event.target);
    event.target.setVolume(volume * 100);
  };

  const onStateChange = (event) => {
    if (event.data === 1) play();
    else if (event.data === 2) pause();
  };

  useEffect(() => {
    if (player && currentTrack) {
      player.loadVideoById(currentTrack.id);
      if (isPlaying) player.playVideo();
      else player.pauseVideo();
    }
  }, [currentTrack, player]);

  useEffect(() => {
    if (player) {
      player.setVolume(volume * 100);
    }
  }, [volume, player]);

  return (
    <div className="bg-secondary fixed bottom-0 left-0 right-0 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img src={currentTrack?.thumbnail} alt="" className="w-12 h-12 rounded" />
        <div>
          <p className="text-sm font-medium">{currentTrack?.title}</p>
          <p className="text-xs text-text-muted">{currentTrack?.artist}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={previous}><SkipBack size={20} /></button>
        <button onClick={isPlaying ? pause : play}>
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <button onClick={next}><SkipForward size={20} /></button>
      </div>
      <div className="flex items-center space-x-2">
        <Volume2 size={20} />
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-20"
        />
      </div>
      <YouTube videoId={currentTrack?.id} opts={{ height: '0', width: '0' }} onReady={onReady} onStateChange={onStateChange} />
    </div>
  );
};

export default PlayerBar;