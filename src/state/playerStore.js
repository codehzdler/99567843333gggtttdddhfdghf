import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const usePlayerStore = create(
  persist(
    (set, get) => ({
      currentTrack: null,
      queue: [],
      currentIndex: 0,
      isPlaying: false,
      volume: 0.5,
      shuffle: false,
      repeat: 'off',
      play: () => set({ isPlaying: true }),
      pause: () => set({ isPlaying: false }),
      setTrack: (track) => set({ currentTrack: track }),
      setQueue: (queue) => set({ queue, currentIndex: 0 }),
      next: () => {
        const { queue, currentIndex, repeat } = get();
        if (queue.length === 0) return;
        let nextIndex = currentIndex + 1;
        if (nextIndex >= queue.length) {
          if (repeat === 'all') nextIndex = 0;
          else return;
        }
        set({ currentIndex: nextIndex, currentTrack: queue[nextIndex] });
      },
      previous: () => {
        const { queue, currentIndex } = get();
        if (queue.length === 0) return;
        let prevIndex = currentIndex - 1;
        if (prevIndex < 0) prevIndex = queue.length - 1;
        set({ currentIndex: prevIndex, currentTrack: queue[prevIndex] });
      },
      setVolume: (volume) => set({ volume }),
      toggleShuffle: () => set((state) => ({ shuffle: !state.shuffle })),
      setRepeat: (repeat) => set({ repeat }),
    }),
    {
      name: 'player-storage',
    }
  )
);

export default usePlayerStore;