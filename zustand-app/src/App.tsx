import { useStore } from './store';
import './App.css';

function App() {
  const { count, increment, decrement } = useStore();

  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>
        <div>
          <button onClick={increment}>+1</button>
          <button onClick={decrement}>-1</button>
        </div>
      </header>
    </div>
  );
}

export default App;
