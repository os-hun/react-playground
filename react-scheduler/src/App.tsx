import React from 'react';
import { CustomScheduler } from './components/Scheduler';
import { get_current_date } from './utils';
import './App.css';

function App() {
  const current_date = get_current_date();

  return (
    <div className="App">
      <header className="App-header">
        <p>show current date: {current_date}</p>
        <CustomScheduler current_date={current_date} />
      </header>
    </div>
  );
}

export default App;
