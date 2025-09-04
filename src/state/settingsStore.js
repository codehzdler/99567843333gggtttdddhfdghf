import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useSettingsStore = create(
  persist(
    (set) => ({
      theme: 'dark',
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'settings-storage',
    }
  )
);

export default useSettingsStore;