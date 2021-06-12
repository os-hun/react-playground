import { useState } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import {
  increment,
  decrement,
  incrementByAmount,
  selectCount,
} from './reducers/count';
import './App.css';

function App() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);
  const onSubmit = () => dispatch(incrementByAmount(incrementAmount));

  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>

        <div>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>

        <div>
          <input
            type="number"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(Number(e.target.value))}
          />
          <button onClick={onSubmit}>
            Add Amount
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
