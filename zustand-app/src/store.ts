import create from 'zustand';

type CountState = {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useStore = create<CountState>(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count += 1 })),
  decrement: () => set(state => ({ count: state.count -= 1 })),
}));
