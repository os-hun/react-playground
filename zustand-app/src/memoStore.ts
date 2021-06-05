import create from 'zustand';

type Memo = {
  id: string;
  content: string;
}

type MemoState = {
  memos: Memo[];
  create: (memo: Memo) => void;
  remove: (memo_id: string) => void;
}

export const useMemoStore = create<MemoState>(set => ({
  memos: [],
  // 配列の追加には非破壊的メソッドであるconcatを使用する
  create: (memo) => set(state => ({ memos: state.memos.concat(memo) })),
  remove: (memo_id) => set(state => ({ memos: state.memos.filter(memo => memo.id !== memo_id) })),
}));
