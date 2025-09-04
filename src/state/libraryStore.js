import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useLibraryStore = create(
  persist(
    (set) => ({
      savedTracks: [],
      addTrack: (track) => set((state) => ({ savedTracks: [...state.savedTracks, track] })),
      removeTrack: (id) => set((state) => ({ savedTracks: state.savedTracks.filter(t => t.id !== id) })),
    }),
    {
      name: 'library-storage',
    }
  )
);

export default useLibraryStore;