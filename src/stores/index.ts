import { create } from 'zustand'
//grobal系はここかcomponentsに格納すること

type Store = {
  bears: number
  increasePopulation: () => void
  removeAllbears: () => void;
}

export const useBearStore = create<Store>((set) => ({
  bears: 3,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllbears: () => set({ bears: 0 }),
}))