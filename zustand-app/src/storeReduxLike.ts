import create from 'zustand';

function countReducer(state: any, action: any) {
  switch (action.type) {
    case 'increment':
      return { counter: state.counter += 1};
    case 'decrement':
      return { counter: state.counter -= 1};
    default:
      return state;
  }
}

type IStore = {
  counter: number;
  dispatch: (args: any) => void;
}

export const useStoreReduxLike = create<IStore>(set => ({
  counter: 0,
  dispatch: (args: any) => set(state => countReducer(state, args)),
}));
