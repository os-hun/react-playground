import React from 'react';
import './App.css';

// React.memo を使う理由
/**
 * - パフォーマンス最適化に使う
 * - 子コンポーネントの再レンダーを防ぐ
 * - props等価性をチェックして必要な時だけ再レンダーするようにする
 * 
 * @see https://ja.reactjs.org/docs/react-api.html#reactmemo
 */

function App() {
  const [parent, set_parent] = React.useState(1);
  const [count, set_count] = React.useState(0);
  
  console.log("parent component");
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Memo</h1>
        {parent}
        <ShowCount count={count} />
        <button onClick={() => set_parent(parent + 1)}>
          +1 parent
        </button>
        <button onClick={() => set_count(count + 1)}>
          +1 child
        </button>
      </header>
    </div>
  );
}

// use React.memo
const ShowCount = React.memo(({ count }: { count: number }) => {
  console.log("child component");
  
  return (
    <div>
      <p>{count}</p>
    </div>
  )
});

// is not use React.memo
const NotUseMemo = ({count}: {count: number}) => {
  console.log("child component");

  return (
    <div>
      <p>{count}</p>
    </div>
  )
}

export default App;
