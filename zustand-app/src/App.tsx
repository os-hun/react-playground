import { useStore } from './store';
import { useStoreReduxLike } from './storeReduxLike';
import './App.css';

function App() {
  const { count, increment, decrement } = useStore();
  const { counter, dispatch } = useStoreReduxLike();

  return (
    <div className="App">
      <header className="App-header">
        <div>
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
        </div>
      </header>
    </div>
  );
}

export default App;
