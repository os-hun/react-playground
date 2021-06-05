// import { useStore } from './store';
// import { useStoreReduxLike } from './storeReduxLike';
import { useMemoStore } from './memoStore';
import './App.css';

function App() {
  // const { count, increment, decrement } = useStore();
  // const { counter, dispatch } = useStoreReduxLike();
  const { memos, create, remove } = useMemoStore();

  return (
    <div className="App">
      <header className="App-header">
        {/* <div>
          <p>useStore</p>
          <p>{count}</p>
          <div>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
          </div>
        </div>
        <div>
          <p>useStoreReduxLike</p>
          <p>{counter}</p>
          <div>
            <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
          </div>
        </div> */}
        <div>
          <p>useMemo</p>
          <div>
            <button onClick={() => create({ id: Math.random().toString(32).substring(2), content: 'memo test' })}>create memo</button>
          </div>
          {memos.map(memo => (
            <div key={memo.id}>
              <p>{memo.content}</p>
              <button onClick={() => remove(memo.id)}>remove {memo.id} memo</button>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
